// UI Components
import { Button } from '@/views/components/shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/views/components/shadcn/dropdown-menu'
import { Checkbox } from '@/views/components/shadcn/checkbox'
import { Progress } from '@/views/components/shadcn/progress'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import * as dataActions from '@/store/actions/dataActions'
import * as uiActions from '@/store/actions/uiActions'
import { RootState } from '@/store/store'

// Data Types
import { DataJob, PreConfiguredJob, ScheduledJob } from '@/store/types/types'
import { Column, ColumnDef, Row, Table } from '@tanstack/react-table'

// Utilities
import { statuses } from '@/data/icons'
import { saveAs } from 'file-saver'
import { formatTimestamp } from '@/utils/formatTimestamp'

// React Hooks
import { useEffect, useState } from 'react'

// Custom Components
import JobTable from '@/views/components/JobTable'

const action = { ...dataActions, ...uiActions }

// Columns for in progress preconfigured jobs
const inProgress: ColumnDef<PreConfiguredJob>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => <Header column={column} name="Name" />,
  },
  {
    accessorKey: 'user_id',
    header: ({ column }) => <Header column={column} name="User" />,
  },

  {
    accessorKey: 'job_status',
    header: ({ column }) => <Header column={column} name="Status" />,
    cell: ({ row }) => <StatusRow row={row} />,
  },
  {
    accessorKey: 'start_time',
    header: ({ column }) => <Header column={column} name="Start Time" />,
    cell: ({ row }) => formatTimestamp(row.getValue('start_time')),
  },

  {
    id: 'progress',
    header: ({ column }) => <Header column={column} name="Progress" />,
    cell: () => <ProgressBar />,
  },
]

// PreConfiguredJobs that are in progress
export function InProgressTable() {
  const rows = useSelector(
    (state: RootState) =>
      state.preConfiguredJobsState.preConfiguredJobHistoryState.processing_jobs
  )
  return <JobTable columns={inProgress} data={rows} />
}

// Columns for finished preconfigured jobs
const finished: ColumnDef<PreConfiguredJob>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => <Header column={column} name="Name" />,
  },
  {
    accessorKey: 'user_id',
    header: ({ column }) => <Header column={column} name="User" />,
  },
  {
    accessorKey: 'job_status',
    header: ({ column }) => <Header column={column} name="Status" />,
    cell: ({ row }) => <StatusRow row={row} />,
  },
  {
    accessorKey: 'start_time',
    header: ({ column }) => <Header column={column} name="Start Time" />,
    cell: ({ row }) => formatTimestamp(row.getValue('start_time')),
  },
  {
    accessorKey: 'finish_time',
    header: ({ column }) => <Header column={column} name="Finish Time" />,
    cell: ({ row }) => formatTimestamp(row.getValue('finish_time')),
  },

  {
    id: 'actions',
    cell: ({ row }) => <PreConfiguredActionRow row={row} />,
  },
]

// PreConfiguredJobs that are finished
export function FinishedTable() {
  const rows = useSelector(
    (state: RootState) =>
      state.preConfiguredJobsState.preConfiguredJobHistoryState.finished_jobs
  )
  return <JobTable columns={finished} data={rows} />
}

// Columns for scheduled preconfigured jobs
const schedule: ColumnDef<ScheduledJob>[] = [
  {
    accessorKey: 'studyId',
    header: ({ column, table }) => (
      <CheckBoxHeader column={column} table={table} name="Study Id" />
    ),
    cell: ({ row }) => <CheckBoxRow row={row} />,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <Header column={column} name="Job Name" />,
  },
  {
    accessorKey: 'trigger',
    header: ({ column }) => <Header column={column} name="Trigger" />,
  },
  {
    accessorKey: 'tasks',
    header: ({ column }) => <Header column={column} name="Tasks" />,
  },
  {
    id: 'actions',
    cell: ({ row }) => <ScheduleActionRow row={row} />,
  },
]

import jobs from './scheduled_jobs.json'

// PreConfiguredJobs that are scheduled to execute
export function ScheduleTable() {
  return <JobTable columns={schedule} data={jobs.rows} />
}

// Columns for execution history of data utilities
const dataJob: ColumnDef<DataJob>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => <Header column={column} name="Name" />,
  },
  {
    accessorKey: 'job_status',
    header: ({ column }) => <Header column={column} name="Status" />,
    cell: ({ row }) => <StatusRow row={row} />,
  },
  {
    accessorKey: 'start_time',
    header: ({ column }) => <Header column={column} name="Start Time" />,
    cell: ({ row }) => formatTimestamp(row.getValue('start_time')),
  },
  {
    accessorKey: 'finish_time',
    header: ({ column }) => <Header column={column} name="Finish Time" />,
    cell: ({ row }) => formatTimestamp(row.getValue('finish_time')),
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataActionRow row={row} />,
  },
]

// Data Utility Execution History
export function DataJobTable() {
  const rows = useSelector(
    (state: RootState) => state.dataUtilitiesState.executionHistoryState.jobs
  )
  return <JobTable columns={dataJob} data={rows} />
}

type HeaderProps<TData extends unknown> = {
  column: Column<TData>
  table?: Table<TData>
  name: string
}

// Default headers to have sorting
function Header<TData extends unknown>(props: HeaderProps<TData>) {
  return (
    <Button
      variant="ghost"
      onClick={() =>
        props.column.toggleSorting(props.column.getIsSorted() === 'asc')
      }
      className="font-nav bg-base-200 text-readable font-bold text-sm"
    >
      {props.name}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  )
}

// Put checkbox next to header
function CheckBoxHeader<TData extends unknown>(props: HeaderProps<TData>) {
  return (
    <div>
      <Checkbox
        checked={props.table?.getIsAllPageRowsSelected()}
        onCheckedChange={(value) =>
          props.table?.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
      <Header column={props.column} name={props.name} />
    </div>
  )
}

type RowProps<TData extends unknown> = {
  row: Row<TData>
}

// Put checkbox next to row
function CheckBoxRow<TData extends unknown>(props: RowProps<TData>) {
  return (
    <div className="space-x-4">
      <Checkbox
        checked={props.row.getIsSelected()}
        onCheckedChange={(value) => props.row.toggleSelected(!!value)}
        aria-label="Select row"
      />
      <label>{props.row.getValue('studyId')}</label>
    </div>
  )
}

// Icon component for status
function StatusRow<TData extends unknown>(props: RowProps<TData>) {
  const status = statuses.find(
    (status) => status.value === props.row.getValue('job_status')
  )
  if (!status) {
    return null
  }
  return (
    <div className="flex w-[100px] items-center">
      {status.icon && <status.icon className={status.className} />}
      <span>{status.label}</span>
    </div>
  )
}

// Action row for Data Jobs
function DataActionRow<TData extends DataJob>(props: RowProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        {/* Download */}
        <DropdownMenuItem
          onClick={() => {
            saveAs(props.row.original.result[0])
          }}
        >
          Download
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Action row for scheduled preconfigured jobs
function ScheduleActionRow<TData extends ScheduledJob>(props: RowProps<TData>) {
  const dispatch = useDispatch()
  // Generates Job ID
  function generateJobId(): string {
    return `job-example-${Date.now()}-${Math.round(Math.random() * 9999)}`
  }
  function _handleClick(job: ScheduledJob) {
    dispatch(
      action.addPreConfiguredJob({
        name: job.name,
        job_id: generateJobId(),
        user_id: 'william.huang@klserv.com',
        job_status: 'In Progress',
        start_time: Math.floor(Date.now() / 1000),
        study_id: job.studyId,
        log_text: 'test',
      })
    )
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>Turn on/off background job</DropdownMenuItem>

        {/* Execute chosen Job */}
        <DropdownMenuItem onClick={() => _handleClick(props.row.original)}>
          Execute once
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View job details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Action row for finished preconfigured jobs
function PreConfiguredActionRow<TData extends PreConfiguredJob>(
  props: RowProps<TData>
) {
  const dispatch = useDispatch()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        {/* Open logs from the job */}
        <DropdownMenuItem
          onClick={() => {
            dispatch(action.setPreConfiguredJob(props.row.original))
            dispatch(action.toggleLogDisplay())
          }}
        >
          View logs
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Export data</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Placeholder static progress bar
function ProgressBar() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  return <Progress value={progress} className="w-[60%]" />
}

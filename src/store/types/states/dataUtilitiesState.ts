import { createWorkbookWithSheet, createXlsxFile } from '@/utils/excelUtils'
import { DataJob } from '../types'
import { createFileList } from '@/utils/convertFileList'

const data: any[] = []

const workbook = createWorkbookWithSheet(data, 'FormData')
const xlsxFile = createXlsxFile(workbook, 'sample.xlsx')

const result = createFileList(xlsxFile)

const dummy: DataJob[] = [
  {
    result: result,
    name: 'Data Comparison',
    job_id: 'example123',
    job_status: 'Success',
    start_time: 1689701492,
    finish_time: 1689701511,
  },

  {
    result: result,
    name: 'DM Data Reconciliation',
    job_id: 'example123',
    job_status: 'Success',
    start_time: 1689701092,
    finish_time: 1689701411,
  },

  {
    result: result,
    name: 'Spec Splitting',
    job_id: 'example123',
    job_status: 'Success',
    start_time: 1689702492,
    finish_time: 1689725511,
  },
]

export interface DataUtilitiesState {
  jobFormState: DataFormState
  executionHistoryState: ExecutionHistoryState
}

export interface DataFormState {
  isOpen: boolean
}
export interface ExecutionHistoryState {
  selectedJob?: DataJob
  jobs: DataJob[]
}

export const initialDataUtilitiesState: DataUtilitiesState = {
  jobFormState: {
    isOpen: false,
  },
  executionHistoryState: {
    jobs: dummy,
  },
}

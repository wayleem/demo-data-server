// React Hooks
import { useState } from 'react'

// Drag-and-Drop Functionality
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// Data and Components
import { InProgressTable } from '@/data/tables'
import Welcome from './Welcome'

// Charts
import { LineChart, BarChart, BarChart2, AreaChart } from './Chart1'

// Localization
import { Trans } from '@lingui/macro'

const ItemType = 'CHART'

type ChartItem = {
  title: JSX.Element
  component: JSX.Element
  colSpan: number
}

type DraggableChartProps = {
  chart: ChartItem
  index: number
  onMove: (fromIndex: number, toIndex: number) => void
}

type DragItem = {
  index: number
  type: string
}

// Draggable Card Component
function DraggableChart({ chart, index, onMove }: DraggableChartProps) {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index, type: ItemType } as DragItem,
  })

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item: DragItem) => {
      if (item.index !== index) {
        onMove(item.index, index)
        item.index = index
      }
    },
  })

  return (
    <div
      ref={drop}
      style={{ gridColumn: `span ${chart.colSpan}` }}
      className="bg-neutral drop-shadow rounded p-5"
    >
      {/* Title to be the only grabbable part */}
      <div ref={ref} className="cursor-grab">
        {chart.title}
      </div>

      {/* Chart content */}
      {chart.component}
    </div>
  )
}

// Grid of Charts
function Dashboard() {
  const [charts, setCharts] = useState<ChartItem[]>([
    {
      title: (
        <h3>
          <Trans>Development Status</Trans>
        </h3>
      ),
      component: <LineChart />,
      colSpan: 4,
    },
    {
      title: (
        <h3>
          <Trans>QC Status</Trans>
        </h3>
      ),
      component: <BarChart2 />,
      colSpan: 2,
    },
    {
      title: (
        <h3>
          <Trans>Resources</Trans>
        </h3>
      ),
      component: <BarChart />,
      colSpan: 4,
    },
    {
      title: (
        <h3>
          <Trans>Regional Data</Trans>
        </h3>
      ),
      component: <AreaChart />,
      colSpan: 2,
    },
  ])

  // DND reOrder Charts
  const moveChart = (fromIndex: number, toIndex: number) => {
    const updatedCharts = [...charts]
    const [movedItem] = updatedCharts.splice(fromIndex, 1)
    updatedCharts.splice(toIndex, 0, movedItem)
    setCharts(updatedCharts)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-6 gap-2">
        {/* Radial Bars */}
        <div className="col-span-6">
          <Welcome />
        </div>

        {/* Chart Grid */}
        {charts.map((chart, index) => {
          return (
            <DraggableChart
              key={index}
              index={index}
              chart={chart}
              onMove={moveChart}
            />
          )
        })}

        {/* Finished PreConfigured Job Table */}
        <div className="bg-neutral rounded p-2 col-span-6">
          <h3 className="mb-4">
            <Trans>Recent Jobs</Trans>
          </h3>
          <InProgressTable />
        </div>
      </div>
    </DndProvider>
  )
}

export default Dashboard

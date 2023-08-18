// Redux
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

// Components
import LogDisplay from './LogDisplay'

// Data Models
import { FinishedTable, InProgressTable } from '@/data/tables'

//History Component
function JobHistory() {
  const isVisible = useSelector(
    (state: RootState) =>
      state.preConfiguredJobsState.preConfiguredJobHistoryState.logVisible
  )
  return (
    <div className="space-y-2">
      {isVisible && <LogDisplay />}
      <FinishedTable />
      <InProgressTable />
    </div>
  )
}

export default JobHistory

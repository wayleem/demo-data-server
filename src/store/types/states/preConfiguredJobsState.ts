import { PreConfiguredJob } from '../types'
import finished from '@/data/placeholder_finished_jobs.json'
import inprogress from '@/data/placeholder_inprogress_jobs.json'

export interface PreConfiguredJobsState {
  preConfiguredJobHistoryState: PreConfiguredJobHistoryState
}

export interface PreConfiguredJobHistoryState {
  selectedJob?: PreConfiguredJob
  finished_jobs: PreConfiguredJob[]
  processing_jobs: PreConfiguredJob[]
  logVisible: boolean
}

export const initialPreConfiguredJobsState: PreConfiguredJobsState = {
  preConfiguredJobHistoryState: {
    selectedJob: undefined,
    finished_jobs: finished.rows,
    processing_jobs: inprogress.rows,
    logVisible: false,
  },
}

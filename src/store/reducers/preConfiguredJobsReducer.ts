import { createReducer } from '@reduxjs/toolkit'
import {
  PreConfiguredJobsState,
  initialPreConfiguredJobsState,
} from '../types/states/preConfiguredJobsState'
import * as uiActions from '../actions/uiActions'
import * as dataActions from '../actions/dataActions'

const action = { ...uiActions, ...dataActions }

const preConfiguredJobsReducer = createReducer<PreConfiguredJobsState>(
  initialPreConfiguredJobsState,
  (builder) => {
    builder
      .addCase(action.setPreConfiguredJob, (state, action) => {
        state.preConfiguredJobHistoryState.selectedJob = action.payload
      })
      .addCase(action.addPreConfiguredJob, (state, action) => {
        state.preConfiguredJobHistoryState.processing_jobs.push(action.payload)
      })
      .addCase(action.toggleLogDisplay, (state) => {
        state.preConfiguredJobHistoryState.logVisible =
          !state.preConfiguredJobHistoryState.logVisible
      })
  }
)

export default preConfiguredJobsReducer

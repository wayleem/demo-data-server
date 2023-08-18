import { createReducer } from '@reduxjs/toolkit'
import * as dataActions from '../actions/dataActions'
import * as uiActions from '../actions/uiActions'
import {
  DataUtilitiesState,
  initialDataUtilitiesState,
} from '../types/states/dataUtilitiesState'

const action = { ...dataActions, ...uiActions }

const dataUtilitiesReducer = createReducer<DataUtilitiesState>(
  initialDataUtilitiesState,
  (builder) => {
    builder
      .addCase(action.addDataJob, (state, action) => {
        state.executionHistoryState.jobs.push(action.payload)
      })
      .addCase(action.setDataJob, (state, action) => {
        state.executionHistoryState.selectedJob = action.payload
      })
      .addCase(action.toggleDataJobForm, (state) => {
        state.jobFormState.isOpen = !state.jobFormState.isOpen
      })
      .addCase(action.addDataComparisonJob, (state, action) => {
        state.executionHistoryState.jobs.push(action.payload)
      })

      .addCase(action.addDMDataReconciliationJob, (state, action) => {
        state.executionHistoryState.jobs.push(action.payload)
      })

      .addCase(action.addSpecSplittingJob, (state, action) => {
        state.executionHistoryState.jobs.push(action.payload)
      })
  }
)

export default dataUtilitiesReducer

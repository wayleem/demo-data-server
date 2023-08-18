import { createAction } from '@reduxjs/toolkit'
import {
  DMDataReconciliationJob,
  DataComparisonJob,
  DataJob,
  PreConfiguredJob,
  SpecSplittingJob,
} from '../types/types'

export const addPreConfiguredJob = createAction<PreConfiguredJob>(
  'ADD_PRECONFIGURED_JOB'
)

export const addDataJob = createAction<DataJob>('ADD_DATA_JOB')

export const addDataComparisonJob = createAction<DataComparisonJob>(
  'ADD_DATA_COMPARISON_JOB'
)

export const addDMDataReconciliationJob = createAction<DMDataReconciliationJob>(
  'ADD_DM_DATA_RECONCILIATION_JOB'
)

export const addSpecSplittingJob = createAction<SpecSplittingJob>(
  'ADD_SPEC_SPLITTING_JOB'
)

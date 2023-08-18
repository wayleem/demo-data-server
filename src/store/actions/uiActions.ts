import { createAction } from '@reduxjs/toolkit'
import { DataJob, PreConfiguredJob } from '../types/types'

export type Notify = {
  status: 'success' | 'warning' | 'error'
  msg: string
  id: string
}

export const setDark = createAction<boolean>('SET_DARK')

export const setExpanded = createAction('SET_EXPANDED')

export const setPreConfiguredJob = createAction<PreConfiguredJob>(
  'SET_PRECONFIGURED_JOB'
)

export const setDataJob = createAction<DataJob>('SET_DATA_JOB')

export const toggleDataJobForm = createAction('TOGGLE_DATA_JOB_FORM')

export const setDataUtil = createAction<string>('SET_DATA_UTIL')

export const notify = createAction<Notify>('NOTIFY')

export const toggleLogDisplay = createAction('TOGGLE_LOG_DISPLAY')

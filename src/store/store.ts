import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { UIState } from './types/states/sidebarState'
import uiReducer from './reducers/sidebarReducer'
import { PreConfiguredJobsState } from './types/states/preConfiguredJobsState'
import preConfiguredJobsReducer from './reducers/preConfiguredJobsReducer'
import { DataUtilitiesState } from './types/states/dataUtilitiesState'
import dataUtilitiesReducer from './reducers/dataUtilitiesReducer'

// Main State
export interface RootState {
  uiState: UIState
  preConfiguredJobsState: PreConfiguredJobsState
  dataUtilitiesState: DataUtilitiesState
}

// Main Reducer
const storeReducer = combineReducers({
  uiState: uiReducer,
  preConfiguredJobsState: preConfiguredJobsReducer,
  dataUtilitiesState: dataUtilitiesReducer,
})

export const store = configureStore({
  reducer: storeReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

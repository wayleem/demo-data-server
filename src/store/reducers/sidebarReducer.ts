import { createReducer } from '@reduxjs/toolkit'
import * as action from '../actions/uiActions'
import { UIState, initUiState } from '../types/states/sidebarState'

const uiReducer = createReducer<UIState>(initUiState, (builder) => {
  builder.addCase(action.setExpanded, (state) => {
    state.isExpanded = !state.isExpanded
  })

  builder.addCase(action.setDark, (state, action) => {
    state.darkMode = action.payload
  })

  builder.addCase(action.notify, (state, action) => {
    state.notifications = [...state.notifications, action.payload]
  })
})

export default uiReducer

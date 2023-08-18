import { Notify } from '../../actions/uiActions'

export interface UIState {
  darkMode: boolean
  isExpanded: boolean
  notifications: Notify[]
}

export const initUiState: UIState = {
  darkMode: false,
  isExpanded: true,
  notifications: []
}


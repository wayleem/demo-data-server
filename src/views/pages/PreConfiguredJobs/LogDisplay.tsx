// Redux
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import * as action from '@/store/actions/uiActions'

// UI Components
import { Button } from '@/views/components/shadcn/button'

// Log Component
function LogDisplay() {
  const dispatch = useDispatch()
  const log = useSelector(
    (state: RootState) =>
      state.preConfiguredJobsState.preConfiguredJobHistoryState.selectedJob
        ?.log_text
  )

  function _handleClick() {
    dispatch(action.toggleLogDisplay())
  }

  // Text Formatter
  const highlightBracketsContent = (text: string) => {
    return text.split(/(\[[^\]]+\])/).map((part, index) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        const content = part.slice(1, -1)
        let classes = 'font-bold text-blue-500' // Default bold for all brackets

        if (content === 'WARNING') {
          classes = 'font-bold text-orange-500'
        } else if (
          content === 'INFO' ||
          content.startsWith('ThreadPoolExecutor') ||
          content.startsWith('MainTaskExecutor')
        ) {
          classes = 'font-bold text-black'
        } else if (content === 'error') {
          classes = 'font-bold text-red-500'
        }

        return (
          <span key={index} className={classes}>
            {part}
          </span>
        )
      }
      return part
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className="fixed border w-[40%] rounded-xl bg-white shadow-md overflow-y-auto p-4 whitespace-pre-line font-header2 z-50">
        <p className="text-sm">{log ? highlightBracketsContent(log) : null}</p>
        <Button
          className="font-nav font-bold mt-5 "
          variant="outline"
          onClick={_handleClick}
        >
          Close
        </Button>
      </div>
    </div>
  )
}

export default LogDisplay

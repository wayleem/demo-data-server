// Redux
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

// Routing
import { Outlet } from 'react-router-dom'

// UI Components
import Topbar from './Topbar'
import Sidebar from './Sidebar'

// Notifications
import { Toaster } from 'react-hot-toast'

// App Layout
function Layout() {
  const isExpanded = useSelector((state: RootState) => state.uiState.isExpanded)

  return (
    <>
      <Topbar />

      <div className={`grid grid-cols-[clamp(210px,20%,270px)_1fr]`}>
        <div
          className={`overflow-y-hidden h-screen pb-8 sticky top-0 bottom-0 bg-base-200 z-10 pt-5 rounded-sm ${
            isExpanded ? '' : 'hidden'
          }`}
        >
          <Sidebar />
        </div>

        {/* content , main page */}
        <div className={`offwhite p-6 ${isExpanded ? '' : 'col-span-full'}`}>
          <Outlet />
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default Layout

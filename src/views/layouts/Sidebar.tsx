// Routing
import { NavLink } from 'react-router-dom'
import MainRoutes from '../../routes/MainRoutes'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

// Localization
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'

// Sidebar Component
function Sidebar() {
  const jobCount = useSelector<RootState, number>(
    (state) =>
      state.preConfiguredJobsState.preConfiguredJobHistoryState.processing_jobs
        .length
  )

  const isExpanded = useSelector<RootState, boolean>(
    (state) => state.uiState.isExpanded
  )

  const { i18n } = useLingui()

  return (
    <div className="flex flex-col px-5 rounded-lg text-sm font-nav">
      {/* stat box */}
      <div className="stats shadow overflow-hidden">
        <div className="stat">
          <div className="stat-value">
            <span className="mr-2 text-readable">91%</span>
            <i className="fa-solid fa-check fa-xs text-secondary ml-1"></i>
          </div>
          <div className="stat-title text-neutral-focus">
            <Trans>Your Tasks</Trans>
          </div>
          <div className="stat-desc text-secondary">
            10 <Trans>tasks remaining</Trans>
          </div>
        </div>
      </div>

      {/* main nav menu */}
      <div className="mt-6">
        <ul className="h-full text-md font-semibold text-base-100-content">
          {/* Sidebar main nav */}
          {MainRoutes.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => {
                  const cls =
                    'flex justify-start items-center rounded-lg p-2 m-1 hover:bg-neutral'
                  return isActive
                    ? cls + ' bg-neutral text-neutral-content'
                    : cls +
                        ' simple-animate text-neutral-focus hover:text-inactive'
                }}
              >
                <i
                  className={`${link.icon} fa-lg fa-solid align-middle w-6`}
                ></i>
                <span
                  className={`align-middle ${
                    isExpanded ? 'pl-2 flex-auto' : 'hidden'
                  }`}
                >
                  {i18n._(link.text.id)}
                </span>
                {link.path === '/PreConfiguredJobs' && (
                  <span className="rounded bg-accent px-2 text-accent-content">
                    {jobCount}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 font-semibold">
        <h3 className="font-display text-xs font-semibold mb-3 font-header bg-base-300 text-white rounded px-5 py-0 w-fit shadow">
          <Trans>PROJECTS</Trans>
        </h3>
        <ul className="text-readable">
          <li className="mb-2">BIO89-100-221</li>
          <li className="mb-2">Project 2</li>
          <li className="mb-2">STEM-Proj-3</li>
        </ul>
      </div>

      <div className="mt-10 flex flex-cols items-center justify-items-center p-3 border-b-2 border-t-2 border-base-300">
        <div>
          <img
            className="inline-block h-10 w-10 rounded-full ring-5 ring-white"
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </div>

        <div className="flex-auto ml-3">
          <h3 className="font-semibold font-header text-sm text-readable">
            William Huang
          </h3>
          <div className="text-xs font-header2 font-bold text-secondary">
            <Trans>Logout</Trans>
          </div>
        </div>

        <div className="text-lg hidden">
          <i className="fa-regular fa-bell"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

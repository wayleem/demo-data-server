// React Hooks
import { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import * as action from '../../store/actions/uiActions'

// UI Components
import DarkModeToggle from '../layouts/DarkModeToggle'
import Notification from './Notification'

// Utilities
import lang from '../../utils/langLoader'

// Topbar Component
function Topbar() {
  const dispatch = useDispatch()

  const [language, setLang] = useState<string>('en')

  const toggleSideBar = () => dispatch(action.setExpanded())

  const langSwap = () => {
    let new_lang = 'en'
    if (language === 'en') new_lang = 'cn'
    setLang(new_lang)
    void lang(new_lang)
  }

  return (
    <div className="navbar bg-base-100 text-readable">
      <div className="">
        <div className="dropdown">
          <label
            onClick={() => toggleSideBar()}
            htmlFor="my-drawer"
            tabIndex={-1}
            className="btn btn-ghost btn-circle drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="navbar-start">
        <img className="w-10 h-10" src="/ClinChoice_logo-228x228.png" />
      </div>

      <div className="ml-auto navbar-end">
        {/* search icon */}
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* language change */}
        <button className="btn btn-ghost btn-circle" onClick={langSwap}>
          <div className="indicator">
            <i className="fa-solid fa-language fa-xl text-neutral-focus"></i>
          </div>
        </button>

        <DarkModeToggle />

        <Notification />
      </div>
    </div>
  )
}

export default Topbar

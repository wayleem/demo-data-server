import { useState, useEffect } from 'react'

// Dark Mode Toggle Component
function DarkModeToggle() {
  const [mode, setMode] = useState('light')

  useEffect(
    () => document.documentElement.setAttribute('data-theme', mode),
    [mode]
  )

  const toggle = () => setMode(mode === 'light' ? 'dark' : 'light')

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={mode === 'dark' ? true : false}
          onChange={toggle}
        />
        <div className="block bg-gray-400 w-10 h-4 rounded-full"></div>
        {/* animating slider */}
        <div
          className={`dot absolute left-0 -top-1 bg-white w-6 h-6 rounded-full border shadow
        transition-transform duration-300 ease-in-out transform ${
          mode === 'dark' ? 'translate-x-full' : ''
        }`}
        ></div>
      </div>
      {/* mode icons */}
      <div className="ml-3 font-semibold">
        {mode === 'dark' ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun text-yellow-500"></i>
        )}
      </div>
    </label>
  )
}

export default DarkModeToggle

// React Hooks
import { useEffect } from 'react'

// Routing
import { HashRouter, Route, Routes } from 'react-router-dom'

// Internationalization
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import lang from './utils/langLoader.ts'

// Layout Components
import Layout from './views/layouts/Layout.tsx'

// Pages
import Dashboard from './views/pages/Dashboard/Dashboard.tsx'
import PreConfiguredJobs from './views/pages/PreConfiguredJobs/PreConfiguredJobs.tsx'
import DataUtilities from './views/pages/DataUtilities/DataUtilities.tsx'

function App() {
  useEffect(() => {
    void lang('en') // load default language
  }, [])

  return (
    <I18nProvider i18n={i18n}>
      <HashRouter>
        <Routes>
          <Route path="*" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="PreConfiguredJobs" element={<PreConfiguredJobs />} />
            <Route path="DataUtilities" element={<DataUtilities />} />
          </Route>
        </Routes>
      </HashRouter>
    </I18nProvider>
  )
}

export default App

import { msg } from '@lingui/macro'

const MainRoutes = [
  { path: '/dashboard', text: msg`Dashboard`, icon: 'fa-house' },
  {
    path: '/PreConfiguredJobs',
    text: msg`Jobs`,
    icon: 'fa-flask',
  },
  { path: '/DataUtilities', text: msg`Data Utilities`, icon: 'fa-wrench' },
  {
    path: '/sponsors-doesnt-exist',
    text: msg`Sponsors`,
    icon: 'fa-building-columns',
  },
  {
    path: '/studies-doesnt-exist',
    text: msg`Studies`,
    icon: 'fa-address-card',
  },
  {
    path: '/packages-doesnt-exist',
    text: msg`Study Packages`,
    icon: 'fa-folder-open',
  },
  { path: '/calendar-doesnt-exist', text: msg`Calendar`, icon: 'fa-calendar' },
  { path: '/folder-doesnt-exist', text: msg`Files`, icon: 'fa-folder' },
]

export default MainRoutes

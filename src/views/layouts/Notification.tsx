// React Hooks
import { useEffect, useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { notify, Notify } from '../../store/actions/uiActions'
import { RootState } from '../../store/store'

// Notification Component
function Notification() {
  const dispatch = useDispatch()
  const msgs = useSelector<RootState, Notify[]>(
    (state) => state.uiState.notifications
  )

  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  useEffect(() => {
    let ctrl = false
    let tmp_num = 0

    window.addEventListener('keydown', function (event) {
      if (event.code === 'ControlLeft') ctrl = true
    })
    window.addEventListener('keyup', function (event) {
      if (event.code === 'ControlLeft') ctrl = false
      if (ctrl && event.code === 'KeyB') {
        dispatch(
          notify({
            status: 'error',
            msg: 'There was an error running job #r23i23, error code[123]',
            id: generateId(),
          })
        )
      }
    })

    console.log('setup notify')
  }, [dispatch])

  return (
    <>
      <button className="btn btn-ghost btn-circle" onClick={toggle}>
        <div className="indicator">
          <i className="fa-regular fa-bell fa-lg"></i>
          <span className="badge badge-xs badge-error indicator-item -mt-2"></span>
        </div>
      </button>

      {/* workaround - literally type out classes or tailwind won't compile them when
      using dynamic bg-${msg.status} */}
      <div className="alert-error alert-success alert-info alert-warning hidden"></div>

      <ul
        className={`absolute z-10 bg-base-300 top-14 shadow-xl rounded-xl p-2 ${
          open ? '' : 'hidden'
        }`}
      >
        {msgs.slice(0, 5).map((msg) => (
          <div key={msg.id} className={`m-2 alert alert-${msg.status}`}>
            {msg.msg}
          </div>
        ))}
      </ul>
    </>
  )
}

export default Notification

function generateId(): string {
  return `notify-${Date.now()}-${Math.round(Math.random() * 9999)}`
}

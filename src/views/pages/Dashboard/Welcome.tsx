import { ReactNode } from 'react'
import { Trans } from '@lingui/macro'

const tags = [
  { text: 'ADaM IGv1.1', className: 'bg-primary font-normal border-0' },
  { text: 'SDTM IGv3.3', className: 'badge-ghost bg-accent1 text-readable' },
  { text: 'XML 2.0.0', className: 'badge-info' },
  { text: 'Drug Dict 2020-03', className: 'badge-ghost bg-accent2 border-0' },
  {
    text: 'Med Dict 2023',
    className: 'bg-secondary text-secondary-content border-0',
  },
]

type RadialProps = {
  remaining: number
  percent: number
  className?: string
  children?: ReactNode
}

type RadialStyle = React.CSSProperties & {
  '--value': number
}

// Radial Bar Component
function RadialProgress({
  remaining,
  percent,
  children,
  className = '',
}: RadialProps) {
  const style: RadialStyle = {
    '--value': percent,
  }
  return (
    <div className="flex flex-col flex-auto items-center">
      <div className="flex">
        <div className="self-center mr-5">
          <h3 className="font-header text-inactive">{children}</h3>

          <div>
            <span className="text-2xl font-header font-bold text-neutral-content">
              {remaining}
            </span>
            <span className="block text-inactive text-xs">
              <Trans>remaining</Trans>
            </span>
          </div>
        </div>

        <div
          className={`radial-progress border-2 border-base-200 bg-base-100 w-18 h-18 font-header font-bold text-xs drop-shadow ${className}`}
          style={style}
        >
          {percent}%
        </div>
      </div>
    </div>
  )
}

// Radial Bars Tab Component
function Welcome() {
  return (
    <div className="flex flex-row justify-between text-sm bg-neutral p-3 shadow rounded-2xl items-center">
      <div className="p-2 px-12 flex flex-col flex-auto items-center border-r-2 w-1/3 border-base-200">
        <div className="w-full flex justify-between text-neutral-content">
          <span className="font-header2 font-bold">
            <Trans>Programming Lead</Trans>
          </span>
          <span>John Smith</span>
        </div>
        <div className="w-full flex justify-between text-neutral-content">
          <span className="font-header2 font-bold">
            <Trans>QC Lead</Trans>
          </span>
          <span>Jane Jordan</span>
        </div>

        <div className="mt-3 font-header2 text-neutral-content">
          {tags.map((t) => (
            <div key={t.text} className={`badge text-xs mr-1 ${t.className}`}>
              {t.text}
            </div>
          ))}
        </div>
      </div>

      {/* radial wheels here */}

      <RadialProgress remaining={12} percent={73} className="text-success">
        Dev <Trans>Tasks</Trans>
      </RadialProgress>

      <RadialProgress remaining={28} percent={38} className="text-error">
        QC <Trans>Tasks</Trans>
      </RadialProgress>
    </div>
  )
}

export default Welcome

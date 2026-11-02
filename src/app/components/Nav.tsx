import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'

import { site } from '../../data/site'
import { cx } from '../lib/cx'

export function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: site.timezone }).format(new Date()))
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

export function Nav() {
  const time = useLocalTime()
  const location = useLocation()
  const [hidden, setHidden] = useState(false)
  // Only the home page has a video behind the header, so only there does it
  // need a paper scrim to keep the links readable.
  const overVideo = location.pathname === '/'

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > 120)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = (to: string, label: string) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) => cx('link-draw text-[14px] transition-colors', isActive || (to !== '/' && location.pathname.startsWith(to)) ? 'text-fg' : 'text-muted hover:text-fg')}
    >
      {label}
    </NavLink>
  )

  return (
    <header className={cx('fixed inset-x-0 top-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]', hidden && '-translate-y-full')}>
      {overVideo && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-bg via-bg/90 to-transparent backdrop-blur-[2px]"
        />
      )}
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-5 sm:px-8">
        <Link to="/" className="text-[15px] font-medium">
          {site.name}
        </Link>
        <nav className="flex items-center gap-2.5 sm:gap-6">
          {link('/about', 'About')}
          {link('/cv', 'CV')}
          {link('/notes', 'Notes')}
          <a href={`mailto:${site.email}`} className="link-draw text-[14px] text-muted transition-colors hover:text-fg">
            Contact
          </a>
          <span className="hidden text-[13px] tabular-nums text-faint sm:inline">
            {site.location} {time}
          </span>
        </nav>
      </div>
    </header>
  )
}

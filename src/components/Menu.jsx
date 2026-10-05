import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu as MenuIcon, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/who-we-are', label: 'Who We Are' },
  { to: '/education-program', label: 'Our Education Program' },
  { to: '/our-signature', label: 'Our Signature' },
  { to: '/academics', label: 'Our Academics' },
  { to: '/previous-academics', label: 'Our Previous Academics' },
  { to: '/co-curricular', label: 'Co-Curricular Activities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/admission', label: 'Admission' },
  { to: '/contact', label: 'Contact' },
]

function Menu() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Force the dark topbar on pages with a light background
  const forceDarkTopbar = location.pathname === '/previous-academics'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`topbar${scrolled || forceDarkTopbar ? ' scrolled' : ''}`}>
        <div className="topbar-inner">
          <Link to="/" className="topbar-brand" onClick={close}>
            <img
              src="/images/logo.webp"
              alt="Africa Elite Schools"
              className="topbar-logo"
            />
            <div className="topbar-brand-text">
              <strong>AFRICA ELITE SCHOOLS</strong>
              <span>EXCELLENCE IS OUR IDENTITY</span>
            </div>
          </Link>

          {/* Apply Now CTA button */}
          <Link to="/admission" className="topbar-cta" onClick={close}>
            Apply Now
          </Link>

          <button
            className="topbar-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </header>

      <div
        className={`menu-backdrop${open ? ' open' : ''}`}
        onClick={close}
      />

      <aside className={`side-menu${open ? ' open' : ''}`}>
        <button
          className="side-menu-close"
          onClick={close}
          aria-label="Close menu"
        >
          <X size={26} />
        </button>

        <div className="side-menu-brand">
          <img
            src="/images/logo.webp"
            alt="Africa Elite Schools"
            className="side-menu-logo"
          />
          <div className="side-menu-brand-text">
            <strong>AFRICA ELITE SCHOOLS</strong>
            <span>EXCELLENCE IS OUR IDENTITY</span>
          </div>
        </div>

        <ul className="side-menu-links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={close}
                className={({ isActive }) =>
                  isActive ? 'side-menu-link active' : 'side-menu-link'
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Menu
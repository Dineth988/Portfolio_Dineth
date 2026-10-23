import React, { useRef, useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_close from '../../assets/menu_close.svg'
import menu_open from '../../assets/menu_open.svg'

const navLinks = [
  { label: 'Home', href: '#home', offset: 0 },
  { label: 'About', href: '#about', offset: 0 },
  { label: 'Experience', href: '#experience', offset: 0 },
  { label: 'Offer', href: '#offer', offset: 0 },
  { label: 'Projects', href: '#projects', offset: 0 },
  { label: 'Contact', href: '#contact', offset: 0 },
]

const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)'
const DUR = '0.45s'
const T = `all ${DUR} ${EASING}`

const NavBar = () => {
  const menuRef = useRef()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Read current theme from documentElement
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
    setTheme(currentTheme)

    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    try {
      localStorage.setItem('theme', nextTheme)
    } catch (e) { }
  }

  const openMenu = () => { setMenuOpen(true); if (menuRef.current) menuRef.current.style.right = '0' }
  const closeMenu = () => { setMenuOpen(false); if (menuRef.current) menuRef.current.style.right = '-350px' }

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-[49] md:hidden transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* ── Outer rail — full-width, transparent, centres the pill ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        style={{
          paddingTop: scrolled ? '14px' : '0',
          paddingLeft: scrolled ? '16px' : '0',
          paddingRight: scrolled ? '16px' : '0',
          transition: T,
          pointerEvents: 'none',
        }}
      >
        {/* ════════════ PILL / BAR ════════════ */}
        <nav
          aria-label="Main Navigation"
          className="relative w-full flex items-center justify-between"
          style={{
            maxWidth: scrolled ? '920px' : '100%',
            borderRadius: scrolled ? '9999px' : '0px',
            paddingTop: scrolled ? '10px' : '22px',
            paddingBottom: scrolled ? '10px' : '22px',
            paddingLeft: scrolled ? '24px' : 'clamp(24px, 6vw, 120px)',
            paddingRight: scrolled ? '16px' : 'clamp(24px, 6vw, 120px)',
            background: scrolled ? 'var(--surface)' : 'var(--bg)',
            opacity: scrolled ? 0.96 : 0.98,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: scrolled ? '1px solid var(--border)' : '1px solid transparent',
            borderBottom: scrolled ? '1px solid var(--border)' : '1px solid var(--border)',
            boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.08)' : 'none',
            willChange: 'max-width, border-radius, background, box-shadow',
            transition: T,
            pointerEvents: 'auto',
          }}
        >
          {/* ───── LOGO (Refined Serif Wordmark) ───── */}
          <a
            href="#home"
            className="flex items-center gap-0.5 select-none text-decoration-none group cursor-pointer"
            aria-label="Dineth Home"
          >
            <span
              className="text-[24px] font-semibold tracking-tight transition-colors duration-200"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
            >
              Dineth
            </span>
            <span
              className="inline-block w-1.5 h-1.5 rounded-full mb-1 transition-transform group-hover:scale-125"
              style={{ background: 'var(--accent)' }}
            />
          </a>

          {/* ───── DESKTOP LINKS ───── */}
          <ul
            className="flex items-center list-none max-md:hidden m-0 p-0"
            style={{ gap: scrolled ? '6px' : '28px', transition: T }}
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <AnchorLink
                  href={link.href}
                  offset={link.offset}
                  className="group relative cursor-pointer"
                  style={{
                    display: 'block',
                    padding: scrolled ? '6px 12px' : '4px 2px',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--text)',
                    letterSpacing: '0.01em',
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--heading)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text)'
                  }}
                >
                  {link.label}
                  {/* Subtle brass underline indicator */}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: 'var(--accent)' }}
                  />
                </AnchorLink>
              </li>
            ))}
          </ul>

          {/* ───── RIGHT CONTROLS: THEME TOGGLE + CTA ───── */}
          <div className="flex items-center gap-3">
            {/* Sun / Moon Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--heading)',
              }}
            >
              {theme === 'dark' ? (
                // Sun icon
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                // Moon icon
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <AnchorLink offset={0} href="#contact" className="max-md:hidden">
              <div
                className="btn-primary text-[13px] tracking-wide"
                style={{
                  padding: scrolled ? '8px 18px' : '9px 20px',
                }}
              >
                Connect With Me
              </div>
            </AnchorLink>

            {/* ───── MOBILE BURGER ───── */}
            <button
              onClick={openMenu}
              aria-label="Open Navigation Menu"
              className="hidden max-md:flex items-center justify-center w-9 h-9 rounded-full cursor-pointer transition-colors"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--heading)',
              }}
            >
              <img
                src={menu_open}
                alt="Menu"
                className="w-4 h-4"
                style={{
                  filter: theme === 'dark' ? 'invert(1)' : 'invert(0.1)',
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ════════════════════════════════════════
          MOBILE SIDEBAR
      ════════════════════════════════════════ */}
      <aside
        ref={menuRef}
        aria-label="Mobile Navigation"
        className="fixed top-0 bottom-0 w-[290px] z-[50] flex flex-col pt-8 pb-8 px-7 gap-7 transition-[right] duration-400 ease-out"
        style={{
          right: '-350px',
          background: 'var(--surface)',
          borderLeft: '1px solid var(--border)',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
        }}
      >
        <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="flex items-center gap-1 select-none">
            <span className="text-[22px] font-semibold" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}>
              Dineth
            </span>
            <span className="w-1.5 h-1.5 rounded-full mb-1" style={{ background: 'var(--accent)' }} />
          </div>

          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
          >
            <img
              src={menu_close}
              alt="Close"
              className="w-3.5 h-3.5"
              style={{ filter: theme === 'dark' ? 'invert(1)' : 'invert(0.1)' }}
            />
          </button>
        </div>

        <span className="text-[11px] tracking-[0.2em] uppercase font-semibold" style={{ color: 'var(--accent)' }}>
          Menu
        </span>

        <ul className="flex flex-col gap-4 list-none m-0 p-0">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <AnchorLink
                href={link.href}
                offset={link.offset}
                onClick={closeMenu}
                className="flex items-center gap-3 text-[20px] font-medium transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
              >
                <span className="text-[11px] font-sans font-semibold tracking-widest" style={{ color: 'var(--accent)' }}>
                  0{i + 1}
                </span>
                {link.label}
              </AnchorLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between text-[13px]" style={{ color: 'var(--muted)' }}>
            <span>Appearance</span>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-full text-[12px] font-medium"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--heading)' }}
            >
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>

          <AnchorLink offset={30} href="#contact" onClick={closeMenu}>
            <div className="w-full btn-primary py-3 text-[14px]">
              Connect With Me
            </div>
          </AnchorLink>
        </div>
      </aside>
    </>
  )
}

export default NavBar
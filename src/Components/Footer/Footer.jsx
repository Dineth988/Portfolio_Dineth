import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const navLinks = [
  { label: 'Home',       href: '#home',       offset: 0  },
  { label: 'About',      href: '#about',      offset: 62 },
  { label: 'Experience', href: '#experience', offset: 62 },
  { label: 'Offer',      href: '#offer',      offset: 62 },
  { label: 'Projects',   href: '#projects',   offset: 62 },
  { label: 'Contact',    href: '#contact',    offset: 62 },
]

const Footer = () => {
  return (
    <footer
      className="px-6 md:px-12 pt-16 pb-8 transition-colors duration-300"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-[1140px] mx-auto">

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12" style={{ borderBottom: '1px solid var(--border)' }}>

          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {/* Serif wordmark */}
            <div className="flex items-center gap-1 select-none">
              <span
                className="text-[26px] font-semibold tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
              >
                Dineth
              </span>
              <span className="inline-block w-2 h-2 rounded-full mb-1 ml-0.5" style={{ background: 'var(--accent)' }} />
            </div>

            <p className="text-[14px] sm:text-[15px] leading-[1.7]" style={{ color: 'var(--text)', maxWidth: '340px' }}>
              AI Application Engineer building reliable agentic systems — from orchestrated multi-agent pipelines to production Python backends.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-1">
              {[
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/dinethwickramasinghe',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/Dineth988',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  ),
                },
                {
                  label: 'Email',
                  href: 'mailto:dilmindineth988@gmail.com',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 group"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--accent)' }}>
              Quick Links
            </span>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <AnchorLink
                    href={link.href}
                    offset={link.offset}
                    className="relative text-[14px] font-medium transition-colors duration-200 group inline-flex items-center gap-1.5"
                    style={{ color: 'var(--text)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--heading)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text)' }}
                  >
                    <span
                      className="w-0 h-[1px] rounded-full transition-all duration-300 group-hover:w-3"
                      style={{ background: 'var(--accent)', display: 'inline-block' }}
                    />
                    {link.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--accent)' }}>
              Let's Connect
            </span>
            <p className="text-[14px] leading-[1.7]" style={{ color: 'var(--text)' }}>
              Open to AI engineering roles, internships, and exciting collaborations.
            </p>
            <AnchorLink href="#contact" offset={30} className="self-start">
              <span
                className="text-[14px] font-medium relative group cursor-pointer"
                style={{ color: 'var(--heading)' }}
              >
                Get in touch
                <span
                  className="absolute bottom-[-2px] left-0 h-[1.5px] w-full rounded-full origin-left scale-x-100 group-hover:origin-right transition-transform duration-300"
                  style={{ background: 'var(--accent)' }}
                />
              </span>
            </AnchorLink>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-7">
          <p className="text-[13px]" style={{ color: 'var(--muted)' }}>
            © 2026 Dineth Wickramasinghe. All rights reserved.
          </p>
          <p className="text-[13px]" style={{ color: 'var(--muted)' }}>
            Built with React &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
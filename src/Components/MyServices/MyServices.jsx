import React from 'react'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { servicesData } from '../../data/services'

const ServiceIcon = ({ type }) => {
  switch (type) {
    case 'agentic':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    case 'rag':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      )
    case 'backend':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    case 'cv':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'docker':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      )
  }
}

const MyServices = () => {
  return (
    <section
      id="offer"
      className="relative py-24 md:py-32 px-6 md:px-12 transition-colors duration-300"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-[1140px] mx-auto">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span
            className="text-[11px] tracking-[0.2em] uppercase font-semibold"
            style={{ color: 'var(--accent)' }}
          >
            03 / WHAT I OFFER
          </span>
          <div className="h-px w-12" style={{ background: 'var(--border)' }} />
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-16 max-w-[720px]"
        >
          <h2
            className="text-[34px] sm:text-[46px] lg:text-[54px] font-semibold leading-[1.12] mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
          >
            Architected for reliability &amp;{' '}
            <span className="relative inline-block">
              precision
              <span className="absolute left-0 bottom-1 w-full h-[2px] rounded-full" style={{ background: 'var(--accent)' }} />
            </span>
            .
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[1.7]" style={{ color: 'var(--text)' }}>
            Engineering solutions designed around production rigor, verifiable context grounding, and clean architectural separation.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                item.isCta ? 'border-dashed' : ''
              }`}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 16px -4px rgba(0,0,0,0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              <div>
                {/* Header row: Number + Small Brass Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[12px] font-mono font-semibold tracking-widest"
                    style={{ color: 'var(--accent)' }}
                  >
                    {item.num}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <ServiceIcon type={item.icon} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-[22px] sm:text-[24px] font-semibold leading-snug mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--text)' }}>
                  {item.desc}
                </p>
              </div>

              {/* Bottom accent or CTA button */}
              {item.isCta ? (
                <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <AnchorLink offset={30} href="#contact">
                    <span className="btn-primary w-full py-2.5 text-[13px]">
                      Start a Conversation
                    </span>
                  </AnchorLink>
                </div>
              ) : (
                <div className="mt-6 pt-4 flex items-center gap-2" style={{ borderTop: '1px solid var(--border)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: 'var(--muted)' }}>
                    Production Practice
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default MyServices
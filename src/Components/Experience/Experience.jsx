import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experienceData } from '../../data/experience'

// ── Status badge ────────────────────────────────────────────────────
const StatusBadge = ({ isCurrent, label }) => (
  <span
    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide whitespace-nowrap"
    style={{
      background: isCurrent ? 'rgba(176,141,87,0.12)' : 'var(--surface)',
      color: isCurrent ? 'var(--accent)' : 'var(--muted)',
      border: `1px solid ${isCurrent ? 'var(--accent)' : 'var(--border)'}`,
    }}
  >
    {isCurrent && (
      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
    )}
    {label || (isCurrent ? 'Current' : 'Completed')}
  </span>
)

// ── LEFT PANEL: sidebar item ─────────────────────────────────────────
const SidebarItem = ({ item, isActive, onClick }) => (
  <button
    onClick={onClick}
    className="w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] group transition-all duration-200"
    style={{
      background: isActive ? 'var(--bg)' : 'transparent',
      border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
      borderLeft: `3px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
      borderRadius: '12px',
      padding: '14px 16px',
    }}
    aria-pressed={isActive}
  >
    {/* Period + Status row */}
    <div className="flex items-center justify-between gap-2 mb-1.5">
      <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
        {item.period}
      </span>
      <StatusBadge isCurrent={item.isCurrent} label={item.subtitle} />
    </div>

    {/* Role */}
    <div
      className="text-[15px] font-semibold leading-snug mb-0.5 transition-colors group-hover:text-[var(--accent)]"
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        color: isActive ? 'var(--accent)' : 'var(--heading)',
      }}
    >
      {item.role}
    </div>

    {/* Company */}
    <div className="flex items-center gap-1.5 mb-2.5">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
      <span className="text-[12px]" style={{ color: 'var(--muted)' }}>{item.company}</span>
    </div>

    <span
      className="text-[11px] font-semibold transition-colors group-hover:text-[var(--accent)]"
      style={{ color: isActive ? 'var(--accent)' : 'var(--muted)' }}
    >
      View full briefing →
    </span>
  </button>
)

// ── RIGHT PANEL: detail view ─────────────────────────────────────────
const DetailPanel = ({ item }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -14 }}
      transition={{ duration: 0.26, ease: 'easeOut' }}
      className="flex flex-col h-full"
      style={{
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div className="px-7 pt-7 pb-5" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase"
            style={{ background: 'var(--surface)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
            {item.subtitle}
          </span>
          <StatusBadge isCurrent={item.isCurrent} />
        </div>
        <h3 className="text-[30px] sm:text-[34px] font-semibold leading-tight mb-1 uppercase tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}>
          {item.role}
        </h3>
        <p className="text-[14px] font-medium mb-4" style={{ color: 'var(--accent)' }}>
          {item.companyFull || item.company}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-[12px]" style={{ color: 'var(--muted)' }}>
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            {item.period}
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {item.location}
          </span>
        </div>
      </div>

      {/* Three stat boxes */}
      <div className="grid grid-cols-3" style={{ borderBottom: '1px solid var(--border)' }}>
        {[
          { label: 'Primary Focus', value: item.primaryFocus },
          { label: 'Environment', value: item.environment },
          { label: 'Delivery Phase', value: item.deliveryPhase },
        ].map((stat, i) => (
          <div key={stat.label} className="px-5 py-4 flex flex-col gap-1"
            style={{ borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}>
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: 'var(--muted)' }}>
              {stat.label}
            </span>
            <span className="text-[13px] font-semibold" style={{ color: 'var(--heading)' }}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* Responsibilities */}
      <div className="px-7 py-5 flex-1 overflow-y-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: 'var(--muted)' }}>
            Key Responsibilities &amp; Architectural Impact
          </span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>
        <ul className="flex flex-col gap-3 mb-6">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
              <span className="text-[13px] leading-[1.65]" style={{ color: 'var(--text)' }}>{b}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        {item.tags && (
          <>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: 'var(--muted)' }}>
                Technologies &amp; Methodologies
              </span>
              <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-md text-[12px] font-medium"
                  style={{ background: 'var(--surface)', color: 'var(--heading)', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="px-7 py-3 flex items-center justify-between"
        style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <span className="text-[11px]" style={{ color: 'var(--muted)' }}>
          {item.companyFull || item.company}
        </span>
        <span className="text-[11px] font-mono" style={{ color: 'var(--muted)' }}>
          {item.period}
        </span>
      </div>
    </motion.div>
  </AnimatePresence>
)

// ── COMPACT GRID: single card ────────────────────────────────────────
const CompactCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.08, ease: 'easeOut' }}
    className="flex flex-col rounded-2xl overflow-hidden"
    style={{
      background: 'var(--bg)',
      border: `1px solid ${item.isCurrent ? 'var(--accent)' : 'var(--border)'}`,
      borderLeft: `3px solid ${item.isCurrent ? 'var(--accent)' : 'var(--border)'}`,
    }}
  >
    {/* Card header */}
    <div className="px-5 pt-5 pb-4" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="text-[10px] font-bold tracking-widest uppercase leading-none" style={{ color: 'var(--accent)' }}>
          {item.period}
        </span>
        <StatusBadge isCurrent={item.isCurrent} label={item.isCurrent ? 'Current' : item.subtitle} />
      </div>
      <h4 className="text-[22px] sm:text-[24px] font-semibold leading-tight uppercase tracking-wide mb-1"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}>
        {item.role}
      </h4>
      <p className="text-[13px] font-medium" style={{ color: 'var(--accent)' }}>
        {item.company}
      </p>
    </div>

    {/* Bullets — show first 2 only */}
    <div className="px-5 py-4 flex-1">
      <ul className="flex flex-col gap-2.5 mb-4">
        {item.bullets.slice(0, 2).map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
            <span className="text-[12px] leading-[1.6]" style={{ color: 'var(--text)' }}>{b}</span>
          </li>
        ))}
      </ul>

      {/* Tags — show first 3 */}
      <div className="flex flex-wrap gap-1.5 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
        {item.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2.5 py-0.5 rounded-md text-[11px] font-medium"
            style={{ background: 'var(--surface)', color: 'var(--heading)', border: '1px solid var(--border)' }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

// ── MOBILE accordion ─────────────────────────────────────────────────
const MobileAccordion = ({ item, isOpen, onToggle }) => (
  <div className="rounded-xl overflow-hidden transition-all duration-200"
    style={{ border: `1px solid ${isOpen ? 'var(--accent)' : 'var(--border)'}` }}>
    <button onClick={onToggle} className="w-full text-left px-5 py-4 cursor-pointer focus:outline-none"
      style={{ background: 'var(--bg)' }} aria-expanded={isOpen}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
              {item.period}
            </span>
            <StatusBadge isCurrent={item.isCurrent} label={item.subtitle} />
          </div>
          <div className="text-[17px] font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}>
            {item.role}
          </div>
          <div className="text-[12px]" style={{ color: 'var(--muted)' }}>{item.company}</div>
        </div>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: isOpen ? 'var(--accent)' : 'var(--surface)', border: '1px solid var(--border)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke={isOpen ? 'var(--bg)' : 'var(--text)'} strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: 'hidden' }}>
          <div style={{ borderTop: '1px solid var(--border)' }}>
            <DetailPanel item={item} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

// ── View Mode Toggle ─────────────────────────────────────────────────
const ViewToggle = ({ mode, onChange }) => (
  <div className="hidden md:flex items-center flex-shrink-0 text-[12px] font-semibold rounded-full overflow-hidden"
    style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>
    {[
      { id: 'panel', icon: '⊟', label: 'Interactive Panel' },
      { id: 'grid',  icon: '⊞', label: 'Compact Grid' },
    ].map(({ id, icon, label }) => (
      <button
        key={id}
        onClick={() => onChange(id)}
        className="px-4 py-2 transition-all duration-200 focus:outline-none"
        style={{
          background: mode === id ? 'var(--btn)' : 'transparent',
          color: mode === id ? 'var(--bg)' : 'var(--muted)',
          borderRadius: '9999px',
        }}
      >
        {icon} {label}
      </button>
    ))}
  </div>
)

// ── Main component ───────────────────────────────────────────────────
const Experience = () => {
  const [activeId, setActiveId] = useState(experienceData[0].id)
  const [viewMode, setViewMode] = useState('panel') // 'panel' | 'grid'
  const activeItem = experienceData.find(e => e.id === activeId)

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-6 md:px-12 transition-colors duration-300"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-[1140px] mx-auto">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: 'var(--accent)' }}>
              $ Career Trajectory &amp; Engineering Practice
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold leading-[1.08] mb-2"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}>
                Work &amp; Research Experience
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-snug" style={{ color: 'var(--text)', maxWidth: '480px' }}>
                Specializing in machine learning systems, automated agentic pipelines,<br className="hidden sm:block" /> and applied intelligent IoT systems.
              </p>
            </div>
            <ViewToggle mode={viewMode} onChange={setViewMode} />
          </div>
        </motion.div>

        {/* ══ DESKTOP: Interactive Panel ══════════════════════════════ */}
        <AnimatePresence mode="wait">
          {viewMode === 'panel' && (
            <motion.div
              key="panel"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden md:grid gap-5"
              style={{ gridTemplateColumns: '300px 1fr' }}
            >
              {/* LEFT: sidebar list */}
              <div className="flex flex-col gap-3">
                {experienceData.map(item => (
                  <SidebarItem key={item.id} item={item}
                    isActive={activeId === item.id}
                    onClick={() => setActiveId(item.id)} />
                ))}
              </div>

              {/* RIGHT: detail panel */}
              <div style={{ minHeight: '480px' }}>
                {activeItem && <DetailPanel item={activeItem} />}
              </div>
            </motion.div>
          )}

          {/* ══ DESKTOP: Compact Grid ══════════════════════════════════ */}
          {viewMode === 'grid' && (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden md:grid gap-5"
              style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
            >
              {experienceData.map((item, index) => (
                <CompactCard key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ══ MOBILE: Accordion (always) ══════════════════════════════ */}
        <div className="flex flex-col gap-3 md:hidden">
          {experienceData.map(item => (
            <MobileAccordion key={item.id} item={item}
              isOpen={activeId === item.id}
              onToggle={() => setActiveId(prev => prev === item.id ? null : item.id)} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience

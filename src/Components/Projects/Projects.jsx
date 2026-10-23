import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { featuredProjects, secondaryProjects } from '../../data/projects'

const StackChip = ({ label }) => (
  <span
    className="inline-flex items-center px-2.5 py-1 rounded-md text-[12px] font-medium"
    style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      color: 'var(--heading)',
    }}
  >
    {label}
  </span>
)

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const FeaturedProjectRow = ({ project, isOpen, onToggle, isFirst }) => {
  return (
    <div
      className="relative"
      style={{
        borderTop: '1px solid var(--border)',
        borderLeft: isOpen ? '3px solid var(--accent)' : '3px solid transparent',
        transition: 'border-left-color 0.3s ease',
      }}
    >
      {/* Clickable Summary Row */}
      <button
        onClick={onToggle}
        className="w-full text-left group flex items-center justify-between gap-6 py-7 px-5 sm:px-8 cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        style={{
          background: isOpen ? 'var(--surface)' : 'transparent',
          transition: 'background 0.25s ease',
        }}
        aria-expanded={isOpen}
      >
        {/* Left: number + title + tag */}
        <div className="flex items-baseline gap-5 min-w-0 flex-1">
          <span
            className="text-[32px] sm:text-[48px] lg:text-[60px] font-semibold leading-none select-none flex-shrink-0 transition-colors duration-200"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: isOpen ? 'var(--accent)' : 'var(--border)',
              WebkitTextStroke: isOpen ? '0' : '1px var(--border)',
            }}
          >
            {project.id}
          </span>

          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h3
                className="text-[20px] sm:text-[26px] lg:text-[30px] font-semibold leading-tight transition-colors duration-200 group-hover:text-[var(--accent)]"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: 'var(--heading)',
                }}
              >
                {project.title}
              </h3>
              <span
                className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase"
                style={{ background: 'var(--surface)', color: 'var(--accent)', border: '1px solid var(--border)' }}
              >
                {project.type}
              </span>
            </div>
            <p className="text-[14px] sm:text-[15px] leading-snug" style={{ color: 'var(--muted)' }}>
              {project.hook}
            </p>
          </div>
        </div>

        {/* Right: Arrow */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{
            background: isOpen ? 'var(--accent)' : 'var(--surface)',
            border: '1px solid var(--border)',
          }}
        >
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke={isOpen ? 'var(--bg)' : 'var(--text)'}
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>

      {/* Expanded Detail Section */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 sm:px-8 pb-8 pt-2">
              {/* Three-column detail grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-7">
                {/* The Problem */}
                <div
                  className="p-5 rounded-xl flex flex-col gap-3"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                    <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                      The Problem
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--text)' }}>
                    {project.problem}
                  </p>
                </div>

                {/* The Solution */}
                <div
                  className="p-5 rounded-xl flex flex-col gap-3"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                    <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                      The Solution
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--text)' }}>
                    {project.solution}
                  </p>
                </div>

                {/* Impact / Highlights */}
                <div
                  className="p-5 rounded-xl flex flex-col gap-3"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                    <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                      Impact &amp; Highlights
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--text)' }}>
                    {project.impact}
                  </p>
                  {project.isPrivate && (
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium mt-1 self-start"
                      style={{ background: 'var(--surface)', color: 'var(--muted)', border: '1px solid var(--border)' }}
                    >
                      🔒 {project.privateNote}
                    </span>
                  )}
                </div>
              </div>

              {/* Stack + Links */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <StackChip key={s} label={s} />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.github && !project.isPrivate && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full transition-all hover:-translate-y-px"
                      style={{
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        background: 'var(--surface)',
                      }}
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2 text-[13px] px-4 py-2"
                    >
                      <ExternalLinkIcon />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const SecondaryProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.07 }}
    className="p-6 rounded-2xl flex flex-col gap-4 group transition-all duration-300 hover:-translate-y-1"
    style={{
      background: 'var(--bg)',
      border: '1px solid var(--border)',
    }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)' }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}
  >
    <div className="flex items-start justify-between gap-3">
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
          {project.type}
        </span>
        <h4
          className="text-[18px] sm:text-[20px] font-semibold mt-0.5 leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
        >
          {project.title}
        </h4>
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub repo for ${project.title}`}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
        >
          <GithubIcon />
        </a>
      )}
    </div>

    <p className="text-[13px] leading-[1.6]" style={{ color: 'var(--text)' }}>
      {project.solution}
    </p>

    <div className="flex flex-wrap gap-1.5 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
      {project.tech.split(' · ').map((t) => (
        <StackChip key={t} label={t} />
      ))}
    </div>
  </motion.div>
)

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState('01')

  const handleToggle = (id) => {
    setOpenProjectId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 md:px-12 transition-colors duration-300"
      style={{ background: 'var(--bg)' }}
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
          <span className="text-[11px] tracking-[0.2em] uppercase font-semibold" style={{ color: 'var(--accent)' }}>
            04 / PROJECTS
          </span>
          <div className="h-px w-12" style={{ background: 'var(--border)' }} />
        </motion.div>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <h2
            className="text-[34px] sm:text-[46px] lg:text-[54px] font-semibold leading-[1.12]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
          >
            Selected{' '}
            <span className="relative inline-block">
              work
              <span className="absolute left-0 bottom-1 w-full h-[2px] rounded-full" style={{ background: 'var(--accent)' }} />
            </span>
            .
          </h2>
          <p className="text-[14px] sm:text-[15px]" style={{ color: 'var(--muted)', maxWidth: '320px', textAlign: 'right' }}>
            Click any project to explore its architecture, problem, and impact.
          </p>
        </motion.div>

        {/* ── Featured Editorial Index ── */}
        <div
          className="rounded-2xl overflow-hidden mb-20"
          style={{ border: '1px solid var(--border)' }}
        >
          {featuredProjects.map((project, i) => (
            <FeaturedProjectRow
              key={project.id}
              project={project}
              isOpen={openProjectId === project.id}
              onToggle={() => handleToggle(project.id)}
              isFirst={i === 0}
            />
          ))}
          {/* Bottom border cap */}
          <div style={{ borderTop: '1px solid var(--border)', height: 0 }} />
        </div>

        {/* ── Secondary Projects ── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3
              className="text-[22px] sm:text-[26px] font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
            >
              More projects
            </h3>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {secondaryProjects.map((project, index) => (
              <SecondaryProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects

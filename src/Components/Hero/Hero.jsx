import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const specialties = [
  'Agentic LLM Pipelines',
  'RAG & GraphRAG Systems',
  'Production Python Backends'
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const Hero = () => {
  const [activeSpecialty, setActiveSpecialty] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSpecialty((prev) => (prev + 1) % specialties.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 md:py-32"
      style={{ background: 'var(--bg)' }}
    >
      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">

        {/* ── LEFT COLUMN: Text Content ── */}
        <div className="flex flex-col items-start max-w-[620px] w-full">

          {/* Subtle status pill */}
          <motion.div {...fadeUp(0.1)} className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[12px] font-medium tracking-wide"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--heading)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ background: 'var(--accent)' }}
              />
              Open to opportunities
            </span>
          </motion.div>

          {/* Large Serif Heading */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-[44px] sm:text-[56px] lg:text-[72px] font-semibold leading-[1.08] tracking-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
          >
            Dineth Wickramasinghe
          </motion.h1>

          {/* Role & Rotating Specialties */}
          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row sm:items-center gap-2 mb-6">
            <span
              className="text-[17px] sm:text-[19px] font-medium tracking-wide"
              style={{ color: 'var(--heading)' }}
            >
              AI Application Engineer Intern
            </span>
            <span className="hidden sm:inline text-[var(--accent)]">•</span>
            <div className="h-[26px] overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeSpecialty}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="text-[14px] sm:text-[15px] font-medium tracking-wide"
                  style={{ color: 'var(--accent)' }}
                >
                  {specialties[activeSpecialty]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Short Intro from CV */}
          <motion.p
            {...fadeUp(0.4)}
            className="text-[16px] sm:text-[17px] leading-[1.7] mb-9"
            style={{ color: 'var(--text)', maxWidth: '540px' }}
          >
            I build agentic LLM pipelines, RAG systems, and production-ready Python backends,
            turning complex AI logic into reliable software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex items-center gap-4 mb-9 flex-wrap"
          >
            <AnchorLink offset={30} href="#contact">
              <div className="btn-primary px-7 py-3 text-[14px]">
                Connect With Me
              </div>
            </AnchorLink>

            <a
              href="/DINETH_WICKRAMASINGHE_AI_Application_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-7 py-3 text-[14px]"
            >
              My Resume
            </a>
          </motion.div>

          {/* Minimal Outlined Social Icons */}
          <motion.div {...fadeUp(0.6)} className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/dinethwickramasinghe"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 group"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[var(--accent)] transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="https://github.com/Dineth988"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 group"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[var(--accent)] transition-colors">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            <a
              href="mailto:dilmindineth988@gmail.com"
              aria-label="Send Email"
              title="Email"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 group"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[var(--accent)] transition-colors">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </motion.div>

        </div>

        {/* ── RIGHT COLUMN: Refined Framed Portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-shrink-0"
        >
          {/* Subtle brass offset border ring */}
          <div
            className="absolute inset-0 rounded-full translate-x-2 translate-y-2 pointer-events-none"
            style={{
              border: '1.5px solid var(--accent)',
              opacity: 0.5,
              borderRadius: '50%',
            }}
          />

          {/* Photo Container */}
          <div
            className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden p-1.5"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.07)',
            }}
          >
            <img
              src="/pp.jpeg"
              alt="Dineth Wickramasinghe"
              className="w-full h-full object-cover object-top rounded-full filter  hover:grayscale-105 transition-all duration-500"
            />
          </div>
        </motion.div>

      </div>

      {/* ── Minimal Animated Scroll Hint Line ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1.5px] h-8 rounded-full"
          style={{ background: 'var(--accent)' }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
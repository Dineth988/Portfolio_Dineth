import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const infoDetails = [
  { label: 'Role', value: 'AI Application Engineer Intern' },
  { label: 'Education', value: 'BSc Computing, NIBM (2027)' },
  { label: 'Location', value: 'Sri Lanka' },
  { label: 'Focus', value: 'Agentic AI, RAG, GraphRAG' },
  { label: 'Status', value: 'Open to opportunities' },
]

const techCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript']
  },
  {
    category: 'AI / LLM Frameworks',
    skills: ['LangChain', 'LlamaIndex', 'Dify', 'Hugging Face', 'n8n']
  },
  {
    category: 'AI Concepts & Architectures',
    skills: ['RAG', 'Agentic Workflows', 'Multi-Agent Systems', 'Prompt Engineering', 'NLP', 'Fine-Tuning']
  },
  {
    category: 'Vector & Graph Databases',
    skills: ['Qdrant', 'Pinecone', 'Neo4j', 'LightRAG']
  },
  {
    category: 'Backend & Web',
    skills: ['FastAPI', 'React.js', 'REST APIs']
  },
  {
    category: 'Tools & Infrastructure',
    skills: ['Git', 'GitHub', 'Docker', 'Postman']
  }
]

// Animated numeric counter
const StatCounter = ({ target, suffix = '', label }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1200
    const stepTime = Math.max(Math.floor(duration / target), 20)
    const timer = setInterval(() => {
      start += Math.ceil(target / 40)
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <div ref={ref} className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <div className="flex items-baseline gap-0.5">
        <span
          className="text-[34px] sm:text-[42px] font-semibold tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
        >
          {count}
        </span>
        <span
          className="text-[20px] font-semibold"
          style={{ color: 'var(--accent)' }}
        >
          {suffix}
        </span>
      </div>
      <span className="text-[12px] sm:text-[13px] font-medium leading-tight max-w-[170px]" style={{ color: 'var(--muted)' }}>
        {label}
      </span>
    </div>
  )
}

const About = () => {
  return (
    <section
      id="about"
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
            01 / ABOUT
          </span>
          <div className="h-px w-12" style={{ background: 'var(--border)' }} />
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-[34px] sm:text-[46px] lg:text-[54px] font-semibold leading-[1.12] mb-14 max-w-[800px]"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
        >
          Building AI that{' '}
          <span className="relative inline-block">
            works in the real world
            <span
              className="absolute left-0 bottom-1 w-full h-[2px] rounded-full"
              style={{ background: 'var(--accent)' }}
            />
          </span>
          .
        </motion.h2>

        {/* Two-column layout: Left = Refined info card, Right = Story copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* LEFT: Clean Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="lg:col-span-5 p-7 sm:p-8 rounded-2xl"
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              boxShadow: '0 8px 24px -6px rgba(0,0,0,0.04)',
            }}
          >
            <div className="flex items-center justify-between pb-5 mb-5" style={{ borderBottom: '1px solid var(--border)' }}>
              <span className="text-[12px] uppercase tracking-wider font-semibold" style={{ color: 'var(--accent)' }}>
                Profile Overview
              </span>
              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
            </div>

            <dl className="flex flex-col gap-4 m-0 p-0">
              {infoDetails.map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 pb-3.5" style={{ borderBottom: '1px solid var(--border)' }}>
                  <dt className="text-[13px] font-medium" style={{ color: 'var(--muted)' }}>
                    {item.label}
                  </dt>
                  <dd className="text-[14px] font-medium sm:text-right m-0" style={{ color: 'var(--heading)' }}>
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* RIGHT: Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="lg:col-span-7 flex flex-col gap-5 text-[16px] sm:text-[17px] leading-[1.8]"
            style={{ color: 'var(--text)' }}
          >
            <p>
              I'm a final-year BSc Computing undergraduate at the National Institute of Business Management (NIBM), Colombo 07, graduating in 2027.
            </p>
            <p>
              I specialize in architecting agentic LLM pipelines, high-precision RAG systems, and production-ready Python backends using FastAPI and LangChain.
            </p>
            <p>
              My work centers on multi-agent orchestration, vector and graph databases (Qdrant, Neo4j), and Docker containerization to turn complex AI logic into stable, verifiable, and reliable software.
            </p>
            <p>
              Currently interning as an AI Application Engineer at the Department of Examinations (Sri Lanka) and Sri Lanka Telecom.
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 sm:p-8 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-20"
          style={{
            background: 'var(--bg)',
            border: '1px solid var(--border)',
          }}
        >
          <StatCounter target={2} label="Engineering internships" />
          <StatCounter target={4} label="Workflow multi-agent pipeline" />
          <StatCounter target={88} suffix="%" label="Waste-classification ML accuracy" />
        </motion.div>

        {/* Tech Stack Groups (Strictly from CV) */}
        <div className="pt-4">
          <div className="flex items-center gap-4 mb-8">
            <h3
              className="text-[24px] sm:text-[28px] font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
            >
              Technical Core &amp; Tooling
            </h3>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {techCategories.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="p-5 rounded-xl flex flex-col gap-3.5 group hover:border-[var(--accent)] transition-all duration-300"
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-[12px] font-sans font-semibold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                    {group.category}
                  </h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-md text-[13px] font-medium transition-colors duration-200"
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--heading)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent)'
                        e.currentTarget.style.color = 'var(--accent)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)'
                        e.currentTarget.style.color = 'var(--heading)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Toaster, toast } from 'react-hot-toast'

const InputField = ({ label, id, type = 'text', name, placeholder, required, as: Tag = 'input', rows }) => {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const [error, setError] = useState('')

  const validate = (val) => {
    if (required && !val.trim()) return 'This field is required.'
    if (type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Please enter a valid email.'
    return ''
  }

  const handleBlur = (e) => {
    setFocused(false)
    setError(validate(e.target.value))
  }

  const props = {
    id,
    name,
    placeholder,
    required,
    onChange: (e) => setHasValue(e.target.value.length > 0),
    onFocus: () => setFocused(true),
    onBlur: handleBlur,
    className: 'w-full px-4 py-3 rounded-xl text-[15px] outline-none transition-all duration-200 resize-none',
    style: {
      background: 'var(--surface)',
      border: `1px solid ${error ? '#C0392B' : focused ? 'var(--accent)' : 'var(--border)'}`,
      color: 'var(--heading)',
      boxShadow: focused && !error ? '0 0 0 3px rgba(176,141,87,0.15)' : 'none',
    },
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-semibold" style={{ color: 'var(--heading)' }}>
        {label}
        {required && <span style={{ color: 'var(--accent)' }}> *</span>}
      </label>
      {Tag === 'textarea'
        ? <Tag {...props} rows={rows || 5} />
        : <Tag {...props} type={type} />
      }
      {error && (
        <span className="text-[12px] font-medium" style={{ color: '#C0392B' }}>{error}</span>
      )}
    </div>
  )
}

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.target)
    formData.append('access_key', 'fdf18401-ce7d-4be5-9a8f-9a0b3e87a956')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        toast.success('Message sent — I\'ll be in touch soon.', {
          style: {
            background: 'var(--surface)',
            color: 'var(--heading)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            fontSize: '14px',
          },
        })
        setSubmitted(true)
        event.target.reset()
      } else {
        toast.error('Something went wrong. Please try again.', {
          style: {
            background: 'var(--surface)',
            color: 'var(--heading)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            fontSize: '14px',
          },
        })
      }
    } catch (err) {
      toast.error('Network error. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
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
          <span className="text-[11px] tracking-[0.2em] uppercase font-semibold" style={{ color: 'var(--accent)' }}>
            05 / CONTACT
          </span>
          <div className="h-px w-12" style={{ background: 'var(--border)' }} />
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-[34px] sm:text-[46px] lg:text-[54px] font-semibold leading-[1.12] mb-14"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--heading)' }}
        >
          Let's build something{' '}
          <span className="relative inline-block">
            together
            <span className="absolute left-0 bottom-1 w-full h-[2px] rounded-full" style={{ background: 'var(--accent)' }} />
          </span>
          .
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT: Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <p className="text-[16px] sm:text-[17px] leading-[1.75]" style={{ color: 'var(--text)' }}>
              Have a project idea, want to collaborate, or just want to say hello? I'm always open to exploring new opportunities in AI engineering and agentic systems.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'dilmindineth988@gmail.com',
                  href: 'mailto:dilmindineth988@gmail.com',
                },
                {
                  icon: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/>
                    </svg>
                  ),
                  label: 'Phone',
                  value: '+94 760586018',
                  href: 'tel:+94760586018',
                },
                {
                  icon: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: 'Location',
                  value: 'Sri Lanka',
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'var(--muted)' }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[15px] font-medium hover:text-[var(--accent)] transition-colors duration-200"
                        style={{ color: 'var(--heading)' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[15px] font-medium" style={{ color: 'var(--heading)' }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
              <a
                href="https://www.linkedin.com/in/dinethwickramasinghe"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full transition-all hover:-translate-y-px"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Dineth988"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full transition-all hover:-translate-y-px"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-5 py-16 px-8 rounded-2xl text-center"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--surface)', border: '2px solid var(--accent)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold mb-2" style={{ color: 'var(--heading)', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    Message received.
                  </h3>
                  <p className="text-[14px]" style={{ color: 'var(--text)' }}>
                    Thank you for reaching out — I'll respond as soon as I can.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[13px] font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-5 p-7 sm:p-8 rounded-2xl"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                noValidate
              >
                <InputField label="Name" id="name" name="name" placeholder="Your full name" required />
                <InputField label="Email" id="email" type="email" name="email" placeholder="your@email.com" required />
                <InputField label="Message" id="message" name="message" as="textarea" rows={5} placeholder="Tell me about your project or idea..." required />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full py-3.5 text-[14px] font-medium mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>

      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
    </section>
  )
}

export default Contact
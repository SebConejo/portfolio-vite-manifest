import Manifest from '@mnfst/sdk'
import { Mail, MapPin, Phone } from 'lucide-react'
import React, { useState } from 'react'
import { FadeIn } from '../animations/FadeIn'

export function Contact() {
  const [alertVisible, setAlertVisible] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState<'success' | 'error'>('success')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const manifest = new Manifest('http://localhost:1111')
    const { name, email, message } = formData

    if (!email || !message) {
      setAlertMessage('Please fill in all required fields.')
      setAlertType('error')
      setAlertVisible(true)
      setTimeout(() => setAlertVisible(false), 3000)
      return
    }

    manifest
      .from('contacts')
      .create({ name, email, message })
      .then(() => {
        setAlertMessage(
          'Successfully sent! We will contact you if you are selected.'
        )
        setAlertType('success')
        setAlertVisible(true)
        setTimeout(() => setAlertVisible(false), 3000)
        setFormData({ name: '', email: '', message: '' }) // Reset the form
      })
      .catch((error) => {
        setAlertMessage(
          `Failed to send message: ${
            error.message || 'An unknown error occurred'
          }`
        )
        setAlertType('error')
        setAlertVisible(true)
        setTimeout(() => setAlertVisible(false), 3000)
      })
  }

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Let's Work Together
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-center ">
          <FadeIn direction="right">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail className="w-5 h-5" />}
                  title="Email"
                  content="sarah.anderson@example.com"
                  href="mailto:sarah.anderson@example.com"
                />
                <ContactInfo
                  icon={<Phone className="w-5 h-5" />}
                  title="Phone"
                  content="+1 (555) 123-4567"
                  href="tel:+15551234567"
                />
                <ContactInfo
                  icon={<MapPin className="w-5 h-5" />}
                  title="Location"
                  content="San Francisco, CA"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="relative">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  Send Message
                </button>
              </form>
              {alertVisible && (
                <div
                  role="alert"
                  className={`mt-4 px-4 py-3 rounded-lg w-full absolute bottom-0 left-0  ${
                    alertType === 'success'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}
                >
                  {alertMessage}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({
  icon,
  title,
  content,
  href,
}: {
  icon: React.ReactNode
  title: string
  content: string
  href?: string
}) {
  const ContentWrapper = href ? 'a' : 'div'
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <ContentWrapper
          href={href}
          className={
            href
              ? 'text-blue-600 hover:text-blue-700 transition-colors'
              : 'text-gray-600'
          }
        >
          {content}
        </ContentWrapper>
      </div>
    </div>
  )
}

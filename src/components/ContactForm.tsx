'use client'

import { useRef, useState } from 'react'
import Button from './Button'
import MovingDiv from './MovingDiv'

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState<'success' | 'fail' | undefined>(undefined)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [isFormDisabled, setIsFormDisabled] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log('>>>> Sending from ContactForm')
    const data: FormData = {
      name,
      email,
      message,
    }
    // console.log('>>> data', data)

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) setSuccess('success')
        else if (response.error) setSuccess('fail')
        else setSuccess(undefined)
      })
      .finally(() => {
        setName('')
        setEmail('')
        setMessage('')
      })

    if (nameRef.current) nameRef.current.value = ''

    if (emailRef.current) emailRef.current.value = ''

    if (textareaRef.current) textareaRef.current.value = ''

    setIsFormDisabled(true)
  }

  const handleInputChange = () => {
    if (nameRef.current && emailRef.current && textareaRef.current) setIsFormDisabled(!nameRef.current.value || !emailRef.current.value || !textareaRef.current.value)
  }

  const mdDuration = 1000
  const mdDelay = 700
  const delayOffset = -400

  return (
    <main className='w-full h-screen max-w-xl flex flex-col justify-start items-center px-[8vw] xs:px-10 pt-14 md:pt-24 lg:pt-[max(6rem,9vh)] pb-12 overflow-x-hidden overflow-y-auto'>
      <h1 className='animate-fade-in-075 pb-6 sm:pb-10 uppercase text-zinc-400 font-mono text-[1.35rem] xs:text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10'>contact tom</h1>
      <div className='flex flex-col justify-start items-center w-full'>
        <form onSubmit={handleSubmit} className='w-full flex flex-col justify-start items-center gap-y-8 sm:gap-y-10'>
          <MovingDiv duration={mdDuration} delay={1 * mdDelay + delayOffset} classname='w-full'>
            <label htmlFor='fullName' className='mb-2 block text-sm text-gray-400'>
              Your Full Name:
            </label>
            <input
              ref={nameRef}
              type='text'
              name='fullName'
              placeholder='full name'
              onChange={(e) => {
                setName(e.target.value)
                handleInputChange()
              }}
              className='w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-base text-gray-200 outline-none focus:border-teal-700 focus:shadow-md placeholder:text-gray-500 placeholder:italic placeholder:text-base'
            />
          </MovingDiv>
          <MovingDiv duration={mdDuration} delay={2 * mdDelay + delayOffset} classname='w-full'>
            <label htmlFor='email' className='mb-2 block text-sm text-gray-400'>
              Your Email Address:
            </label>
            <input
              ref={emailRef}
              type='email'
              name='email'
              placeholder='fred@flintstone.xyz'
              onChange={(e) => {
                setEmail(e.target.value)
                handleInputChange()
              }}
              className='w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-base text-gray-200 outline-none focus:border-teal-700 focus:shadow-md placeholder:text-gray-500 placeholder:italic placeholder:text-base'
            />
          </MovingDiv>
          <MovingDiv duration={mdDuration} delay={3 * mdDelay + delayOffset} classname='w-full'>
            <label htmlFor='message' className='mb-2 block text-sm text-gray-400'>
              Your Message:
            </label>
            <textarea
              ref={textareaRef}
              rows={6}
              name='message'
              placeholder='type your message here'
              onChange={(e) => {
                setMessage(e.target.value)
                handleInputChange()
              }}
              className='w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-base text-gray-200 outline-none focus:border-teal-700 focus:shadow-md placeholder:text-gray-500 placeholder:italic placeholder:text-base'
            />
          </MovingDiv>
          <MovingDiv classname='w-full flex justify-center' duration={mdDuration} delay={4 * mdDelay + delayOffset}>
            <Button
              type='submit'
              onClick={handleSubmit}
              disabled={isFormDisabled}
              className='w-full h-10 text-lg font-bold tracking-wide1 disabled:text-zinc-800 disabled:border-zinc-600'
            >
              Submit
            </Button>
          </MovingDiv>
        </form>
        <div className='pt-10 px-4 flex flex-col justify-start items-center gap-y-12'>
          {success === 'success' && <p className='py-0 px-2 text-base text-gray-300 italic'>Thank you for your message! I will get back to you as soon as possible.</p>}
          {success === 'fail' && <p className='py-0 px-2 text-base text-center text-red-550 italic'>Oops! Something went wrong. Please try again later.</p>}
        </div>
      </div>
    </main>
  )
}

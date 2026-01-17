'use client'

import { Turnstile } from '@marsidev/react-turnstile'
import { useRef, useState } from 'react'

import Button from './Button'
import MovingDiv from './MovingDiv'

interface FormData {
  name: string
  email: string
  message: string
  token: string
}

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [missingFields, setMissingFields] = useState<boolean[]>([false, false, false])
  const [success, setSuccess] = useState<'success' | 'fail' | undefined>(undefined)
  const [token, setToken] = useState<string>('')

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const data: FormData = {
      name,
      email,
      message,
      token,
    }
    const missingFields = [!data.name, !data.email, !data.message]
    setMissingFields(missingFields)
    if (missingFields.some((field) => field)) return

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

    if (nameRef.current) nameRef.current.value = ''

    if (emailRef.current) emailRef.current.value = ''

    if (textareaRef.current) textareaRef.current.value = ''
  }

  const mdDuration = 500
  const mdDelay = 200
  const delayOffset = -300

  return (
    <main className='flex h-screen w-full max-w-xl flex-col items-center justify-start overflow-y-auto overflow-x-hidden px-[8vw] pb-12 pt-14 xs:px-10 md:pt-24 lg:pt-[max(6rem,9vh)]'>
      <h1 className='z-10 animate-fade-in-075 pb-6 font-mono text-[1.35rem] uppercase tracking-wide2 text-zinc-400 xs:text-2xl xs:tracking-wide4 sm:pb-10 sm:tracking-wide6'>
        contact tom
      </h1>
      <div className='flex w-full flex-col items-center justify-start'>
        <form onSubmit={handleSubmit} className='flex w-full flex-col items-center justify-start gap-y-6'>
          <MovingDiv duration={mdDuration} delay={1 * mdDelay + delayOffset} classname='w-full'>
            <label htmlFor='fullName' className='mb-2 inline text-sm text-gray-300'>
              Your Full Name:
            </label>
            {missingFields[0] && <span className='ml-2 text-sm italic text-red-600'>*name is required</span>}
            <input
              ref={nameRef}
              type='text'
              name='fullName'
              placeholder='Fred Flintstone'
              onChange={(e) => {
                setName(e.target.value)
              }}
              className='mt-2 w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-base text-gray-200 outline-none placeholder:text-base placeholder:italic placeholder:text-gray-400 focus:border-teal-700 focus:shadow-md'
            />
          </MovingDiv>
          <MovingDiv duration={mdDuration} delay={2 * mdDelay + delayOffset} classname='w-full'>
            <label htmlFor='email' className='inline text-sm text-gray-300'>
              Your Email Address:
            </label>
            {missingFields[1] && <span className='ml-2 text-sm italic text-red-600'>*email address is required</span>}
            <input
              ref={emailRef}
              type='email'
              name='email'
              placeholder='fred@flintstone.xyz'
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='mt-2 w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-base text-gray-200 outline-none placeholder:text-base placeholder:italic placeholder:text-gray-400 focus:border-teal-700 focus:shadow-md'
            />
          </MovingDiv>
          <MovingDiv duration={mdDuration} delay={3 * mdDelay + delayOffset} classname='w-full'>
            <label htmlFor='message' className='mb-2 inline text-sm text-gray-300'>
              Your Message:
            </label>
            {missingFields[2] && <span className='ml-2 text-sm italic text-red-600'>*message is required</span>}
            <textarea
              ref={textareaRef}
              rows={6}
              name='message'
              placeholder='my message to Tom'
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              className='mt-2 w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-base text-gray-200 outline-none placeholder:text-base placeholder:italic placeholder:text-gray-400 focus:border-teal-700 focus:shadow-md'
            />
          </MovingDiv>
          <Turnstile
            // biome-ignore lint/style/noNonNullAssertion: guaranteed non-null because value IS in the .env.local file
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onSuccess={setToken}
          />
          <MovingDiv classname='w-full flex justify-center' duration={mdDuration} delay={4 * mdDelay + delayOffset}>
            <Button
              type='submit'
              onClick={handleSubmit}
              className='h-10 w-full text-lg font-bold tracking-wide1 disabled:border-zinc-600 disabled:text-zinc-800'
            >
              Submit
            </Button>
          </MovingDiv>
        </form>
        <div className='flex flex-col items-center justify-start gap-y-12 px-4 pt-6'>
          {success === 'success' && <p className='p-0 text-base italic text-gray-300'>Thank you for your message!</p>}
          {success === 'fail' && (
            <p className='p-0 text-center text-base italic text-red-550'>
              Oops! Something went wrong. Please try again later.
            </p>
          )}
        </div>
      </div>
    </main>
  )
}

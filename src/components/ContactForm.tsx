'use client'

import { Turnstile } from '@marsidev/react-turnstile'
import { useRef, useState } from 'react'

import Button from './Button'

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
  const [error, setError] = useState<string>('')
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
    const newMissingFields = [!data.name, !data.email, !data.message]
    setMissingFields(newMissingFields)
    if (newMissingFields.some((field) => field)) return

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) setSuccess('success')
        else {
          setError(response.error ?? 'Unknown error.')
          setSuccess('fail')
        }
      })
      .catch(() => {
        setError('Network error. Please try again later.')
        setSuccess('fail')
      })

    if (nameRef.current) nameRef.current.value = ''
    if (emailRef.current) emailRef.current.value = ''
    if (textareaRef.current) textareaRef.current.value = ''

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <main className='flex h-screen w-full max-w-xl animate-fade-in-100 flex-col items-center justify-start overflow-y-auto overflow-x-hidden px-[8vw] pb-12 pt-14 xs:px-10 md:pt-24 lg:pt-[max(6rem,9vh)]'>
      <h1 className='z-10 animate-fade-in-075 pb-6 font-mono text-[1.35rem] uppercase tracking-wide2 text-zinc-400 xs:text-2xl xs:tracking-wide4 sm:pb-10 sm:tracking-wide6'>
        contact tom
      </h1>
      <div className='flex w-full flex-col items-center justify-start'>
        <form onSubmit={handleSubmit} className='flex w-full flex-col items-center justify-start gap-y-6'>
          <div className='w-full'>
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
          </div>
          <div className='w-full'>
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
          </div>
          <div className='w-full'>
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
          </div>

          <div className='flex w-full justify-center pb-2'>
            <Button
              type='submit'
              onClick={handleSubmit}
              className='h-12 w-full text-lg font-bold tracking-wide1 disabled:border-zinc-700 disabled:text-zinc-800'
            >
              Submit
            </Button>
          </div>
          <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} onSuccess={setToken} />
        </form>
        <div className='flex h-24 w-full flex-col justify-center'>
          {success && (
            <div
              className={`w-full rounded-lg border px-4 py-3 text-center text-base italic ${
                success === 'success'
                  ? 'border-green-700 bg-green-950/20 text-green-500'
                  : 'border-red-500 bg-red-950/20 text-red-500'
              }`}
            >
              {success === 'success' ? (
                <p className='p-0'>Thank you for your message!</p>
              ) : (
                <p className='p-0'>Oops! Something went wrong. {error}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

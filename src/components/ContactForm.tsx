'use client'

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useState } from 'react'

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState<'success' | 'fail' | undefined>(undefined)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('>>>> Sending from ContactForm')
    let data: FormData = {
      name,
      email,
      message
    }
    console.log('>>> data', data)

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('>>>> response.message', response.message)
        console.log('>>>> response.error', response.error)
        if (response.message) {
          setSuccess('success')
        } else if (response.error) {
          setSuccess('fail')
        } else {
          setSuccess(undefined)
        }
      })
      .finally(() => {
        setName('')
        setEmail('')
        setMessage('')
      })
  }

  return (
    <div className="flex flex-col justify-start items-center">

      {/* <form action={create} className="flex flex-col gap-y-16 mb-32">
          <input type="text" name="subject" />
          <button type="submit" className="bg-green-800 text-zinc-300 text-xl rounded-2xl py-2">Submit</button>
        </form> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <div className="w-[320px] md:w-[600px]">
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-start gap-y-8">
          <div className=''>
            <label
              htmlFor='fullName'
              className='mb-3 block text-md text-gray-300'
            >
              Your Full Name:
            </label>
            <input
              type='text'
              name="fullName"
              placeholder='full name'
              onChange={(e) => { setName(e.target.value) }}
              className='w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-md text-gray-200 outline-none focus:border-pink-800 focus:shadow-md placeholder:text-gray-500 placeholder:italic placeholder:text-base'

            />
          </div>
          <div className=''>
            <label
              htmlFor='email'
              className='mb-3 block text-md text-gray-300'
            >
              Your Email Address:
            </label>
            <input
              type='email'
              name="email"
              placeholder='fredwilma@example.com'
              onChange={(e) => { setEmail(e.target.value) }}
              className='w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-md text-gray-200 outline-none focus:border-pink-800 focus:shadow-md placeholder:text-gray-500 placeholder:italic placeholder:text-base'
            />
          </div>
          <div className=''>
            <label
              htmlFor='message'
              className='mb-3 block text-md text-gray-300'
            >
              Your Message:
            </label>
            <textarea
              rows={5}
              name="message"
              placeholder='type your message'
              onChange={(e) => { setMessage(e.target.value) }}
              className='w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-md text-gray-200 outline-none focus:border-pink-800 focus:shadow-md placeholder:text-gray-500 placeholder:italic placeholder:text-base'
            ></textarea>
          </div>
          <div>
            <button type="submit" onClick={(e) => { handleSubmit(e) }} className='w-full rounded-xl bg-violet-900 hover:bg-violet-800  border-2 border-violet-700 active:border-violet-400 py-2 text-xl font-bold hover:text-white text-gray-100 tracking-wide1 outline-none'>
              Submit
            </button>
          </div>

        </form>
        <div className="pt-10 flex flex-col justify-start items-center gap-y-12">
          {(success === 'success') && <p className='p-0 text-xl text-gray-300 italic'>Thank you for your message. I will get back to you as soon as possible.</p>}
          {(success === 'fail') && <p className='p-0 text-xl text-center text-red-550 italic'>Something went amiss. Please try again later.</p>}
          {(success) && <Link href="/" className="text-xl p-0 text-center text-zinc-300 hover:text-white rounded-2xl py-1 bg-gray-900 hover:bg-gray-800 border-2 border-gray-700 active:border-gray-500 w-full">Return Home <Icon icon="mdi:arrow-right-thin" height={50} className="inline mt-0 ml-1 text-zinc-300 hover:text-white" /></Link>}
        </div>
      </div>
    </div>

  );
}

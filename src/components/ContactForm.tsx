'use client'

import { FormData } from '@/utils/contactHelpers';
import { useState } from 'react'

export default function ContactForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  // const [submitted, setSubmitted] = useState(false)

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
      })
      .catch((err) => {
        console.log('>>>> Error:', err)
      })
      .finally(() => {
        // setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      })
  }

  return (
    <div className="flex flex-col justify-center items-center py-48">
      <h1 className="pb-32 uppercase text-zinc-400 font-mono text-2xl tracking-widexl z-30">contact tom stine</h1 >
      {/* <form action={create} className="flex flex-col gap-y-16 mb-32">
          <input type="text" name="subject" />
          <button type="submit" className="bg-green-800 text-zinc-300 text-xl rounded-2xl py-2">Submit</button>
        </form> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form onSubmit={handleSubmit} className="w-72 md:w-[500px] flex flex-col justify-start align-middle gap-y-12">
        <div className=''>
          <label
            htmlFor='fullName'
            className='mb-3 block text-lg text-gray-300'
          >
            Your Full Name:
          </label>
          <input
            type='text'
            name="fullName"
            placeholder='full name'
            onChange={(e) => { setName(e.target.value) }}
            className='w-full rounded-md border border-gray-600 bg-gray-900 py-3 px-6 text-lg text-gray-300 outline-none focus:border-green-700 focus:shadow-md'

          />
        </div>
        <div className=''>
          <label
            htmlFor='email'
            className='mb-3 block text-lg text-gray-300'
          >
            Your Email Address:
          </label>
          <input
            type='email'
            name="email"
            placeholder='fredwilma@example.com'
            onChange={(e) => { setEmail(e.target.value) }}
            className='w-full rounded-md border border-gray-600 bg-gray-900 py-3 px-6 text-lg text-gray-300 outline-none focus:border-green-700 focus:shadow-md'
          />
        </div>
        <div className=''>
          <label
            htmlFor='message'
            className='mb-3 block text-lg text-gray-300'
          >
            Your Message:
          </label>
          <textarea
            rows={5}
            name="message"
            placeholder='type your message'
            onChange={(e) => { setMessage(e.target.value) }}
            className='w-full rounded-md border border-gray-600 bg-gray-900 py-3 px-6 text-lg text-gray-300 outline-none focus:border-green-700 focus:shadow-md'
          ></textarea>
        </div>
        <div>
          <button type="submit" onClick={(e) => { handleSubmit(e) }} className='w-full rounded-xl bg-green-800 hover:bg-green-700 py-4 text-2xl text-white font-bold hover:text-gray-200 tracking-wide outline-none'>
            Submit
          </button>
        </div>
      </form>
    </div>

  );
}
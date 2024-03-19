'use client'

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useState, useRef } from 'react'
import { motion } from "framer-motion"

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
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isFormDisabled, setIsFormDisabled] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log('>>>> Sending from ContactForm')
    let data: FormData = {
      name,
      email,
      message
    }
    // console.log('>>> data', data)

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('>>>> response', response, '>>>> **************\n\n')
        // console.log('>>>> response.message', response.message)
        // console.log('>>>> response.error', response.error)
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

    if (nameRef.current) {
      nameRef.current.value = ''
    }
    if (emailRef.current) {
      emailRef.current.value = ''
    }
    if (textareaRef.current) {
      textareaRef.current.value = ''
    }
    // if (buttonRef.current) {
    //   buttonRef.current.style.opacity = '0.5';
    // }
    setIsFormDisabled(true)
  }

  const handleInputChange = () => {
    if (nameRef.current && emailRef.current && textareaRef.current) {
      setIsFormDisabled(!nameRef.current.value || !emailRef.current.value || !textareaRef.current.value);
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full max-w-2xl flex flex-col justify-start items-center px-8 xs:px-12 p-main-s md:p-main-l pb-8 overflow-x-hidden overflow-y-auto">
      <h1 className="pb-6 sm:pb-12 md:pb-14 uppercase text-zinc-400 font-mono text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10">contact tom</h1 >
      <div className="flex flex-col justify-start items-center w-full">

        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-start items-center gap-y-6 sm:gap-y-8">
          <div className='w-full'>
            <label
              htmlFor='fullName'
              className='mb-3 block text-base text-gray-300'
            >
              Your Full Name:
            </label>
            <input
              ref={nameRef}
              type='text'
              name="fullName"
              placeholder='full name'
              onChange={(e) => {
                setName(e.target.value)
                handleInputChange()
              }}
              className='w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-base text-gray-200 outline-none focus:border-pink-900 focus:shadow-md placeholder:text-gray-500 placeholder:italic placeholder:text-base'

            />
          </div>
          <div className='w-full'>
            <label
              htmlFor='email'
              className='mb-3 block text-base text-gray-300'
            >
              Your Email Address:
            </label>
            <input
              ref={emailRef}
              type='email'
              name="email"
              placeholder='fredwilma@example.com'
              onChange={(e) => {
                setEmail(e.target.value)
                handleInputChange()
              }}
              className='w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-base text-gray-200 outline-none focus:border-pink-900 focus:shadow-md placeholder:text-gray-500 placeholder:italic placeholder:text-base'
            />
          </div>
          <div className='w-full'>
            <label
              htmlFor='message'
              className='mb-3 block text-base text-gray-300'
            >
              Your Message:
            </label>
            <textarea
              ref={textareaRef}
              rows={6}
              name="message"
              placeholder='type your message'
              onChange={(e) => {
                setMessage(e.target.value)
                handleInputChange()
              }}
              className='w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-base text-gray-200 outline-none focus:border-pink-900 focus:shadow-md placeholder:text-gray-500 placeholder:italic placeholder:text-base'
            ></textarea>
          </div>
          <div className='w-full flex justify-center'>
            <button
              ref={buttonRef}
              type="submit"
              onClick={(e) => { handleSubmit(e) }}
              disabled={isFormDisabled}
              className='w-full rounded-xl bg-violet-900 hover:bg-violet-800 active:bg-violet-900 border border-violet-700 ring-1 ring-violet-800 active:ring-offset-2 active:ring-offset-violet-700 py-1 text-lg font-bold text-zinc-200 tracking-wide1 outline-none disabled:bg-gray-900/70 disabled:text-gray-600 disabled:border-gray-900/60 disabled:ring-transparent'>
              Submit
            </button>
          </div>

        </form>
        <div className="pt-10 px-4 flex flex-col justify-start items-center gap-y-12">
          {(success === 'success') && <p className='py-0 px-2 text-base text-gray-300 italic'>Thank you for your message! I will get back to you as soon as possible.</p>}
          {(success === 'fail') && <p className='py-0 px-2 text-base text-center text-red-550 italic'>Oops! Something went wrong. Please try again later.</p>}
          {/* {(success) && <Link href="/" className="text-lg text-center text-zinc-300 hover:text-white rounded-2xl py-[2px] bg-gray-900 hover:bg-gray-800 border-2 border-gray-700 active:border-gray-500 w-60 opacity-100">Return Home <Icon icon="mdi:arrow-right-thin" height={40} className="inline mt-0 ml-1 text-zinc-300 hover:text-white" /></Link>} */}
        </div>

      </div>
    </motion.main>
  );
}

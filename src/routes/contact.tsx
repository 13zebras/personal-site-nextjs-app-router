import { createFileRoute } from '@tanstack/react-router'

import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className='flex w-full max-w-7xl flex-col items-center justify-center bg-zinc-950'>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  )
}

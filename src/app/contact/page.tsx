// contact page
import '@/styles/contact.css'

import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function ContactPage() {
  return (
    <div className='flex w-full max-w-7xl flex-col items-center justify-center bg-zinc-950'>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  )
}

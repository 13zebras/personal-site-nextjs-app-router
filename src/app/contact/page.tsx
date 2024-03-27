import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function ContactPage() {
  return (
    <div className="bg-zinc-950 w-full max-w-7xl flex flex-col justify-center items-center">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  )
}

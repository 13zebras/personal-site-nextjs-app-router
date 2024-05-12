import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const keyframeCss = `
    @keyframes movingDiv {
        0% {
            opacity: 0;
            transform: translateY(300px);
            scale: 0.9;
        }
        90% {
            opacity: 1;
            scale: 1;
        }
        100% {
            opacity: 1;
            transform: translateY(0);
            scale: 1;
        }
    }
  `

export default function ContactPage() {
  return (
    <div className="bg-zinc-950 w-full max-w-7xl flex flex-col justify-center items-center">
      <style>{keyframeCss}</style>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  )
}

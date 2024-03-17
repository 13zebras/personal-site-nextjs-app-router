import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact() {
  return (
    <div className="w-full max-w-7xl flex flex-col justify-center items-center" >
      <div className="w-full flex justify-center">
        <Header />
      </div>
      <main className="flex flex-col justify-start items-center px-0 gap-x-12 pt-28 pb-16">
        <h1 className="pb-16 uppercase text-zinc-400 font-mono text-2xl tracking-wide6 z-30">contact tom</h1 >
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact() {
  return (
    <div className="AllMaxWidth flex flex-col justify-center items-center" >
      <div className="w-full flex justify-center pb-20 bg-zinc-950 z-50">
        <Header />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
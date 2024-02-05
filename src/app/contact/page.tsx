import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact() {
  return (
    <div className="AllMaxWidth flex flex-col justify-center items-center" >
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}
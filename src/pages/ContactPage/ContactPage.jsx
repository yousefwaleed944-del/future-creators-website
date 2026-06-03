import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}

export default ContactPage;
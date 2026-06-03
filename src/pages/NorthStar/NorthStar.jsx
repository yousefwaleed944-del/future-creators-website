import Navbar from "../../components/Navbar/Navbar";
import TechStack from "../../components/TechStack/TechStack";
import Footer from "../../components/Footer/Footer";

function NorthStar() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Navbar />
      <TechStack />
      <Footer />
    </main>
  );
}

export default NorthStar;
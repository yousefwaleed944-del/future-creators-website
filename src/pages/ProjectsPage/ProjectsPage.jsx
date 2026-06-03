import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
}

export default ProjectsPage;

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div>
    <Navbar />
    <div className="mt-24 mb-44 ">
        <Hero />
    </div>
    <div className="md:mt-64 mb-44">
        <TechStack />
    </div>
    <div>
        <About />
    </div>
    <Projects />
    <Contact />
    <div className="mt-44">

    <Footer />
    </div>
    </div>
  );
}

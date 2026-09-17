import About from "./components/About";
import Banners from "./components/Banners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
    
      <Hero />
      <Banners />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
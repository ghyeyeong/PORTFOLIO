import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"
import Skills from "./components/Skills"
import ProjectSection from "./components/ProjectSection";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <ProjectSection />
        <ProjectModal />
      </main>

      <Footer />
    </>
  )
}

export default App

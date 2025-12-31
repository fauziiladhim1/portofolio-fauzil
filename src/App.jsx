import Navbar from "./components/Navbar";
import About from "./sections/About";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";
import React from "react";

export default function App() {
  const [introDone, setIntroDone] = React.useState(false);
  return(
<>
  {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
  {introDone && (
        <div className="relative gradient text-white">
          <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
</>
  )
}
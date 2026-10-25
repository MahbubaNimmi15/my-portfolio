
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectDetails";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center gap-5">
              <h1 className="text-3xl font-bold">
                404 - Page Not Found
              </h1>
              <a href="/" className="text-cyan-400">
                Back to Home
              </a>
            </div>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

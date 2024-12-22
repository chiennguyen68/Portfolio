import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import WorkExperience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;

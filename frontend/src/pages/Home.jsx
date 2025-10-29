import Hero from "../components/Home/Hero";
import Skills from "../components/Home/Skills";
import Contact from "../components/Home/Contact";
import Projects from "../components/Home/Projects";

function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
export default Home;

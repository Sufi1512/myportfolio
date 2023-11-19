import Layout from "./components/layout/layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/WorkExp/WorkExp";


function App() {
  return (
    <>
      <Layout />
     
      <About />
      <Education />
      <TechStack />
      <Projects />
      <WorkExp />
      <Contact />
    </>
  );
}

export default App;

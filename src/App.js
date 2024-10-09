import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import Banner from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Education/>
      <Skills />
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

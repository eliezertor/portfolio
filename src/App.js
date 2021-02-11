import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Projects from './components/projects'

import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";
import NavbarComponent from "./components/navbar";

function App() {

  return (
    <div>
      <NavbarComponent/>
      <div>  
        <div id = "about">
          <About/>
        </div>
        <div id = "projects">
          <Projects/>
        </div>
        <div id = "experience">
          <Experience/>
        </div>
        <div id = "contact">
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;

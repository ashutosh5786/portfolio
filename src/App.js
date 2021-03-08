// Importing the AppBar
import MyAppBar from "./components/navigation";
// Importing the Introduction
import Intro from "./components/intro";
// importing the about page
import About from "./components/about";
// importing the skills page
import Skills from "./components/skills";
// Importing the project page
import Project from "./components/project";
// Importing the Contact page
import Contact from "./components/contact";

// Importing the Styles
import "./style/navigation.css";
import "./style/intro.css";
import "./style/about.css";
import "./style/skills.css";
import "./style/project.css";

function App() {
  return (
    <div className="App">
      <MyAppBar />
      <Intro />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;

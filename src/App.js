// Importing the AppBar 
import MyAppBar from './components/navigation'
// Importing the Introduction
import Intro from './components/intro'
// importing the about page
import About from './components/about'
// importing the skills page
import Skills from './components/skills'
// Importing the project page
import Project from './components/project'


// Importing the Styles
import "./style/navigation.css"
import "./style/intro.css"

function App() {
  return (
    <div className="App">
     <MyAppBar/>
     <Intro/>
     <About/>
     <Skills/>
     <Project/>
    </div>
  );
}

export default App;

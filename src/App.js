// Importing the AppBar 
import MyAppBar from './components/navigation'
// Importing the Introduction
import Intro from './components/intro'
// importing the about page
import About from './components/about'



// Importing the Styles
import "./style/navigation.css"
import "./style/intro.css"

function App() {
  return (
    <div className="App">
     <MyAppBar/>
     <Intro/>
     <About/>
    </div>
  );
}

export default App;

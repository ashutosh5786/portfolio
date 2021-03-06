// Importing the AppBar 
import MyAppBar from './components/navigation'
// Importing the Introduction
import Intro from './components/intro'
// import 



// Importing the Styles
import "./style/navigation.css"
import "./style/intro.css"

function App() {
  return (
    <div className="App">
     <MyAppBar/>
     <Intro/>
    </div>
  );
}

export default App;

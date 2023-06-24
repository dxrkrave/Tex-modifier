import { useState } from 'react';
import './App.css';
import About from './components/About';
import { Navbar } from './components/Navbar'
import TextForm from './components/TextForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {

  const [isDarkMode, setIsDarkMode] = useState(null)

  const toggleMode = (data) => {
    setIsDarkMode(data);
  };
  return (
    <>
      <div data-bs-theme={`${isDarkMode ? "dark" : ""}`}>
        {/* <Navbar/> */}
        {/* <About/> */}
        <Router>
          <Navbar title="Text Editor" style={{ backgroundColor: 'black' }} id={toggleMode} />
          <div className="container my-3"  >
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <TextForm heading="Enter The Text Here" />
              </Route>
            </Switch>
            <About />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

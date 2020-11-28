import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideMenu from './SideMenu';
import About from './About';
import Projects from './Projects'
import Home from './Home';


const App = () => {
  return (
    <div  style={{ position: 'relative' }}>
      <SideMenu />

     <div>
       <Router>
         <Switch>
            <Route  exact path="/about" >
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
         </Switch>
       </Router>



      </div>
    </div>
  )
}


export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideMenu from './SideMenu';
import About from './About';
import Background from './Background'
import Home from './Home';


const App = () => {
  return (
    <div  style={{ display: 'inline'}}>
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
         </Switch>
       </Router>



      </div>
    </div>
  )
}


export default App;
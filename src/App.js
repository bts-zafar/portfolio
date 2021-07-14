import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import About from '../src/components/About'
import Resume from '../src/components/Resume'
import Projects from '../src/components/Projects'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container app_container"> 
        <div className="row app_row">
           <div className="col-lg-3">
            <div className="app_sidebar">
             <Sidebar />
            </div>
           </div>
           <div className="col-lg-9 app_main">
             {/* navbar */}
             <Navbar />
             <AnimatePresence exitBeforeEnter>
             <Switch>
             <Route exact path='/'>
                 <About />
             </Route>
             <Route path='/resume'>
               <Resume /> 
             </Route>
             <Route path='/projects'>
               <Projects />
             </Route>
             <Route>
               <Redirect to='/' />
             </Route>
             </Switch>
             </AnimatePresence>
           </div>
    </div> 
      </div>
        </div>
        </Router>
  );
}

export default App;

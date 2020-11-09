import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/landing';
import Home from './components/home';
import Services from './components/services';
import Projects from './components/projects';
import ContactUs from './components/contactus';
import AboutUs from './components/aboutus';

function App() {
  return (
    <div className="App">
<Router>
<Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/home' exact component={Home}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/projects' exact component={Projects}/>
        <Route path='/contactus' exact component={ContactUs}/>
        <Route path='/aboutus' exact component={AboutUs}/>

        </Switch>

</Router>
    </div>
  );
}

export default App;

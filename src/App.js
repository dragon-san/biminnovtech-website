import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
<Router>
<Switch>
        <Route path='/' exact component={Landing} />
        </Switch>

</Router>
    </div>
  );
}

export default App;

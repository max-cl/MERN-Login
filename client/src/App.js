import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MenuPage from './components/MenuPage';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';

class App extends Component {

  render() {
    return (
       <Router>
        <div>
          
        <MenuPage />
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />    
            <Route component={NotFound}/>    
          </Switch>       

        </div>
      </Router>
    );
  }
}

export default App;

import React ,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavigationBar } from './component/Navigation.js';
import Audit from './component/Audit';


class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Router> 
        <NavigationBar /> 
        <Switch>
        <Route exact path="/" component={Audit} />
        </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

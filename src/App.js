import React from 'react';
import {Route} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from "./components/";
import Resume from "./components/Resume";
import portfolio from "./components/portfolio";
import contacts from "./components/contacts";

function App() {
  return (
    <>
    <CssBaseline/>
       <Route exact path="/" component={Home}/>
       <Route path="/resume" component={Resume}/>
       <Route path="/portfolio" component={portfolio}/>
       <Route path ="/contacts" component={contacts} />
    </>
  );
}

export default App;

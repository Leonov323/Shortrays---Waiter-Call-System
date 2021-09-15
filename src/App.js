import React from "react";
import { GlobalStyles } from './global';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Header, Primary, Contacts, Service, SignIn } from './components'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/contact-us">
          <Contacts />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/home">
          <Primary />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

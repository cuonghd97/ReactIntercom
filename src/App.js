import React, { Component } from "react"
import "./css/style.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import Billing from './components/Billing'
import Account from "./components/Account";
import Security from "./components/Security"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/checkout/billing/' component={Billing}/>
          <Route exact path='/checkout/account/' component={Account}/>
          <Route exact path='/checkout/security/' component={Security}/>
        </div>
      </Router>
    )
  }
}

export default App

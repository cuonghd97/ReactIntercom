import React, { Component } from "react"
import "./css/style.css"
import { BrowserRouter as Router } from "react-router-dom"
import RouterURL from "./routeURL/RouterURL";
import Mobilemenu from './components/Mobilemenu'
import Header from './components/Header'
import Leftmenu from './components/Leftmenu'
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowFormSSH: false
    }
  }

  changeShowFormSSH = ()=>{
    this.setState({
      isShowFormSSH: !this.state.isShowFormSSH
    })
  }

  getNewSSHKey = (data)=>{
    console.log(data)
  }

  render() {
    return (
      <Router>
        <div>
          <Mobilemenu></Mobilemenu>
          <Header></Header>
          <div id="content" style={{position: 'relative'}}>
            <Leftmenu></Leftmenu>
            <div id="content-itself">
              <div className="container-fluid">
                <RouterURL
                  changeShowFormSSH={()=>this.changeShowFormSSH()}
                  isShowFormSSH={this.state.isShowFormSSH}
                  getNewSSHKey={(data)=>this.getNewSSHKey(data)}
                />
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    )
  }
}

export default App

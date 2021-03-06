import React, { Component } from "react";
import "./css/style.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouterURL from "./routeURL/RouterURL";
import Mobilemenu from "./components/Mobilemenu";
import Header from "./components/Header";
import Leftmenu from "./components/Leftmenu";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowFormSSH: false,
      userData: {
        firstname: "Hoang",
        lastname: "cuong",
        email: "duccuongdc97@gmail.com",
        address1: "address1",
        address2: "address2",
        phonenumber: "0343944610",
        companyname: "Meditech JSC",
        registeraddress: "registeraddress",
        director: "director",
        taxno: "01234",
        country: "VN",
        region: "abc",
        state: "state",
        city: "HN",
        timezone: "Etc/GMT+12|-12:00",
        postcode: "01234"
      },
      dataDiskData: {}
    };
  }

  changeShowFormSSH = () => {
    this.setState({
      isShowFormSSH: !this.state.isShowFormSSH
    });
  };

  getNewSSHKey = data => {
    console.log(data);
  };

  selfInfo = data => {
    console.log(data);
  };

  addUser = data => {
    console.log(data);
  };

  changePass = data => {
    console.log(data);
  };

  getNotification = data => {
    console.log(data);
  };

  getDataDiskData = data => {
    this.setState({
      dataDiskData: data
    });
  };

  componentDidUpdate() {
    console.log(this.state.dataDiskData);
  }

  render() {
    return (
      <Router>
        <div>
          <Mobilemenu />
          <Header />
          <div id="content" style={{ position: "relative" }}>
            <Leftmenu />
            <div id="content-itself">
              <div className="container-fluid">
                <RouterURL
                  changeShowFormSSH={() => this.changeShowFormSSH()}
                  isShowFormSSH={this.state.isShowFormSSH}
                  getNewSSHKey={data => this.getNewSSHKey(data)}
                  selfInfo={data => this.selfInfo(data)}
                  userData={this.state.userData}
                  addUser={data => this.addUser(data)}
                  changePass={data => this.changePass(data)}
                  getNotification={data => this.getNotification(data)}
                  getDataDiskData={data => this.getDataDiskData(data)}
                />
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

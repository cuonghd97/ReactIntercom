import React, { Component } from "react";
import Home from "../components/Home";
import Billing from "../components/Billing";
import Account from "../components/Account";
import Security from "../components/Security";
import { Route } from "react-router-dom";
import Setup from "../components/Setup";

export default class RouterURL extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/home/" render={() => <Home />} />
        <Route exact path="/checkout/billing/" component={Billing} />
        <Route
          exact
          path="/checkout/account/"
          render={() => (
            <Account
              selfInfo={data => this.props.selfInfo(data)}
              userData={this.props.userData}
              addUser={data => this.props.addUser(data)}
              changePass={data => this.props.changePass(data)}
              getNotification={data => this.props.getNotification(data)}
            />
          )}
        />
        <Route exact path="/setup/" render={() => <Setup />} />
        <Route
          exact
          path="/checkout/security/"
          render={() => (
            <Security
              isShowFormSSH={this.props.isShowFormSSH}
              changeShowFormSSH={() => this.props.changeShowFormSSH()}
              getNewSSHKey={data => this.props.getNewSSHKey(data)}
            />
          )}
        />
      </div>
    );
  }
}

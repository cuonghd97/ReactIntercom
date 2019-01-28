import React, { Component } from "react";
import { Nav, Tab } from 'bootstrap-4-react'
import OSS from "./os/OSS";
import Backups from "./os/Backups";
import Snapshots from "./os/Snapshots";
import OCA from "./os/OCA";

class OS extends Component {
  render() {
    return (
      <div>
        <Nav tabs role="tablist">
          <Nav.ItemLink
            active
            href="#os"
            id="os-tab"
            data-toggle="tab"
            aria-selected="true"
          >
            Hệ điều hành
          </Nav.ItemLink>
          <Nav.ItemLink
            href="#backups"
            id="backups-tab"
            data-toggle="tab"
            aria-selected="false"
          >
            Backups của tôi
          </Nav.ItemLink>
          <Nav.ItemLink
            href="#snapshot"
            id="snapshot-tab"
            data-toggle="tab"
            aria-selected="false"
          >
            Snapshots của tôi
          </Nav.ItemLink>
          <Nav.ItemLink
            href="#oca"
            id="oca-tab"
            data-toggle="tab"
            aria-selected="false"
          >
            One-Click Apps
          </Nav.ItemLink>
        </Nav>
        <Tab.Content>
          <Tab.Pane id="os" aria-labelledby="os-tab" show active>
            <OSS/>
          </Tab.Pane>
          <Tab.Pane id="backups" aria-labelledby="backups-tab">
            <Backups/>
          </Tab.Pane>
          <Tab.Pane id="snapshot" aria-labelledby="snapshot-tab">
            <Snapshots/>
          </Tab.Pane>
          <Tab.Pane id="oca" aria-labelledby="oca-tab">
            <OCA/>
            <OCA/>
          </Tab.Pane>
        </Tab.Content>
      </div>
    );
  }
}

export default OS;

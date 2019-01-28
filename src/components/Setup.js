import React, { Component } from "react";
import { Row, Col } from "bootstrap-4-react";
import VMHostname from "./setup/VMHostname";
import DataCenter from "./setup/DataCenter";
import Service from "./setup/Service";
import DataDisk from "./setup/DataDisk";
import OS from "./setup/OS";
import Network from "./setup/Network";
import BackupSetup from "./setup/BackupSetup";
import IBMSecurity from "./setup/IBMSecurity";
import AddSSH from "./setup/AddSSH";
import Bills from "./setup/Bills";

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: {},
      backups: false,
      network: {
        network: "basic",
        isPrivate: false,
        publicIP: 0
      },
      ibmSecurity: false
    };
  }

  getNetworkData = data => {
    console.log(data);
  };

  getServices = data => {
    this.setState({
      services: data
    });
    console.log(data);
  };

  getBackups = data => {
    this.setState({
      backups: data
    });
  };

  getIBMSecurity = data => {
    this.setState({
      ibmSecurity: data
    })
  };
  render() {
    return (
      <div className="ng-scope">
        <Row className="bigger-margin deploy">
          <Col col="col-sm-9">
            <Row>
              <VMHostname />
            </Row>
            <h3>
              <span className="circle-number">2</span> Datacenter
            </h3>
            <DataCenter />
            <br />
            <div className="clearfix" />
            <h3>
              <span className="circle-number">3</span> Gói Dịch Vụ
            </h3>
            <Service getServices={data => this.getServices(data)} />
            <br />
            <DataDisk
              getDataDiskData={data => this.props.getDataDiskData(data)}
            />
            <br />
            <h3>
              <span className="circle-number">5</span> Hệ điều hành (64-bit)
            </h3>
            <OS />
            <br />
            <h3>
              <span className="circle-number">6</span> Network
            </h3>
            <Network getNetworkData={data => this.getNetworkData(data)} />
            <br />
            <h3>
              <span className="circle-number">7</span> Backups
            </h3>
            <BackupSetup getBackups={data => this.getBackups(data)} />
            <div style={{ clear: "both" }} />
            <h3>
              <span className="circle-number">8</span> IBM Security
            </h3>
            <IBMSecurity getIBMSecurity={data => this.getIBMSecurity(data)} />
            <br />
            <h3>
              <span className="circle-number">9</span> Thêm SSH (không bắt buộc)
            </h3>
            <AddSSH />
            <br />
            <br />
            <div className="delimeter-2" style={{ borderColor: "#cccccc" }} />
            <br />
            <label>
              <input
                className="a-bit-lower ng-pristine ng-untouched ng-valid ng-empty"
                style={{ verticalAlign: "middle", marginTop: "-2px" }}
                type="checkbox"
              />{" "}
              <span>
                Tôi đồng ý với điều khoản dịch vụ và chính sách bảo mật
              </span>
            </label>
            <div>
              <button
                className="btn btn-success btn-a-bit-bigger"
                style={{ paddingLeft: "40px", paddingRight: "40px" }}
              >
                Đồng ý tạo{" "}
                <i
                  className="glyphicon glyphicon-play"
                  style={{ fontSize: "11px", marginTop: "0px", top: "-1px" }}
                />
              </button>
            </div>
            <Bills
              backups={this.state.backups}
              IBMSecurity={this.state.ibmSecurity}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Setup;

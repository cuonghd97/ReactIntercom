import React, { Component } from "react";

class Bills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        position: "fixed",
        top: "0px",
        right: "0px",
        height: "100vh",
        width: "300px",
        background: "white",
        padding: "30px",
        zIndex: 10000
      },
      backups: this.props.backups
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 60) {
      this.setState({
        style: {
          position: "fixed",
          top: "0px",
          right: "0px",
          height: "100vh",
          width: "300px",
          background: "white",
          padding: "30px",
          zIndex: 10000
        }
      });
    } else {
      this.setState({
        style: {
          position: "fixed",
          top: "60px",
          right: "0px",
          height: "100vh",
          width: "300px",
          background: "white",
          padding: "30px",
          zIndex: 10000
        }
      });
    }
  };

  backups = () => {
    const isBackup = this.props.backups;
    if (isBackup === true) {
      return (
        <span>Backups 18.000 VND/mo</span>
      )
    } else return
  }

  ibmSecurity = () => {
    if (this.props.IBMSecurity === true) {
      return (
        <span>Enable IBM Security (1,000,000/mo)</span>
      )
    }
  }
  render() {
    return (
      <div
        onScroll={() => this.handleScroll()}
        className="order-summary hideonmobile"
        id="summary"
        style={this.state.style}
      >
        <h4 className="text-center billing-heading">Thông tin hóa đơn</h4>
        <div className="single">
          <label>Hostname</label> <span id="label-hostname">Không</span>
        </div>
        <div className="single">
          <label>Plan</label>
          <span className="plan-cpu-label">1 CPUs x 144,000 VNĐ</span>
          <span className="plan-ram-label">1 GB RAM x 120,000 VNĐ</span>
          <span className="plan-ssd-label">20 GB SSD x 3,000 VNĐ</span>
          <span className="plan-gpu-label">0 GPU x 5,000,000 VNĐ</span>
        </div>
        <div className="single">
          <label>Datacenter</label> <span id="label-datacenter">Hà Nội</span>
        </div>
        <div className="single">
          <label>Hệ điều hành</label> <span id="data-os">Centos 6.7</span>
        </div>
        <div className="single">
          <label>Settings</label> <span className="check-settings">không</span>
          {/* get data from server then print , add class hide for default all */}
          <div className="hide enable-add-more-ip">
            <span style={{ display: "inline" }}>Thêm 1 địa chỉ IP</span>
            <span style={{ display: "inline", fontWeight: "bold" }}>
              50,000
            </span>{" "}
            VND/mo
          </div>
          {
            this.backups()
          }
          <span className="hide">Enable private network (free)</span>
          {this.ibmSecurity()}
          {/* end */}
        </div>
        <div className="single">
          <label>SSH Keys</label> <span>không</span>
        </div>
        <div className="single">
          <label>
            Tổng số (Tính tới <span id="proratadate">2019-01-31</span>)
          </label>
          <div>
            <b>
              <span className="total-price">2,526,000</span>
            </b>
          </div>
        </div>
        <div className="single" id="prorata_tax">
          <label>VAT</label>{" "}
          <b>
            <span className="price" />
          </b>
          <div>
            <b>
              <span className="vat-price">252,600</span>
            </b>
          </div>
        </div>
        <div className="single">
          <label>Tổng thanh toán hôm nay</label>
          <div className="total_price">
            <b>
              <span className="total-price-with-vat">2,778,600</span>
            </b>
          </div>
        </div>
        <div className="single">
          <label>* Tổng thanh toán định kỳ</label>
          <div>
            <b>
              <span className="price">
                Chỗ này chưa biết công thức tính sao !
              </span>
            </b>
          </div>
          <i style={{ fontSize: "10px", clear: "both", fontWeight: "normal" }}>
            Giá trên đã bao gồm 10% thuế VAT
          </i>
        </div>
      </div>
    );
  }
}

export default Bills;

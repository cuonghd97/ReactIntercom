import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class DataDiskRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diskName: "DATA DISK",
      sizeDisk: 10,
      price: 330000
    };
  }

  handleChange = value => {
    this.props.changeValue(value);
  };

  isChange = e => {
    const value = e.target.value
    this.props.changeName(value)
  };

  render() {
    return (
      <tr className="template_data_disk">
        <td>
          <input
            className="input-small data_disk_name text-center"
            type="text"
            defaultValue={this.props.diskName}
            name="diskName"
            onChange={e => this.isChange(e)}
          />
        </td>
        <td>
          <div>
            <Slider
              min={20}
              defaultValue={this.props.sizeDisk}
              marks={{
                30: {
                  style: { color: "#4d4e4f" },
                  label: <strong>10 GBs</strong>
                },
                60: {
                  style: { color: "#4d4e4f" },
                  label: <strong>20 GBs</strong>
                },
                90: {
                  style: { color: "#4d4e4f" },
                  label: <strong>30 GBs</strong>
                }
              }}
              onChange={this.handleChange}
              step={null}
              handleStyle={{
                height: 15,
                width: 15,
                marginLeft: -7,
                marginTop: -5
              }}
            />
          </div>
        </td>
        <td align="center">
          <span className="data_disk_price">330,000</span>
        </td>
        <td align="center">
          <button
            className="btn btn-mini btndelete"
            onClick={() => this.props.getID()}
          >
            <span className="glyphicon glyphicon-remove" />
          </button>
        </td>
      </tr>
    );
  }
}

export default DataDiskRow;

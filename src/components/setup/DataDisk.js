import React, { Component } from "react";
import DataDiskRow from "./row/DataDiskRow";
const uuidv1 = require("uuid/v1");

class DataDisk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRow: []
    };
  }

  addRow = () => {
    var item = this.state.dataRow;
    var data = {
      id: uuidv1(),
      diskName: "DATA DISK",
      sizeDisk: 30,
      price: 330000
    };
    item.push(data);
    this.setState({
      dataRow: item
    });
    this.props.getDataDiskData(this.state.dataRow);
  };

  getUserID = data => {
    var tempData = this.state.dataRow.filter(item => item.id !== data);
    this.props.getDataDiskData(tempData);
    this.setState({
      dataRow: tempData
    });
  };

  changeValue = (data, id) => {
    var tempData = this.state.dataRow;
    tempData.forEach(item => {
      if (item.id === id) {
        item.sizeDisk = data;
      }
    });
    this.props.getDataDiskData(tempData);
    this.setState({
      dataRow: tempData
    });
  };

  changeName = (data, id) => {
    var tempData = this.state.dataRow
    tempData.forEach(item => {
      if (item.id === id) {
        item.diskName = data
      }
    })
    this.props.getDataDiskData(tempData)
    this.setState({
      dataRow: tempData
    })
  }

  renderRow = () => {
    return this.state.dataRow.map((value, key) => (
      <DataDiskRow
        key={key}
        diskName={value.diskName}
        sizeDisk={value.sizeDisk}
        getID={data => this.getUserID(value.id)}
        changeValue={(data, id) => this.changeValue(data, value.id)}
        changeName={(data, id)=>this.changeName(data, value.id)}
      />
    ));
  };

  render() {
    return (
      <div>
        <h3>
          <span className="circle-number">4</span> DATADISK
        </h3>
        <span id="add-extract-disk" onClick={() => this.addRow()}>
          <strong>Thêm</strong>
        </span>
        <table
          className="table table-striped table-condensed table-bordered vmiddle"
          style={{ marginBottom: "0px" }}
        >
          <thead>
            <tr>
              <th style={{ width: "200px" }}>Disk name</th>
              <th>Kích thước (GB)</th>
              <th style={{ width: "200px" }}>Giá/tháng VNĐ</th>
              <th style={{ width: "70px" }}>Xóa</th>
            </tr>
          </thead>
          <tbody className="row-click">{this.renderRow()}</tbody>
        </table>
      </div>
    );
  }
}

export default DataDisk;

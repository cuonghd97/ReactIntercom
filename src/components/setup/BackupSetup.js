import React, { Component } from "react";

class BackupSetup extends Component {
  isChange = e => {
    this.props.getBackups(e.target.checked);
  };

  render() {
    return (
      <div className="checkbox-wrapper">
        <div style={{ width: "100%" }}>
          <label className="noselect network-label">
            <input
              className="check-box-custom enable-backup-check"
              type="checkbox"
              onChange={e => this.isChange(e)}
              defaultValue={18000}
            />{" "}
            Kích hoạt tính năng Auto backup (
            <span style={{ fontWeight: "bold" }}>18,000</span> VND)
          </label>
          <ul className="liblue">
            <li>
              <span className="square-icon" /> Phí dịch vụ: 30% giá của ổ cứng
            </li>
            <li>
              <span className="square-icon" /> Theo mặc định, Auto backup chạy
              hàng ngày
            </li>
            <li>
              <span className="square-icon" /> Thời gian backup có thể cấu hình
              được
            </li>
            <li>
              <span className="square-icon" /> Chỉ có một bản backup gần nhất
              được giữ lại
            </li>
            <li>
              <span className="square-icon" /> Bạn chỉ có thể khôi phục lại toàn
              bộ máy ảo, không phải từng tập tin riêng lẻ
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BackupSetup;

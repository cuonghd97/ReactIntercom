import React, { Component } from "react";

class Snapshots extends Component {
  render() {
    return (
      <div className="table-container">
        <table className="table table-striped noborder">
          <tbody>
            <tr>
              <td colSpan={5} style={{ fontSize: "18px" }}>
                Chưa có snapshot!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Snapshots;

import React, { Component } from  'react'
import RowHistorySecurity from './row/RowHistorySecurity';

export default class HistorySecurity extends Component {
  render () {
    return (
      <div>
        <h3>Lịch sử bảo mật</h3>
        <div className="table-responsive">
          <div>
            <table className="table">
              <tbody>
                <tr>
                  <th className="text-left">Thao tác</th>
                  <th className="text-left">Thời gian</th>
                </tr>
              </tbody>
              <tbody id="security-history">
                <RowHistorySecurity/>
                <RowHistorySecurity/>
                <RowHistorySecurity/>
              </tbody>
            </table>
            <div id="security-history_paging" />
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Responsetable extends Component {
  render () {
    return (
      <div className="table-responsive" id="vms_container" style={{width: '100%'}}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Tên</th>
              <th className="hideonmobile">Hệ điều hành</th>
              <th>Main IP</th>
              <th className="hideonmobile">Datacenter</th>
              <th className="hideonmobile" style={{width: '100px'}}>Trạng thái</th>
              <th className="hideonmobile">Ngày tạo</th>
              <th className="hideonmobile" style={{width: '170px'}}>Thao tác</th>
            </tr>
          </thead>
          <tbody id="maintable">
            <tr>
              <td colSpan={7}>
                No server! <Link to="deploy">Deploy new now</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="maintable_paging" />
      </div>
    )
  }
}

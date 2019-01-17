import React, { Component } from 'react'
import Labelheader from './Labelheader';
import Clear from './Clear'
import Responsetable from './body/home/Responsetable';
import Btnadd from './body/home/Btnadd';
import Boxicon from './body/home/Boxicon';
import Newsheader from './body/home/news/Newsheader'
import New from './body/home/news/New'
import OwlCarousel from 'react-owl-carousel'
import '../OwlCarousel2/dist/assets/owl.carousel.min.css'
import '../OwlCarousel2/dist/assets/owl.theme.default.css'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Labelheader></Labelheader>
        <Clear/>
        <Responsetable/>
        <Btnadd/>
        <Boxicon/>
        <Newsheader></Newsheader>
        <div className="box news" id="news">
          <OwlCarousel loop items='2'>
            <New className='item'
            newTitle='Thông báo nâng cấp Network tại DC Hồ Chí Minh'
            newDate='2018-02-07 11:58:00'
            newContent='Nhằm mục đích nâng cao chất lượng hệ thống Network, nâng cao năng lực cung cấp và tăng cường khả năng đáp ứng cao (High Availability) của toàn bộ hệ thống CMC Cloud Server đặt tại DC Hồ Chí Minh, chúng tôi sẽ tiến hành nâng cấp Uplink của hệ thống như sau:'
            timeExcute='23h ngày thứ Bảy – 10/02/2018'
            downTime='2 phút (120 giây)'
            sideEffect='Toàn bộ hệ thống bao gồm tất cả các VMs nằm trên DC tại Hồ Chí Minh. Các VM, Server.. vẫn vận hành bình thường tuy nhiên không có kết nối internet ra ngoài.'
            newDetail='/'
            upgrade='/'
            upgradeText='Nâng cấp hệ thống Network tại DC HCM ngày 10/02/2018'/>
            <New
            newTitle='Thông báo nâng cấp Network tại DC Hồ Chí Minh'
            newDate='2018-02-07 11:58:00'
            newContent='Nhằm mục đích nâng cao chất lượng hệ thống Network, nâng cao năng lực cung cấp và tăng cường khả năng đáp ứng cao (High Availability) của toàn bộ hệ thống CMC Cloud Server đặt tại DC Hồ Chí Minh, chúng tôi sẽ tiến hành nâng cấp Uplink của hệ thống như sau:'
            timeExcute='23h ngày thứ Bảy – 10/02/2018'
            downTime='2 phút (120 giây)'
            sideEffect='Toàn bộ hệ thống bao gồm tất cả các VMs nằm trên DC tại Hồ Chí Minh. Các VM, Server.. vẫn vận hành bình thường tuy nhiên không có kết nối internet ra ngoài.'
            newDetail='/'
            upgrade='/'
            upgradeText='Nâng cấp hệ thống Network tại DC HCM ngày 10/02/2018'/>
            <New
            newTitle='Thông báo nâng cấp Network tại DC Hồ Chí Minh'
            newDate='2018-02-07 11:58:00'
            newContent='Nhằm mục đích nâng cao chất lượng hệ thống Network, nâng cao năng lực cung cấp và tăng cường khả năng đáp ứng cao (High Availability) của toàn bộ hệ thống CMC Cloud Server đặt tại DC Hồ Chí Minh, chúng tôi sẽ tiến hành nâng cấp Uplink của hệ thống như sau:'
            timeExcute='23h ngày thứ Bảy – 10/02/2018'
            downTime='2 phút (120 giây)'
            sideEffect='Toàn bộ hệ thống bao gồm tất cả các VMs nằm trên DC tại Hồ Chí Minh. Các VM, Server.. vẫn vận hành bình thường tuy nhiên không có kết nối internet ra ngoài.'
            newDetail='/'
            upgrade='/'
            upgradeText='Nâng cấp hệ thống Network tại DC HCM ngày 10/02/2018'/>
            <New
            newTitle='Thông báo nâng cấp Network tại DC Hồ Chí Minh'
            newDate='2018-02-07 11:58:00'
            newContent='Nhằm mục đích nâng cao chất lượng hệ thống Network, nâng cao năng lực cung cấp và tăng cường khả năng đáp ứng cao (High Availability) của toàn bộ hệ thống CMC Cloud Server đặt tại DC Hồ Chí Minh, chúng tôi sẽ tiến hành nâng cấp Uplink của hệ thống như sau:'
            timeExcute='23h ngày thứ Bảy – 10/02/2018'
            downTime='2 phút (120 giây)'
            sideEffect='Toàn bộ hệ thống bao gồm tất cả các VMs nằm trên DC tại Hồ Chí Minh. Các VM, Server.. vẫn vận hành bình thường tuy nhiên không có kết nối internet ra ngoài.'
            newDetail='/'
            upgrade='/'
            upgradeText='Nâng cấp hệ thống Network tại DC HCM ngày 10/02/2018'/>
          </OwlCarousel>
        </div>
      </div>
    )
  }
}

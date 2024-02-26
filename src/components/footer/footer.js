import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

import dathongbao from '../../img/dathongbao.png'
import proteced from '../../img/proteced.png'
import './footer.css'

import BottomNav from '../BottomNav/BottomNav';
//icon

function footer() {
    return (
        <div className='footer'>
            <Container className="body container-lg container-fluid" >
                <Row className='w-100 content-footer d-lg-flex'>
                    <Col lg={6} md={7} className='footer-left'>
                        <ul className='ul-footer'>
                            <a href="#/guarantee"> <li>Bảo hành</li></a>
                            <a href="#/doitra"> <li>Đổi trả</li></a>
                            <a href="#/security"> <li>Bảo mật</li></a>
                            <a href="#/dieukhoan"> <li>Điều khoản</li></a>
                        </ul>
                        <div className='content-footer'>
                            <span>Hộ kinh doanh Linh kiện điện tử Nshop / GPĐKKD số: 41X8035261 do UBND Quận Tân Phú cấp ngày 08/05/2019</span>
                            <p> <b> Điện tử NShop Tân Phú:</b> 1 Bùi Xuân Phái, Tây Thạnh, Tân Phú, TP. HCM – 📞 0902 64 39 78 <br />
                                <b>Điện tử NShop Quận 9:</b>  7 Trần Hưng Đạo, Hiệp Phú, Quận 9, TP. HCM – 📞 093 27 23 186</p>
                            <b>NSHOPVN.COM © 2019 - 2021</b>
                        </div>
                    </Col>
                    <Col lg={6} md={5} className='text-center'>
                        <img src={proteced} width={134.72} />
                        <img src={dathongbao} width={179.63} />

                    </Col>

                </Row>

            </Container>
            {/* NavBar responsive md */}
            


        </div>
    )
}

export default footer

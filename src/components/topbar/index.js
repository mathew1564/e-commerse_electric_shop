import React, { useCallback, useEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState,createContext} from 'react';
import Input from './Input'
import logo from '../../img/logo.jpg'
import './topbar.css'
import {Link} from 'react-router-dom'
//icon
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineApps } from "react-icons/md";
import { VscSearch } from 'react-icons/vsc'
// hiển thị thông báo
import MyVerticallyCenteredModal from '../modals/Modal';
import SlideMd from '../SidebarMd/SlideMd';





 
function Topbar() {
  const [showModal, setShowModal] = useState(false)
  const [showInput,setShowInput]=useState(false)
  const showButtonSlide=useRef(null)


  // console.log(showButtonSlide.current);
  return (
    <>

    <nav className='container-topbar'>
      <div className='topbar'>
        <Container>
          <Row className='w-100' >
            <Col lg={2} className='logo d-none d-md-none d-lg-block' >
              <img src={logo} width={40} />
              <span className='text-logo'>NSHOP</span>
            </Col>

            <Col md={1} xs={1} className='d-lg-none d-md-block d-block' ref={showButtonSlide} >
              <button>
                <span><MdOutlineApps className="icon-act"/> </span>
              </button>
            </Col>


            <Col lg={7} md={7} className='d-lg-block d-md-block d-none'>
              <Input></Input>
            </Col>

            <Col xs={1} className='d-lg-none d-md-none d-block'></Col>

            <Col xs={10} className='d-lg-none d-md-none d-block'>
              <Input></Input>
            </Col>

            <Col lg={3} md={4} className='d-lg-block d-md-block d-none'>
              <Row className='site-heard-user'>
                <Col lg={6} md={6}>
                  <Link as={Link} to='/cart'  >
                    <span className='shopping-cart-bage' data-count="4"> <AiOutlineShoppingCart className='shopping-cart' /> Giỏ hàng</span>
                  </Link>
                </Col>
                <Col lg={6} md={6}>
                  <Link as={Link} to='/account' >
                    <span><AiOutlineUser className='user' /> Tài khoản</span>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {/* hàm hiển thị thông báo */}
        <MyVerticallyCenteredModal
          show={showModal}
          onHide={() => setShowModal(false)}
        />

      </div>
    </nav>
    <Row> 
    <SlideMd showButtonSlide={showButtonSlide} showInput={showInput}/>

    </Row> 

    </>
  )
}

export default Topbar
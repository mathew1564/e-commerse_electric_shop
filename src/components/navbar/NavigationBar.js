import './style.css';
import React, { Component } from 'react';
import { Container, Row, Col, Nav, Dropdown } from 'react-bootstrap';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { MdSupportAgent } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom';
import { useState, } from 'react';
import { useEffect } from 'react';
const NavigationBar = () => {
   const [activeLink, setActiveLink] = useState('');
   const location = useLocation();
   useEffect(() => {
      setActiveLink(location.pathname);
   }, [location.pathname]);
   return (
      <div className="container-navbar w-100">
         <Nav >
            <div className="navbar">
               <Container>
                  <Row className="navbar-item  w-100">
                     <Col lg={5} className='nav-left'>
                        <Nav.Link as={Link} to="/" className={`home-item ${activeLink === '/' ? 'active-top-nav' : ''}`}>
                           <span>Trang chủ</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/productsall"  className={`product-item ${activeLink === '/productsall' ? 'active-top-nav' : ''}`}>
                           <span>Sản phẩm</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/blog"  className={`blog-item ${activeLink === '/blog' ? 'active-top-nav' : ''}`}>
                           <span>Blog</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/store"  className={`store-item ${activeLink === '/store' ? 'active-top-nav' : ''}`}>
                           <span>Hệ thống cửa hàng</span>
                        </Nav.Link>
                     </Col>

                     <Col lg={7} className="nav-right ">
                        <Nav.Link as={Link} to="#" className="mail-item">
                           <span>
                              <AiOutlineMail />
                              info@nshopvn.com
                           </span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="#" className="add-item">
                           <span>
                              <AiFillPhone />
                              Tân Phú: 0902 643 978
                           </span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="#" className="add-item">
                           <span>
                              <AiFillPhone />
                              Quận 9: 093 27 23 186
                           </span>
                        </Nav.Link>
                        <Dropdown className="dropdown ">
                           <Dropdown.Toggle className='dropdown-nav-contact'>LIÊN HỆ <BsChevronDown /></Dropdown.Toggle>
                           <Dropdown.Menu>
                              <Dropdown.Item className='sale-item' disabled>
                                 Bán hàng</Dropdown.Item>
                              <Dropdown.Item className='phone-item' disabled>
                                 <MdSupportAgent className='icon' /> Quận 9: 093 27 23 186</Dropdown.Item>
                              <Dropdown.Item className='phone-item' disabled>
                                 <MdSupportAgent className='icon' /> Quận 9: 093 27 34 186</Dropdown.Item>
                              <Dropdown.Item className='phone-item' disabled>
                                 <MdSupportAgent className='icon' /> Tân Phú: 0902 64 39 78</Dropdown.Item>
                              <Dropdown.Item className='sale-item' disabled>Kỹ thuật</Dropdown.Item>
                              <Dropdown.Item className='phone-item' disabled>
                                 <MdSupportAgent className='icon' /> 0339 449 749</Dropdown.Item>

                           </Dropdown.Menu>
                        </Dropdown>
                     </Col>
                  </Row>
               </Container>
            </div>
         </Nav>
      </div>
   );
};

export default NavigationBar;
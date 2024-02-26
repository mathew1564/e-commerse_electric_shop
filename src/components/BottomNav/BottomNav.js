import React from 'react'
import { Link ,useLocation} from 'react-router-dom';
import { useState,  } from 'react';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//icon
import { SlHome } from 'react-icons/sl'
import { CgMenuGridO } from 'react-icons/cg'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
//
import './BottomNav.css'
function BottomNav() {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();
    useEffect(() => {
        setActiveLink(location.pathname);
      }, [location.pathname]);
    return (
        <div className='container'>
            <Row className='d-lg-none d-md-flex nav-md '>
                {/* Home */}
                <Col md={3} xs={3} className={`nav-link-md ${activeLink === '/' ? 'active-bottom-nav' : ''}`} >
                    <Link as={Link} to="/" >
                        <span className='icon-nav-md'><SlHome /></span>
                        <span  >NShop.com</span>
                    </Link>
                </Col>
                {/* Category*/}
                <Col md={3} xs={3} className={`nav-link-md ${activeLink === '/category' ? 'active-bottom-nav' : ''}`} >
                    <Link as={Link} to="/category" >
                        <span className='icon-nav-md'><CgMenuGridO /></span>
                        <span>Danh mục</span>
                    </Link>
                </Col>
                {/* Cart */}
                <Col md={3}  xs={3} className={`nav-link-md ${activeLink === '/cart' ? 'active-bottom-nav' : ''}`} >
                    <Link as={Link} to="/cart">
                        <span className='icon-nav-md'><AiOutlineShoppingCart /></span>
                        <span>Giỏ hàng</span>
                    </Link>
                </Col>
                {/*Account*/}
                <Col md={3}  xs={3} className={`nav-link-md ${activeLink === '/account' ? 'active-bottom-nav' : ''}`} >
                    <Link as={Link} to="/account" >
                        <span className='icon-nav-md'><AiOutlineUser /></span>
                        <span>Tài Khoản</span>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default BottomNav

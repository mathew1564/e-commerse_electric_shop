import {Col,Row} from 'react-bootstrap'
import styled from 'styled-components'
import logo from '../../img/logo.jpg'
import { useState,useRef, useEffect ,useContext} from 'react'
import './SlideMd.css'


import { BsChatLeftText,BsGrid,BsGeo,BsTruck,BsCreditCard2Back,BsTag} from "react-icons/bs";

import { MdOutlineDiamond,MdOutlinePercent} from "react-icons/md";
import facebook from '../../img/iconSildebar/facebook.png'
import youtube from '../../img/iconSildebar/youtube.png'
import group from '../../img/iconSildebar/group.png'
import Site from './Site'
import Contact from './Contact'

import Item from '../sildebar/Item' 
const Div=styled.div`
display:${props=>props.show===false&&'none!important'}
`


export default function SlideMd({ showButtonSlide}) {
    const [show,setShow]=useState(false);
    const [site,setSite]=useState([]);
    const contact= [
        {content:'Hotline Tân Phú',infor:'0902 643 978'},
        {content:'Hotline Quận 9',infor:'0932 723 186'},

        {content:'Email',infor:'info@nshopvn.com'}

    ]
    const social=[
    { icon: facebook, content: "Linh kiện điện tử Nshop" },
    { icon: youtube, content: "Kênh Youtube của Nshop" },
    { icon: group, content: "Hội đam mê cơ điện tử" }
    ]
    useEffect(()=>{
        setSite(
            [
                {icon: <BsGrid/> ,content:'Sản phẩm'}
                ,{icon:<BsChatLeftText/> ,content:'Blog'}
                ,{icon: <BsGeo/> ,content:'Hệ thống cửa hàng'}
                ,{icon:<BsTruck/> ,content:'Kiểm tra đơn hàng'}
                ,{icon:<BsCreditCard2Back/> ,content:'Hướng dẫn thanh toán'}
                ,{icon:< BsTag/> ,content:'Điều kiện miễn phí vận chuyển'}
                ,{icon:< MdOutlineDiamond/>,content:'Quy định tích điểm hoàn tiền'}
                ,{icon:< MdOutlinePercent/>,content:'Thông tin khuyến mãi khác'}

            ]
        )
    }

    ,[])
    const slideBarRef=useRef();
    
    
    
    const handleClick=()=> {
        setShow(true)
    }
    useEffect(()=>{
        const handleSlideOutSide=(e)=> {
            if(slideBarRef.current&&!slideBarRef.current.contains(e.target)&&showButtonSlide.current&&!showButtonSlide.current.contains(e.target)) {
               setShow(false)
            }
        }
        document.addEventListener('click',handleSlideOutSide);
        return ()=> {   
            document.removeEventListener('click',handleSlideOutSide)
        }
    },[])

        useEffect(()=>{
            if(showButtonSlide.current ) {
            showButtonSlide.current.addEventListener('click',handleClick);
                
            }
            return ()=>{
                if(showButtonSlide.current) {
                    showButtonSlide.current.removeEventListener('click',handleClick);
                }
            }
        },[ ])
    return(
        <>
        
            <Div className='d-lg-none d-md-block  d-xs-block slideMd ' show={show}>
            <Col ref={slideBarRef} md={4    }  xs={9} className=' slideMd-content' >
            <div className='slideMd-container'>

            <div className='slideMd-title'>
                <img src={logo} width='50'></img>
                <h4 className='d-inline-block'>N-shop </h4>
            </div>
         
            </div>
          <div className='SiteSlide'>
          {site.map((site,index)=>(
                <Site key={index} icon={site.icon} content={site.content} > </Site>
            ))}
          </div>
          <div className='ContactSlide'>
            <h5>Liên hệ</h5>
            {contact.map((contact,index)=>(
                <Contact key={index} content={contact.content} infor={contact.infor}></Contact>
            ))}
          </div>

          

          <div className='SocialSlide'>
            <h5>KẾT NỐI VỚI NSHOP</h5>
            {social.map((social,index)=>(
                <Item key={index} icon={social.icon} content={social.content} ></Item>
                
            ))}
          </div>
          <div className='NshopSlide'>
            Nshopvn.com
          </div>
           
            </Col>  

            <Col>
            </Col>
            
            </Div>
            
            
      
          

        
           
        
        </>
    )
}

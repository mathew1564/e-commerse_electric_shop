import React, { useEffect, useRef, useState } from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { VscSearch } from 'react-icons/vsc'
import styled from 'styled-components'
import './Input.css'
const Div=styled.div`
 height:${props=>props.input===''?'150px':'50px'};
 display:${props=>props.show ?"flex":'none'};
`
export default function Input() {

  const [input,setInput]=useState('');
  const [show,setShow]=useState(false);
  const InputRef=useRef()
  const DivRef=useRef()
  const  handleInput=(e)=>{
    setInput(e.target.value);
    // console.log(e.target.value);
  }
  const handleClick=()=>{
    setShow(true)
  }
  useEffect(()=>{
    const handleClickOutSide=(e)=>{
      if(InputRef.current&&!InputRef.current.contains(e.target)&&DivRef.current&&!DivRef.current.contains(e.target)) {
        setShow(false);
      };

    }

    document.addEventListener('click',handleClickOutSide);
    return ()=>{
      document.removeEventListener('click',handleClickOutSide)  ;
    }
  },[])
  return (
    <>
    <InputGroup ref={InputRef}>
                <InputGroup.Text className='input-icon-search'> <VscSearch /></InputGroup.Text>
                <Form.Control placeholder='Tìm kiếm sản phẩm trên NSHOP...' type='search' className='input-search' value={input} onChange={handleInput} onClick={handleClick}/>
    </InputGroup>
    <Div className='Inputchild' input={input} ref={DivRef} show={show}>
      {input===''?( <p className='title'>Nhập tên hoặc từ khóa sản phẩm bạn cần tìm   </p>):( <p className='title-search'>{input}</p>)}
       
    </Div>

    </>
  )
}

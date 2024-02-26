import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import './Item.css'
const Div=styled.div`

  display:flex;
  text-algin: center;
  padding:5px;
  font-size:14px;
  justify-content: space-between;
  ${props=>props.show  && `
  {
    background-color:#fff;
   
    border-radius:5px;
    margin:1px;
    text-algin:center;
  }
  `}
`
const Img=styled.img`
  
 margin-right:10px;
  height: ${prop=>prop.show ? '1.5rem':'1rem'}
`
const Button=styled.button`
  display: ${show=>show.show   ? 'flex' :'none'}!important;
  
  padding: ${ prop=>prop.padd===false ? '0px 8px' :' 0px 11px'}!important ;
`
export default function Item({icon,content,bigger,add,child}) {
  const [state,setState]=useState(false)
  const [show,setShow]=useState(false)
 
  const handleClick=()=>{
  console.log(show);

  setShow(!show)
  console.log(show);
  }
  return (
    <>
    <Div className='Div' onMouseEnter={()=>(setState(true)) } onMouseLeave={()=>setState(false)} show={child&&show}>

       <div className='d-flex'>
       <Img src={icon} alt="" show={bigger}/>
        <p style={{marginBottom:'8px'}}>{content}</p>
       </div>
       <div>
          <Button type="" className='add-btn btn  btn-primary '   padd={show} show={state && add} onClick={()=>handleClick()} >{show===false?"+":"-"}</Button>
          
        </div>
    </Div>
    {show&& child &&(
      <div className='showList'>
        {
          child.map((child,index)=>(
            <div className='childList'>{child} </div>
          ))
        }
      </div>
    )}
    </>
    
  )
}

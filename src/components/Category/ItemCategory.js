import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import './ItemCategory.css'
const Div = styled.div`

  ${props => props.show && `
  {
    background-color:#fff;
   
    border-radius:5px;
    margin:1px;
    text-algin:center;
  }
  `}
`

export default function ItemCategory({ icon, content,child }) {
    const [state, setState] = useState(false)
    const [show, setShow] = useState(false)

    const handleClick = () => {
        console.log(show);

        setShow(!show)
        console.log(show);
    }
    return (
        <>
            <Div className='category-sidebar' onClick={() => setShow(!show)} >
                <img src={icon} alt="icon" />
                <p style={{ marginBottom: '8px' }} className='content-sidebar'>{content}</p>
            </Div>
        </>

    )
}

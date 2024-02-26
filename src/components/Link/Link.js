import React from 'react'
import './link.css'
function Link({titleNav}) {
  return (
    <div className='link' style={{marginBottom:'14px'}}>
       <a href="/" className='link-active'>NShop</a>
       <span >{titleNav}</span>
    </div>
  )
}

export default Link
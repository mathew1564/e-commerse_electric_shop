import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from './Card/ProductCard';
import './Card/card.css'
const ProductList = ({ products }) => {
    
    return (
        <div className='product-list'>
            <Row className="card-product" >
                {products.map((product,index) => (
                    <div className='card-grid'  key={index}>
                        <Card  product={product} />
                    </div>
                ))}
            </Row>
        </div>
        
    )
}

export default ProductList

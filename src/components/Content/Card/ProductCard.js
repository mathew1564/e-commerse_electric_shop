import React, {useState} from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const SoldOutSpan = styled.span`
  background-color: #F0F2F5;   
  color: #8c8c8c;   
  border: 1px solid #8c8c8c;
  padding: 5px 10px;    
  position: absolute;    
  bottom: 100px;
  font-size: 14px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProductCard = ({ product }) => {
  const[isSoldOut, setIsSoldOut] = useState(product.soldOut==="Hết Hàng")

  return (
    <>
      <Card className="card card-item">
      {isSoldOut && <SoldOutSpan>Hết hàng</SoldOutSpan>}
        <Card.Img src={product.img} />
        <Card.Body>
          <Card.Text className="content-product" title={product.content}>{product.content}</Card.Text>
          <Card.Text className="price">{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
};

export default ProductCard;
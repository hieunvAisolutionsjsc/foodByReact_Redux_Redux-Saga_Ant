import React from 'react'
import star from "../../img/star.png"
import food from "../../img/danhmuc/a.jpg"
import { useNavigate } from 'react-router-dom';
import { cardFood, dataCart } from './interface';
import { Button, Card, Col } from 'antd';
export default function CardFood(props  :cardFood) {
  const {
    name , imgsmail ,
    contry , dc ,
    imgbig , restaurant , 
    comments , 
     rate , price , dc2 ,
     id , handleAddCart,
    handleBuyNow  , col} = props;
    const data  :dataCart= {
           name, imgbig ,
            restaurant , contry ,
             dc ,dc2 , comments ,
              id ,imgsmail , 
              price , rate
    }
    
 
  const nav = useNavigate() ; 
 
const handleDetail = ()=>{
      nav(`/detail?id=${id}`)
}
  const rateJSX  = [] ; 
  for (let index = 1; index <= rate; index++) {
    
    rateJSX.push(<img key={index} src={star} alt="" />) ; 
  }
  return (
    <Col 
    xs={{span: 24}}
    md={{span : 8}}
    sm={{span : 12}}
    lg={{span : 6}}
    span={col} >
    <Card     hoverable
              className="foodlist__item">
    <div className="foodlist__item--img">
   
        <img src={imgsmail} alt="" onClick={handleDetail}/>
    </div>
 <p onClick={handleDetail}>{name}</p>
    <div className="rate price">
        <div className="foodlist__item--rate">
          {
            rateJSX
          }
  
        
         
        </div>
        <p>{price} VND</p>
    </div>
    <p className="dic">
       {dc2}
    </p>
    <div className="addcart ">
        <Button type="primary" className="fooddetail__content--addcart tocart" onClick={() =>handleAddCart(data)} >Add To Cart</Button>
        <Button style={{marginLeft:".5rem"}}  className="fooddetail__content--buy buy" onClick={()=> handleBuyNow(data)}>Buy Now</Button>
    </div>
</Card>
</Col>
  )
}

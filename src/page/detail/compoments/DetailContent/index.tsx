import { Button, Card, Col, Image, message, Row } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CartAPI from '../../../../common/cart';
import Pay from '../../../../common/pay';
import { PropsDetailContent } from '../../interface';
import { ItemDetail } from './../../interface';
import star from "../../../../img/star.png"
import "./style.css"
import { JsxElement } from 'typescript';
export default function DetailContent(props : PropsDetailContent ) {
    
    const {imgbig , dc  ,rate, name , price , dc2 , id  , restaurant , handleMess} =props
// console.log(props)

const cart = new CartAPI();
const pay = new Pay() ; 
const nav = useNavigate() ; 
;
const rateJSX   = [] ; 
for (let index = 1; index <= rate; index++) {
  rateJSX.push(<img key={index} src={star} alt="" />) ; 
} 



const handleAddCart = () : void =>{
    const item = {...props}
     cart.setCart(item) ; 
     message.success("Add to card success")
}
const  handleBuyNow =(items : ItemDetail)=>{
    console.log(items)
 pay.setAll([]);
 //console.log(item)
 const item = {...items};
     pay.setPay(item); 
     
    nav("/pay");
}
  return (
    <Row  gutter={[20 , 20]} className="container " id="fooddetail">
        <Col
        xs={{span : 24}}
        sm={{span : 13}}
        span={13}>
        <div  className="fooddetail__img">
        <Image src={imgbig} style={{width : "100%" , height: "500px"}} />

   
  
</div>
</Col>
<Col span={11} 
xs={{span : 24}}
sm={{span : 11}}
className="fooddetail__content"> 
    <p>{name}</p>
        <Row className="fooddetail__content--rate fooddetail__content--price">
            <Col className="fooddetail__content--rate item">
              {rateJSX}
            </Col>
            <Col>
            <p>{price} VND</p>
            </Col>
        </Row>
        <div className="fooddetail__content--res item">
            <h1>Xuất sứ</h1>
            <p>Cung cấp bởi nhà hàng  : {restaurant.name}</p>
            <p>Địa chỉ  : {restaurant.address}</p>
        </div>
        
        <div className="fooddetail__content--dic">
            <p>Miêu Tả</p>
            <p>
          {dc2}
        </p>
        </div>
        <div className="addcart">
            <Button type='primary' style={{marginRight : "1rem"}} className="fooddetail__content--addcart tocart"
            onClick={handleAddCart}
            >Add To Cart</Button>
            <Button className="fooddetail__content--buy buy" 
            onClick={()=> handleBuyNow({...props})}
            >Buy Now</Button>
        </div>
        
</Col>
</Row>
  )
}

import React, { useState } from 'react'
import CardFood from '../../../../components/CardFood'
import "./style.css"
import CartAPI from '../../../../common/cart';
import Pay from '../../../../common/pay';

import { useNavigate } from "react-router-dom";
import { listFood } from './../../interface';
import { ItemDetail } from './../../../detail/interface';
import { dataCart } from '../../../../components/CardFood/interface';
import { Button, message, Row } from 'antd';
import 'antd/dist/antd.css';

export default function ListFood( props : listFood) {
  const {listFood ,handleMess} = props
 
  const [loadMore , setLoadMore] = useState(1) ; 
   const cart = new CartAPI();
   const pay = new Pay() ; 
   const nav = useNavigate() ; 
   ;
  

  const handleLoadMore =()=>{
    setLoadMore(prevState =>{
      return prevState +1;
    })
  }
  const handleAddCart = (item :dataCart)=>{
        cart.setCart(item) ; 
        message.success("Add to cart success")
  }
  const  handleBuyNow =(item : dataCart)=>{
    pay.setAll([]);
        pay.setPay(item); 
        
        nav("/pay");
  }
  console.log(listFood)
  return (
    <div className='foodlist'>
   <p id="titlefood">Danh Sách Đồ Ăn</p>
   <Row gutter={[15 , 15]}   className='container'>
    {
      listFood.map((item , index)=>{
       return index >= (loadMore*20) ? "" : <CardFood 
        key={index}
        col= {6}
        handleBuyNow={handleBuyNow}
        handleAddCart ={handleAddCart}
        {
          ...item
        }
        />
      })
    }
       
       
      
   </Row>

   <div className="loadmore" id="loadmore">
    <Button type="primary" style={(loadMore*20) > listFood.length ? {display : "none" } : {} } 
            onClick={handleLoadMore}>Load More</Button>
</div>
    </div>
  )
}

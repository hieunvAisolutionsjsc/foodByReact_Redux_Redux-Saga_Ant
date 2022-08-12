import React, { UIEvent, useEffect, useState } from 'react'
import ItemListFood from '../../components/ItemListFood'

import "./style.css"
import CartAPI from '../../common/cart';
import Pay from '../../common/pay';
import { useNavigate } from 'react-router-dom';
import { ItemDetail } from './interface';
import { Button, Col, message, Row, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
export default function Cart() {
  const [listCart , setListCart] = useState< ItemDetail[]| []>([])
  const cart = new CartAPI();
  const pay = new Pay()
  let totalPrice = 0 ; 
  let totalFood = 0 ; 
  const nav = useNavigate() ; 
  const [windowSize , SetWindowSize] = useState<any>(window.innerWidth)
  const handleInRe = (type : string , id : string  )=>{
          let newData = listCart.map((item : ItemDetail)=>{
            return item.id === id  
            ? {
              ...item , 
              quantities : item.quantities+(type === "re" ? -1 : 1)
            } 
            : item
                
          })
          newData = newData.filter((item : ItemDetail) =>{
            return item.quantities >= 1
          })
          console.log(newData)
          setListCart(newData)
          cart.setAll(newData)
  }

  const handleRemove = (id : string)=>{
    let newData ; 
     newData = listCart.filter((item) =>{
      return item.id !== id  
    })
    message.success("Removed")
    setListCart(newData)
    cart.setAll(newData)
  }
  useEffect(
      ()=>{
       setListCart(prevState =>{
        return cart.getCart()
       })
      }
    

    , [])
    function resizeEvent() {
             SetWindowSize(window.innerWidth)
    }
    useEffect(()=>{
        window.onresize = resizeEvent ; 
        
    })
    listCart.forEach(element => {
      totalPrice+=(element.price* element.quantities) ; 
      totalFood+=element.quantities
    });
    const handlePay =()=>{
      pay.setAll(listCart);
      nav("/pay")
    }
    let renderCart = listCart.map((itemCart)=>{
        return {
          ...itemCart , 
          imgbig : <img style={{width: "70px"}} src={itemCart.imgbig} />,
          imgsmail : <img style={{width: "70px"}} src={itemCart.imgsmail} /> , 
          renderQuatities : <Row   gutter={20}>
            <Col>
              <Button size={windowSize < 550  ? "small" : "large" }  onClick={()=>handleInRe("re" , itemCart.id)}> - </Button>
              </Col>
            <Col>
              <p>{itemCart.quantities}</p>
              </Col>
              <Col>
              <Button size={windowSize < 550  ? "small" : "large" } onClick={()=>handleInRe("in" , itemCart.id)} > + </Button>
              </Col>
              <Col>
              <Button size={windowSize < 550  ? "small" : "large" } type="primary" danger onClick={()=>handleRemove(itemCart.id)} > <DeleteOutlined /></Button>
              </Col>
          </Row>
        }
    })
    
const columns = [
  {
    title: 'Image',
    dataIndex: 'imgsmail',
    key: 'imgsmail',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a : any, b : any) => (a.name).localeCompare(b.name),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a : any, b : any) => a.price - b.price,
  },
  {
    title: 'Quantities',
    dataIndex: 'renderQuatities',
    key: 'renderQuatities',
    sorter: (a : any, b : any) => a.quantities - b.quantities,
  },
];
  return (
    <div className='cart'>
    <h1>Cart list</h1>
     <div className='container'> 
     <Table dataSource={renderCart} columns={columns} />
    
      </div>
      <div id="total">
        <Row className='total' gutter={40}>
          <Col flex={1}>
      <p>Số Món :{listCart.length}</p>
      </Col>
      <Col flex={1}>
            <p>Số lượng : {totalFood}</p>
            
            </Col>
            <Col flex={1}>
            <p>Tổng Tiền : {totalPrice} </p>
            </Col>
            </Row>
      </div>
      <div className="pay">
    <Button type='primary' id="setpay" onClick={handlePay}>  Thanh toán</Button>
    </div>
      </div>
  )
}

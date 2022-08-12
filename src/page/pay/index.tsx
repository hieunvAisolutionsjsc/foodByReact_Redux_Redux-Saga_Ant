import React, { useEffect, useState } from 'react'
import FormPay from './components/FormPay/'
import ListFood from './components/ListFood'

import "./style.css"
import PayAPI from '../../common/pay';
import { PropsPay, ItemDetail } from './interface';
import { Button, Col, message, Row, Table } from 'antd';
export default function Pay({handleMess } : PropsPay) {
  
  const pay = new PayAPI() ; 
  const [isPay , setIsPay] = useState<boolean>(false)

  const [listFood , setListFood] = useState<ItemDetail[] | []>([]) ; 
  let totalPrice = 0 ; 
  useEffect(()=>{
    setListFood(prevState =>{
      return pay.getPay() 
    })

  }, [isPay])
  
  listFood.forEach(element  => {
    totalPrice+=(element.price* element.quantities)
  });
  let renderPay = listFood.map((itemPay)=>{
    return {
      ...itemPay , 
      imgbig : <img style={{width: "70px"}} src={itemPay.imgbig} />,
      imgsmail : <img style={{width: "70px"}} src={itemPay.imgsmail} /> , 
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
dataIndex: 'quantities',
key: 'quantities',
sorter: (a : any, b : any) => a.quantities - b.quantities,
},
];

const handlePay = ()=>{
  setIsPay(true); 
  if(listFood.length === 0 ){
    message.error("No item to pay");
  }
  else{
    message.success("Pay done");
  
    pay.setAll([])
  }
 

}
  return (
    
 <div className="pay">
    <h1>pay list</h1>
  <Row gutter={40}>
      
        
        <Col  xs= {{span:24}} md={{span : 16}} className="container">
        <Table dataSource={renderPay} columns={columns} pagination={{
                 current: 1,
                 pageSize: 3,
  }} />
       
      <div className="formpay__top" id="paytop">
             <div className="totalpay">
                <p> total pay  :  {totalPrice} VND</p>
            </div>
            <div className="totalitem">
                <p>total food : {listFood.length}</p>
            </div> 
        </div>
           
     
    </Col>
    <Col xs= {{span:24}} md={{span : 8}} >
    <FormPay handlePay={handlePay} />
    </Col>
    </Row>
    </div>
  )
}

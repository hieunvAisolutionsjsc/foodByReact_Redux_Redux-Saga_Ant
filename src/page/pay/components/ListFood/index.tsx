import React from 'react'
import ItemListFood from '../../../../components/ItemListFood'
import { ItemDetail, PropsList } from '../../interface';

export default function ListFood(props  : PropsList) {
  const {listFood } = props ; 
  console.log(listFood , "pay")
  return (
   
         <table id="pay">
          <thead >
           <tr>
            <th>Ảnh</th>
            <th>Tên</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
           </tr>
           </thead>
           <tbody>
          {
            listFood.map((item  : ItemDetail , index : number)=>{
              return  <ItemListFood
              stt ={1}
              handleInRe={()=> {}}
              handleRemove={()=>{}}
              key={index}
              {...item }
              namePage= "pay" 
              
               />
            })
          } 
      </tbody>
    </table>
    
    
  )
}

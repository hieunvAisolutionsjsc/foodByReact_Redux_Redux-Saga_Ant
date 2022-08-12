import React from 'react'
import imgTr from"../../img/trash_bin.png"
import star from "../../img/star.png"
import "./style.css"
import { cardFood } from './interface';
import { Button } from 'antd';
export default function ItemListFood(props : cardFood) {

   const {imgsmail , id , dc2,
    name , price , quantities ,
    stt,rate,namePage,
     handleInRe , handleRemove 
  } = props ; 
  const rateJSX  = [] ; 
  for (let index = 1; index <= rate; index++) {
    
    rateJSX.push(<img key={index} src={star} alt="" />) ; 
  }
  return (
    
    <tr className={`${props.namePage}__item`}>
    {
        props.namePage=== "manage" &&  <td className="manage__item--img">
        <p>{stt}</p>
    </td>
    }
   
    <td className={`${props.namePage}__item--img img`}>
        <img src={imgsmail} alt=""/>
    </td>
    <td><p>{name} </p></td>
    
    <td><p className='price' >{price } VND</p></td>
{/*  */}
{
        props.namePage=== "manage" &&    <td><div className="rate price">
                    <div className="foodlist__item--rate">
                    {
                      rateJSX
                    }
                    </div>
                   
                </div>
            </td>
    }
  
  <td className={`${props.namePage}__item--quatities`}>
   
     {
        props.namePage === "cart" ? <>
        <Button  type='primary' onClick={()=>handleInRe("re" , id)}>-</Button>
        <p>{quantities}</p>
        <Button  type='primary' onClick={()=>handleInRe("in" , id)}>+</Button>
      <Button  type='primary' className="remove"
            onClick={()=>handleRemove(id)} 
           value-id ="${id}">
        <img src={imgTr} value-id ="${id}"  />
         </Button>
      </>  :  props.namePage === "pay"  ? 
       <p>{quantities}</p> 
       : <p className='dc'>{dc2} </p>
     }
       
        
    
    
   </td>
     
</tr>
  )
}

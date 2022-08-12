import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
 import DetailContent from './compoments/DetailContent'
 import { useLocation } from "react-router-dom"
import Food from '../../common/food';
// import "./style.css"
import Comments from './compoments/Comments';
import { PropsDetail, ItemDetail } from './interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
 

function Detail({handleMess} : PropsDetail) {
    const sampleLocation = useLocation();
    let id : string = sampleLocation.search.split("=")[1]
    const [food , setFood] = useState<ItemDetail >({
      imgbig :"" , 
    dc :"" ,
     name:"" , 
     price :0 ,
      dc2  :"",
       id :  ""  ,
       rate : 0, 
    restaurant  : {
     name : "" , 
     address : ""
    } , 
    comment : [
      {
        name : "" , 
        avatar : "" , 
        comment : ""
      }
    ]
  
  });
  const data : any = useSelector((state: RootState)=> state?.food.data);

    useEffect(()=>{
           const dataFood : ItemDetail | undefined = data.find((item : ItemDetail ) => item.id === id) ; 
             dataFood != undefined  &&  setFood(dataFood);
       
    } , [data])


  return (
    <div className='fooddetail'>
        <DetailContent  handleMess={handleMess} {...food} />
        <Comments  comment = {food.comment}/>
    </div>
  )
}
export default Detail

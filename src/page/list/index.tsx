import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Food from '../../common/food';
import { RootState } from '../../store';
import Category from './components/Category/index';
import ListFood from './components/ListFood';
import { PropsList } from './interface';
import { ItemDetail } from './interface';

export default function List({handleMess} : PropsList) {
  const listFood = useSelector((state :RootState)=> state.food?.data);
  const [dataFood  , setDataFood]= useState([])
  const [category , setCategory] = useState<string>("all");
  const [loadMore , setLoadMore] = useState<number>(1) ; 
  const changeCategory = (name : string ) : void =>{
           
           setCategory(name)
  }

  
  useEffect(()=>{
    console.log(category)
    const newFood   = category === "all" ? listFood 
                                        : listFood.filter((item : ItemDetail)=>{
                                              return item.contry === category           
                                          }) ;

    setDataFood(newFood)
   }
  
  , [category , listFood])
   
  return (
    <div>
      <Category changeCategory={changeCategory} category={category}/>
      
      <ListFood  listFood={dataFood} handleMess={handleMess}/>
      
    </div>
  )
}

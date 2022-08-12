import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Food from '../../common/food';
import FormAdd from './FormAdd/Add';
import { DataForm, ItemDetail } from './interface';
import ListManage from './ListManage/index';
import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import Search from 'antd/lib/input/Search';
import { Button, Col, Input, Row } from 'antd';
import Update from './FormAdd/Update';

export default function Manage() {
  const [search , setSearch] = useState(""); 
  const [loadmore , setLoadMore] = useState<number>(1);
  const [isAdd , setIsAdd] = useState<boolean>(false)
  const dispatch  = useDispatch() ; 

  const  [dataFood , setDataFood] = useState([])  ; 
  
  const [dataUpdate , setDataUpdate] = useState<ItemDetail | null>(null)
  const handleLoadMore =() : void=>{
    setLoadMore(prevState =>{
      return prevState +1;
    })
  }
  const handleOpenAdd =() : void=>{
    setDataUpdate(null)
    setIsAdd(!isAdd);
  }
  const handleUpdate = (data : ItemDetail) : void =>{
       setDataUpdate(data)
       setIsAdd(!isAdd);
  }
  const listFood = useSelector((state :RootState)=> state.food?.data);
  useEffect(()=>{
  
    const newFood = search === "" ? listFood 
                                        : listFood.filter((item : ItemDetail)=>{
                                              return item.name.indexOf(search)!== -1 || 
                                                     item.dc2.indexOf(search)!== -1           
                                          }) ;

    setDataFood((prevState : ItemDetail[])  =>{
      return  newFood;
    })
  }
  
  , [search , listFood])
const handleOnChange = (e: ChangeEvent<HTMLInputElement>) : void=>{
    setSearch(e.target.value);
}


  return (
    <>
       <header>
<Row className="container">
        <Col  flex ={1} className="search">
        <Input
        style={{width  :"200px"}}
        allowClear
        onChange={handleOnChange} />
          
        </Col>
       <Col span={3} className="addnew">
        <div className="container">

            <div className="addnew__btn"            
            id="add"
            onClick={handleOpenAdd}
            >
                <Button type='primary' >Add A Food</Button>
            </div>
        </div>
        
       </Col>
    </Row>
    </header>
    <div className='manage'>
   <div className='container'>
       <div>
        <ListManage 
         listFood ={dataFood}
         loadmore={loadmore}
         handleUpdate={handleUpdate}
        />
        {/* <div style={dataFood.length <= (loadmore*20) ? {display :"none"} :{}} className="loadmore" id="loadmore" onClick={handleLoadMore}>
        <button>Load More</button>
    </div> */}
       </div>
       </div>
   </div>
   {dataUpdate === null ? <FormAdd 
    handleOpenAdd={handleOpenAdd}
    isAdd={isAdd}
     dataUpdate ={null }
   /> : <Update
   handleOpenAdd={handleOpenAdd}
   isAdd={isAdd}
    dataUpdate ={dataUpdate }
  />}
   
    </>
  )
}

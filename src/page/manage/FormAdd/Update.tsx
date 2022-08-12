import React, { ChangeEvent, EventHandler, FormEvent, MouseEvent, useEffect, useState } from 'react'
import Food from '../../../common/food';
import {  PropsFormAdd, ItemDetail, Res, DataForm } from './../interface';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css"
import { Button, Col, Input, Row, Upload } from 'antd';
import FileField from '../../../field/FileField';
import { useForm } from 'react-hook-form';
import TextField from '../../../field/TextField';
import { RootState } from '../../../store';

export default function Update(props : PropsFormAdd) {
  const {  handleOpenAdd , isAdd ,dataUpdate  } = props;
  console.log(dataUpdate)
  const dispatch  = useDispatch()
  const food = new Food() ;

  
const {register , setValue , getValues, handleSubmit , control ,watch} = useForm({
  defaultValues :{
    imgbig : {
      fileList:  []
    } , 
    imgsmail:{
      fileList : []
    },
    name : dataUpdate.name , 
    dc : dataUpdate.dc , 
    dc2 : dataUpdate.dc2 , 
    price : dataUpdate.price , 
    contry : dataUpdate.contry,
    restaurant : dataUpdate.restaurant
  }
}) ;  

const dataFood = useSelector((state :RootState )=> state.food.data) ; 
let listId = dataFood.map((item :ItemDetail)=>{
             return Number(item.id)
})
const hanhdleUpdateFood =(newData:any) =>{
  console.log(newData)
    dispatch({type : "UPDATE_FOOD_AS" , payload: {  ...newData ,handle :    handleOpenAdd() , id: dataUpdate.id}})
 
  
  }
  console.log(dataUpdate)
  
  return (
    <div className={ isAdd === true ? "formadd addactive" : "formadd"  } id="formadd">
   
    <div className="container"  >
        <form action="" id="formadd" onSubmit={handleSubmit((data)=> hanhdleUpdateFood(data))} >
          <Row style={{alignItems:"center !important"}} gutter={[12,20]} >
           <Col xs={{span : 24}} sm= {{span:12}} className="formadd__item file ">
  
           <FileField
           defaultFileList={ [{url : dataUpdate.imgbig}]}
            name="imgbig"
           control={control}
           label="Chose a image (Big)" 
           watch={watch}
           />
           </Col>
           <Col xs={{span : 24}} sm= {{span:12}} className="formadd__item file ">
           <FileField
            name="imgsmail"
            defaultFileList={ [{url : dataUpdate.imgsmail}]}
           control={control}
           label="Chose a image (small)" 
           watch={watch}
           />
           </Col>
           <Col xs={{span : 24}} sm={{span:12}} md={{span:8}} className="formadd__item">
            <TextField 
                 control={control}
                 label="Name"
                 name="name"
                 defaultValue={dataUpdate.name}
                 rules={{required : {
                value : true , 
                message : "This field is required"
               }}}
               type="text" 

            />
           </Col>
           <Col xs={{span : 24}} sm={{span:12}} md={{span:8}} className="formadd__item">
           
            <TextField
                   type="text"
                    name="dc" 
                    defaultValue={dataUpdate.dc}
                  control={control}
                  label ="Describe(Full)"
                  rules={{required : {
                    value : true , 
                    message : "This field is required"
                   }}}
                    />
           
           </Col>
           <Col xs={{span : 24}} sm={{span:12}} md={{span:8}} className="formadd__item">
           
           <TextField
                   type="text"
                    name="dc2" 
                  control={control}
                  defaultValue={dataUpdate.dc2}
                  label ="Describe(Short)"
                  rules={{required : {
                    value : true , 
                    message : "This field is required"
                   }}}
                    />
           </Col>
           <Col xs={{span : 24}} sm={{span:12}} md={{span:8}} className="formadd__item">
           
            <TextField
                   type="number" 
                   name="price" 
                   defaultValue={dataUpdate.price}
                   control={control}
                   label="Price"
                   rules={{required : {
                    value : true , 
                    message : "This field is required"
                   }}}
                   />
            
           </Col>
           <Col xs={{span : 24}} sm={{span:12}} md={{span:8}} className="formadd__item">
           
            <TextField
                 
                   type="text"
             name="contry" 
             defaultValue={dataUpdate.contry}
             control={control}
             label="Country"
             rules={{required : {
                value : true , 
                message : "This field is required"
               }}}
             />
           
           </Col>
       
           <Col  span={24} className="ncc">
            <p>
                Restaurant</p>
                <Row gutter={[20,10]} >
           <Col xs={{span : 24}} md={{span: 12}} className="formadd__item">
            <TextField  
                   type="text"
                   name="restaurant.address" 
                   defaultValue={dataUpdate.restaurant.address}
                   control={control}
                   label="Address"
                   rules={{required : {
                    value : true , 
                    message : "This field is required"
                   }}}
                   />

           </Col>
           <Col xs={{span : 24}} md={{span: 12}} className="formadd__item">
            
            <TextField 
                   type="text" 
                   name="restaurant.name"
                   control={control}
                   defaultValue ={dataUpdate.restaurant.name}
                   label="Name"
                   rules={{required : {
                    value : true , 
                    message : "This field is required"
                   }}}
                    />
            
           </Col>
           </Row>
        </Col>
        </Row>
           <div className="formadd__item btn">
              <Button type='primary' ><input type="submit" value="Save" /></Button>
              <Button id="cancel" danger onClick={handleOpenAdd}>Cancel</Button>
           </div>
        </form>
    </div> 
</div>
  )
}

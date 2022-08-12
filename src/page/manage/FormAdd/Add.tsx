import React, { ChangeEvent, EventHandler, FormEvent, MouseEvent, useEffect, useState } from 'react'
import Food from '../../../common/food';
import {  PropsFormAdd, ItemDetail, Res, DataForm } from './../interface';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from '../../../firebase';
import "./style.css"
import { Button, Col, Input, Row, Upload } from 'antd';
import FileField from '../../../field/FileField';
import { useForm } from 'react-hook-form';
import TextField from '../../../field/TextField';
import { RootState } from '../../../store';
export default function Add(props : PropsFormAdd) {
  const {  handleOpenAdd , isAdd ,dataUpdate  } = props;
  console.log(dataUpdate)
  const dispatch  = useDispatch()
  const food = new Food() ;
  
const {register , setValue , getValues, handleSubmit , control ,watch} = useForm({
  defaultValues :{
    imgbig : {
      fileList: []
    } , 
    imgsmail:{
      fileList : []
    } 
  }
}) ; 

const dataFood = useSelector((state :RootState )=> state.food.data) ; 
let listId = dataFood.map((item :ItemDetail)=>{
             return Number(item.id)
})
const hanhdleAddFood =(newData:any) =>{
    dispatch({type : "ADD_FOOD_AS" , payload: {handle :    handleOpenAdd() , ...newData , id : Math.max(...listId)+1}})
 
  
  }
  
  return (
    <div className={ isAdd === true ? "formadd addactive" : "formadd"  } id="formadd">
   
    <div className="container"  >
        <form action="" id="formadd" onSubmit={handleSubmit((data)=> hanhdleAddFood(data))} >
          <Row style={{alignItems:"center !important"}} gutter={[12,20]} >
           <Col xs={{span : 24}} sm= {{span:12}} className="formadd__item file ">
  
           <FileField
           defaultFileList={[]}
            name="imgbig"
           control={control}
           label="Chose a image (Big)" 
           watch={watch}
           />
           </Col>
           <Col xs={{span : 24}} sm= {{span:12}} className="formadd__item file ">
           <FileField
            name="imgsmail"
            defaultFileList={[]}
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
                 defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
                  control={control}
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
                   defaultValue=""
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
             defaultValue=""
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
                   defaultValue=""
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
                   defaultValue=""
                   control={control}
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

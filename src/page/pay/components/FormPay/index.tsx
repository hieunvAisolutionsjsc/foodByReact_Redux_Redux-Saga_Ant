import { Button, Input, message, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Pay from '../../../../common/pay';
import { location, LocationPick, PropsFormPay } from '../../interface';
import { ListLocation } from './../../interface';

export default function FormPay({handlePay} : PropsFormPay) {
  const {handleSubmit , control} = useForm() ; 

  const getTT  = async(url : string)  =>{
    const data = await fetch(url) ;
    return await data.json();
}
  const [listLocation , setListLocation] =useState<ListLocation>({
    tp : [] , 
    qh : [] , 
    px : []
  })
const [location , setLocation] = useState<LocationPick>({
  tp :{
    name : "" , 
    code : ""
  } , 
  qh : {
    name : "" , 
    code : ""

  } , 
  px : {

    name : "" , 
    code : ""
  },
  address : ""
});
useEffect(
  ()=>{
      getTT("https://api.mysupership.vn/v1/partner/areas/province")
      .then((result)=> {
         const data = result.results ; 
         setListLocation(prevState=>{

          return {
            ...prevState , 
            tp : data,
          }
         })
      if( location.tp.code){
        console.log("first1")
          getTT(`https://api.mysupership.vn/v1/partner/areas/district?province=${location.tp.code}`)
         .then((result)=> {
            const data = result.results ; 
            setListLocation(prevState=>{
   
             return {
               ...prevState , 
               qh : data,
             }
            })
          })
         }
      if( location.qh.code){
       console.log("first 2")
          getTT(`https://api.mysupership.vn/v1/partner/areas/commune?district=${location.qh.code}`)
          .then((result)=> {
             const data = result.results ; 
             setListLocation(prevState=>{
    
              return {
                ...prevState , 
                px : data,
              }
             })
           })
         }
         
        
      })
  }
  , [location])
  const handleOnchange =(e :ChangeEvent<HTMLSelectElement  > , name : string) :void =>{
    // const value = e.target.value ; 
  console.log(e)
    setLocation(prevState =>{
      return {
        ...prevState ,

        [name] : {
          code :  e
        }
      }
    })
    }
    const handleOnchangeAddress =(e :ChangeEvent<HTMLInputElement > ) :void =>{
      // const value = e.target.value ; 
    console.log(e)
      setLocation(prevState =>{
        return {
          ...prevState ,
  
          address : e.target.value
        }
      })
      }
  return (
    <div className="formpay">
        
    <form action="" onSubmit={handleSubmit(data=> console.log(data))}>
        <div className="container" id="address">
        <div className="selectTp">
            <p>Thành phố</p>
            <Select  
            style={{width : "200px"}} 
             className="select"  
             onChange={(e) => handleOnchange(e ,"tp")} 
             id="TP">
              {
                listLocation.tp.map((item :location, index)=>{
                  return <Option
                  // key={index}
                  
                  className="option" 
                  value={item.code}>{item.name}</Option>
                })
              }
            </Select>
          
            </div>
            <div className="selectTp" >
                <p>Huyện(Quận)</p>

                <Select  style={{width : "200px"}} className="select"  onChange={(e) => handleOnchange(e ,"qh")} id="QH">
                {
                  listLocation.qh.map((item , index)=>{
                    return <Option 
                    // key={index}
                    className="option"
                     value={item.code}>{item.name}</Option>
                  })
                }
                      </Select>
              
                </div>
                <div className="selectTp">
                    <p>Phường (Xã)</p>
                    <Select   style={{width : "200px"}}  className="select" onChange={(e) => handleOnchange(e ,"px")}  id="X">
                      
                   {
                    listLocation.px.map((item , index)=>{
                      return <Option
                      // key={index} 
                      className="option"
                       value={item.code}>{item.name}</Option>
                    })
                   }
                   </Select>
                  
                    </div>
                    <div className="dc">
                        <p >Địa chỉ</p>
                        <Input onChange={(e) => handleOnchangeAddress(e )} style={{width : "200px"}} type="text" name="dc" className="select" id="" />
                    </div>
                    </div>
                  
                    
    </form>
      <div className="pay">
       
    <Button type='primary' id="paybtn" onClick={handlePay}>Thanh toán</Button>
</div>
</div>
  )
}

import React, { ChangeEvent, EventHandler, FormEvent, MouseEvent, useState } from 'react'
import Food from '../../../common/food';
import {  PropsFormAdd, ItemDetail, Res, DataForm } from './../interface';
import { useDispatch } from 'react-redux';
import { storage } from '../../../firebase';
import { ref, uploadBytes ,getStorage ,listAll, getMetadata, getDownloadURL } from 'firebase/storage';
import "./style.css"
import { Button, Col, Input, Row, Upload } from 'antd';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload';
export default function FormAdd(props : PropsFormAdd) {
  const {  handleOpenAdd , isAdd  } = props;
  const dispatch  = useDispatch()
  const food = new Food() ;
  // const [file , setFile] = useState<File | null>(null)
  const [dataForm , setDataForm ] = useState<any>({
    id : "" ,
    imgbig  : "",
    imgsmail : "", 
    fileimgbig  :null,
    fileimgsmail : null, 
    dc  : "" ,
    name : "" ,
    price : 0 ,
    dc2 : "" ,
    contry : "",
    nameres :"ksdj",
    address : "klksjdk" , 
    quantities : 0 , 
    comment  : [],
    rate : 0 , 

  })
  
  const handleOnchange =(e:ChangeEvent<HTMLInputElement> ) : void=>{
    const target  = e.target as HTMLInputElement ; 
    console.log(e.target.value)
    const s : any  = {...target.attributes}
    console.log(s)
    const name =s[1].value ; 
    if(s[0].value === "file"){
      const file = {...e.target.files};
      const reader = new FileReader();
    reader.addEventListener("load", function (result) {
      console.log(result.target?.result)
      const data = result.target?.result;
      // convert image file to base64 string
      setDataForm((prevState :any) =>{
        return {
          ...prevState , 
          [name] : data,
          [`file${name}`] :file[0]
        }
      })
      }
    )
  
    if (file) {
     
     reader.readAsDataURL(file[0]);
    }
     }
  else{
    console.log(e)
    setDataForm((prevState : any) =>{
      console.log(e)
      return {
        ...prevState , 
        [e.target.name] :  e.target.value,
      }
    })
  }

  }
  const handleSubmitAdd =(e:  MouseEvent<HTMLButtonElement> ) : void =>{
    e.preventDefault();
 
    const dataSRes : Res = {
        name : dataForm.nameres , 
        address : dataForm.address
    }
    

 
    // const newData : DataForm= {
    //   id  : "",
    //   imgbig  : dataForm.imgbig,
    //   imgsmail  : dataForm.imgsmail, 
    //   dc  : dataForm.dc,
    //   name  : dataForm.name,
    //   price : dataForm.price,
    //   dc2  : dataForm.dc2,
    //   rate : 5 , 
    //   fileimgbig : dataForm.fileimgbig , 
    //   fileimgsmail : dataForm.fileimgsmail ,
    //   contry : dataForm.contry , 
    //   quantities : dataForm.quantities , 
    //   comments  : [] , 
    //    restaurant: dataSRes
      
    //   };
  //  hanhdleSetList(newData)
  //   handleOpenAdd()
}
  
  return (
    <div></div>
//     <div className={ isAdd === true ? "formadd addactive" : "formadd"  } id="formadd">
   
//     <div className="container"  >
//         <form action="" id="formadd" onSubmit={e=> e.preventDefault()} >
//           <Row gutter={[12,20]} >
//            <Col span={12} className="formadd__item file ">
//             <label htmlFor= "bigfile">Chose image(big)</label >
//              <input type="file"  
//                    name="imgbig"
//                    id="d"
//                    onChange={handleOnchange} />
 
//              <div className="file__img" id="imgbig">
//              {
//               dataForm.imgbig && <img src={dataForm.imgbig}  />
//              }
//              </div>
//            </Col>
//            <Col span={12} className="formadd__item file ">
//             <label htmlFor="smailfile" >Chose image(smail)</label >
//              <input 
//                     type="file" 
//                     name="imgsmail" 
//                     id="" 
//                     className="form__input2"
//                     onChange={handleOnchange}
//                     />
//              <div className="file__img smail" id="imgsmail">
//              {
//               dataForm.imgsmail && <img src={dataForm.imgsmail}  />
//              }
//              </div>
//            </Col>
//            <Col span={8} className="formadd__item">
//             <Input 
//                   allowClear
//                    type="text"
//                     className="form__input" 
//                     id="name" 
//                     name="name" 
//                     placeholder=""
                     
//                      onChange={handleOnchange}
//                      />
// <label htmlFor="" className="form__label">Name</label>
//            </Col>
//            <Col span={8} className="formadd__item">
           
//             <Input 
//                   allowClear
//                    type="text"
//                     className="form__input" 
//                     id="dc" 
//                     name="dc" 
//                     placeholder="" 
               
//                     onChange={handleOnchange}
//                     />
//             <label htmlFor="" className="form__label"> Describe(Full)</label>
//            </Col>
//            <Col span={8} className="formadd__item">
           
//             <Input 
//                   allowClear
//                    type="text" 
//                    className="form__input" 
//                    id="dc2" 
//                    name="dc2" 
//                    placeholder="" 
                  
//                    onChange={handleOnchange}
//                    />
//             <label htmlFor="" className="form__label">Describe(Short)</label>
//            </Col>
//            <Col span={8} className="formadd__item">
           
//             <Input 
//                   allowClear
//                    type="number" 
//                    className="form__input" 
//                    id="price" 
//                    name="price" 
//                    placeholder="" 
                 
//                    onChange={handleOnchange}
//                    />
//             <label htmlFor="" className="form__label">Price </label>
//            </Col>
//            <Col span={8} className="formadd__item">
           
//             <Input 
//                   allowClear
//                    type="text"
//              className="form__input" 
//              id="contry" 
//              name="contry" 
//              placeholder="" 
             
//              onChange={handleOnchange}
//              />
//             <label htmlFor="" className="form__label"> Country</label>
//            </Col>
       
//            <Col span={24} className="ncc">
//             <p>
//                 Restaurant</p>
//                 <Row gutter={[20,10]} >
//            <Col span={12} className="formadd__item">
//             <Input  
                  
//                   allowClear
//                    type="text"
//                    className="form__input" 
//                    id="adress" 
//                    name="address" 
//                    placeholder="" 
                 
//                    onChange={handleOnchange}
//                    />
// <label htmlFor="" className="form__label"> Address</label>
//            </Col>
//            <Col span={12} className="formadd__item">
            
//             <Input 
//                   allowClear
//                    type="text" 
//                    className="form__input" 
//                    id="nameres" 
//                    name="nameres" 
//                    placeholder="" 
                  
//                    onChange={handleOnchange}
//                     />
//             <label htmlFor="" className="form__label">Name</label>
//            </Col>
//            </Row>
//         </Col>
//         </Row>
//            <div className="formadd__item btn">
//               <button type="submit" onClick={handleSubmitAdd}>Save</button>
//               <button id="cancel" onClick={handleOpenAdd}>Cancel</button>
//            </div>
//         </form>
//     </div> 
// </div>
   )
}

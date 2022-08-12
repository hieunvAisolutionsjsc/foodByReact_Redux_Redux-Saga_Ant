import axios from "axios";
import { Action, AnyAction } from "redux";
import { takeLatest, put , call, takeEvery, take, fork, all, throttle, retry ,CallEffect, TakeEffect, TakeEffectDescriptor, PutEffect } from "redux-saga/effects";
import { isCallSignatureDeclaration } from "typescript";
import { actionAddFood, actionRemoveFood, actionSetFood, actionUpdateFood, Iaction } from "../acction";
import { DataForm, ItemDetail } from './../../page/manage/interface';
import { ref, uploadBytes ,getStorage ,listAll, getMetadata, getDownloadURL, deleteObject } from 'firebase/storage';
import store from "../../store";
import { storage } from "../../firebase";
import { message } from "antd";
import { makeid } from "../../common/makeId";

export function* setFood() : Generator<CallEffect | PutEffect> {
try {
    const food : any = yield call(()=>
    axios({
        method :"get", 
        url : "https://62cfa0e8486b6ce82658f3bd.mockapi.io/getFood/food"
    }))
  

    const listFood  : ItemDetail[]= food.data ; 
   
   yield  put(actionSetFood(listFood))  
} catch (error) {
    console.log(error)
}
   
    

}
function getRndInteger(min : number, max:number) {
   return Math.floor(Math.random() * (max - min) ) + min;
 }
export function* addFood(action :Iaction<any>) : Generator<CallEffect | PutEffect> {
    
     try {
       message.loading("Adding....." , 6)
       const imgsmail = action.payload.imgsmail.fileList[0].originFileObj ; 
       const imgbig = action.payload.imgbig.fileList[0].originFileObj ;
       console.log(imgbig) 
       const refApiImgBig =  ref(storage , `/images/${(makeid(5))}.${imgbig.type.split("/")[1]}`) ; 
       const refApiImgSmail = ref(storage , `/images/${(makeid(5))}.${imgsmail.type.split("/")[1]}`) ; 
       console.log(imgbig)
     const uploadImgSmail = yield call(()=>{

        return uploadBytes(refApiImgSmail , imgsmail) ; 
       } )
       const uploadImgBig = yield call(()=>{
       return uploadBytes(refApiImgBig , imgbig) ; 
        
       } )
       const urlImgBig  = yield call(()=>{
          return  getDownloadURL(refApiImgBig);
       })
       let urlImgSmail = yield call(()=>{
        return  getDownloadURL(refApiImgSmail);
     })
       console.log(urlImgBig ,"***************************************************8" ,  urlImgSmail) 
       
       const {  contry , dc ,dc2  ,
        name ,price ,
        restaurant , id  , handle} = action.payload ; 
       
     const dataFood : ItemDetail = {

        comments : [], contry , dc ,dc2  ,id 
         ,name ,price: Number(price) ,
          quantities :  1 ,rate : 5,
        restaurant  , imgbig : urlImgBig , 
        imgsmail : String(urlImgSmail) , 
     }
    
       const food : any = yield call(()=>
    axios({
        method :"post", 
        url : "https://62cfa0e8486b6ce82658f3bd.mockapi.io/getFood/food", 
        data : dataFood
    }))
     message.success("Added" )
    yield handle()

  
       yield  put(actionAddFood(dataFood)) 
    } catch (error) {
        console.log(error)
    }
       
        
    
    }
export function* removeFood(action : AnyAction) : Generator<CallEffect | PutEffect>{
   try {
      const removeAs = yield call(()=>
         axios({
            method : "DELETE" , 
            baseURL : `https://62cfa0e8486b6ce82658f3bd.mockapi.io/getFood/food/${action.payload.id}`
         })
         
      );
      let imgSmailName= action.payload.imgsmail.split("images")[1].split("?")[0] ; 
      imgSmailName =imgSmailName.slice(3, imgSmailName.length) ; 
      let imgBigName= action.payload.imgbig.split("images")[1].split("?")[0] ; 
      imgBigName =imgBigName.slice(3, imgBigName.length) ; 
      console.log(imgBigName , imgSmailName)
      const storage = getStorage();
const desertRefBig = ref(storage, `images/${imgBigName}`);
const desertRefSmall = ref(storage, `images/${imgSmailName}`);
      yield call(()=>{
      deleteObject(desertRefBig)
     } )
     yield call(()=>{
      deleteObject(desertRefSmall)
     } )
      yield put(actionRemoveFood(action.payload.id))
       message.success("Deleted")
   } catch (error) {
      console.log(error)
   }
}
function* updateFood(action : AnyAction) : Generator<CallEffect | PutEffect>{
  
   try {
      message.loading("Updating....." , 1.5)
      let urlImgSmail , urlImgBig ;
      if(action.payload.imgsmail.fileList.length>=1){
         console.log("dd")
         const imgsmail = action.payload.imgsmail.fileList[0].originFileObj ; 
         const refApiImgSmail = ref(storage , `/images/${(makeid(5))}.${imgsmail.type.split("/")[1]}`) ; 
         const uploadImgSmail = yield call(()=>{

            return uploadBytes(refApiImgSmail , imgsmail) ; 
           } )
           urlImgSmail = yield call(()=>{
            return  getDownloadURL(refApiImgSmail);
         })
      }
      if(action.payload.imgbig.fileList>=1){
         const imgbig = action.payload.imgbig.fileList[0].originFileObj ;
         console.log(imgbig) 
         const refApiImgBig =  ref(storage , `/images/${(makeid(5))}.${imgbig.type.split("/")[1]}`) ; 
         
         console.log(imgbig)
      
         const uploadImgBig = yield call(()=>{
         return uploadBytes(refApiImgBig , imgbig) ; 
          
         } )
          urlImgBig  = yield call(()=>{
            return  getDownloadURL(refApiImgBig);
         })
         
      }
     
      
      console.log(urlImgBig ,"***************************************************8" ,  urlImgSmail) 
      
      const {  contry , dc ,dc2  ,
       name ,price ,
       restaurant , id  , handle} = action.payload ; 
      
    let dataFood : any = {

        contry , dc ,dc2  
        ,name ,price: Number(price) ,
       restaurant  ,  imgbig : urlImgBig , 
       imgsmail : String(urlImgSmail) , 
    }
    if(urlImgBig=== undefined) {
      delete dataFood.imgbig
    }
    if(urlImgSmail=== undefined) {
      delete dataFood.imgsmail
    }
   
      const food : any = yield call(()=>
   axios({
       method :"put", 
       url : `https://62cfa0e8486b6ce82658f3bd.mockapi.io/getFood/food/${id}`, 
       data : dataFood
   }))
    message.success("Updated" )
    yield put(actionUpdateFood({...dataFood , id : id}))
   yield handle()

 
      yield  put(actionAddFood(dataFood)) 
   } catch (error) {
       console.log(error)
   }
}
function* watchData() {
      yield  takeLatest("SET_FOOD_AS" , setFood) ; 
      yield  takeLatest("ADD_FOOD_AS" , addFood) ;
      yield  takeLatest("REMOVE_FOOD_AS" , removeFood) ;
      yield takeLatest("UPDATE_FOOD_AS" , updateFood)
}
export default watchData 


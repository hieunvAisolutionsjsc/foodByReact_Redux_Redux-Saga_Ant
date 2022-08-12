import { FileHandle } from "fs/promises"
import { ObjectType } from "typescript"

export interface ItemDetail {
    id : string ,
    imgbig  : any | undefined, 
    dc  : string ,
    name : string ,
    price : number ,
    contry : string | undefined,
    imgsmail : string | undefined, 
    dc2 : string ,
    rate : number,
    restaurant :Res ,
    quantities : number , 
    comments  : PropsCommentItem[] | undefined ,
    }

    
    export interface DataForm {
        
        imgbig  : any, 
        imgsmail :  any, 
        dc  : string ,
        name : string ,
        price : string ,
        dc2 : string ,
        contry : string,
        restaurant :Res ,

        }
    export interface PropsCommentItem {
        name : string  , 
        avatar : string , 
        comment : string
   }
 export  interface Res {
    name : string, 
    address : string 
}
export interface PropsListManage {
    listFood : ItemDetail[] , 
    loadmore : number,
    handleUpdate(id : ItemDetail) : void
}
export interface Sort{
    name : string  , 
    status : string
}

    export interface PropsFormAdd {
        handleOpenAdd() : void ,
        isAdd  : boolean,
        dataUpdate : any , 
        
         
    }

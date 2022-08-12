
export interface PropsPay{
    handleMess(mess : string) : void , 

}
 interface Res {
    name : string , 
    address : string
}
export interface PropsCartList {
    listCart  : ItemDetail[] ,
     handleInRe(type : string , id : string ) : void ,
    handleRemove(id : string) : void
}
 export interface ItemDetail {
    id : string ,
    imgbig  : any, 
    dc  : string ,
    name : string ,
    price : number ,
    dc2 : string ,
    restaurant :Res ,
    quantities : number , 
    rate : number , 
    imgsmail : string,
    contry : string , 
    comments  : PropsCommentItem[] , 
}
export interface PropsCommentItem {
     name : string  , 
     avatar : string , 
     comment : string ,
}
export interface PropsList {
    listFood : ItemDetail[]
}
export interface PropsFormPay{
    handleMess(mess : string ) : void 
}
export interface location {
    code : string | undefined, 
    name : string | undefined , 
}
export interface LocationPick{
    tp : location , 
    qh : location  , 
    px : location 
}
export  interface ListLocation {
    tp : location[] |[] ,
    qh : location[] |[]  ,
    px : location[] |[] ,
}

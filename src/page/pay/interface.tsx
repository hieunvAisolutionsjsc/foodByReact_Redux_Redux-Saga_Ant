
export interface PropsPay{
    handleMess(mess : string) : void , 

}
 interface Res {
    name : string , 
    address : string
}
export interface PropsDetail {
    handleMess(mess : string) : void
}
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
    namePage : string,
    comments  : PropsCommentItem[] | undefined ,
}
export interface PropsCommentItem {
     name : string  , 
     avatar : string , 
     comment : string
}
export interface PropsList {
    listFood : ItemDetail[]
}
export interface PropsFormPay{
    handlePay( ) : void 
}
export interface location {
    code : string | undefined, 
    name : string | undefined , 
}
export interface LocationPick{
    tp : location , 
    qh : location  , 
    px : location |{} , 
    address : string
}
export  interface ListLocation {
    tp : location[] |[] ; 
    qh : location[] |[]  ; 
    px : location[] |[] ;
}
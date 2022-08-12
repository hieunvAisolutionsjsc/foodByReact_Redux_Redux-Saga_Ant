

export interface PropsList{
    handleMess(mess : string  | null) : void , 

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
    comments  : PropsCommentItem[] | undefined , 
}
export interface PropsCommentItem {
     name : string  , 
     avatar : string , 
     comment : string
}
export interface category{

       category : string,
        changeCategory(name : string ) : void
    
} 
export interface categoryItem{
    img : string,
    name : string,
    nameT : string ,
    category :string,
    changeCategory(name : string ) : void
}
export interface listFood {
    listFood : ItemDetail[] | [] , 
    handleMess(mess : string | null)  : void 
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
    tp : location[] |[] ; 
    qh : location[] |[]  ; 
    px : location[] |[] ;
}
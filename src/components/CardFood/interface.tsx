

 interface Res {
    name : string , 
    address : string
}

 export interface cardFood {
id : string ,
col : number , 
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
handleAddCart(item : dataCart ) : void,
    handleBuyNow(item : dataCart)  :void
}
export interface  dataCart{
    name : string,
     imgbig : string  ,
    restaurant : Res, 
    contry : string | undefined ,
     dc : string ,
     dc2 : string,
      comments :PropsCommentItem[] | undefined ,
      id: string ,
      imgsmail : string | undefined, 
      price :number,
       rate : number
}
export interface PropsCommentItem {
     name : string  , 
     avatar : string , 
     comment : string
}

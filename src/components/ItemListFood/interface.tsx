

 interface Res {
    name : string , 
    address : string
}

 export interface cardFood {
id : string ,
stt : number | undefined,
imgbig  : any | undefined, 
dc  : string ,
name : string ,
price : number ,
contry : string | undefined,
imgsmail : string | undefined, 
dc2 : string ,
rate : number,
restaurant :Res ,
quantities : number  | undefined , 
namePage : string,
comments  : PropsCommentItem[] | undefined , 
handleInRe(type: string , id :string) : void  | undefined, 

handleRemove(id : string) : void |undefined
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

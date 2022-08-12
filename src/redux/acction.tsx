
import { ItemDetail } from './../page/manage/interface';
export interface Iaction<Type>{
    type : string , 
    payload : Type
}
const actionSetFood =(data: ItemDetail[]) : Iaction<ItemDetail[]>=>{
  

    return {
        type : "SET_FOOD" , 
        payload: data , 
    }
}
const actionAddFood =(data: ItemDetail) : Iaction<ItemDetail>=>{
    return {
        type : "ADD_FOOD" , 
        payload: data , 
    }
}
const actionUpdateFood =(data: any) : Iaction<ItemDetail>=>{
    return {
        type : "UPDATE_FOOD" , 
        payload: data , 
    }
}
const actionRemoveFood = (id : string) =>{
        return {
            type : "REMOVE_FOOD" , 
            payload : id
        }
}
export {actionSetFood , actionAddFood , actionRemoveFood , actionUpdateFood}
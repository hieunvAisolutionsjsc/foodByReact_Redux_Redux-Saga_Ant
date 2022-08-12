
import { Action } from 'redux';
import { Statement } from 'typescript';
import { RootState } from '../store';
import { ItemDetail } from './../page/list/interface';
import { Iaction } from './acction';
interface initial<Type> {
    data : Type | [] , 
    name : string
}
let initialState : initial<ItemDetail[]> ={
    data : [] , 
    name : "food"
};
const foodReducer =(state = initialState , action : Iaction<any> )=> {
     switch (action.type) {
        case "SET_FOOD":
            console.log(action)
            let newState = {...state , data : action.payload}
            return  newState
            break;
     case "ADD_FOOD" : 
     let newData = [...state.data , action.payload]
     console.log(action)

     return {
       
        ...state ,
        data :newData
      }
     break ; 
     case "REMOVE_FOOD" : 
     const newDataR  = state.data.filter((item)=>{
   
              return item.id !== action.payload
     })
   
     return {
        ...state , 
        data : newDataR
     }
     break ; 
     case "UPDATE_FOOD" : 
        const newDataU = state.data.map((item)=> item.id === action.payload.id ?
                                                   {...item , ...action.payload} 
                                                   : item
        )
        return {
            ...state , 
            data : newDataU
        }
     break ; 
        default:
            return state
            break;
     }
}
export default foodReducer
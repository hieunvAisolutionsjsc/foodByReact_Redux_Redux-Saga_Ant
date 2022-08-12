import { combineReducers } from "redux";
import foodReducer from './reducer';
const combine = combineReducers({
    food : foodReducer
  }) 
  export default combine
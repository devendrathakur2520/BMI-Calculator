import { combineReducers } from 'redux';
import bmiFormData from './bmiForm' 
import setAllData from './setData';
import allUserName from './userName';
//import { setBmiData } from '../action';
 const reducer = combineReducers({
    bmiFormData,
    setAllData,
    allUserName
});
export default reducer;
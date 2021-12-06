import { SET_DATA, SET_STORE_DATA } from "../action";
import { getData, storeData } from '../helpers/localStorage';

  const  initialState = {

        setLocalData: getData('data') || [],
        setData: {}

    }
export default function setAllData(state = initialState, action) {
    //console.log("thakur",action.payload)
    //console.log("local",getLocalData())

    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                setLocalData: action.payload,
            }
            
        case SET_STORE_DATA:
            return {
                ...state,
                setData: action.payload,
            }
        default:
            return state;
    }

}
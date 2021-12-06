import { BMI_FORM, SET_BMI_DATA } from "../action";
const initialState = {
    data: {
        weight: '',
        height: '',
        date: '',
    }, submitData: []
}
export default function bmiFormData(state = initialState, action) {
    switch (action.type) {
        case BMI_FORM:
            return {
                ...state,
                data: action.payload,
            }
        case SET_BMI_DATA:
            return {
                ...state,
                submitData: action.payload,
            }

        default:
            return state;
    }

}
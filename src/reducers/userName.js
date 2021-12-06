import { USER_NAME, SUBMIT_NAME } from "../action";

const initialState = {
    name: "",
    submit:[]
}
export default function allUserName(state = initialState, action) {


    switch (action.type) {
        case USER_NAME:
            return {
                ...state,
                name: action.payload,
            }
        case SUBMIT_NAME:
            return {
                ...state,
                submit: action.payload,
            }
        default:
            return state;
    }

}
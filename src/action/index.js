export const SET_DATA= 'GET_DATA';
export const BMI_FORM= 'BMI_FORM';
export const SET_BMI_DATA= 'SET_BMI_DATA';
export const SET_STORE_DATA= 'STORE_DATA';
export const USER_NAME= 'USER_NAME';
export const SUBMIT_NAME= 'SUBMIT_NAME';


export const  setData= (payload) => ({ type: SET_DATA, payload });
export const  bmiForm= (payload) => ({ type: BMI_FORM, payload });
export const  setBmiData= (payload) => ({ type: SET_BMI_DATA, payload });
export const  setStoreData= (payload) => ({ type: SET_STORE_DATA, payload });
export const  setUserName= (payload) => ({ type: USER_NAME, payload });
export const  submitUserName= (payload) => ({ type: SUBMIT_NAME, payload });
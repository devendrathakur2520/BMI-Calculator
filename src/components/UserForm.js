import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, submitUserName } from '../action';
import { useHistory } from "react-router";
//import allUserName from '../reducers/userName';


export const Users = () => {
    const history = useHistory();
    const Name = useSelector((state) => state.allUserName.name)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        //let { value, name } = e.target;
        dispatch(setUserName({ ...Name, [e.target.name]: e.target.value }));
    }

    const submit = (e) => {
        e.preventDefault();
        dispatch(submitUserName(Name))
        history.push("/App");

    }
    return (
        <>
            <div>
                <form onSubmit={submit}>
                    Name:
                    <input type="text" name="name" value={Name.name} onChange={handleChange}
                        placeholder="Enter your Name" />
                    <br /><br />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </>
    )
}
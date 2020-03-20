import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authContext";
import API from "../../utils/API"
import {
    SUCCESS_REGISTER,
    SUCCESS_LOGIN,
    FAIL_REGISTER,
    FAIL_LOGIN

} from "../types"


const AuthState = (props) => {
    const initialState = {
        userAuth: null,
        errors: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)
    //register user action 
    const registerUser = async userData => {
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }
        try {
            const res = await API.addUser(userData).then(
                dispatch({
                    type: SUCCESS_REGISTER,
                    payload: res.data
                })
            )
        } catch (err) {
            dispatch({
                type: FAIL_REGISTER,
                payload: err.res.data
            })
        }
    }

    //login user action

    const loginUser = async userData => {
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }
        try {
            const res = await API.getUser(userData)
                .then(
                    dispatch({
                        type: SUCCESS_LOGIN,
                        payload: res.data
                    })
                )
        } catch (err) {
            dispatch({
                type: FAIL_LOGIN,
                payload: err.res.data
            })
        }
    }
    return (
        <AuthContext.provider value={{
            userAuth: state.userAuth,
            errors: state.errors,
            registerUser,
            loginUser
        }} > {props.children} </AuthContext.provider >

    )


}

export default AuthState;

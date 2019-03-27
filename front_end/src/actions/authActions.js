import {LOGIN_USER, SIGN_OUT_USER} from "../Constants/authConstants";
import {closeModal} from "./modalActions";
import setAuthToken from "../util/setAuthToken";
import axios from "axios";
import jwt_decode from 'jwt-decode'
import {GET_ERRORS} from "../Constants/Error";


export const registerUser = (userData) => dispatch => {
    axios.post('/api/v1/users', userData)
        .then(res =>{
            dispatch(login(userData))
        } )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const login = (user) => {
    return dispatch => {
        axios.post('/api/v1/login', user)
            .then(res => {
                // save to localStorage
                const { token } = res.data
                // set to localStorage
                localStorage.setItem('jwtToken', token)
                // set token to auth header
                setAuthToken(token)
                // decode token to get user data
                const decoded = jwt_decode(token)
                //set current user
                dispatch({type: LOGIN_USER, payload: decoded})
                dispatch(closeModal())
            })
            .catch(err =>{
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data
                    })
            }


            )
    }
}

export const logout = () => {

    return dispatch => {
        // remove token from localStorage
        localStorage.removeItem('jwtToken')
        //remove auth header for future requests
        setAuthToken(false)
        dispatch({ type: SIGN_OUT_USER})
    }
}
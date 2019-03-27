import {LOGIN_USER, SIGN_OUT_USER} from "../Constants/authConstants";


const initialState = {
    currentUser: {},
    authenticated: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        case LOGIN_USER: {
            return {
                ...state,
                authenticated: true,
                currentUser: action.payload
            }
        }

        case SIGN_OUT_USER: {
            return {
                ...state,
                authenticated: false,
                currentUser: {}
            }
        }

        default: {
            return state
        }

    }
}
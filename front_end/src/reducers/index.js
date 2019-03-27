import { combineReducers } from 'redux'
import authReducer from './authReducer';
import eventReducer from "./eventReducer";
import {reducer as FromReducer} from "redux-form"
import modalReducer from "./modalReducer";
import errorReducer from "./errorReducer";
import locationsReducer from "./locationsReducer";


export default combineReducers({
    auth: authReducer,
    events: eventReducer,
    form: FromReducer,
    modal: modalReducer,
    error: errorReducer,
    locations: locationsReducer
})
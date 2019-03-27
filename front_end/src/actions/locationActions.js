import axios from "axios";
import {GET_ERRORS} from "../Constants/Error";
import {CREATE_LOCATION, GET_LOCATIONS} from "../Constants/locationConstants";

export const createLocation = (location) => dispatch => {
    axios.post('/api/v1/locations', location)
        .then(res => {
            dispatch({
                type: CREATE_LOCATION,
                payload: res.data.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
        })
}

export const updateLocation = (location, id) => dispatch => {

    axios.put(`/api/v1/locatoins/${id}`, location)
        .then(res => {
            dispatch({
                type: CREATE_LOCATION,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
        })
}


export const getLocations = () => dispatch => {
    axios.get(`/api/v1/locations/`)
        .then(res => {
            dispatch({
                type: GET_LOCATIONS,
                payload: res.data.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        })
}

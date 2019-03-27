import {DELETE_EVENT, GET_EVENT, GET_EVENTS} from "../Constants/EventConstants";
import  axios from "axios";
import {GET_ERRORS} from "../Constants/Error";

export const createEvent = (event,history) => dispatch => {
    axios.post('/api/v1/events',event)
        .then(res => {
            history.push(`/events/${res.data.id}`)})
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
        })
}

export const updateEvent = (event,history,id) => dispatch => {

    axios.put(`/api/v1/events/${id}`,event)
        .then(res => {
            history.push(`/events/${id}`)})
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
        })
}


export const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        payload: {
            eventId
        }
    }
}


export const getEvent = (id) => dispatch => {
    axios.get(`/api/v1/events/${id}`)
        .then(res => {
            dispatch({
            type: GET_EVENT,
            payload: res.data.data
        })})
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        })
}

export const joinEvent = (data) => dispatch => {
    axios.post("/api/v1/event_attendees",data)
        .then(res =>{

                dispatch({
                    type: GET_EVENT,
                    payload: res.data.data
                })
        }
            )
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
        })
}
export const cancelJoinEvent = (id) => dispatch => {
    axios.delete(`/api/v1/event_attendees/${id}`)
        .then(res =>{
            dispatch(getEvent(id))
            }
        )
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
        })
}

export const getEvents = () => dispatch => {
    axios.get('/api/v1/events')
        .then(res => {
            dispatch({
                type: GET_EVENTS,
                payload: res.data.data
            })})
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
        })
}
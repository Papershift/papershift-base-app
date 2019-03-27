import {CREATE_EVENT, DELETE_EVENT, GET_EVENT, GET_EVENTS, JOIN_EVENT, UPDATE_EVENT} from "../Constants/EventConstants";

const initialState = {
    event: {},
    events: [],
    attendees: []
};

export default function (state = initialState, action) {

    switch (action.type) {

        case CREATE_EVENT: {
            return {
                ...state,
                event: action.payload,
            }
        }

        case UPDATE_EVENT: {
            return [
                ...state.filter(event => event.id !== action.payload.event.id),
                Object.assign({}, action.payload.event)
            ]
        }

        case DELETE_EVENT: {
            return [
                ...state.filter(event => event.id !== action.payload.eventId)
            ]
        }

        case GET_EVENTS: {
            return {
                ...state,
                events: action.payload,
            }
        }

        case GET_EVENT: {
            return {
                ...state,
                event: action.payload,
            }
        }

        case JOIN_EVENT: {
            return {
                ...state,
                event:action.payload,
            }
        }

        default: {
            return state
        }

    }

}
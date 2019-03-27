import {CREATE_LOCATION, GET_LOCATIONS, UPDATE_LOCATION} from "../Constants/locationConstants";


const initialState = {
    locations: []

};

export default function (state = initialState, action) {

    switch (action.type) {

        case CREATE_LOCATION: {
            return {
                ...state,
            }
        }

        case UPDATE_LOCATION: {
            return [
                ...state.filter(event => event.id !== action.payload.event.id),
                Object.assign({}, action.payload.event)
            ]
        }



        case GET_LOCATIONS: {
            return {
                locations: action.payload,
            }
        }


        default: {
            return state
        }

    }

}
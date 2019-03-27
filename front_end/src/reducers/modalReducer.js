import {MODAL_CLOSE, MODAL_OPEN} from "../Constants/modalConstants";

const initialState = null

export default function (state = initialState, action) {

    switch (action.type) {

        case MODAL_OPEN: {
            const {modalType, modalProps} = action.payload;
            return {modalType, modalProps}
        }

        case MODAL_CLOSE: {
            return null
        }

        default: {
            return state
        }

    }

}
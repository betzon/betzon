import { OPEN_MODAL, CLOSE_MODAL } from "../types";

const initialState = {
    toggle: false
};

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            console.log('IN REDUCER')
            return {
                ...state,
                toggle: true
            };

        case CLOSE_MODAL:
            return {
                ...state,
                toggle: false
            };

        default:
            return state;
    }
}

export default modalReducer;
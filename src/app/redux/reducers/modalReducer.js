import { OPEN_MODAL, CLOSE_MODAL, CLOSE_USER_MODAL, OPEN_USER_MODAL } from "../types";

const initialState = {
    toggle: false,
    userModal: true
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

        case OPEN_USER_MODAL:
            console.log('IN REDUCER')
            return {
                ...state,
                userModal: true
            };

        case CLOSE_USER_MODAL:
            return {
                ...state,
                userModal: false
            };

        default:
            return state;
    }
}

export default modalReducer;
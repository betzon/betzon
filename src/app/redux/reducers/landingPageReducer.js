import { WAITLIST_SIGN_UP_DEFAULT, WAITLIST_SIGN_UP_FAILED, WAITLIST_SIGN_UP_SUCCESS, WAITLIST_SIGN_UP_FAILED_RESET } from "../types";

const initialState = {
    status: 0,
    error: {
        status: false,
        message: ''
    }
};

// 0 --> form is out because nothing has been submitted yet
// 1 --> Successful because form has been submitted
// -1 --> Error response from form being submitted

function landingPageReducer(state = initialState, action) {
    switch (action.type) {
        case WAITLIST_SIGN_UP_DEFAULT:
            return {
                ...state,
                status: 0,
                error: {
                    status: false,
                    message: ''
                }
            };

        case WAITLIST_SIGN_UP_FAILED:
            return {
                ...state,
                error: {
                    status: true,
                    message: action.payload
                }
            };



        case WAITLIST_SIGN_UP_FAILED_RESET:
            return {
                ...state,
                error: {
                    status: false,
                    message: ''
                }
            };

        case WAITLIST_SIGN_UP_SUCCESS:
            return {
                ...state,
                status: 1
            };

        default:
            return state;
    }
}

export default landingPageReducer;


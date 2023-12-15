import {
    WAITLIST_SIGN_UP_DEFAULT,
    WAITLIST_SIGN_UP_SUCCESS,
    WAITLIST_SIGN_UP_FAILED,
    WAITLIST_SIGN_UP_FAILED_RESET,
    HELP_CENTER_CONTACT_SUPPORT_SUCCESS,
    HELP_CENTER_CONTACT_SUPPORT_FAILURE,
    HELP_CENTER_CONTACT_SUPPORT_DEFAULT,
    HELP_CENTER_CONTACT_SUPPORT_RESET_FAILURE
} from "../types";

const initialState = {
    waitlist: {
        status: 0,
        error: {
            status: false,
            message: ''
        }
    },
    helpcenter: {
        contactSupport: {
            status: 0,
            error: {
                status: false,
                message: ''
            }
        }
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
                waitlist: {
                    ...state.waitlist,
                    error: {
                        status: false,
                        message: ''
                    }
                }
            };

        case WAITLIST_SIGN_UP_FAILED:
            return {
                ...state,
                waitlist: {
                    ...state.waitlist,
                    error: {
                        status: true,
                        message: action.payload
                    }
                }
            };

        case WAITLIST_SIGN_UP_FAILED_RESET:
            return {
                ...state,
                waitlist: {
                    ...state.waitlist,
                    error: {
                        status: false,
                        message: ''
                    }
                }
            };

        case WAITLIST_SIGN_UP_SUCCESS:
            return {
                ...state,
                waitlist: {
                    ...state.waitlist,
                    status: 1
                }
            };

        case HELP_CENTER_CONTACT_SUPPORT_RESET_FAILURE:
            return {
                ...state,
                helpcenter: {
                    ...state.helpcenter,
                    contactSupport: {
                        ...state.helpcenter.contactSupport,
                        error: {
                            status: false,
                            message: ''
                        }
                    }
                }
            };

        case HELP_CENTER_CONTACT_SUPPORT_FAILURE:
            return {
                ...state,
                helpcenter: {
                    ...state.helpcenter,
                    contactSupport: {
                        ...state.helpcenter.contactSupport,
                        error: {
                            status: true,
                            message: action.payload
                        }
                    }
                }
            };

        case HELP_CENTER_CONTACT_SUPPORT_SUCCESS:
            return {
                ...state,
                helpcenter: {
                    ...state.helpcenter,
                    contactSupport: {
                        ...state.helpcenter.contactSupport,
                        status: 1
                    }
                }
            };

        default:
            return state;
    }
}

export default landingPageReducer;


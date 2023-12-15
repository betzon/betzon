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
import api from '../../config/axios'

export const waitListSignUpRequest = (userInfo) => {
    return async (dispatch) => {
        // Start the fetch operation
        try {
            const update = {
                first_name: userInfo.first_name,
                last_name: userInfo.last_name,
                email: userInfo.email
            };
            //const response = await api.post(`${process.env.API_URL}:3001/api/landing/waitlist/add`, update)
            const response = await api.post(`/api/landing/waitlist/add`, update)
            console.log(response)
            dispatch(setWaitlistSuccess());
        } catch (error) {
            console.log('ERROR HERE')
            console.error(error.response.data.message);
            dispatch(setWaitlistFail(error.response.data.message));

        }
    };
};

export const setWaitlistSuccess = () => {
    return {
        type: WAITLIST_SIGN_UP_SUCCESS
    }
}

export const setWaitlistDefault = () => {
    return {
        type: WAITLIST_SIGN_UP_DEFAULT
    }
}

export const setWaitlistFail = (message) => {
    return {
        type: WAITLIST_SIGN_UP_FAILED,
        payload: message
    }
}

//CONTACT SUPPORT

export const helpCenterContactSupport = (userInfo) => {
    return async (dispatch) => {
        // Start the fetch operation
        try {
            // After successful fetch, dispatch the action
            const update = {
                full_name: userInfo.full_name,
                email: userInfo.email,
                message: userInfo.message
            };
            const response = await api.post(`/api/landing/help-center/contact-support`, update)
            console.log(response)
            dispatch(setHelpCenterContactSupportSuccess());
        } catch (error) {
            console.log('ERROR HERE')
            console.error(error.response.data.message);
            dispatch(setHelpCenterContactSupportFailure(error.response.data.message));

        }
    };
};

export const setHelpCenterContactSupportDefault = () => {
    return {
        type: HELP_CENTER_CONTACT_SUPPORT_DEFAULT
    }
}

export const setHelpCenterContactSupportSuccess = () => {
    return {
        type: HELP_CENTER_CONTACT_SUPPORT_SUCCESS
    }
}

export const setHelpCenterContactSupportFailure = (message) => {
    return {
        type: HELP_CENTER_CONTACT_SUPPORT_FAILURE,
        payload: message
    }
}

export const setHelpCenterContactSupportResetFailure = () => {
    return {
        type: HELP_CENTER_CONTACT_SUPPORT_RESET_FAILURE
    }
}
import { WAITLIST_SIGN_UP_DEFAULT, WAITLIST_SIGN_UP_SUCCESS, WAITLIST_SIGN_UP_FAILED, WAITLIST_SIGN_UP_FAILED_RESET } from "../types";
import api from '../../config/axios'

export const waitListSignUpRequest = (userInfo) => {
    return async (dispatch) => {
        // Start the fetch operation
        try {
            // After successful fetch, dispatch the action

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


export const resetWaitlistFail = () => {
    return {
        type: WAITLIST_SIGN_UP_FAILED_RESET
    }
}
import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from "../types";

export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}


export const incrementByAmount = (amount) => {
    return async (dispatch) => {
        // Start the fetch operation
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            let data = await response.json();

            console.log("Fetched data:", data);
            // After successful fetch, dispatch the action
            dispatch({
                type: INCREMENT_BY_AMOUNT,
                payload: amount
            });

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error.message);

            // Optionally, dispatch an error action here if you want to handle this in your state
            // dispatch({
            //     type: FETCH_ERROR,
            //     payload: error.message
            // });
        }
    };
};
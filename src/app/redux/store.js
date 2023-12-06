"use client"
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import counterReducer from './reducers/testReducer';
import leagueBarReducer from './reducers/leagueBarReducer';
import modalReducer from './reducers/modalReducer';
import landingPageReducer from './reducers/landingPageReducer';

export default configureStore({
    reducer: {
        landing: landingPageReducer,
        counter: counterReducer,
        leagues: leagueBarReducer,
        modal: modalReducer
    },
}, applyMiddleware(thunk))
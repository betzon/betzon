"use client"
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import counterReducer from './reducers/testReducer';
import leagueBarReducer from './reducers/leagueBarReducer';

export default configureStore({
    reducer: {
        counter: counterReducer,
        leagues: leagueBarReducer
    },
}, applyMiddleware(thunk))
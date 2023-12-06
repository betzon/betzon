import { SET_CALENDAR_DATE, SET_CURRENT_LEAGUE } from "../types";

const initialState = {
    league: [
        {
            title: 'Home',
            status: true

        },
        {
            title: 'NBA',
            status: false

        },
        {
            title: 'NFL',
            status: false
        },
        {
            title: 'MLB',
            status: false
        },
        {
            title: 'NHL',
            status: false
        }
    ],
    feed: [],
    dateSelected: new Date().toString(),
    indexSelected: 0
};

function leagueBarReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_LEAGUE:
            return {
                ...state,
                league: state.league.map((item, i) => ({
                    ...item,
                    status: i === action.payload.index
                })),
                feed: action.payload.feed
            };

        case SET_CALENDAR_DATE:
            return {
                ...state,
                dateSelected: action.payload.date,
                indexSelected: action.payload.index
            };
            
        default:
            return state;
    }
}

export default leagueBarReducer;


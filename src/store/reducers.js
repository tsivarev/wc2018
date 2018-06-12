import liveEvents from './live_events/reducer';
import leaderboards from './leaderboards/reducer';
import players from './players/reducer';
import groups from './groups/reducer';

import {routerReducer} from "react-router-redux";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    groups,
    liveEvents,
    leaderboards,
    players,
    router: routerReducer,
});
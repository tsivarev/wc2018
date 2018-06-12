import liveEvents from './live_events/reducer';
import leaderboards from './leaderboards/reducer';
import teams from './teams/reducer';
import groups from './groups/reducer';

import {routerReducer} from "react-router-redux";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    groups,
    liveEvents,
    leaderboards,
    teams,
    router: routerReducer,
});
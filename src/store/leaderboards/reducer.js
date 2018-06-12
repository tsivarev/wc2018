import Immutable from 'seamless-immutable';
import _ from 'lodash';
import * as types from './actionTypes';

const initialState = Immutable({
    leaderboards: undefined
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.LEADERBOARDS_FETCHED:
            return state.merge({
                groupLeaderboards: action.groupLeaderboards
            });
        default:
            return state;
    }
}

export function getGroupLeaderboards(state) {
    return _.keys(state.leaderboards.groupLeaderboards);
}

export function getLeaderboardByGroup(state) {
    return state.leaderboards.groupLeaderboards;
}

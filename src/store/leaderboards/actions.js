import _ from 'lodash';
import * as types from './actionTypes';
import radarServices from '../../services/radar';

export function fetchLeaderboards() {
    return async (dispatch, getState) => {
        try {
            const leaderboardsArray = await radarServices.getGroupLeaderboards();
            const groupLeaderboards = _.keyBy(leaderboardsArray, (leaderboard) => leaderboard.group);
            dispatch({type: types.LEADERBOARDS_FETCHED, groupLeaderboards: groupLeaderboards});
        } catch (error) {
            console.error(error);
        }
    };
}
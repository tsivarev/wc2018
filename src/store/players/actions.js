import _ from 'lodash';
import * as types from './actionTypes';
import radarServices from '../../services/radar';

export function fetchTeams() {
    return async (dispatch, getState) => {
        try {
            const teamsArray = await radarServices.getTeams();
            const teams = _.keyBy(teamsArray, (team) => team.id);
            dispatch({type: types.TEAMS_FETCHED, teams: teams});
        } catch (error) {
            console.error(error);
        }
    };
}
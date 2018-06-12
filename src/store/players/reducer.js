import Immutable from 'seamless-immutable';
import _ from 'lodash';
import * as types from './actionTypes';

const initialState = Immutable({
    teams: undefined
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.TEAMS_FETCHED:
            return state.merge({
                teams: action.teams
            });
        default:
            return state;
    }
}

export function getTeamsById(state) {
    return state.players.teams;
}

export function getTeamsArray(state) {
    return _.keys(state.players.teams);
}

export function getPlayersByTeam(team, state) {
    return state.players.teams[team].players;
}
import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
    groups: undefined
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.GROUPS_FETCHED:
            return state.merge({
                groups: action.groups
            });
        default:
            return state;
    }
}

export function getGroups(state) {
    return state.groups.groups;
}
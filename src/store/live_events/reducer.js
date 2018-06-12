import Immutable from 'seamless-immutable';
import _ from 'lodash';
import * as types from './actionTypes';

const initialState = Immutable({
    events: undefined
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.EVENTS_FETCHED:
            return state.merge({
                events: action.events
            });
        default:
            return state;
    }
}

export function getEventsById(state) {
    return state.liveEvents.events;
}

export function getEventsArray(state) {
    return _.keys(state.liveEvents.events);
}

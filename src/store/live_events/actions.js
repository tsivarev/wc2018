import _ from 'lodash';
import * as types from './actionTypes';
import radarServices from '../../services/radar';

export function fetchEvents() {
    return async (dispatch, getState) => {
        try {
            const eventsArray = await radarServices.getLiveEvents();
            const events = _.keyBy(eventsArray, (event) => event.id);
            dispatch({type: types.EVENTS_FETCHED, events: events});
        } catch (error) {
            console.error(error);
        }
    };
}
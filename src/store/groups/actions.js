import _ from 'lodash';
import * as types from './actionTypes';
import radarServices from '../../services/radar';

export function fetchGroups() {
    return async (dispatch, getState) => {
        try {
            const groups = await radarServices.getGroups();
            dispatch({type: types.GROUPS_FETCHED, groups: groups});
        } catch (error) {
            console.error(error);
        }
    };
}
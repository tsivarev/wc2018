import React, {Component} from 'react';
import _ from 'lodash';
import LeaderboardView from "./LeaderboardView";

export default class TournamentLeaderboardsView extends Component {

    render() {
        return (
            <div>
                {_.map(this.props.rowsIdArray, this.renderRow.bind(this))}
            </div>
        );
    }

    renderRow(group) {
        let table = this.props.rowsById[group].table;
        let groupName = 'Группа ' + group;

        return (
            <LeaderboardView title={groupName} table={table}/>
        );
    }
}
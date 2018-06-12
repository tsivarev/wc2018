import React, {Component} from 'react';
import _ from 'lodash';
import {push} from 'react-router-redux'
import * as UI from '@vkontakte/vkui';
import './TournamentLeaderboardsView.css';
import {connect} from "react-redux";

class TournamentLeaderboardsView extends Component {

    render() {
        return (
            <div>
                {_.map(this.props.rowsIdArray, this.renderGroup.bind(this))}
            </div>
        );
    }

    renderGroup(group) {
        let groupName = 'Группа ' + group;
        let table = this.props.rowsById[group].table;

        return (
            <UI.Group key={group} title={groupName}>
                <UI.List className="leaderboard">
                    <UI.ListItem>
                        <div className="leaderboard__row">
                            <div className="leaderboard__row__place"></div>
                            <div className="leaderboard__row__name"></div>
                            <div className="leaderboard__row__title__games">Игр</div>
                            <div className="leaderboard__row__title__score">Очков</div>
                        </div>
                    </UI.ListItem>
                    {_.map(table, this.renderGroupRow.bind(this))}
                </UI.List>
            </UI.Group>
        );
    }

    renderGroupRow(row) {
        return (
            <UI.ListItem key={row.team} onClick={() => this.props.changeUrl('/team/' + row.teamId)}>
                <div className="leaderboard__row">
                    <div className="leaderboard__row__place">{row.place}</div>
                    <div className="leaderboard__row__name">{row.team}</div>
                    <div className="leaderboard__row__games">{row.games}</div>
                    <div className="leaderboard__row__score">{row.score}</div>
                </div>
            </UI.ListItem>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch, state) => {
    return {
        changeUrl: (path) => {
            dispatch(push(path));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TournamentLeaderboardsView);
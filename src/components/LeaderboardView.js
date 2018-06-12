import React, {Component} from 'react';
import _ from 'lodash';
import {push} from 'react-router-redux'
import * as UI from '@vkontakte/vkui';
import './LeaderboardView.css';
import {connect} from "react-redux";

class LeaderboardView extends Component {

    render() {
        return (
            <UI.Group title={this.props.title}>
                <UI.List className="leaderboard">
                    <UI.ListItem>
                        <div className="leaderboard__row">
                            <div className="leaderboard__row__place"></div>
                            <div className="leaderboard__row__name"></div>
                            <div className="leaderboard__row__title__games">Игр</div>
                            <div className="leaderboard__row__title__score">Очков</div>
                        </div>
                    </UI.ListItem>
                    {_.map(this.props.table, this.renderRow.bind(this))}
                </UI.List>
            </UI.Group>
        );
    }

    renderRow(row) {
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

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardView);
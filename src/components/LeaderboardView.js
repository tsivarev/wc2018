import React, {Component} from 'react';
import './LeaderboardView.css';
import _ from "lodash";
import * as UI from '@vkontakte/vkui';

export default class LeaderboardView extends Component {

    render() {
        let groupTitle = "Группа " + this.props.leaderboard.group;
        return (
            <UI.Group title={groupTitle}>
                <UI.List className="leaderboard">
                    <UI.ListItem>
                        <div className="row">
                            <div className="teamscore__place"></div>
                            <div className="teamscore__name"></div>
                            <div className="teamscore__title__games">Игр</div>
                            <div className="teamscore__title__score">Очков</div>
                        </div>
                    </UI.ListItem>
                    {_.map(this.props.rowsIdArray, this.renderRowById.bind(this))}
                </UI.List>
            </UI.Group>
        );
    }

    renderRowById(rowId) {
        return (
            <UI.ListItem>
                <div className="teamscore">
                    <div className="teamscore__place">4</div>
                    <div className="teamscore__name">Саудовская Аравия</div>
                    <div className="teamscore__games">1</div>
                    <div className="teamscore__score">0</div>
                </div>
            </UI.ListItem>
        );
    }

}
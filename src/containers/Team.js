import React from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './Team.css';
import * as playersAction from "../store/players/actions";
import {connect} from "react-redux";
import * as playersSelectors from "../store/players/reducer";
import _ from "lodash";
import LeaderboardView from "../components/LeaderboardView";
import * as leaderboardsSelectors from "../store/leaderboards/reducer";
import * as leaderboardsActions from "../store/leaderboards/actions";

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.teamId = this.props.match.params.id;
        this.state = {
            activePanel: 'panel',
            activeView: 'mainView'
        }
    }

    componentDidMount() {
        this.props.dispatch(leaderboardsActions.fetchLeaderboards());
        this.props.dispatch(playersAction.fetchTeams());
    }

    render() {
        let team = this.props.rowsById ? this.props.rowsById[this.teamId] : null;
        let players = team ? team.players : [];
        let group = team ? team.group : null;
        let groupName = 'Группа ' + group;
        let table = group && this.props.leaderboardsById ? this.props.leaderboardsById[group].table : [];

        return (
            <UI.Root activeView={this.state.activeView}>
                <UI.View id="mainView" activePanel={this.state.activePanel} header={false}>
                    <UI.Panel id="panel" className="team">
                        <UI.Div className="logo"></UI.Div>
                        <UI.Group title="Состав">
                            <UI.List className="players">
                                {_.map(players, this.renderRow.bind(this))}
                            </UI.List>
                        </UI.Group>

                        <LeaderboardView title={groupName} table={table}/>
                    </UI.Panel>
                </UI.View>
            </UI.Root>
        );
    }

    renderRow(row) {
        return (
            <UI.ListItem before={4}>
                <div className="players__row">
                    <UI.Entity
                        photo={row.image}
                        size={48}
                        title={row.first_name}
                        description={row.role}
                    />
                </div>
            </UI.ListItem>);
    }
}


// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        rowsIdArray: playersSelectors.getTeamsArray(state),
        rowsById: playersSelectors.getTeamsById(state),
        leaderboardsById: leaderboardsSelectors.getLeaderboardByGroup(state),
    };
}

export default connect(mapStateToProps)(Team);
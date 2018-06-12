import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as leaderboardsActions from '../store/leaderboards/actions';
import * as leaderboardsSelectors from '../store/leaderboards/reducer';
import '@vkontakte/vkui/dist/vkui.css';
import TournamentLeaderboardsView from "../components/TournamentLeaderboardsView";

class GroupLeaderboards extends Component {
    componentDidMount() {
        this.props.dispatch(leaderboardsActions.fetchLeaderboards());
    }

    render() {
        return (
            <TournamentLeaderboardsView rowsIdArray={this.props.rowsIdArray} rowsById={this.props.rowsById}/>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        rowsIdArray: leaderboardsSelectors.getGroupLeaderboards(state),
        rowsById: leaderboardsSelectors.getLeaderboardByGroup(state),
    };
}

export default connect(mapStateToProps)(GroupLeaderboards);
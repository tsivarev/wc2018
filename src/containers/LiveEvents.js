import React, {Component} from 'react';
import {connect} from 'react-redux';
import './LiveEvents.css';
import * as liveEventsActions from '../store/live_events/actions';
import * as liveEventsSelectors from '../store/live_events/reducer';
import _ from "lodash";
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class LiveEvents extends Component {
    componentDidMount() {
        this.interval = setInterval(() => this.props.dispatch(liveEventsActions.fetchEvents()), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <UI.Group title="Сегодня">
                <UI.List className="live_events">
                    {_.map(this.props.rowsIdArray, this.renderRow.bind(this))}
                </UI.List>
            </UI.Group>
        );
    }

    renderRow(rowId) {
        let row = _.get(this.props.rowsById, rowId);

        return (
            <UI.ListItem key={rowId}>
                <div className="event">
                    <div className="event_col">
                        <div className="event__time">{row.time}</div>
                        <div className="event__name">
                            <span>{row.team_a}</span>
                            <span className="separator">–</span>
                            <span>{row.team_b}</span>
                        </div>
                    </div>
                    <div className="event_col">
                        <div className="event__status">{row.status}</div>
                    </div>
                </div>
            </UI.ListItem>

        )
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        rowsById: liveEventsSelectors.getEventsById(state),
        rowsIdArray: liveEventsSelectors.getEventsArray(state),
    };
}

export default connect(mapStateToProps)(LiveEvents);
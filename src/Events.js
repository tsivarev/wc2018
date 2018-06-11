import React from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './Event.css';
import './Timescore.css';

export default class Events extends React.Component {
    render() {
        return (
            <UI.Group title="Сегодня">
                <UI.List className="eventlist">
                    <UI.ListItem>
                        <div className="event">
                            <div className="event_col">
                                <div className="event__time">18:30</div>
                                <div className="event__name">
                                    <span>Россия</span>
                                    <span className="separator">–</span>
                                    <span>Саудовская Аравия</span>
                                </div>
                            </div>
                            <div className="event_col">
                                <div className="event__status">1:0</div>
                            </div>
                        </div>
                    </UI.ListItem>
                    <UI.ListItem>
                        <div className="event">
                            <div className="event_col">
                                <div className="event__time">19:30</div>
                                <div className="event__name">
                                    <span>Франция</span>
                                    <span className="separator">–</span>
                                    <span>Чили</span>
                                </div>
                            </div>
                            <div className="event_col">
                                <div className="event__status">0:0</div>
                            </div>
                        </div>
                    </UI.ListItem>
                    <UI.ListItem>
                        <div className="event">
                            <div className="event_col">
                                <div className="event__time">20:30</div>
                                <div className="event__name">
                                    <span>ЮАР</span>
                                    <span className="separator">–</span>
                                    <span>Германия</span>
                                </div>
                            </div>
                            <div className="event_col">
                                <div className="event__status">не начался</div>
                            </div>
                        </div>
                    </UI.ListItem>
                    <UI.ListItem>
                        <div className="event">
                            <div className="event_col">
                                <div className="event__time">21:30</div>
                                <div className="event__name">
                                    <span>США</span>
                                    <span className="separator">–</span>
                                    <span>Австрия</span>
                                </div>
                            </div>
                            <div className="event_col">
                                <div className="event__status">не начался</div>
                            </div>
                        </div>
                    </UI.ListItem>
                </UI.List>
            </UI.Group>
        );
    }
}
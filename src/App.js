import React from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './Event.css';
import './Timescore.css';
import Events from "./Events";

export default class App extends React.Component {
    render() {
        return (
            <UI.View activePanel="main" header={false}>
                <UI.Panel id="main">
                    <UI.Div className="logo"></UI.Div>

                    <UI.Header>
                        Матч-центр
                    </UI.Header>

                    <Events/>

                    <UI.Header>
                        Турнирная таблица
                    </UI.Header>

                    <UI.Group title="Группа А">
                        <UI.List className="teamscorelist">
                            <UI.ListItem>
                                <div className="teamscore">
                                    <div className="teamscore__place"></div>
                                    <div className="teamscore__name"></div>
                                    <div className="teamscore__title__games">Игр</div>
                                    <div className="teamscore__title__score">Очков</div>
                                </div>
                            </UI.ListItem>
                            <UI.ListItem>
                                <div className="teamscore">
                                    <div className="teamscore__place">1</div>
                                    <div className="teamscore__name">Россия</div>
                                    <div className="teamscore__games">1</div>
                                    <div className="teamscore__score">3</div>
                                </div>
                            </UI.ListItem>
                            <UI.ListItem>
                                <div className="teamscore">
                                    <div className="teamscore__place">2</div>
                                    <div className="teamscore__name">Египет</div>
                                    <div className="teamscore__games">1</div>
                                    <div className="teamscore__score">3</div>
                                </div>
                            </UI.ListItem>
                            <UI.ListItem>
                                <div className="teamscore">
                                    <div className="teamscore__place">3</div>
                                    <div className="teamscore__name">Уругвай</div>
                                    <div className="teamscore__games">1</div>
                                    <div className="teamscore__score">0</div>
                                </div>
                            </UI.ListItem>
                            <UI.ListItem>
                                <div className="teamscore">
                                    <div className="teamscore__place">4</div>
                                    <div className="teamscore__name">Саудовская Аравия</div>
                                    <div className="teamscore__games">1</div>
                                    <div className="teamscore__score">0</div>
                                </div>
                            </UI.ListItem>
                        </UI.List>
                    </UI.Group>

                    <UI.Group title="Группа B">
                        <UI.List className="teamscorelist">
                            <UI.ListItem>
                                <div className="teamscore">
                                    <div className="teamscore__place"></div>
                                    <div className="teamscore__name"></div>
                                    <div className="teamscore__title__games">Игр</div>
                                    <div className="teamscore__title__score">Очков</div>
                                </div>
                            </UI.ListItem>
                            <UI.ListItem>
                                <div className="teamscore">
                                    <div className="teamscore__place">1</div>
                                    <div className="teamscore__name">Россия</div>
                                    <div className="teamscore__games">1</div>
                                    <div className="teamscore__score">3</div>
                                </div>
                            </UI.ListItem>
                            <UI.ListItem>
                                <div className="teamscore">
                                    <div className="teamscore__place">2</div>
                                    <div className="teamscore__name">Египет</div>
                                    <div className="teamscore__games">1</div>
                                    <div className="teamscore__score">3</div>
                                </div>
                            </UI.ListItem>
                            <UI.ListItem>
                                <div className="teamscore">
                                    <div className="teamscore__place">3</div>
                                    <div className="teamscore__name">Уругвай</div>
                                    <div className="teamscore__games">1</div>
                                    <div className="teamscore__score">0</div>
                                </div>
                            </UI.ListItem>
                            <UI.ListItem>
                                <div className="teamscore">
                                    <div className="teamscore__place">4</div>
                                    <div className="teamscore__name">Саудовская Аравия</div>
                                    <div className="teamscore__games">1</div>
                                    <div className="teamscore__score">0</div>
                                </div>
                            </UI.ListItem>
                        </UI.List>
                    </UI.Group>
                </UI.Panel>
            </UI.View>
        );
    }
}
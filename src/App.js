import React from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';
import LiveEvents from "./containers/LiveEvents";
import GroupLeaderboards from "./containers/GroupLeaderboards";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'panel1',
            activeView: 'mainView'
        }
    }

    render() {
        return (
            <UI.Root activeView={this.state.activeView}>
                <UI.View id="mainView" activePanel={this.state.activePanel} header={false}>
                    <UI.Panel id="panel1">
                        <UI.Div className="logo"></UI.Div>

                        <UI.Header>
                            Матч-центр
                        </UI.Header>

                        <LiveEvents/>

                        <UI.Header>
                            Турнирная таблица
                        </UI.Header>

                        <GroupLeaderboards/>

                    </UI.Panel>
                </UI.View>
            </UI.Root>
        );
    }
}
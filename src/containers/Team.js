import React from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '../App.css';

export default class Team extends React.Component {
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

                        <UI.Header>
                            Команда
                        </UI.Header>

                    </UI.Panel>
                </UI.View>
            </UI.Root>
        );
    }
}
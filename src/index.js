import React from 'react';
import ReactDOM from 'react-dom';
import * as VKConnect from '@vkontakte/vkui-connect';
import App from './App';

VKConnect.send('VKWebAppInit', {});
VKConnect.subscribe((e) => console.log(e));
VKConnect.supports('VKWebAppClose');

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
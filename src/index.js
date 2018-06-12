import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as VKConnect from '@vkontakte/vkui-connect';
import * as reducers from './store/reducers';
import App from './App';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

VKConnect.send('VKWebAppInit', {});
VKConnect.subscribe((e) => console.log(e));
VKConnect.supports('VKWebAppClose');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
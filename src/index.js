import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import createHistory from "history/createBrowserHistory";
import {Route} from "react-router";
import {ConnectedRouter, routerMiddleware} from "react-router-redux";
import thunk from 'redux-thunk';
import * as VKConnect from '@vkontakte/vkui-connect';
import App from './App';
import Team from './containers/Team';
import {rootReducer} from './store/reducers';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, middleware)
);

VKConnect.send('VKWebAppInit', {});
VKConnect.subscribe((e) => console.log(e));
VKConnect.supports('VKWebAppClose');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/team/:id" component={Team}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
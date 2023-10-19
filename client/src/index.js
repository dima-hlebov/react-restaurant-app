import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/app/app';
import ErrorBoundry from './components/error-boundry/error-boundry'

import RestaurantService from './services/restaurant-service'
import RestoServiceContext from './components/resto-service-context/resto-service-context'
import store from './store'

import './index.sass';

const restoService = new RestaurantService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));


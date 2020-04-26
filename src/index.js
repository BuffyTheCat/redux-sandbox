import React from 'react';
import ReactDom from 'react-dom';
import Counter from './components/counter'
import { createStore, bindActionCreators } from 'redux';
import reduser from './reducer';
import { Provider } from 'react-redux';
import App from './components/app'

const store = createStore(reduser);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

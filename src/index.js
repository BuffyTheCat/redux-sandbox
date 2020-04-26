import React from 'react';
import ReactDom from 'react-dom';
import Counter from './counter'
import { createStore, bindActionCreators } from 'redux';
import reduser from './reducer';
import * as actions from './actions';



const store = createStore(reduser);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
    ReactDom.render(
        <Counter 
            counter={store.getState()} 
            inc={inc} 
            dec={dec} 
            rnd={() => {
                const payload = Math.floor(Math.random()*10);
                rnd(payload)
            }} />, 
        document.getElementById('root')
    );
}
update();
store.subscribe(update);

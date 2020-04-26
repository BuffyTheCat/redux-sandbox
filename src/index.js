import { createStore, bindActionCreators } from 'redux';
import reduser from './reducer';
import * as actions from './actions';



const store = createStore(reduser);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementsByClassName('increment')[0].addEventListener('click', inc);

document.getElementsByClassName('decrement')[0].addEventListener('click', dec);

document.getElementsByClassName('random')[0].addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    rnd(payload);
});

const update = () => {
    document.getElementsByClassName('counter')[0].innerHTML = store.getState();
}

store.subscribe(update);

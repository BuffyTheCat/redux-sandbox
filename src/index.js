import { createStore } from 'redux';

const reduser = (state = 0, action) => {
    if (state === undefined) {
        return 0;
    }
    switch (action.type) {
        case 'INC':
            return state + 1;

        case 'RND':
            return state + action.payload;

        case 'DEC':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(reduser);

const inc = () => ({ type: 'INC'});
const dec = () => ({ type: 'DEC'});
const rnd = (payload) => ({ type: 'RND', payload});

document.getElementsByClassName('increment')[0].addEventListener('click', () => {
    store.dispatch(inc());
});


document.getElementsByClassName('decrement')[0].addEventListener('click', () => {
    store.dispatch(dec());
});

document.getElementsByClassName('random')[0].addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    store.dispatch(rnd(payload));
});

const update = () => {
    document.getElementsByClassName('counter')[0].innerHTML = store.getState();
}

store.subscribe(update);

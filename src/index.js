import { createStore } from 'redux';

const reduser = (state = 0, action) => {
    if (state === undefined) {
        return 0;
    }
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(reduser);

document.getElementsByClassName('increment')[0].addEventListener('click', () => {
    store.dispatch({ type: 'INC'});
});


document.getElementsByClassName('decrement')[0].addEventListener('click', () => {
    store.dispatch({ type: 'DEC'});
});

const update = () => {
    document.getElementsByClassName('counter')[0].innerHTML = store.getState();
}

store.subscribe(update);

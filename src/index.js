const initialState = 0;

const reduser = (state, action) => {
    if (state === undefined) {
        return 0;
    }
    switch (action.type) {
        case 'INC':
            return state + 1;
        default:
            return state;
    }
}

let state = reduser(initialState, { type: 'INC'});
console.log(state);

import React, { Fragment } from 'react';

const Counter = ( { counter, inc, dec, rnd }) => {
    return (
        <Fragment>
            <h2 className="counter">{counter}</h2>
            <button onClick={inc} className="increment">increment</button>
            <button onClick={dec} className="decrement">decrement</button>
            <button onClick={rnd} className="random">random</button>
        </Fragment>
    );
};

export default Counter;
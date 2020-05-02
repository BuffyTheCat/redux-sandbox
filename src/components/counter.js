import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'

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

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
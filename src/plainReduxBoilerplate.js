import {createStore} from "redux";

//I don't like wild strings so we use some enum
const actionTypes = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    SIGN_IN: "SIGN_IN",
    SIGN_OUT: "SIGN_OUT"
}

// ACTION
const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}
const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}
const logIn = () => {
    return {
        type: actionTypes.SIGN_IN
    }
}
const logOut = () => {
    return {
        type: actionTypes.SIGN_OUT
    }
}

// REDUCER - based on the action it modifies the data in data store
const counter = (initialCounterState = 0, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.INCREMENT:
            return initialCounterState + 1;
        case actionTypes.DECREMENT:
            return initialCounterState - 1;
        default:
            return initialCounterState;
    }
}
const isLogged = (initialLoggedState = false, action) => {
    // case in for two action types with the same return makes no sense
    // but consider this an example for when you have a backend API or a service call
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return !initialLoggedState;
        case actionTypes.SIGN_OUT:
            return !initialLoggedState;
        default:
            return initialLoggedState;
    }
}

// DATA STORE - We do not pass data down through all components. We have one global data store instead, thanks redux.
let store = createStore(counter);

// Display it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH - dispatch the action to the reducer
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
import {actionTypes} from "../constants/actionTypes";

const loggedReducer = (initialLoggedState = false, action) => {
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

export default loggedReducer;
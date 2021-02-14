import {actionTypes} from "../constants/actionTypes";

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const logIn = () => {
    return {
        type: actionTypes.SIGN_IN
    }
}

export const logOut = () => {
    return {
        type: actionTypes.SIGN_OUT
    }
}
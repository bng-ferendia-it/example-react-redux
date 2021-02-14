import {actionTypes} from "../constants/actionTypes";

const counterReducer = (initialCounterState = 0, action) => {
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
export default counterReducer;
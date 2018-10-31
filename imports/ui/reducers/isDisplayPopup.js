import * as types from '../constants/ActionTypes';

let initialState = false;

let myReducer = (state = initialState, actions) => {
    switch(actions.type){
        case types.TOGGLE_POPUP:
            return !state;
        default:
            return state;
    }
}

export default myReducer;
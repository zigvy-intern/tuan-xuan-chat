import { combineReducers } from 'redux';
import isDisplayMenu from './isDisplayMenu';
import isDisplayPopup from './isDisplayPopup';

const myReducer = combineReducers({
    //list reducers
    isDisplayMenu,
    isDisplayPopup
});

export default myReducer;
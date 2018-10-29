import { combineReducers } from 'redux';
import isDisplayMenu from './isDisplayMenu';

const myReducer = combineReducers({
    //list reducers
    isDisplayMenu
});
export default myReducer;
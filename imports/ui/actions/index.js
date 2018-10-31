import * as types from '../constants/ActionTypes';

export const toggleMenu = () => {
    return {
        type: types.TOGGLE_MENU
    }
}

export const togglePopup = () => {
    return {
        type: types.TOGGLE_POPUP
    }
}

export const hidePopup = () => {
    return {
        type: types.HIDE_POPUP
    }
}
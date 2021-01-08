import * as types from '../constatns/ActionTypes'

const menuLoaded = (newMenu) => {
    return {
        type: types.MENU_LOADED,
        newMenu
    };
};

const menuRequested = () => {
    return {
        type: types.MENU_REQUESTED
    };
}; 

const addToCart = (id) => {
    return {
        type: types.ADD_TO_CART,
        id
    }
}

const deleteFromCart = (id) => {
    return {
        type: types.DELETE_FROM_CART,
        id
    }
}

const deleteAllFromCart = () => {
    return {
        type: types.DELETE_ALL_FROM_CART
    }
}

 
export {menuLoaded, menuRequested, addToCart, deleteFromCart, deleteAllFromCart}
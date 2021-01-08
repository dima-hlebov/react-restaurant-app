import * as types from '../constatns/ActionTypes';

const initialState = {
    menu: [],
    cart: {
        total: 0,
        items: []
    },
    loading: true
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.MENU_LOADED:
            return {
                ...state,
                menu: action.newMenu,
                loading: false
            };

        case types.MENU_REQUESTED:
            return {
                ...state,
                menu: state.menu,
                loading: true
            };

        case types.ADD_TO_CART:
            const addId = action.id;
            // item is in the cart
            let addedCartItemIndex = state.cart.items.findIndex(item => item.id === addId);
            if(addedCartItemIndex >= 0){
                let addedCartItem = state.cart.items.find(item => item.id === addId);
                const newItem = {
                    ...addedCartItem,
                    qtty: ++addedCartItem['qtty']
                };
                return{
                    ...state,
                    cart: {
                        total: state.cart.total + newItem.price,
                        items: [...state.cart.items.slice(0, addedCartItemIndex), 
                                newItem, 
                                ...state.cart.items.slice(addedCartItemIndex + 1)]
                    }
                };
            }
            //item isn't in the cart
            const addedMenuItem = state.menu.find(item => item.id === addId)
            const newItem = {
                ...addedMenuItem,
                qtty: 1
            };
            return{
                ...state,
                cart: {
                    total: state.cart.total + newItem.price,
                    items: [...state.cart.items, newItem]
                }
            };

        case types.DELETE_FROM_CART:
            const deleteId = action.id;
            const deletedMenuItemIndex = state.cart.items.findIndex(item => item.id === deleteId);
            const deletedMenuItemPrice = state.menu.find(item => item.id === deleteId).price;
            return{
                ...state,
                cart: {
                    total: state.cart.total - deletedMenuItemPrice,
                    items: [...state.cart.items.slice(0, deletedMenuItemIndex), ...state.cart.items.slice(deletedMenuItemIndex + 1)]
                }
            }

        case types.DELETE_ALL_FROM_CART:
            return{
                ...state,
                cart: {
                    total: 0,
                    items: []
                }
            }
        default:
            return state
    }
}


export default reducer;
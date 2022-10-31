
import { ActionTypes } from "../constants"

const INITIAL_STATE = {
    productData: [],
    productsLoader: false,
    cartItems: [],
    selectedItems: [],
    productCounter: 1,
}

const GetProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                productData: action.payload,
                productsLoader: false,
            }
        case ActionTypes.GET_PRODUCTS_FAIL:
            return {
                ...state,
                productsLoader: false,
                productData: [],
            }
        case ActionTypes.PRODUCTS_LOADER:
            return {
                ...state,
                productsLoader: true,
            }
        default:
            return state
    }
}

const AddAndRemoveToCartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            }
        case ActionTypes.REMOVE_FROM_CART:
            const itemToRemove = state.cartItems.filter((product) => product.id !== action.payload.id)
            return {
                ...state,
                cartItems: [...itemToRemove],
            }

        case ActionTypes.PRODUCTS_COUNTER_INCREMENT:
            return {
                ...state,
                productCounter: ++state.productCounter
            }
        case ActionTypes.PRODUCTS_COUNTER_DECREMENT:
            return {
                ...state,
                productCounter: --state.productCounter
            }

        default:
            return state
    }
}

const SelectedItemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_ITEM:
            return {
                ...state,
                selectedItems: [action.payload],
            }

        default:
            return state
    }
}




export { GetProductsReducer, AddAndRemoveToCartReducer, SelectedItemReducer }

import { ActionTypes } from "../constants"

const INITIAL_STATE = {
    productData: [],
    productsLoader: false,
    cartItems: [],
    selectedItems: [],
    productCounter: 1,
    productsToApprove: []
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

const AddAndRemoveProductFromAdminPanelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT_TO_ADMIN_PANEL:
            return {
                ...state,
                productsToApprove: [...state.productsToApprove, action.payload],
            }
        case ActionTypes.PRODUCT_ACCEPTED:
        case ActionTypes.REMOVE_PRODUCT_FROM_ADMIN_PANEL:
            const itemToRemove = state.productsToApprove.filter((product) => product.image !== action.payload.image)
            return {
                ...state,
                productsToApprove: [...itemToRemove]
            }
        default:
            return state
    }
}

export {
    GetProductsReducer,
    AddAndRemoveToCartReducer,
    SelectedItemReducer,
    AddAndRemoveProductFromAdminPanelReducer,
}
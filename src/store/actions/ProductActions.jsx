
import axios from "axios"
import { ActionTypes } from "../constants"
import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/Firebase";


const GetProductsAction = () => {

    return async (dispatch) => {
        dispatch({
            type: 'PRODUCTS_LOADER'
        })
        
        try {
            const productData = await axios.get('https://fakestoreapi.com/products')
            const querySnapshot = await getDocs(collection(db, 'Products'));
            querySnapshot.forEach((doc) => {
                productData.data.unshift(doc.data());
                // console.log(doc.data());
                dispatch({
                    type: ActionTypes.GET_PRODUCTS_SUCCESS,
                    payload: productData.data,
                })
            })
        }
        catch (err) {
            dispatch({
                type: ActionTypes.GET_PRODUCTS_FAIL
            })
            console.log(err);
        }
    }
}


const AddToCartAction = (product) => {
    return (dispatch) => {
        // console.log(product);
        dispatch({
            type: ActionTypes.ADD_TO_CART,
            payload: product,
        })
    }
}

const RemoveToCartAction = (product) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.REMOVE_FROM_CART,
            payload: product,
        })
    }
}

const SelectedItemAction = (product) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.SELECTED_ITEM,
            payload: product,
        })
    }
}

const ProductIncrementAction = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.PRODUCTS_COUNTER_INCREMENT,
        })
    }
}

const ProductDecrementAction = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.PRODUCTS_COUNTER_DECREMENT,
        })
    }
}

const AddProductToAdminPanelAction = (productToAprrove) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_TO_ADMIN_PANEL,
            payload: productToAprrove
        })
    }
}

const AcceptProductAction = (productToAprrove) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.PRODUCT_ACCEPTED,
            payload: productToAprrove
        })
    }
}


const RemoveProductFromAdminPanelAction = (productToReject) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.REMOVE_PRODUCT_FROM_ADMIN_PANEL,
            payload: productToReject
        })
    }
}

export {
    GetProductsAction,
    AddToCartAction,
    RemoveToCartAction,
    SelectedItemAction,
    ProductIncrementAction,
    ProductDecrementAction,
    AddProductToAdminPanelAction,
    AcceptProductAction,
    RemoveProductFromAdminPanelAction
}
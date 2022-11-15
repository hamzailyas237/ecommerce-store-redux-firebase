

import { combineReducers } from "redux";
import {
    GetProductsReducer,
    AddAndRemoveToCartReducer,
    SelectedItemReducer,
    AddAndRemoveProductFromAdminPanelReducer,
} from './ProductReducers';


const combineReducer = combineReducers({
    GetProductsReducer,
    AddAndRemoveToCartReducer,
    SelectedItemReducer,
    AddAndRemoveProductFromAdminPanelReducer,
})
export default combineReducer


import { combineReducers } from "redux";
import { GetProductsReducer, AddAndRemoveToCartReducer, SelectedItemReducer,} from './ProductReducers';


const combineReducer = combineReducers({
    GetProductsReducer,
    AddAndRemoveToCartReducer,
    SelectedItemReducer,
})
export default combineReducer
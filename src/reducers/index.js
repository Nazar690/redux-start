// TODO: implement combine reducer functionality
import {combineReducers} from 'redux';
import {cartReducer} from './shop.reducer';
import {productReducer} from './shop.reducer';

export const shopReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
    
})

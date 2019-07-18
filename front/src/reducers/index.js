import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducers';

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
});

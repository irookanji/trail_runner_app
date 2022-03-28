import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productsReducer } from './productsReducer';

const reducer = combineReducers({
  cartState: cartReducer,
  productsState: productsReducer,
});

export default reducer;

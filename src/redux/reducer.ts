import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productsReducer } from './productsReducer';
import { userReducer } from './userReducer';

const reducer = combineReducers({
  cartState: cartReducer,
  productsState: productsReducer,
  userState: userReducer,
});

export default reducer;

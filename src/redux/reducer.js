import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';

const reducer = combineReducers({
  cartState: cartReducer,
});

export default reducer;

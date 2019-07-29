import {GET_CART_ITEMS, REMOVE_FROM_CART, ADD_TO_CART} from '../actions/cart.actions';
import {GET_PRODUCT_LIST, ADD_NEW_PRODUCT} from '../actions/products.action';

const initState = {
  inCart: [],
  products: []
}

const add = (state, product) => {
  let store  = [...state.inCart]
  store.push(product);
  product.available--;
  return Object.assign({}, state, {inCart: store});
}

const remove = (state, id) => {
  let store = [...state.inCart].filter((item, index) => {
    if (index === id) { item.available++ };
    return index !== id });
  return Object.assign({}, state, {inCart: store});
}

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return state.inCart;
    case ADD_TO_CART:
      return add(state, action.payload);
    case REMOVE_FROM_CART:
      return remove(state, action.productId)
    default:
      return state;
  }
}

const addNew = (state, product) => {
  let store = [...state.products];
  store.push(product);
  return Object.assign({}, state, {products: store});
}

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return Object.assign({}, state, {products: action.product});
    case ADD_NEW_PRODUCT:
      return addNew(state, action.product);
    default:
      return state;
  }
}

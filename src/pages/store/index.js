import { createStore, combineReducers } from "redux";
//QUẢN LÍ REDUX CHO POPUP SHOW VÀ HIDE
const ShowPopup = (state = { showPopup: false }, action) => {
  if (action.type === "SHOW_POPUP") {
    return { showPopup: true };
  }
  if (action.type === "HIDE_POPUP") {
    return { showPopup: false };
  }
  return state;
};
const Authen = (state = { authen: false }, action) => {
  if (action.type === "ON_LOGIN") {
    return { authen: true };
  }
  if (action.type === "ON_LOGOUT") {
    return { authen: false };
  }
  return state;
};
//QUẢN LÍ REDUX CHO TÍNH NĂNG THÊM XÓA SẢN PHẨM
const cart = (state = { listCart: [] }, action) => {
  if (action.type === "ADD_CART") {
    if (state.listCart.some((el) => el.id === action.payload.id)) {
      const index = state.listCart.findIndex(
        (el) => el.id === action.payload.id
      );
      console.log(index);
      state.listCart[index].quantity += action.payload.quantity;
      return { listCart: [...state.listCart] };
    } else {
      return { listCart: [...state.listCart, action.payload] };
    }
  }
  if (action.type === "UPDATE_CART") {
    return { listCart: action.payload };
  }

  if (action.type === "DELETE_CART") {
    return {
      listCart: state.listCart.filter((el) => el.id !== action.payload.id),
    };
  }
  return state;
};
const rootReducer = combineReducers({
  showPopup: ShowPopup,
  authen: Authen,
  listCart: cart,
});
const store = createStore(rootReducer);
export default store;

import classes from "./CartPage.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
const CartPage = (props) => {
  const [number, setNumber] = useState(0);
  const storeCart = [];
  useEffect(() => {
    //CẬP NHẬT DỮ LIỆU TỪ LOCALSTORAGE
    const storeCart = JSON.parse(localStorage.getItem("listCart"));
    if (storeCart !== null) {
      dispatch({ type: "UPDATE_CART", payload: storeCart });
    }
  }, []);

  const cart = useSelector((state) => state.listCart);
  console.log(cart.listCart);
  const dispatch = useDispatch();
  //ĐẶT GIÁ TRỊ TỔNG = 0 VÀ TÍNH TỔNG TỪ CART REDUX
  let total = 0;
  cart.listCart.map((el) => {
    total += Number(el.price * el.quantity);
  });

  const enteredNumber = (event) => {
    setNumber();
  };
  const btnAdd = (event) => {
    console.log(event);
  };
  const btnDiv = (event) => {};
  //HÀM XÓA CART
  const removeHandler = (id) => {
    dispatch({
      type: "DELETE_CART",
      payload: {
        id: id,
      },
    });
  };

  useEffect(() => {
    //ĐƯ DỮ LIỆU TỪ CART VÀO LOCALSTORAGE
    localStorage.setItem("listCart", JSON.stringify(cart.listCart));
  }, [cart.listCart]);
  return (
    <>
      <div className="container-fluid mx-2">
        <div className="bg-secondary">
          <div className="d-flex justify-content-between mx-5 p-5">
            <div>
              <p className="h2">
                <em>CART</em>
              </p>
            </div>
            <div>
              <p className="p">
                <em>CART</em>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>SHOPPING CART</p>
        </div>
        <div>
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col-8">
              <table className="table">
                <thead>
                  <tr className="table-info">
                    <th className="w-25" scope="col">
                      <em>IMAGE</em>
                    </th>
                    <th className="w-25" scope="col">
                      <em>PRODUCT</em>
                    </th>
                    <th className="w-25" scope="col">
                      <em>PRICE</em>
                    </th>
                    <th scope="col">
                      <em>QUANTITY</em>
                    </th>
                    <th scope="col">
                      <em>TOTAL</em>
                    </th>
                    <th scope="col">
                      <em>REMOVE</em>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.listCart.map((el) => (
                    <Fragment key={el.id}>
                      <tr key={el.id}>
                        <td className="w-25 ">
                          <img src={el.img} />
                        </td>
                        <th scope="row">{el.name}</th>
                        <td className="w-25">
                          {new Intl.NumberFormat("vn-VN").format(el.price)}
                        </td>
                        <td className="w-100">
                          <label htmlFor="quantity" />
                          <button onClick={btnDiv}>
                            <svg
                              value={el.id}
                              xmlns="http://www.w3.org/2000/svg"
                              height="25"
                              viewBox="0 96 960 960"
                              width="25"
                            >
                              <path d="M560 776 360 576l200-200v400Z" />
                            </svg>
                          </button>

                          {el.quantity}

                          <button onClick={btnAdd}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="25"
                              viewBox="0 96 960 960"
                              width="25"
                            >
                              <path d="M400 776V376l200 200-200 200Z" />
                            </svg>
                          </button>
                        </td>
                        <td className="w-100">
                          {new Intl.NumberFormat("vn-VN").format(
                            el.price * el.quantity
                          )}
                        </td>
                        <td>
                          <button
                            onClick={removeHandler.bind(null, el.id)}
                            type="submit"
                            className="w-100"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="30"
                              viewBox="0 96 960 960"
                              width="30"
                            >
                              <path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col bg-light">
              <div className="">
                <div className="h4 m-5">
                  <em>CART TOTAL</em>
                </div>
              </div>

              <div className="d-flex justify-content-between border-bottom border-secondary">
                <div className="h6 mt-2">
                  <em>SUBTOTAL</em>
                </div>
                <em> {new Intl.NumberFormat("vn-VN").format(total)} VND</em>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div>
                  <div className="h6">
                    <em>TOTAL</em>
                  </div>
                </div>
                <em> {new Intl.NumberFormat("vn-VN").format(total)} VND</em>
              </div>
              <form className="mt-3">
                <label htmlFor="id"></label>
                <input
                  className="w-100 border p-2"
                  type="text"
                  id="id"
                  placeholder="Enter your coupon"
                />
                <br />
                <button className="btn bg-dark text-white w-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="22px"
                    viewBox="0 0 24 24"
                    width="22px"
                    fill="#FFFFFF"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M4 17h16v2H4zm13-6.17L15.38 12 12 7.4 8.62 12 7 10.83 9.08 8H4v6h16V8h-5.08z"
                      opacity=".3"
                    />
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z" />
                  </svg>
                  Apply Coupon
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-8 bg-light py-3 ">
          <div className="d-flex justify-content-between px-5">
            <div className="h6">
              <NavLink to="/shop">
                <em>
                  <svg
                    className="mb-1 pe-2"
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    height="22px"
                    viewBox="0 0 24 24"
                    width="22px"
                    fill="#000000"
                  >
                    <rect fill="none" height="24" width="24" />
                    <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z" />
                  </svg>
                  <span className="text-dark"> Continue shopping</span>
                </em>
              </NavLink>
            </div>
            <div className="border p-1 px-2 border-secondary">
              <NavLink to="/checkout">
                <em className="text-dark">Proceed to checkout</em>
                <svg
                  className="mb-1 ps-2"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="22px"
                  viewBox="0 0 24 24"
                  width="22px"
                  fill="#000000"
                >
                  <rect fill="none" height="24" width="24" />
                  <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;

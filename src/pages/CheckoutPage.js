import { NavLink } from "react-router-dom";
import classes from "./CheckoutPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const CheckoutPage = () => {
  const storeCart = [];
  useEffect(() => {
    //LOAD DỮ LIỆU TỪ LS
    const storeCart = JSON.parse(localStorage.getItem("listCart"));
    if (storeCart !== null) {
      dispatch({ type: "UPDATE_CART", payload: storeCart });
    }
  }, []);

  const cart = useSelector((state) => state.listCart);
  console.log(cart.listCart);
  const dispatch = useDispatch();
  let total = 0;
  cart.listCart.map((el) => {
    total += Number(el.price * el.quantity);
  });
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container-fluid">
      <div class="d-flex justify-content-between bg-light">
        <div className=" py-5">
          <p className="fst-italic h3 ps-5">CHECKOUT</p>
        </div>
        <div className=" py-5 fst-italic h6 mt-3 pe-5">
          <div className={classes.nav}>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/"
            >
              HOME
            </NavLink>
            <span className="px-2">/</span>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/cart"
            >
              CART
            </NavLink>
            <span className="px-2">/</span>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/checkout"
            >
              CHECKOUT
            </NavLink>
          </div>
        </div>
      </div>
      <p className="fst-italic h5">BILLING DETAILS</p>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <form onSubmit={submitHandler}>
            <label htmlFor="name">
              <em>FULL NAME :</em>
            </label>
            <input
              className="w-100 border border-secondary py-2 px-2"
              id="name"
              placeholder="Enter Your Full Name Here!"
            />
            <label htmlFor="name">
              <em>FULL NAME :</em>
            </label>
            <input
              className="w-100 border border-secondary py-2 px-2"
              id="name"
              placeholder="Enter Your Full Name Here!"
            />
            <label htmlFor="name">
              <em>FULL NAME :</em>
            </label>
            <input
              className="w-100 border border-secondary py-2 px-2"
              id="name"
              placeholder="Enter Your Full Name Here!"
            />
            <label htmlFor="name">
              <em>FULL NAME :</em>
            </label>
            <input
              className="w-100 border border-secondary py-2 px-2"
              id="name"
              placeholder="Enter Your Full Name Here!"
            />
            <button
              className="py-2 px-4 mt-3 btn bg-dark text-white"
              type="submit"
            >
              <em>Place order</em>
            </button>
          </form>
        </div>
        <div className="col">
          <div className=" bg-light">
            <p className="h4 fst-italic ps-4 pt-4">YOUR ORDER </p>
            <div className="container-fluid mt-3">
              {cart.listCart.map((el) => (
                <div className="d-flex flex-column bd-highlight mt-3 border-bottom border-secondary">
                  <div className=" bd-highlight">
                    <span className="h6">{el.name}</span>
                    <span className="ps-2 fst-italic">
                      {new Intl.NumberFormat("vn-VN").format(el.price)} VND x{" "}
                      {el.quantity}
                    </span>
                  </div>
                </div>
              ))}
              <div class="d-flex justify-content-between mt-4">
                <div className="fst-italic h6 ">TOTAL</div>
                <div className="fst-italic">
                  {new Intl.NumberFormat("vn-VN").format(total)} VND
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;

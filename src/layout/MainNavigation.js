import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

const MainNavigation = () => {
  const [showHideLivechat, setShowHideLivechat] = useState(false);
  const userArr = [];
  const storedUserArr = JSON.parse(localStorage.getItem("userArr"));
  if (storedUserArr === null) {
    const userArr = [];
  } else {
    userArr.push(storedUserArr);
  }
  const show = useSelector((state) => state.authen);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userArr.length > 0) {
      console.log("dang nhap thanh cong");
      dispatch({ type: "ON_LOGIN" });
    }
  }, []);
  console.log(userArr);
  const logoutHandler = () => {
    localStorage.removeItem("userArr");
    dispatch({ type: "ON_LOGOUT" });
  };
  const showLivechat = () => {
    setShowHideLivechat((Livechat) => !Livechat);
  };
  return (
    <>
      {showHideLivechat ? (
        <div className={classes.popup}>
          <div className={classes.container}>
            <div class="d-flex justify-content-between border-bottom border-secondary">
              <div className="p-3 h6">Customer Support</div>
              <div className="m-3 fst-italic h6 bg-light btn">
                Let's Chat App
              </div>
            </div>
            <div className="mt-3 me-3">
              <div className="d-flex justify-content-end">
                <span className="text-white bg-primary p-2 mt-2 rounded">
                  Xin Chào
                </span>
              </div>
              <div className="d-flex justify-content-end">
                <span className="text-white bg-primary p-2 mt-2 rounded w-75">
                  Làm thế nào để xem các sản phẩm
                </span>
              </div>
              <div class="d-flex justify-content-start p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="26px"
                  viewBox="0 0 24 24"
                  width="26px"
                  fill="#000000"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z" />
                      <circle cx="9" cy="13" r="1" />
                      <circle cx="15" cy="13" r="1" />
                      <path d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z" />
                    </g>
                  </g>
                </svg>
                <span className="text-white bg-secondary p-2 rounded">
                  ADMIN: Chào bạn
                </span>
              </div>
              <div class="d-flex justify-content-start p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="26px"
                  viewBox="0 0 24 24"
                  width="26px"
                  fill="#000000"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z" />
                      <circle cx="9" cy="13" r="1" />
                      <circle cx="15" cy="13" r="1" />
                      <path d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z" />
                    </g>
                  </g>
                </svg>
                <span className="text-white bg-secondary p-2 rounded w-75">
                  ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
                </span>
              </div>
            </div>

            <div className={classes.position}>
              <div className="border-top border-secondary p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="26px"
                  viewBox="0 0 24 24"
                  width="26px"
                  fill="#000000"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z" />
                      <circle cx="9" cy="13" r="1" />
                      <circle cx="15" cy="13" r="1" />
                      <path d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z" />
                    </g>
                  </g>
                </svg>
                <span className="ms-3 bg-primary ps-2 pe-5 py-1">
                  Enter Message!
                </span>
                <span className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M18.5 16H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h12.5c1.38 0 2.5 1.12 2.5 2.5S20.88 13 19.5 13H9c-.55 0-1-.45-1-1s.45-1 1-1h9.5V9.5H9c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h10.5c2.21 0 4-1.79 4-4s-1.79-4-4-4H7c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5h11.5V16z" />
                  </svg>
                </span>
                <span className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <g>
                      <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                      <g />
                      <g>
                        <path
                          d="M20,12c0-4.42-3.58-8-8-8s-8,3.58-8,8s3.58,8,8,8S20,16.42,20,12z M8.5,8C9.33,8,10,8.67,10,9.5 S9.33,11,8.5,11S7,10.33,7,9.5S7.67,8,8.5,8z M12,18c-2.28,0-4.22-1.66-5-4h10C16.22,16.34,14.28,18,12,18z M15.5,11 c-0.83,0-1.5-0.67-1.5-1.5S14.67,8,15.5,8S17,8.67,17,9.5S16.33,11,15.5,11z"
                          opacity=".3"
                        />
                        <circle cx="15.5" cy="9.5" r="1.5" />
                        <circle cx="8.5" cy="9.5" r="1.5" />
                        <path d="M11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12C22,6.48,17.52,2,11.99,2z M12,20 c-4.42,0-8-3.58-8-8c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z" />
                        <path d="M12,18c2.28,0,4.22-1.66,5-4H7C7.78,16.34,9.72,18,12,18z" />
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
      <button onClick={showLivechat} className={classes.fixedbutton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="30px"
          viewBox="0 0 24 24"
          width="30px"
          fill="#000000"
        >
          <g>
            <rect fill="none" height="24" width="24" x="0" />
            <path
              d="M4,6h10.1c0.22,1.07,0.79,2,1.57,2.71L12,11L4,6z M4,8v10h16V9.9c-0.32,0.07-0.66,0.1-1,0.1 c-0.6,0-1.16-0.12-1.7-0.32L12,13L4,8z"
              opacity=".3"
            />
            <path d="M20,9.9c0.74-0.15,1.42-0.48,2-0.92V18c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h10.1 C14.04,4.32,14,4.66,14,5s0.04,0.68,0.1,1H4l8,5l3.67-2.29c0.47,0.43,1.02,0.76,1.63,0.98L12,13L4,8v10h16V9.9z M16,5 c0,1.66,1.34,3,3,3s3-1.34,3-3s-1.34-3-3-3S16,3.34,16,5z" />
          </g>
        </svg>
      </button>
      <div className=" container-fluid mt-2 d-flex justify-content-between">
        <div className={classes.nav}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/"
          >
            Home
          </NavLink>
          <span className="ms-2">
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/shop"
            >
              Shop
            </NavLink>
          </span>
        </div>
        <h3>
          <em>BOUTIQUE</em>
        </h3>
        <div className={classes.nav}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M286.788 975Q257 975 236 953.788q-21-21.213-21-51Q215 873 236.212 852q21.213-21 51-21Q317 831 338 852.212q21 21.213 21 51Q359 933 337.788 954q-21.213 21-51 21Zm400 0Q657 975 636 953.788q-21-21.213-21-51Q615 873 636.212 852q21.213-21 51-21Q717 831 738 852.212q21 21.213 21 51Q759 933 737.788 954q-21.213 21-51 21ZM235 315l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841 297 829 318L694 561q-11 19-28.559 30.5Q647.881 603 627 603H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z" />
            </svg>
            Cart
          </NavLink>
          <span className="ms-2">
            {show.authen ? (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="22"
                  viewBox="0 96 960 960"
                  width="22"
                >
                  <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
                </svg>
                {userArr[0].name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="22"
                  viewBox="0 96 960 960"
                  width="22"
                >
                  <path d="M480 696 280 497h400L480 696Z" />
                </svg>
                <NavLink onClick={logoutHandler} to="/">
                  (Logout)
                </NavLink>
              </span>
            ) : (
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 96 960 960"
                  width="20"
                >
                  <path d="M489 936v-60h291V276H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366 444l43-43 176 176-174 174Z" />
                </svg>
                Login
              </NavLink>
            )}
          </span>
        </div>
      </div>
    </>
  );
};
export default MainNavigation;

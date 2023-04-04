import img from "./banner1.jpg";
import classes from "./LoginPage.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const LoginPage = (props) => {
  const userArr = [];
  const storedUserArr = JSON.parse(localStorage.getItem("userArr"));
  if (storedUserArr === null) {
    const userArr = [];
  } else {
    userArr.push(storedUserArr);
  }
  console.log(userArr);
  const show = useSelector((state) => state.authen);
  const dispatch = useDispatch();
  const [enteredEmailValid, setEnteredEmailValid] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [valid, setValid] = useState("");
  const emailInputHandler = (event) => {
    setEnteredEmailValid(event.target.value);
    console.log(enteredEmailValid);
  };
  const emailInputPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
    console.log(enteredPassword);
  };
  const submitPassword = (event) => {
    event.preventDefault();
    //XÁC THỰC EMAIL ĐÃ TRÙNG CHƯA
    const email = userArr.filter((el) => el.email === enteredEmailValid);
    console.log(email);
    //XÁC THỰC ĐÃ NHẬP EMAIL, PASS
    if (email.length > 0 && email[0].password === enteredPassword) {
      dispatch({ type: "ON_LOGIN" });
      console.log("xac thuc thanh cong");
    } else {
      setEnteredPassword("");
      setValid(true);
      console.log(" xac thuc that bai");
    }
  };
  return (
    <div className="container-fluid">
      {show.authen ? undefined : (
        <div className={classes.background}>
          <div className="d-flex justify-content-center">
            <div className={classes.box}>
              <p className="text-center my-5 h1 fst-italic fw-lighter">
                Sign In
              </p>
              <form onSubmit={submitPassword}>
                <label htmlFor="email" />
                <input
                  id="email"
                  type="text"
                  className="w-100 py-4 border "
                  placeholder="    Email"
                  value={enteredEmailValid}
                  onChange={emailInputHandler}
                />
                <label htmlFor="password" />
                <input
                  id="password"
                  type="password"
                  className="w-100 py-4 border "
                  placeholder="    Password"
                  value={enteredPassword}
                  onChange={emailInputPasswordHandler}
                />
                {valid ? (
                  <p className="text-danger">
                    Tài Khoản Hoặc Mật Khẩu Không Đúng
                  </p>
                ) : undefined}
                <button className="btn w-100 bg-dark text-white py-3 mt-4">
                  SIGN IN
                </button>
              </form>
              <p className="text-center my-4">
                <em>Create an account?</em>
                <span className="text-dark ms-2">
                  <em>
                    <NavLink to="/register" className="text-primary">
                      Sign up
                    </NavLink>
                  </em>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default LoginPage;

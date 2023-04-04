import classes from "./RegisterPage.module.css";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [empty, setEmpty] = useState(false);
  const [emailA, setEmailA] = useState(false);
  const [password8c, setPassword8c] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const userArr = [];
  const storedUserArr = JSON.parse(localStorage.getItem("userArr"));
  if (storedUserArr === null) {
    const userArr = [];
  } else {
    userArr.push(storedUserArr);
  }
  console.log(userArr);
  const navigate = useNavigate();

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const btnName = (event) => {
    setEnteredName(event.target.value);

    if (enteredName.trim() !== "") {
      setEnteredNameIsValid(false);
    }
  };
  const nameInputBlurHandler = (event) => {
    if (enteredName.trim() === "") {
      console.log("chua dien Ten");
      setEnteredNameIsValid(true);
      return;
    }
  };
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const btnEmail = (event) => {
    setEnteredEmail(event.target.value);
    console.log(enteredEmail);
    if (enteredEmail.trim() !== "") {
      setEnteredEmailIsValid(false);
    }
  };
  const emailInputBlurHandler = (event) => {
    const abc = userArr.filter((el) => el.email === enteredEmail);
    console.log(abc);
    if (
      enteredEmail.trim() === "" ||
      abc.length > 0 ||
      !enteredEmail.includes("@")
    ) {
      setEnteredEmailIsValid(true);
    }
  };

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
  const btnPassword = (event) => {
    setEnteredPassword(event.target.value);
    console.log(enteredPassword);
    if (enteredPassword.trim() !== "") {
      setEnteredPasswordIsValid(false);
    }
  };
  const passwordInputBlurHandler = (event) => {
    if (enteredPassword.trim() === "" || enteredPassword.trim().length <= 8) {
      setEnteredPasswordIsValid(true);
    }
  };
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredPhoneIsValid, setEnteredPhoneIsValid] = useState(false);
  const btnPhone = (event) => {
    setEnteredPhone(event.target.value);
    console.log(enteredPhone);
    if (enteredPhone.trim() !== "") {
      setEnteredPhoneIsValid(false);
    }
  };
  const phoneInputBlurHandler = (event) => {
    if (enteredPhone.trim() === "") {
      setEnteredPhoneIsValid(true);
    }
  };
  const SignupHandler = (event) => {
    event.preventDefault();
    const abc = userArr.filter((el) => el.email === enteredEmail);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(true);
    } else if (
      enteredEmail.trim() === "" ||
      abc.length > 0 ||
      !enteredEmail.includes("@")
    ) {
      setEnteredEmailIsValid(true);
    } else if (
      enteredPassword.trim() === "" ||
      enteredPassword.trim().length <= 8
    ) {
      setEnteredPasswordIsValid(true);
    } else if (enteredPhone.trim() === "") {
      setEnteredPhoneIsValid(true);
    } else {
      const userArray = {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
        phone: enteredPhone,
      };
      localStorage.setItem("userArr", JSON.stringify(userArray));
      console.log("thanhcong");
      navigate("/login");
    }
  };
  return (
    <div className="container-fluid">
      <div className={classes.background}>
        <div className="d-flex justify-content-center">
          <div className={classes.box}>
            <p className="text-center my-5 h1 fst-italic fw-lighter">Sign Up</p>
            <form onSubmit={SignupHandler}>
              <label htmlFor="fullName" />
              <input
                id="fullName"
                type="text"
                className="w-100 py-4 border "
                placeholder="    Full Name"
                value={enteredName}
                onChange={btnName}
                onBlur={nameInputBlurHandler}
              />

              {enteredNameIsValid && (
                <p className="text-danger">Vui lòng nhập tên của bạn</p>
              )}
              <label htmlFor="email" />
              <input
                id="email"
                type="text"
                className="w-100 py-4 border "
                placeholder="    Email"
                value={enteredEmail}
                onChange={btnEmail}
                onBlur={emailInputBlurHandler}
              />
              {enteredEmailIsValid && (
                <p className="text-danger">
                  Email không hợp lệ hoặc đã tồn tại (@)
                </p>
              )}
              <label htmlFor="password" />
              <input
                id="password"
                type="password"
                className="w-100 py-4 border "
                placeholder="    Password"
                value={enteredPassword}
                onChange={btnPassword}
                onBlur={passwordInputBlurHandler}
              />
              {enteredPasswordIsValid && (
                <p className="text-danger">Mật khẩu tối thiểu 9 kí tự</p>
              )}
              <label htmlFor="phone" />
              <input
                id="phone"
                type="tel"
                className="w-100 py-4 border "
                placeholder="    Phone"
                value={enteredPhone}
                onChange={btnPhone}
                onBlur={phoneInputBlurHandler}
              />
              {enteredPhoneIsValid && (
                <p className="text-danger">Vui lòng nhập số điện thoại</p>
              )}
              <button className="btn w-100 bg-dark text-white py-3 mt-4">
                SIGN UP
              </button>
            </form>
            <p className="text-center my-4">
              <em>Login?</em>
              <span className="text-dark ms-2">
                <em>
                  <NavLink to="/login" className="text-primary">
                    Click
                  </NavLink>
                </em>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;

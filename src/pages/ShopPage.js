import classes from "./ShopPage.module.css";
import Modal from "../UI/Modal";
import Popup from "../popup/Popup";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useState } from "react";
const ShopPage = (props) => {
  const navigate = useNavigate();
  const navigateHandler = (event) => {
    const renderList = props.data.filter(
      (el) => el.img1 === event.target.getAttribute("src")
    );
    console.log(renderList);
    const para = `/detail/${renderList[0]._id.$oid}`;
    //  renderList[0]._id.$oid;
    navigate(para);
  };
  const [showAll, setShowAll] = useState(true);

  const [showIphone, setShowIphone] = useState(false);
  const [showIpad, setShowIpad] = useState(false);
  const [showMacbook, setShowMacbook] = useState(false);
  const [showAirpod, setShowAirpod] = useState(false);
  const [showWatch, setShowWatch] = useState(false);
  const [showMouse, setShowMouse] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const btnAll = () => {
    setShowAll(true);
    setShowIphone(false);
    setShowIpad(false);
    setShowMacbook(false);
    setShowAirpod(false);
    setShowWatch(false);
    setShowMouse(false);
    setShowKeyboard(false);
    setShowOther(false);
  };
  const btnIphone = () => {
    setShowIphone(true);
    setShowAll(false);
    setShowIpad(false);
    setShowMacbook(false);
    setShowAirpod(false);
    setShowWatch(false);
    setShowMouse(false);
    setShowKeyboard(false);
    setShowOther(false);
  };
  const btnIpad = () => {
    setShowIpad(true);
    setShowAll(false);
    setShowIphone(false);
    setShowMacbook(false);
    setShowAirpod(false);
    setShowWatch(false);
    setShowMouse(false);
    setShowKeyboard(false);
    setShowOther(false);
  };
  const btnMacbook = () => {
    setShowMacbook(true);
    setShowAll(false);
    setShowIphone(false);
    setShowIpad(false);
    setShowAirpod(false);
    setShowWatch(false);
    setShowMouse(false);
    setShowKeyboard(false);
    setShowOther(false);
  };
  const btnAirpod = () => {
    setShowAirpod(true);
    setShowMacbook(false);
    setShowAll(false);
    setShowIphone(false);
    setShowIpad(false);
    setShowWatch(false);
    setShowMouse(false);
    setShowKeyboard(false);
    setShowOther(false);
  };
  const btnWatch = () => {
    setShowWatch(true);
    setShowAirpod(false);
    setShowMacbook(false);
    setShowAll(false);
    setShowIphone(false);
    setShowIpad(false);
    setShowMouse(false);
    setShowKeyboard(false);
    setShowOther(false);
  };
  const btnMouse = () => {
    setShowMouse(true);
    setShowWatch(false);
    setShowAirpod(false);
    setShowMacbook(false);
    setShowAll(false);
    setShowIphone(false);
    setShowIpad(false);
    setShowKeyboard(false);
    setShowOther(false);
  };
  const btnKeyboard = () => {
    setShowKeyboard(true);
    setShowMouse(false);
    setShowWatch(false);
    setShowAirpod(false);
    setShowMacbook(false);
    setShowAll(false);
    setShowIphone(false);
    setShowIpad(false);
    setShowOther(false);
  };
  const btnOther = () => {
    setShowOther(true);
    setShowKeyboard(true);
    setShowMouse(false);
    setShowWatch(false);
    setShowAirpod(false);
    setShowMacbook(false);
    setShowAll(false);
    setShowIphone(false);
    setShowIpad(false);
  };
  console.log(props.data);
  const dataIphone = props.data.filter((el) => el.category === "iphone");
  const dataIpad = props.data.filter((el) => el.category === "ipad");
  const dataMacbook = props.data.filter((el) => el.category === "macbook");
  const dataAirpod = props.data.filter((el) => el.category === "airpod");
  const dataWatch = props.data.filter((el) => el.category === "watch");
  const dataMouse = props.data.filter((el) => el.category === "mouse");
  const dataKeyboard = props.data.filter((el) => el.category === "keyboard");
  const dataOther = props.data.filter((el) => el.category === "other");

  return (
    <>
      <p>ShopPage</p>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="h6 fst-italic mt-2">
              <p className="my-3">CATEGORIES</p>
            </div>
            <div className={classes.nav1}>
              <div className="bg-dark h6 text-white ps-3 py-2 fst-italic mt-2">
                Apple
              </div>

              <div className="nav-item">
                <a onClick={btnAll} href="#" className=" nav-link active">
                  All
                </a>
              </div>

              <div className="bg-light h6 ps-3 py-2 fst-italic">
                IPHONE & MAC
              </div>
              <div className="nav-item">
                <a onClick={btnIphone} className="nav-link" href="#">
                  Iphone
                </a>
              </div>

              <div className="nav-item">
                <a onClick={btnIpad} className="nav-link" href="#">
                  Ipad
                </a>
              </div>
              <div className="nav-item">
                <a onClick={btnMacbook} className="nav-link" href="#">
                  Macbook
                </a>
              </div>
              <div className="bg-light h6 ps-3 py-2 fst-italic">WIRELESS</div>

              <div className="nav-item">
                <a onClick={btnAirpod} className="nav-link" href="#">
                  AirPod
                </a>
              </div>
              <div className="nav-item">
                <a onClick={btnWatch} className="nav-link" href="#">
                  Watch
                </a>
              </div>
              <div className="bg-light h6 ps-3 py-2 fst-italic">OTHER</div>

              <div className="nav-item">
                <a onClick={btnMouse} className="nav-link" href="#">
                  Mouse
                </a>
              </div>
              <div className="nav-item">
                <a onClick={btnKeyboard} className="nav-link" href="#">
                  Keyboard
                </a>
              </div>
              <div className="nav-item">
                <a onClick={btnOther} className="nav-link" href="#">
                  Other
                </a>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row row-cols-2 row-cols-lg-3 ">
              {showAll
                ? props.data.map((el) => (
                    <div className="col" key={el._id.$oid}>
                      <button className={classes.btnTop}>
                        <img
                          onClick={navigateHandler}
                          className={classes.dataImg}
                          src={el.img1}
                        />
                      </button>
                      <p className="text-secondary fw-bold text-center">
                        {el.name}
                        <br />
                        <span className="text-muted text-center">
                          {new Intl.NumberFormat("vn-VN").format(el.price)}
                        </span>
                      </p>
                    </div>
                  ))
                : undefined}
              {showIphone
                ? dataIphone.map((el) => (
                    <div className="col" key={el._id.$oid}>
                      <button className={classes.btnTop}>
                        <img
                          onClick={navigateHandler}
                          className={classes.dataImg}
                          src={el.img1}
                        />
                      </button>
                      <p className="text-secondary fw-bold text-center">
                        {el.name}
                        <br />
                        <span className="text-muted text-center">
                          {new Intl.NumberFormat("vn-VN").format(el.price)}
                        </span>
                      </p>
                    </div>
                  ))
                : undefined}
              {showIpad
                ? dataIpad.map((el) => (
                    <div className="col" key={el._id.$oid}>
                      <button className={classes.btnTop}>
                        <img
                          onClick={navigateHandler}
                          className={classes.dataImg}
                          src={el.img1}
                        />
                      </button>
                      <p className="text-secondary fw-bold text-center">
                        {el.name}
                        <br />
                        <span className="text-muted text-center">
                          {new Intl.NumberFormat("vn-VN").format(el.price)}
                        </span>
                      </p>
                    </div>
                  ))
                : undefined}
              {showMacbook
                ? dataMacbook.map((el) => (
                    <div className="col" key={el._id.$oid}>
                      <button className={classes.btnTop}>
                        <img
                          onClick={navigateHandler}
                          className={classes.dataImg}
                          src={el.img1}
                        />
                      </button>
                      <p className="text-secondary fw-bold text-center">
                        {el.name}
                        <br />
                        <span className="text-muted text-center">
                          {new Intl.NumberFormat("vn-VN").format(el.price)}
                        </span>
                      </p>
                    </div>
                  ))
                : undefined}
              {showAirpod
                ? dataAirpod.map((el) => (
                    <div className="col" key={el._id.$oid}>
                      <button className={classes.btnTop}>
                        <img
                          onClick={navigateHandler}
                          className={classes.dataImg}
                          src={el.img1}
                        />
                      </button>
                      <p className="text-secondary fw-bold text-center">
                        {el.name}
                        <br />
                        <span className="text-muted text-center">
                          {new Intl.NumberFormat("vn-VN").format(el.price)}
                        </span>
                      </p>
                    </div>
                  ))
                : undefined}
              {showWatch
                ? dataWatch.map((el) => (
                    <div className="col" key={el._id.$oid}>
                      <button className={classes.btnTop}>
                        <img
                          onClick={navigateHandler}
                          className={classes.dataImg}
                          src={el.img1}
                        />
                      </button>
                      <p className="text-secondary fw-bold text-center">
                        {el.name}
                        <br />
                        <span className="text-muted text-center">
                          {new Intl.NumberFormat("vn-VN").format(el.price)}
                        </span>
                      </p>
                    </div>
                  ))
                : undefined}
              {showMouse
                ? dataMouse.map((el) => (
                    <div className="col" key={el._id.$oid}>
                      <button className={classes.btnTop}>
                        <img
                          onClick={navigateHandler}
                          className={classes.dataImg}
                          src={el.img1}
                        />
                      </button>
                      <p className="text-secondary fw-bold text-center">
                        {el.name}
                        <br />
                        <span className="text-muted text-center">
                          {new Intl.NumberFormat("vn-VN").format(el.price)}
                        </span>
                      </p>
                    </div>
                  ))
                : undefined}
              {showKeyboard
                ? dataKeyboard.map((el) => (
                    <div className="col" key={el._id.$oid}>
                      <button className={classes.btnTop}>
                        <img
                          onClick={navigateHandler}
                          className={classes.dataImg}
                          src={el.img1}
                        />
                      </button>
                      <p className="text-secondary fw-bold text-center">
                        {el.name}
                        <br />
                        <span className="text-muted text-center">
                          {new Intl.NumberFormat("vn-VN").format(el.price)}
                        </span>
                      </p>
                    </div>
                  ))
                : undefined}
              {showOther
                ? dataOther.map((el) => (
                    <div className="col" key={el._id.$oid}>
                      <button className={classes.btnTop}>
                        <img
                          onClick={navigateHandler}
                          className={classes.dataImg}
                          src={el.img1}
                        />
                      </button>
                      <p className="text-secondary fw-bold text-center">
                        {el.name}
                        <br />
                        <span className="text-muted text-center">
                          {new Intl.NumberFormat("vn-VN").format(el.price)}
                        </span>
                      </p>
                    </div>
                  ))
                : undefined}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopPage;

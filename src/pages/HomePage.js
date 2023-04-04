import Layout from "../layout/Layout";
import Footer from "../layout/Footer";
import Banner from "../Banner/Banner";
import DataImg from "../dataImg/DataImg";
import classes from "./HomePage.module.css";
import MoreInformation from "../layout/MoreInformation";
import Popup from "../popup/Popup";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
const HomePage = (props) => {
  const [dataDetail, setDataDetail] = useState([]);
  const dispatch = useDispatch();
  // const show = store.getState().showPopup;
  const show = useSelector((state) => state.showPopup);
  console.log(show);

  const showDetail = (event) => {
    const renderList = props.data.filter(
      (el) => el.img1 === event.target.getAttribute("src")
    );
    setDataDetail(renderList);
    console.log(renderList);
    //QUẢN LÍ REDUX SHOW VÀ HIDE
    dispatch({ type: "SHOW_POPUP" });
  };
  const hideDetail = (event) => {
    console.log("123");
    dispatch({ type: "HIDE_POPUP" });
  };
  return (
    <>
      <Banner />
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div>
          <h5 className="mt-3 fw-lighter fst-italic text-secondary">
            CAREFULLY CREATED COLLECTIONS
          </h5>
        </div>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div>
          <h4 className="fst-italic">BROWSE OUR CATEGORIES</h4>
        </div>
      </div>

      <DataImg />
      <h5 className=" container-fluid mt-3 fw-lighter fst-italic text-secondary">
        MAKE THE HARD WAY
      </h5>

      <h4 className=" container-fluid fst-italic">TOP TRENDING PRODUCTS</h4>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-lg-4 ">
          {props.data.map((el) => (
            <div className="col" key={el._id.$oid}>
              <button className={classes.btnTop}>
                <img
                  onClick={showDetail}
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
          ))}
        </div>
      </div>
      <MoreInformation></MoreInformation>
      <Footer></Footer>
      {show.showPopup ? (
        <Popup
          onClick={hideDetail}
          img={dataDetail[0].img1}
          key={dataDetail[0]._id}
          name={dataDetail[0].name}
          price={dataDetail[0].price}
          detail={dataDetail[0].short_desc}
        />
      ) : undefined}
    </>
  );
};
export default HomePage;

import { NavLink } from "react-router-dom";
import img1 from "./product_1.png";
import img2 from "./product_2.png";
import img3 from "./product_3.png";
import img4 from "./product_4.png";
import img5 from "./product_5.png";
import classes from "./DataImg.module.css";
const DataImg = () => {
  return (
    <>
      <div className="container-fluid">
        <div className=" row">
          <div className="col">
            <NavLink className={classes.nav} to="/shop">
              <img src={img1} />
            </NavLink>
          </div>
          <div className="col">
            <NavLink className={classes.nav} to="/shop">
              <img src={img2} />
            </NavLink>
          </div>
        </div>
        <div className=" row mt-3">
          <div className="col">
            <NavLink className={classes.nav} to="/shop">
              <img src={img3} />
            </NavLink>
          </div>
          <div className="col">
            <NavLink className={classes.nav} to="/shop">
              <img src={img4} />
            </NavLink>
          </div>
          <div className="col">
            <NavLink className={classes.nav} to="/shop">
              <img src={img5} />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default DataImg;

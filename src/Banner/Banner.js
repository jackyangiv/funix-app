import img from "./banner1.jpg";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="container-fluid position-relative">
      <img className="img-fluid" src={img} alt="banner"></img>
      <div className="w-50 ms-5 position-absolute top-50 start-0 translate-middle-y">
        <p>
          <em>NEW INSPORATION 2020</em>
        </p>
        <h2>
          <em>20% OFF ON NEW SEASON</em>
        </h2>
        <NavLink to="/shop">
          <button className=" fw-light btn text-white bg-secondary">
            <em> Browse collections</em>
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default Banner;

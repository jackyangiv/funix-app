import classes from "./MoreInformation.module.css";
const MoreInformation = () => {
  return (
    <>
      <div className="container-fluid bg-light p-5">
        <div className="row">
          <div className="col text-center">
            <p className="h5">
              <em>FREE SHIPPING</em>
              <br />
              <span className="lead">
                <em>Free shipping worlwide</em>
              </span>
            </p>
          </div>
          <div className="col text-center">
            <p className="h5">
              <em>24 X 7 SERVICE</em>
              <br />
              <span className="lead">
                <em>Free shipping worlwide</em>
              </span>
            </p>
          </div>
          <div className="col text-center">
            <p className="h5">
              <em>FESTIVAL OFFER</em>
              <br />
              <span className="lead">
                <em>Free shipping worlwide</em>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3 mb-3">
        <div className="row">
          <div className="col ">
            <p className="h5">
              <em>LET'S BE FRIENDS!</em>
              <br />
              <span className="lead">
                <em>Nisi nisi tempor consequat laboris nisi</em>
              </span>
            </p>
          </div>
          <div className="col">
            <form className="row g-0">
              <div className="col-9">
                <label htmlFor="email" className="visually-hidden">
                  Password
                </label>
                <input
                  type="text"
                  className={`form-control p-3 ${classes.test}`}
                  // className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="col-3 ">
                <button type="submit" className="btn btn-dark p-3">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default MoreInformation;

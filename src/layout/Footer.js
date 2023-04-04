import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className=" py-5 bg-dark text-white row row-cols-1 row-cols-lg-3">
      <div className="col">
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <p className="fst-italic">CUSTOMER SERVICES</p>
            <a href="#">Help & Contact Us</a>
            <br />
            <a href="#">Returns & Refunds</a>
            <br />
            <a href="#">Online Stores</a>
            <br />
            <a href="#">Terms Conditions</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <p className="fst-italic">COMPANY</p>
            <a href="#">What We Do</a>
            <br />
            <a href="#">Avaiable Services</a>
            <br />
            <a href="#">Lastest Posts</a>
            <br />
            <a href="#">FAQs</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <p className="fst-italic">SOCIAL MEDIA</p>
            <a href="#">Twitter</a>
            <br />
            <a href="#">Instagram</a>
            <br />
            <a href="#">Facebook</a>
            <br />
            <a href="#">Pinterest</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

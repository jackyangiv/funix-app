import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import classes from "./DetailPage.module.css";
import { useSelector, useDispatch } from "react-redux";

const DetailPage = (props) => {
  const cart = useSelector((state) => state.listCart);
  console.log(cart.listCart);
  const dispatch = useDispatch();
  const [enteredInput, setEnteredInput] = useState(0);
  const param = useParams();
  const renderList = props.data.filter(
    (el) => el._id.$oid === `${param.detailId}`
  );
  console.log(props.data);
  const dataRelate = props.data.filter(
    //LỌC SẢN PHẨM TƯƠNG TỰ LIÊN QUAN
    (el) => el.category === renderList[0].category
  );
  useEffect(() => {
    localStorage.setItem("listCart", JSON.stringify(cart.listCart));
  }, [cart]);
  const btnPlus = () => {
    //CẬP NHẬT STATE TĂNG GIẢM
    setEnteredInput(enteredInput + 1);
  };
  const btnDiv = () => {
    if (enteredInput > 0) {
      //CẬP NHẬT STATE TĂNG GIẢM
      setEnteredInput(enteredInput - 1);
    } else {
      return;
    }
  };
  const inputHandler = (event) => {
    console.log(event);
  };
  const submitHandler = (event) => {
    //THÊM SẢN PHẨM VÀO CART SẼ CÓ XỬ LÝ LOGIC KHI TRÙNG DỮ LIỆU CHÚNG TA SẼ TĂNG QUANTITY LÊN
    event.preventDefault();
    console.log("123");
    dispatch({
      type: "ADD_CART",
      payload: {
        id: renderList[0]._id.$oid,
        img: renderList[0].img1,
        name: renderList[0].name,
        price: renderList[0].price,
        quantity: enteredInput,
      },
    });
  };

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3">
          <div className="col-2">
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <img className="w-50" src={renderList[0].img4} />
              </div>
              <div className="p-2 bd-highlight">
                <img className="w-50" src={renderList[0].img3} />
              </div>
              <div className="p-2 bd-highlight">
                <img className="w-50" src={renderList[0].img2} />
              </div>
              <div className="p-2 bd-highlight">
                <img className="w-50" src={renderList[0].img1} />
              </div>
            </div>
          </div>
          <div className="col-4">
            <img className="w-100" src={renderList[0].img1} />
          </div>
          <div className="col">
            <p>{renderList[0].name}</p>
            <p> {new Intl.NumberFormat("vn-VN").format(renderList[0].price)}</p>
            <p>{renderList[0].short_desc}</p>
            <p>CATEGORY: {renderList[0].category}</p>
            <form onSubmit={submitHandler}>
              <label htmlFor="quantity" />
              <span className="bg-white py-2 border ">
                <span className="fw-light ps-2">
                  <em>QUANTITY</em>
                </span>

                <button onClick={btnDiv} type="button" className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    viewBox="0 96 960 960"
                    width="25"
                  >
                    <path d="M560 776 360 576l200-200v400Z" />
                  </svg>
                </button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={enteredInput}
                  onChange={inputHandler}
                />
                <button onClick={btnPlus} type="button" className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    viewBox="0 96 960 960"
                    width="25"
                  >
                    <path d="M400 776V376l200 200-200 200Z" />
                  </svg>
                </button>
              </span>
              <button type="submit" className="btn text-dark bg-secondary mb-1">
                <span className="fw-light fst-italic text-white">
                  Add to cart
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="btn mt-5 bg-secondary p-2 text-white fst-italic">
          DESCRIPTION
        </p>
        <p className="h6 fst-italic">PRODUCTION DESCRIPTION</p>

        {renderList[0].long_desc.split("\n").map((t, key) => (
          <p key={key}>{t}</p>
        ))}
      </div>
      <div className="container">
        <p className="h6 mt-5 fst-italic">RELATED PRODUCTS</p>
        <div className="container mb-5 mt-3">
          <div className="row row-cols-2 row-cols-lg-3">
            {dataRelate.map((el) => (
              <div className="col" key={el._id.$oid}>
                <button className="btn">
                  <img className="w-50" src={el.img1} />
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
      </div>
    </>
  );
};
export default DetailPage;

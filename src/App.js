import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./layout/Layout";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      if (!response.ok) {
      } else {
        const resData = await response.json();

        setData(resData);
        return resData;
      }
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/shop" element={<ShopPage data={data} />} />
        <Route path="/detail/:detailId" element={<DetailPage data={data} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage data={data} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/detail/*" element={<HomePage data={data} />} />
        <Route path="*" element={<HomePage data={data} />} />
      </Routes>
    </Layout>
  );
}
export default App;

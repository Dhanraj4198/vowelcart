import { Route, Routes } from "react-router-dom";
import Signup from "../pages/SignUp";
import Login from "../pages/Login";
import Notfound from "../components/notfound";
import Products from "../pages/products";
import Admin from "../pages/Admin";
import Addproduct from "../pages/Addproduct";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import Success from "../pages/Success";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/addproduct" element={<Addproduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

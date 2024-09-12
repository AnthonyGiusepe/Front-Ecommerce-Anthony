import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import './form.css'
import Register from "./pages/register/Register";
import Nosotros from "./pages/nosotros/Nosotros";
import Admin from "./pages/admin/Admin";
import AdminProduct from "./pages/admin-product/AdminProduct";
import HomeProduct from "./pages/home-product/HomeProduct";
import ProductDetail from "./pages/product-detail/ProductDetail";
import OrderDialog from "./components/order-dialog/OrderDialog";
import { useState } from "react";


export default function App() {

  const [toggleModal, setToggleModal] = useState(false)

  return (
    <>
      <button onClick={()=> setToggleModal(!toggleModal)}>Ver Carrito</button>

      <OrderDialog showModal={toggleModal} setToggleModal={setToggleModal} />

      <Header />

      <main className="main-container">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/nosotros" element={<Nosotros />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="/admin-product" element={<AdminProduct />} />

          <Route path="/home-product" element={<HomeProduct />} />

          <Route path="/product-detail/:id" element={<ProductDetail />} />

        </Routes>

      </main>

      <Footer />
    </>

  )

}

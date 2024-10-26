import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import './form.css'
import Register from "./pages/register/Register";
import Nosotros from "./pages/nosotros/Nosotros";
import AdminProduct from "./pages/admin-product/AdminProduct";
import ProductDetail from "./pages/product-detail/ProductDetail";
import AdminUser from "./pages/admin-user/AdminUser";
import Layout from "./layout/Layout";
import AdminGuard from "../services/guard/AdminGuard";


export default function App() {

  return (

    <>

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="contact" element={<Contact />} />

          <Route path="register" element={<Register />} />

          <Route path="nosotros" element={<Nosotros />} />

          <Route path="admin-product" element={
            <AdminGuard>
              <AdminProduct />
            </AdminGuard>
          } />

          <Route path="admin-user"
            element={
              <AdminGuard>
                <AdminUser />
              </AdminGuard>
            } />

          <Route path="product-detail/:id" element={<ProductDetail />} />

          <Route path="*" element={<h1>Not Found</h1>} />

        </Route>

      </Routes>



    </>

  )

}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import CartContext from "./contexts/CartContext";
import Signup from "./pages/signup/Signup";
import Products from "./pages/products/Products";
import ContactUs from "./pages/contactUs/ContactUs";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import SingleProduct from "./pages/single_product/SingleProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
          </Routes>
          <Footer />
        </CartContext>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import CartContextProvider from "./contexts/CartContext";
import Signup from "./pages/signup/Signup";
import Products from "./pages/products/Products";
import ContactUs from "./pages/contactUs/ContactUs";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import SingleProduct from "./pages/single_product/SingleProduct";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NotificationContextProvider from "./contexts/NotificationContext";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e9b142",
      },
      secondary: {
        main: "#e9b142",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NotificationContextProvider>
            <CartContextProvider>
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
            </CartContextProvider>
          </NotificationContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

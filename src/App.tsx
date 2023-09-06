import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Login } from "./pages/login/Login";
import CartContext from "./contexts/CartContext";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";

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
            {/* <Route path="/products" element={<Login />} /> */}
          </Routes>
        </CartContext>
      </BrowserRouter>
    </>
  );
}

export default App;

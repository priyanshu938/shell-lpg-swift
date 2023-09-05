import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Login } from "./pages/login/Login";
import CartContext from "./contexts/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </CartContext>
      </BrowserRouter>
    </>
  );
}

export default App;

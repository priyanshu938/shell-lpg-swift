import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Navbar = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftNav}>
        <Link to="/">
          <img
            src="https://th.bing.com/th?id=OIP.OhJ97mGtZzm852nJOhga5gHaGP&w=272&h=229&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt=""
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.rightNav}>
        <Link to="/login" className={styles.navLinks}>
          Login
        </Link>
        <Link to="/signup" className={styles.navLinks}>
          Signup
        </Link>
        <Link to="/contact" className={styles.navLinks}>
          Contact Us
        </Link>
        <Link to="/products" className={styles.navLinks}>
          Our Products
        </Link>
        <Link to="/cart" className={styles.navLinks}>
          <Badge badgeContent={cartItems} color="primary">
            <ShoppingCartIcon onClick={() => navigate("/cart")} />
          </Badge>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

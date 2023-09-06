import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Navbar = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftNav}>
        <Link to="/">
          <img src="/public/logo.png" alt="" className={styles.logo} />
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
            <ShoppingCartIcon onClick={() => setCartItems(cartItems + 1)} />
          </Badge>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

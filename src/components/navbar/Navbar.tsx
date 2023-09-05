import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftNav}>
        <Link to="/">Logo</Link>
      </div>
      <div className={styles.rightNav}>
        <Link to="/login" className={styles.navLinks}>
          Login
        </Link>
        <Link to="/signup" className={styles.navLinks}>
          Signup
        </Link>
        <Link to="/about" className={styles.navLinks}>
          About Us
        </Link>
        <Link to="/contact" className={styles.navLinks}>
          Contact Us
        </Link>
        <Link to="/products" className={styles.navLinks}>
          Our Products
        </Link>
        <Link to="/cart" className={styles.navLinks}>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

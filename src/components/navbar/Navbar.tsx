import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Notification from "../../utils/Notification";
import { NotificationContext } from "../../contexts/NotificationContext";
import Button from "@mui/material/Button";
import Avatar from "react-avatar";

const Navbar = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { severity, setSeverity, setMessage, message, open, setOpen } =
    useContext(NotificationContext);
  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  return (
    <>
      <Notification
        isOpen={open}
        setIsOpen={setOpen}
        message={message}
        severity={severity}
      />

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
          <Link to="/products" className={styles.navLinks}>
            Our Products
          </Link>
          <Link to="/contact" className={styles.navLinks}>
            Contact Us
          </Link>
          {email ? (
            <>
              <Link to="/orders" className={styles.navLinks}>
                My Orders
              </Link>
              <Link to="/cart" className={styles.navLinks}>
                <Badge badgeContent={cartItems.length} color="primary">
                  <ShoppingCartIcon onClick={() => navigate("/cart")} />
                </Badge>
              </Link>
              <Avatar
                name={window.localStorage.getItem("name") || ""}
                size="40"
                round={true}
                maxInitials={2}
                style={{ cursor: "pointer" }}
              />
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "var(--text-decoration-color)",
                  "&:hover": {
                    backgroundColor: "var(--text-decoration-color)",
                  },
                }}
                onClick={() => {
                  localStorage.removeItem("email");
                  navigate("/");
                  setOpen(true);
                  setCartItems([]);
                  setMessage("Logged out successfully");
                  setSeverity("success");
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button variant="contained" onClick={() => navigate("/signup")}>
                Signup
              </Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

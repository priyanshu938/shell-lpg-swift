import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../contexts/CartContext";
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  //delete cart item from the cart
  const deleteItem = (id: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <div className={styles.cart}>
          <div className={styles.cartLeft}>
            <h2>Shopping Cart</h2>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} />
                <div className={styles.cartItemInfo}>
                  <h3>{item.name}</h3>
                  <p className={styles.cartItemDescription}>
                    {item.description}
                  </p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <Button
                    variant="contained"
                    endIcon={<RemoveShoppingCartIcon />}
                    onClick={() => deleteItem(item.id)}
                  >
                    Remove from Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartRight}>
            <h2>Subtotal</h2>
            <p>
              Subtotal ({cartItems.length} items): ₹
              {cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )}
            </p>
            <Button variant="contained">Proceed to checkout</Button>
          </div>
        </div>
      ) : (
        <h2>Your Cart is Empty</h2>
      )}
    </>
  );
};

export default Cart;

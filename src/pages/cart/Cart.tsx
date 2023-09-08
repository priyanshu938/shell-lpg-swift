import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
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
                  <p>{item.description}</p>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartRight}>
            <h2>Subtotal</h2>
            <p>Subtotal (0 items): ₹0</p>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <h2>Your Cart is Empty</h2>
      )}
    </>
  );
};

export default Cart;

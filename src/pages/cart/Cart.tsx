import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return <div>Cart {cartItems}</div>;
};

export default Cart;

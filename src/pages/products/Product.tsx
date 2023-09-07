import React from "react";
import styles from "./Product.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

interface IProps {
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
}
const Product = ({ name, image, description, price, rating }: IProps) => {
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productImage}>
          <img src={image} alt="" />
        </div>
        <div className={styles.content}>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Price : Rs{price}</p>
          <Rating value={rating} readOnly />
        </div>
      </div>
    </>
  );
};

export default Product;

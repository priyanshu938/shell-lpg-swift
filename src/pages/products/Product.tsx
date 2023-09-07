import React from "react";
import styles from "./Product.module.css";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

interface IProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
}
const Product = ({ id, name, image, description, price, rating }: IProps) => {
  let navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      <div className={styles.productContainer} onClick={() => handleClick(id)}>
        <div className={styles.productImage}>
          <img src={image} alt="" />
        </div>
        <div className={styles.content}>
          <h2>{name}</h2>
          <p>{description}</p>
          <p className={styles.price}>Price : Rs {price}</p>
          <Rating value={rating} readOnly />
        </div>
      </div>
    </>
  );
};

export default Product;

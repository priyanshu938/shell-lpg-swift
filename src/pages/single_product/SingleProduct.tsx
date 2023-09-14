import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import styles from "./SingleProduct.module.css";
import { CartContext } from "../../contexts/CartContext";
import { NotificationContext } from "../../contexts/NotificationContext";
import { SERVER_URL } from "../../utils/ServerUrl";

const SingleProduct = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { setSeverity, setMessage, setOpen } = useContext(NotificationContext);
  const navigate = useNavigate();

  //remove this after api call line
  type Params = {
    id: string;
  };

  const { id } = useParams<Params>();

//   const [productsArray] = useState(
//  []
//   );

  //change this after api call for single product
  const [singleProductData, setSingleProductData] = useState(
    {
      id: 0,
      name: "",
      description: "",
      imageUrl: "",
      price: 0,
      quantity: 1,
      rating: null,
    }
  );

  const handleAddToCart = (id: number) => {
    //do not add the product if it is already in the cart
    if (cartItems.find((item) => item.id === id)) {
      setOpen(true);
      setMessage("Item already in cart");
      setSeverity("error");
      return;
    }
    setCartItems([...cartItems, singleProductData]);
    setOpen(true);
    setMessage("Item added to cart");
    setSeverity("success");
  };
  useEffect(() => {
    const getData=async()=>{
      const res = await fetch(`${SERVER_URL}/Products/${id}`);
      const data = await res.json();
      console.log(data)
      setSingleProductData(data);
    }
    getData();
    
  }, []);

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
          <img src={singleProductData.imageUrl} alt="" />
        </div>
        <div className={styles.cardContent}>
          <h2>{singleProductData.name}</h2>
          <p>{singleProductData.description}</p>
          <p className={styles.price}>Price : Rs {singleProductData.price}</p>
          <Rating value={singleProductData.rating} readOnly />
          <div className={styles.quantitySelect}>
            <br />
            <div
              className={styles.quantityButton}
              onClick={() => {
                setSingleProductData((prev) => {
                  return {
                    ...prev,
                    quantity: prev.quantity === 1 ? 1 : prev.quantity - 1,
                  };
                });
              }}
            >
              -
            </div>

            <div className={styles.quantityNumber}>
              {singleProductData.quantity}
            </div>
            <div
              className={styles.quantityButton}
              onClick={() => {
                setSingleProductData((prev) => {
                  return {
                    ...prev,
                    quantity: prev.quantity + 1,
                  };
                });
              }}
            >
              +
            </div>
          </div>

          <Button
            variant="contained"
            endIcon={<AddShoppingCartIcon />}
            sx={{ mt: 6 }}
            onClick={() => {
              if (localStorage.getItem("email")) {
                handleAddToCart(singleProductData.id);
              } else {
                navigate("/login");
                setOpen(true);
                setMessage("Please login to add items to cart");
                setSeverity("error");
              }
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import styles from "./SingleProduct.module.css";
import { CartContext } from "../../contexts/CartContext";

const SingleProduct = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  //remove this after api call line
  type Params = {
    id: string;
  };

  const { id } = useParams<Params>();

  const [productsArray] = useState([
    {
      id: 1,
      image: "https://github.com/atishij/pictures/blob/main/P1.jpg?raw=true",
      name: "Domestic LPG Cylinder",
      description:
        "Our domestic LPG cylinder is a reliable and safe solution for your household cooking and heating needs. Made from high-quality steel and equipped with a robust valve, this cylinder is designed to store and deliver LPG efficiently. It comes in a compact size, making it easy to handle and store. Ensure your kitchen stays well-supplied with clean-burning LPG for your daily cooking.",
      price: 1100,
      quantity: 1,
      rating: 4,
    },
    {
      id: 2,
      image: "https://github.com/atishij/pictures/blob/main/P2.png?raw=true",
      name: "Mini Gas Cylinder",
      description:
        "The SprayCheck Flamex6 Portable High Pressure Butane Liquefied Gas Canister is a universal nozzle/pin suitable for small stove, blowtorch, lighter refill. It is portable and easy to carry around.",
      price: 600,
      quantity: 1,
      rating: 4.5,
    },
    {
      id: 3,
      image: "https://github.com/atishij/pictures/blob/main/p3.jpg?raw=true",
      name: "LPG Gas Regulator with Safety Features",
      description:
        "Our LPG gas regulator is engineered for safety and efficiency. It controls the flow of LPG from your cylinder to your appliance, ensuring a consistent and controlled supply of gas. This regulator is equipped with safety features such as a pressure relief valve to prevent over-pressurization and a leak-proof seal for peace of mind. It's easy to install and compatible with various LPG appliances.",
      price: 150,
      quantity: 1,
      rating: 4,
    },
    {
      id: 4,
      image: "https://raw.githubusercontent.com/atishij/pictures/main/p4.webp",
      name: "LPG Cylinder Gas Pipe",
      description:
        "This LPG cylinder gas pipe is designed to safely and securely connect your LPG cylinder to your gas appliance. It's constructed from durable materials that resist wear and tear, ensuring a long-lasting connection. The flexible design allows for easy installation and placement, ensuring a hassle-free experience with your gas appliance.",
      price: 650,
      quantity: 1,
      rating: 3.5,
    },
  ]);

  //change this after api call for single product
  const [singleProductData, setSingleProductData] = useState(
    productsArray[Number(id) - 1]
  );

  const handleAddToCart = (id: number) => {
    //do not add the product if it is already in the cart
    if (cartItems.find((item) => item.id === id)) {
      return;
    }
    setCartItems([...cartItems, singleProductData]);
  };
  // useEffect(() => {
  //   console.log(cartItems);
  // }, []);

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
          <img src={singleProductData.image} alt="" />
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
                    quantity: prev.quantity + 1,
                  };
                });
              }}
            >
              +
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
                    quantity: prev.quantity === 1 ? 1 : prev.quantity - 1,
                  };
                });
              }}
            >
              -
            </div>
          </div>

          <Button
            variant="contained"
            endIcon={<AddShoppingCartIcon />}
            sx={{ mt: 6 }}
            onClick={() => handleAddToCart(singleProductData.id)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

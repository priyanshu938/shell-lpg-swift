import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Product from "./Product";
import { SERVER_URL } from "../../utils/ServerUrl";

const Products = () => {
  const [productsArray, setProductsArray] = useState([
    {
      id: 0,
      name: "",
      description: "",
      imageUrl: "",
      price: 0,
      quantity: 1,
      rating: null,
    },
  ]);
  const [filterProducts, setFilterProducts] = useState([
    {
      id: 0,
      name: "",
      description: "",
      imageUrl: "",
      price: 0,
      quantity: 1,
      rating: null,
    },
  ]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await fetch(`${SERVER_URL}/Products`);
  //     const data = await res.json();
  //     setProductsArray(data);
  //   };

  //   if (search === "") {
  //     getProducts();
  //     setFilterProducts(productsArray);
  //     console.log(Date.now());
  //     return;
  //   } else {
  //     const filteredProducts = productsArray.filter((product) => {
  //       return product.name.toLowerCase().includes(search.toLowerCase());
  //     });
  //     setFilterProducts(filteredProducts);
  //   }
  // }, [search, productsArray]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`${SERVER_URL}/Products`);
      const data = await res.json();
      setProductsArray(data);
    };
  
    if (search === "" && productsArray[0].id === 0) {
      getProducts();
      setFilterProducts(productsArray);
      console.log(productsArray);
      return;
    } else {
      const filteredProducts = productsArray.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilterProducts(filteredProducts);
    }
  }, [search, productsArray]);
  

  return (
    <>
      <div className={[styles.searchBox, "container"].join(" ")}>
        <SearchIcon />
        <input
          type="search"
          name=""
          id=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.inputSearch}
          placeholder="Search..."
        />
      </div>
      <div className={styles.productsContainer}>
        {filterProducts.length > 0 ? (
          filterProducts?.map((product) => {
            return <Product key={product.id} {...product} />;
          })
        ) : (
          <h1>Oops! No Products Found!</h1>
        )}
      </div>
    </>
  );
};

export default Products;

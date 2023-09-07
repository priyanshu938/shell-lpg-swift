import React from "react";
import styles from "./Products.module.css";
import SearchIcon from "@mui/icons-material/Search";

const Products = () => {
  return (
    <>
      <div className={[styles.searchBox, "container"].join(" ")}>
        <SearchIcon />
        <input
          type="search"
          name=""
          id=""
          className={styles.inputSearch}
          placeholder="Search..."
        />
      </div>
      <div className="productsContainer"></div>
    </>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Product from "./Product";

const Products = () => {
  const [productsArray, setProductsArray] = useState([
    {
      id: 1,
      image: "https://github.com/atishij/pictures/blob/main/P1.jpg?raw=true",
      name: "Domestic LPG Cylinder",
      description:
        "Our domestic LPG cylinder is a reliable and safe solution for your household cooking and heating needs. Made from high-quality steel and equipped with a robust valve, this cylinder is designed to store and deliver LPG efficiently. It comes in a compact size, making it easy to handle and store. Ensure your kitchen stays well-supplied with clean-burning LPG for your daily cooking.",
      price: 1100,
      rating: 4,
    },
    {
      id: 2,
      image: "https://github.com/atishij/pictures/blob/main/P2.png?raw=true",
      name: "Mini Gas Cylinder",
      description:
        "The SprayCheck Flamex6 Portable High Pressure Butane Liquefied Gas Canister is a universal nozzle/pin suitable for small stove, blowtorch, lighter refill. It is portable and easy to carry around.",
      price: 600,
      rating: 4.5,
    },
    {
      id: 3,
      image: "https://github.com/atishij/pictures/blob/main/p3.jpg?raw=true",
      name: "LPG Gas Regulator with Safety Features",
      description:
        "Our LPG gas regulator is engineered for safety and efficiency. It controls the flow of LPG from your cylinder to your appliance, ensuring a consistent and controlled supply of gas. This regulator is equipped with safety features such as a pressure relief valve to prevent over-pressurization and a leak-proof seal for peace of mind. It's easy to install and compatible with various LPG appliances.",
      price: 150,
      rating: 4,
    },
    {
      id: 4,
      image: "https://raw.githubusercontent.com/atishij/pictures/main/p4.webp",
      name: "LPG Cylinder Gas Pipe",
      description:
        "This LPG cylinder gas pipe is designed to safely and securely connect your LPG cylinder to your gas appliance. It's constructed from durable materials that resist wear and tear, ensuring a long-lasting connection. The flexible design allows for easy installation and placement, ensuring a hassle-free experience with your gas appliance.",
      price: 650,
      rating: 3.5,
    },
  ]);
  const [filterProducts, setFilterProducts] = useState([
    {
      id: 1,
      image: "https://github.com/atishij/pictures/blob/main/P1.jpg?raw=true",
      name: "Domestic LPG Cylinder",
      description:
        "Our domestic LPG cylinder is a reliable and safe solution for your household cooking and heating needs. Made from high-quality steel and equipped with a robust valve, this cylinder is designed to store and deliver LPG efficiently. It comes in a compact size, making it easy to handle and store. Ensure your kitchen stays well-supplied with clean-burning LPG for your daily cooking.",
      price: 1100,
      rating: 4,
    },
    {
      id: 2,
      image: "https://github.com/atishij/pictures/blob/main/P2.png?raw=true",
      name: "Mini Gas Cylinder",
      description:
        "The SprayCheck Flamex6 Portable High Pressure Butane Liquefied Gas Canister is a universal nozzle/pin suitable for small stove, blowtorch, lighter refill. It is portable and easy to carry around.",
      price: 600,
      rating: 4.5,
    },
    {
      id: 3,
      image: "https://github.com/atishij/pictures/blob/main/p3.jpg?raw=true",
      name: "LPG Gas Regulator with Safety Features",
      description:
        "Our LPG gas regulator is engineered for safety and efficiency. It controls the flow of LPG from your cylinder to your appliance, ensuring a consistent and controlled supply of gas. This regulator is equipped with safety features such as a pressure relief valve to prevent over-pressurization and a leak-proof seal for peace of mind. It's easy to install and compatible with various LPG appliances.",
      price: 150,
      rating: 4,
    },
    {
      id: 4,
      image: "https://raw.githubusercontent.com/atishij/pictures/main/p4.webp",
      name: "LPG Cylinder Gas Pipe",
      description:
        "This LPG cylinder gas pipe is designed to safely and securely connect your LPG cylinder to your gas appliance. It's constructed from durable materials that resist wear and tear, ensuring a long-lasting connection. The flexible design allows for easy installation and placement, ensuring a hassle-free experience with your gas appliance.",
      price: 650,
      rating: 3.5,
    },
  ]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredProducts = productsArray.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilterProducts(filteredProducts);
  }, [search]);

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
        {filterProducts?.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </>
  );
};

export default Products;

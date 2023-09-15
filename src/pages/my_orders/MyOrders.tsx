// import React, { useEffect, useState } from "react";
// import styles from "./MyOrders.module.css";
// import { SERVER_URL } from "../../utils/ServerUrl";

// const MyOrders = () => {
//   const [data, setData] = useState([
//     {
//       id: 0,
//       orderDate: "",
//       productIds: [],
//       totalPrice: "",
//       status: "In Transit",
//     },
//   ]);

//   const [productData, setProductData] = useState({
//     id: 0,
//     name: "",
//     description: "",
//     imageUrl: "",
//     price: 0,
//     quantity: 1,
//     rating: null,
//   });

//   useEffect(() => {
//     const getOrders = async () => {
//       const res = await fetch(`${SERVER_URL}/Orders`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("email")}`,
//         },
//       });
//       const data = await res.json();
//       setData(data);
//       console.log(data);
//     };
//     getOrders();
//   }, []);

//   return (
//     <>
//       <h1>My Orders</h1>
//       <div className={styles.tableParent}>
//         <div className={styles.tableHeader}>
//           {/* // order id */}
//           <div className={styles.tableHeaderItem}>Order Id</div>
//           {/* // order date */}
//           <div className={styles.tableHeaderItem}>Order Date</div>
//           {/* // products list */}
//           <div className={styles.tableHeaderItem}>Products</div>
//           {/* // total price */}
//           <div className={styles.tableHeaderItem}>Total Price</div>
//           {/* // status */}
//           <div className={styles.tableHeaderItem}>Status</div>
//         </div>
//         {data.map((item) => {
//           return (
//             <div className={styles.tableRow}>
//               {/* // order id */}
//               <div className={styles.tableRowItem}>{item.id}</div>
//               {/* // order date */}
//               <div className={styles.tableRowItem}>{item.orderDate}</div>
//               {/* // products list */}
//               <div className={styles.tableRowItem}>
//                 <>{ console.log(item.productIds)}
//                 {item?.productIds.map((productId) => {
//                     var testData = {
//                         id: 0,
//                         name: "",
//                         description: "",
//                         imageUrl: "",
//                         price: 0,
//                         quantity: 1,
//                         rating: null,
//                         };
//                   const getProduct = async () => {
//                     const res = await fetch(
//                       `${SERVER_URL}/Products/${productId}`,
//                       {
//                         method: "GET",
//                         headers: {
//                           "Content-Type": "application/json",
//                         },
//                       }
//                     );
//                     testData = await res.json();
//                   };
//                   getProduct();
//                   console.log(testData);
//                   setProductData(testData);
//                   return (
//                     <div className={styles.product}>
//                       {/* <img
//                         src={productData.imageUrl}
//                         alt={productData.name}
//                         className={styles.productImage}
//                       /> */}
//                       <div className={styles.productName}>{productData.name}</div>
//                       {/* <div className={styles.productPrice}>{productData.price}</div> */}
//                     </div>
//                   );
//                 })}
//                 </>
//               </div>
//               {/* // total price */}
//               <div className={styles.tableRowItem}>{item.totalPrice}</div>
//               {/* // status */}
//               <div className={styles.tableRowItem}>{item.status}</div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default MyOrders;

import React, { useEffect, useState, useId } from "react";
import styles from "./MyOrders.module.css";
import { SERVER_URL } from "../../utils/ServerUrl";

const MyOrders = () => {
  const [data, setData] = useState([
    {
      id: 0,
      orderDate: "",
      productIds: [],
      totalPrice: "",
      status: "In Transit",
    },
  ]);
  const use = useId();
  const use2 = useId();
  const [productData, setProductData] = useState([
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

  useEffect(() => {
    const getOrders = async () => {
      const res = await fetch(`${SERVER_URL}/Orders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("email")}`,
        },
      });
      const ordersData = await res.json();

      // Use Promise.all to fetch product details for each order concurrently
      const productPromises = ordersData.map(
        async (item: { productIds: any[] }) => {
          const productDetails = await Promise.all(
            item.productIds.map(async (productId: any) => {
              const productRes = await fetch(
                `${SERVER_URL}/Products/${productId}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              return await productRes.json();
            })
          );
          console.log("productDetails", productDetails);
          //   filter product details to remove null values and repeated products
          // create an array of unique products
          const uniqueProducts = productDetails.filter(
            (product, index, self) =>
              product && index === self.findIndex((p) => p.id === product.id)
          );

          setProductData((productData) => [...productData, ...uniqueProducts]);

          return { ...item, products: productDetails };
        }
      );

      const ordersWithProducts = await Promise.all(productPromises);
      setData(ordersWithProducts);
      //   setproductData with unique products
      setProductData((productData) => {
        const uniqueProducts = productData.filter(
          (product, index, self) =>
            product && index === self.findIndex((p) => p.id === product.id)
        );
        return uniqueProducts;
      });
    };
    getOrders();
  }, []);

  return (
    <>
      {console.log("productData", productData)}
      <h1 className={styles.heading}>My Orders</h1>
      <div className={styles.tableParent}>
        <div className={styles.tableHeader}>
          {/* // order id */}
          <div className={styles.tableHeaderItem}>Order Id</div>
          {/* // order date */}
          <div className={styles.tableHeaderItem}>Order Date</div>
          {/* // products list */}
          <div className={styles.tableHeaderItem}>Products</div>
          {/* // total price */}
          <div className={styles.tableHeaderItem}>Total Price</div>
          {/* // status */}
          <div className={styles.tableHeaderItem}>Status</div>
        </div>
        {data.map((item,index) => {
          return (
            <div className={[styles.tableRow,index%2!==0 && styles.gray].join(" ")} key={use}>
              {/* // order id */}
              <div className={[styles.tableRowItem, styles.orderId].join(" ") }>{item.id}</div>
              {/* // order date */}
              <div className={styles.tableRowItem}>
                {new Date(item.orderDate).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
              {/* // products list */}
              <div className={styles.tableRowItem}>
                {/* {item.productIds.map((productData) => (
                  <div className={styles.product} key={productData.id}>
                    <div className={styles.productName}>{productData.name}</div>
                  </div>
                ))} */}
                {/* loop for each productID */}
                {item.productIds.map((productID,index) => {
                  // find product with matching ID
                  const product = productData.find((p) => p.id === productID);
                  // if product is found, render product
                  if (product) {
                    return (
                      <div className={styles.product} key={product.id}>
                        <div className={styles.productName}>{product.name}</div>
                      </div>
                    );
                  }
                  // if product is not found, render null
                  return null;
                })}
              </div>
              {/* // total price */}
              <div className={styles.tableRowItem}>{item.totalPrice}</div>
              {/* // status */}
              <div className={styles.tableRowItem}>{"In Transit"}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyOrders;

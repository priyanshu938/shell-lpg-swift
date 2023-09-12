import React from "react";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <p>The requested page could not be found.</p>
    </div>
  );
};

export default PageNotFound;

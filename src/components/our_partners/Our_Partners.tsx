import React from "react";
import styles from "./Our_Partners.module.css";

const Our_Partners = () => {
  const partners = {
    zScaler: "https://github.com/atishij/pictures/blob/main/1.png?raw=true",
    uNext: "https://github.com/atishij/pictures/blob/main/2.png?raw=true",
    shell: "https://github.com/atishij/pictures/blob/main/3.png?raw=true",
    microsoft: "https://github.com/atishij/pictures/blob/main/4.png?raw=true",
    google: "https://github.com/atishij/pictures/blob/main/5.png?raw=true",
    meta: "https://github.com/atishij/pictures/blob/main/6.png?raw=true",
  };

  return (
    <>
      <h1 className={styles.heading}>OUR PARTNERS</h1>
      <div className={styles.partners}>
        <img className={styles.partnerLogo} src={partners.zScaler} alt="" />
        <img className={styles.partnerLogo} src={partners.uNext} alt="" />
        <img className={styles.partnerLogo} src={partners.shell} alt="" />
        <img className={styles.partnerLogo} src={partners.microsoft} alt="" />
        <img className={styles.partnerLogo} src={partners.google} alt="" />
        <img className={styles.partnerLogo} src={partners.meta} alt="" />
      </div>
    </>
  );
};

export default Our_Partners;

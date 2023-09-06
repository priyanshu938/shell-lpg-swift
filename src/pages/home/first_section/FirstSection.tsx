import React from "react";
import styles from "./FirstSection.module.css";

const FirstSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <img src="/public/logo.png" alt="" />
        </div>
        <div className={styles.rightSide}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            laudantium cupiditate eius molestias suscipit, voluptate vero vitae
            accusantium vel nihil eligendi. Dolor quis alias eum aliquam
            repellendus commodi, ullam fuga! Aspernatur harum culpa cupiditate
            animi quo eaque. Sunt, laboriosam qui neque iusto aperiam animi.
            Dicta modi rem rerum aut nihil quod culpa, excepturi voluptas saepe
            quos, mollitia sint placeat ipsam.
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstSection;

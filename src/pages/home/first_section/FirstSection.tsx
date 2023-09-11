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
          <h1>Start your SHELL-LPG journey today!</h1>
          <p>
            At SHELL, we understand the importance of convenience and safety
            when it comes to accessing LPG cylinders for your everyday needs. We
            are proud to introduce our seamless and user-friendly online
            cylinder booking system - SHELL-LPG. This innovative platform has
            been designed with you in mind, to simplify the process of ordering
            LPG cylinders and ensure that you have a hassle-free experience.
            Experience the future of LPG cylinder booking with SHELL-LPG. Say
            goodbye to the hassles of traditional booking methods and embrace
            the simplicity, convenience, and safety that our platform offers.
            Join us in our mission to make LPG cylinder booking easier, safer,
            and more efficient than ever before. Let's make your life better,
            one cylinder at a time.
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstSection;

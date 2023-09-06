import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          &copy; {new Date().getFullYear()} Shell LPG. All rights reserved.
        </div>
        <div className={styles.rightSide}>
          <div className={styles.socialIconsContainer}>
            <Link to="">
              <TwitterIcon />
            </Link>
            <Link to="">
              <InstagramIcon />
            </Link>
            <Link to="">
              <FacebookIcon />
            </Link>
            <Link to="">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

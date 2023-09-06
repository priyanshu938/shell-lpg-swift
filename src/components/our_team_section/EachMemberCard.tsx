import React from "react";
import styles from "./EachMemberCard.module.css";
interface IProps {
  memberName: string;
  profilePic: string;
  designation: string;
}
const EachMemberCard = ({ memberName, profilePic, designation }: IProps) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.profilePicContainer}>
          <img src={profilePic} alt="" className={styles.profilePic} />
        </div>
        <h4>{memberName}</h4>
        <p>{designation}</p>
      </div>
    </>
  );
};

export default EachMemberCard;

import React from "react";
import styles from "./OurTeamSection.module.css";
import EachMemberCard from "./EachMemberCard";

const OurTeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      memberName: "Atishi Jain",
      profilePic:
        "https://github.com/atishij/pictures/blob/main/Atishi.jpg?raw=true",
      designation: "Product Manager",
    },
    {
      id: 2,
      memberName: "Shivang Dubey",
      profilePic:
        "https://github.com/atishij/pictures/blob/main/Shivang.png?raw=true",
      designation: "Business Analyst",
    },
    {
      id: 3,
      memberName: "Naman Mittal",
      profilePic:
        " https://github.com/atishij/pictures/blob/main/Naman.png?raw=true",
      designation: "UI/UX Developer",
    },
    {
      id: 4,
      memberName: "Priyanshu Tiwari",
      profilePic:
        "https://github.com/atishij/pictures/blob/main/Priyanshu.jpg?raw=true",
      designation: "Team Lead",
    },
    {
      id: 5,
      memberName: "Priti Sah",
      profilePic:
        "https://github.com/atishij/pictures/blob/main/Priti.jpg?raw=true",
      designation: "Human Resources",
    },
  ];
  return (
    <>
      <h1 className={styles.headline}>Meet our team</h1>
      <div className={styles.teamCardContainer}>
        {teamMembers?.map((eachMember) => {
          return <EachMemberCard key={eachMember.id} {...eachMember} />;
        })}
      </div>
    </>
  );
};

export default OurTeamSection;

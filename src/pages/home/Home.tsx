import React from "react";
import styles from "./Home.module.css";
import FirstSection from "./first_section/FirstSection";
import OurTeamSection from "../../components/our_team_section/OurTeamSection";

export const Home = () => {
  return (
    <>
      <FirstSection />
      <OurTeamSection />
    </>
  );
};

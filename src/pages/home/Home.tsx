import React from "react";
import styles from "./Home.module.css";
import FirstSection from "./first_section/FirstSection";
import OurTeamSection from "../../components/our_team_section/OurTeamSection";
import Our_Partners from "../../components/our_partners/Our_Partners";

export const Home = () => {
  return (
    <>
      <FirstSection />
      <Our_Partners />
      <OurTeamSection />
    </>
  );
};

import React from "react";

import { Wrapper } from "./accomplishments.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";
import WaveScroll from "./WaveScroll";
import "./wave-scroll.css";

const Accomplishments = () => {
  document.title = "Accomplishments";
  return (
    <Wrapper>
      <Header />
      <Section
        pagestitle="Accomplishments"
        pagesdesc="Our achievements and milestones"
        range="Aspirations don't simply materialize, they create empires."
        backgroundImg="bg4.jpeg"
        arrow="true"
        speed="3.1"
        top="162"
        textAlign="left"
      />
      <Interior
        text="Redefining Real Estate Across Pakistan & Beyond"
        title="Starting in 2021 with Guru Builders, Afnan quickly turned his entrepreneurial drive into tangible success, delivering projects that raised the bar for Pakistan’s real estate industry. His bold expansion with Gen Z Builders in Islamabad and Guru Homes Dubai marked his evolution from a national entrepreneur to a global visionary."
        backgroundImg="bg8.jpeg"
      />
      {/* <Specs/> */}
      <WaveScroll />

      <Footer bottom="bottom" />
    </Wrapper>
  );
};

export default Accomplishments;

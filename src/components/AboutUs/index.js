import React from "react";

import { Wrapper, Content } from "./aboutus.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const AboutUs = () => {
  document.title = "About Us";
  return (
    <Wrapper>
      <Header />
      <Content>
        <Section
          pagestitle="About Us"
          pagesdesc="Guru Homes Where Entrepreneurship Meets Real Estate."
          backgroundImg="bg16.jpeg"
          arrow="true"
          range="Where Entrepreneurship Meets Real Estate."
          speed="1.99"
          top="200"
          hp="1,020"
          textAlign="left"
        />
      </Content>
      <Content>
        <Interior
          text="Turning Vision into Landmarks"
          title="Afnan Ahmed Siddique is more than a name in real estate. He’s a symbol of vision, ambition, and fearless entrepreneurship. As the Founder and Director of Guru Builders & Developers, Gen Z Builders & Developers, and Guru Homes Dubai, he has transformed the way the new generation approaches construction, investment, and luxury living."
          backgroundImg="bg18.jpeg"
        />
      </Content>
      <Content>
        <Specs />
      </Content>
      <Footer bottom="bottom" />
    </Wrapper>
  );
};

export default AboutUs;

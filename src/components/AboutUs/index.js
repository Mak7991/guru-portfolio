import React from "react";

import { Wrapper, Content } from "./aboutus.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";
import SEO from "../SEO";

const AboutUs = () => {
  return (
    <Wrapper>
      <SEO
        title="About Us - Guru Homes | Meet Afnan Ahmed Siddique"
        description="Learn about Guru Homes and our founder Afnan Ahmed Siddique. Discover our vision, mission, and commitment to transforming real estate across Pakistan and Dubai."
        keywords="about Guru Homes, Afnan Ahmed Siddique, real estate founder, Pakistan developer, Dubai properties, Guru Builders, Gen Z Builders"
        url="/AboutUs"
      />
      <Header />
      <Content>
        <Section
          title="About Us"
          desc="Guru Homes Dubai operates with a clear philosophy: real estate is not just about transactions it’s about trust. We are committed to delivering value by offering credible insights, transparent processes, and personalized solutions."
          backgroundImg="bg23.jpeg"
          arrow="true"
          range="Where Entrepreneurship Meets Real Estate."
          textAlign="left"
        />
      </Content>
      <Content>
        <Interior
          text="Turning Vision into Landmarks"
          title="Under the guidance of Afnan Ahmed Siddique, an experienced entrepreneur recognized for his contributions to business and real estate across Pakistan and the UAE, Guru Homes Dubai stands on a foundation of discipline and long-term vision. His background in entrepreneurship and real estate gives the firm a competitive edge ensuring every client interaction is built on credibility, professionalism, and integrity."
          backgroundImg="bg19.jpeg"
        />
      </Content>
      {/* <Content>
        <Specs />
      </Content> */}
      <Footer bottom="bottom" />
    </Wrapper>
  );
};

export default AboutUs;

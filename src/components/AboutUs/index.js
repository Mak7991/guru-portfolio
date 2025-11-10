import React from "react";

import { Wrapper, Content } from "./aboutus.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
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
          desc="Guru Homes Dubai operates with a clear philosophy: real estate is not just about transactions, it’s about trust. As a leading real estate agency in Dubai, we provide residential, commercial, and investment property solutions, delivering value through credible insights, transparent processes, and personalized guidance. Your trusted partner to buy, sell, or invest in Dubai properties."
          backgroundImg="bg23.jpeg"
          arrow="true"
          range="Where Entrepreneurship Meets Real Estate."
          textAlign="left"
        />
      </Content>
      <Content>
        <Interior
          text="Turning Vision into Landmarks"
          title="Under the leadership of Afnan Ahmed Siddique, an experienced entrepreneur in business and real estate across Dubai, the UAE, and Pakistan, Guru Homes Dubai combines discipline and long-term vision with expert real estate knowledge. His extensive background ensures that every client interaction reflects professionalism, credibility, and trusted guidance in luxury residential, commercial, and investment properties."
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

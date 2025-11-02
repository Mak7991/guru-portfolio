import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Wrapper, Content } from "./interior.style";

import SplitText from "../SplitText";

const Interior = ({ text, title, backgroundImg }) => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);

  return (
    <Wrapper>
      <div className="title">
        <h1 data-aos="fade-up">{text}</h1>
      </div>
      <Content backgroundImg={backgroundImg}>
        <SplitText
          text={title}
          className="interior-title"
          delay={50}
          duration={0.8}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          tag="h2"
        />
      </Content>
    </Wrapper>
  );
};

export default Interior;

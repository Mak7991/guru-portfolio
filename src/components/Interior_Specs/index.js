import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Wrapper, Content } from "./interior.style";

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
        <h2 data-aos="fade-up" data-aos-delay="200">
          {title}
        </h2>
      </Content>
    </Wrapper>
  );
};

export default Interior;

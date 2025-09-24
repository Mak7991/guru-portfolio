import React from "react";

import { Wrapper, Content } from "./footer.syle";

const Footer = ({ bottom }) => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <Content className={bottom}>
        <div>
          <a href="/">Guru Homes &copy; {getCurrentYear()}</a>
        </div>
        <div>
          <a href="/Accomplishments">Accomplishments</a>
          <a href="/AboutUs">About Us</a>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Footer;

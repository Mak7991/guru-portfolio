import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Wrapper, Content } from "./spec.style";

const Specs = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);

  return (
    <Wrapper>
      <Content>
        <div className="row">
          <div className="col" data-aos="fade-right">
            <img
              src="/images/bg8.jpeg"
              alt="Guru Homes luxury real estate development showcase"
            />
          </div>
          <div className="col text" data-aos="fade-left">
            <h3> Brokerage Services </h3>
            <ul>
              <li>Residential Sales & Leasing Apartments, villas, townhouses, and luxury homes.</li>
              <li>Commercial Properties Offices, retail, and mixed-use spaces.</li>
              <li>Off-Plan Investments Direct access to Dubai’s top developers and upcoming projects.</li>
              <li>Secondary Market Sales Expert assistance with resale properties and transfers.</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text" data-aos="fade-right">
            <h3>Advisory Services </h3>
            <ul>
            <li>Market insights and investment analysis.</li>
            <li>Tailored portfolio strategies for local and overseas clients.</li>
            <li>Guidance on legal, regulatory, and transactional requirements.</li>

            </ul>
          </div>
          <div className="col" data-aos="fade-left">
            <img
              src="/images/bg11.jpeg"
              alt="Modern connected living spaces by Guru Homes"
            />
          </div>
        </div>
        <div className="row">
          <div className="col" data-aos="fade-right">
            <img
              src="/images/bg18.jpeg"
              alt="Premium audio and entertainment facilities in Guru Homes developments"
            />
          </div>
          <div className="col text" data-aos="fade-left">
            <h3> Property Development </h3>
            <ul>
              <li>We see land as possibility, not just property.</li>
              <li>
                We give developers the opportunities they need to bring ideas to
                life.
              </li>
              <li>We help investors secure growth that lasts.</li>
              <li>We deliver projects that stand as living proof of vision.</li>
            </ul>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Specs;

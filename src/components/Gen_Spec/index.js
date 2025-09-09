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
            <img src="/images/bg8.jpeg" alt="game" />
          </div>
          <div className="col text" data-aos="fade-left">
            <h3> Turning Vision into Landmarks </h3>
            <p>
              {" "}
              Guru Homes isn’t just another real estate firm, it’s an
              entrepreneurial movement. We believe that every idea, every parcel
              of land, and every investor has the potential to become something
              remarkable.{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col text1" data-aos="fade-right">
            <h3> From day one </h3>
            <p>
              {" "}
              Our focus has been simple: where others see obstacles, we see
              opportunities. Guru Homes brings together landowners, visionary
              developers, and global investors to create ground breaking
              projects at the very heart of Dubai. Our journey from Pakistan to
              the UAE is built on one philosophy. Real estate should do more
              than generate profit; it should create impact. Every project we
              undertake is guided by bold thinking, transparent execution, and a
              commitment to long-term value.
            </p>
          </div>
          <div className="col" data-aos="fade-left">
            <img src="/images/bg11.jpeg" alt="connected" />
          </div>
        </div>
        <div className="row">
          <div className="col" data-aos="fade-right">
            <img src="/images/bg18.jpeg" alt="audio" />
          </div>
          <div className="col text" data-aos="fade-left">
            <h3> Entrepreneurial edge </h3>
            <ul>
              <li>We see land as possibility, not just property.</li>
              <li>
                We give developers the opportunities they need to bring ideas to
                life.
              </li>
              <li>We help investors secure growth that lasts.</li>
              <li>We deliver projects that stand as living proof of vision.</li>
            </ul>
            <p>
              {" "}
              At Guru Homes, we’re not just building structures, we’re shaping
              tomorrow’s skylines and creating value that endures for
              generations.{" "}
            </p>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Specs;

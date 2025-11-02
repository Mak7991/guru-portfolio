import React from "react";

import { Wrapper } from "./services.style";

import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";
import SEO from "../SEO";
import CardSwap, { Card } from "../CardSwap";
import ServicesHero from "./ServicesHero";

const Services = () => {
  return (
    <Wrapper>
      <SEO
        title="Services - Guru Homes | Comprehensive Real Estate Solutions"
        description="Explore our comprehensive real estate services including brokerage, advisory, and property development. Expert solutions tailored to your needs in Dubai's dynamic property market."
        keywords="real estate services, brokerage services, property advisory, property development, Dubai real estate services"
        url="/Services"
      />
      <Header />
      <ServicesHero
        title="Our Services"
        desc="From property investment consulting to end-to-end development services, we provide personalized solutions designed to help you achieve your real estate goals with confidence and ease."
        backgroundImg="bg24.jpeg"
      >
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={true}
        >
          <Card>
            <img src="/images/bg3.jpeg" alt="Brokerage Services" className="card__image" />
            <div className="card__content">
              <h3>Brokerage Services</h3>
              <p>Comprehensive real estate brokerage services for buying, selling, and renting properties in Dubai's dynamic market.</p>
            </div>
          </Card>
          <Card>
            <img src="/images/bg4.jpeg" alt="Advisory Services" className="card__image" />
            <div className="card__content">
              <h3>Advisory Services</h3>
              <p>Expert real estate investment consulting and advisory services tailored to your goals and investment timeline.</p>
            </div>
          </Card>
          <Card>
            <img src="/images/bg5.jpeg" alt="Property Development" className="card__image" />
            <div className="card__content">
              <h3>Property Development</h3>
              <p>End-to-end development services from concept to completion, creating world-class properties that exceed expectations.</p>
            </div>
          </Card>
        </CardSwap>
      </ServicesHero>
      {/* <Interior
        text="Turning Vision into Landmarks"
        title="Under the guidance of Afnan Ahmed Siddique, an experienced entrepreneur recognized for his contributions to business and real estate across Pakistan and the UAE, Guru Homes Dubai stands on a foundation of discipline and long-term vision. His background in entrepreneurship and real estate gives the firm a competitive edge ensuring every client interaction is built on credibility, professionalism, and integrity."
        backgroundImg="bg18.jpeg"
      /> */}
      <Specs />
      <Footer bottom="bottom" />
    </Wrapper>
  );
};

export default Services;

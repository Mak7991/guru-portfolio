import React from "react";
import { HeroWrapper, HeroContent, HeroText } from "./serviceshero.style";
import SplitText from "../SplitText";

const ServicesHero = ({ title, desc, backgroundImg, children }) => {
  return (
    <HeroWrapper backgroundImg={backgroundImg}>
      <HeroContent>
        <HeroText>
          {title && (
            <SplitText
              text={title}
              className="services-hero-title"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              tag="h1"
            />
          )}
          {desc && (
            <SplitText
              text={desc}
              className="services-hero-desc"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="justify"
              tag="p"
            />
          )}
        </HeroText>
        <div className="card-swap-container">
          {children}
        </div>
      </HeroContent>
    </HeroWrapper>
  );
};

export default ServicesHero;


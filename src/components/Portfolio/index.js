import React from "react";

import { Wrapper } from "./portfolio.style";

import Header from "../Header";
import Footer from "../Footer";
import SEO from "../SEO";
import "./wave-scroll.css";
import InfiniteMenu from "../InfiniteMenu";

const Portfolio = () => {
  const items = [
    {
      image: "/images/bg21.jpeg",
      link: "https://www.afnanahmedsiddique.com/awards",
      title: "Luxury Apartments & Villas",
      description: "Guru Homes",
    },
    {
      image: "/images/bg4.jpeg",
      link: "https://www.afnanahmedsiddique.com/awards",
      title: "Off-Plan Projects",
      description: "T20 Tower",
    },
    {
      image: "/images/bg5.jpeg",
      link: "https://www.afnanahmedsiddique.com/awards",
      title: "Commercial Opportunities",
      description: "LAkeView BnB",
    },
    {
      image: "/images/bg6.jpeg",
      link: "https://www.afnanahmedsiddique.com/awards",
      title: "Premium Developments",
      description: "Excellence in Every Project",
    },
    {
      image: "/images/bg7.jpeg",
      link: "https://www.afnanahmedsiddique.com/awards",
      title: "Investment Properties",
      description: "Smart Real Estate Solutions",
    },
    {
      image: "/images/bg8.jpeg",
      link: "https://www.afnanahmedsiddique.com/awards",
      title: "Residential Complexes",
      description: "Modern Living Spaces",
    },
    {
      image: "/images/bg9.jpeg",
      link: "https://www.afnanahmedsiddique.com/awards",
      title: "Business Districts",
      description: "Commercial Excellence",
    },
    {
      image: "/images/bg10.jpeg",
      link: "https://www.afnanahmedsiddique.com/awards",
      title: "Luxury Residences",
      description: "Premium Lifestyle",
    },
  ];
  return (
    <Wrapper>
      <SEO
        title="Accomplishments - Guru Homes | Our Achievements & Milestones"
        description="Explore Guru Homes' remarkable achievements and milestones in real estate development. From Pakistan to Dubai, discover our journey of excellence and innovation."
        keywords="Guru Homes accomplishments, real estate achievements, Pakistan developments, Dubai projects, milestones, success stories"
        url="/Accomplishments"
      />
      <Header />
      {/* <Section
        pagestitle="Accomplishments"
        pagesdesc="Our achievements and milestones"
        range="Aspirations don't simply materialize, they create empires."
        backgroundImg="bg4.jpeg"
        arrow="true"
        speed="3.1"
        top="162"
        textAlign="left"
      />
      <Interior
        text="Redefining Real Estate Across Pakistan & Beyond"
        title="Starting in 2021 with Guru Builders, Afnan quickly turned his entrepreneurial drive into tangible success, delivering projects that raised the bar for Pakistan’s real estate industry. His bold expansion with Gen Z Builders in Islamabad and Guru Homes Dubai marked his evolution from a national entrepreneur to a global visionary."
        backgroundImg="bg8.jpeg"
      /> */}
      <div style={{ height: "100vh", position: "relative", backgroundColor: "#E3DBD2" }}>
        <InfiniteMenu items={items} />
      </div>
      <Footer bottom="bottom" />
    </Wrapper>
  );
};

export default Portfolio;

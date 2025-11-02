import React, { useEffect, useRef, useState } from "react";
import { Wrapper, Content } from "./home.style";
import Footer from "./Footer";
import Section from "./Section";
import Header from "./Header";
import SEO from "./SEO";

function Home() {
  const [visibleSections, setVisibleSections] = useState({ 0: true, 4: true }); // Initialize first section and footer as visible
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Lazy scrolling with improved intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [index]: true,
            }));
          } else {
            // Optional: hide sections that are far from view for performance
            // Only reset if section is completely out of view
            if (entry.intersectionRatio === 0) {
              setVisibleSections((prev) => ({
                ...prev,
                [index]: false,
              }));
            }
          }
        });
      },
      {
        threshold: [0, 0.1, 0.5],
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <>
      <SEO
        title="Guru Homes - Your Trusted Partner in Dubai Real Estate"
        description="Discover luxury real estate developments by Guru Homes. Leading developer in Pakistan with projects in Islamabad, Dubai, and beyond. Premium residential and commercial properties."
        keywords="real estate, luxury homes, Pakistan real estate, Islamabad properties, Dubai real estate, Guru Homes, Afnan Ahmed Siddique, premium developments"
        url="/"
      />
      <Header />
      <Wrapper data-scroll-container>
        <Content
          ref={addToRefs}
          style={{
            opacity: visibleSections[0] ? 1 : 0,
            transform: visibleSections[0]
              ? "translateY(0)"
              : "translateY(50px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Section
            title="Your Trusted Partner in Dubai Real Estate"
            desc="Connecting investors and homeowners with the finest properties across the UAE."
            para="Guru Homes Dubai is a boutique real estate brokerage firm dedicated to providing seamless property solutions in one of the world’s most dynamic markets. From luxury residences and off-plan developments to commercial spaces and investment properties, we specialize in helping our clients make informed decisions with confidence."
            // linkdesc="Read More"
            backgroundVideo="video2.mp4"
            link="/AboutUs"
            leftbtn="READ MORE"
            // rightbtn="Read More"
            leftbtnUrl="/AboutUs"
            rightbtnUrl=""
            backgroundImg="bg14.jpeg"
            // arrow="false"
            textAlign="left"
            fullHeight={true}
            animatePara={false}
          />
        </Content>
        <Content
          ref={addToRefs}
          style={{
            opacity: visibleSections[1] ? 1 : 0,
            transform: visibleSections[1]
              ? "translateY(0)"
              : "translateY(50px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
          }}
        >
          <Section
            noanimateTitle="Portfolio"
            // desc="Discover our portfolio of successful projects"
            para="With in-depth knowledge of Dubai's dynamic property market, we provide tailored advisory services that align with each client's goals and investment timeline."
            // linkdesc="View More"
            link="/Portfolio"
            leftbtn="View More"
            // rightbtn="View More"
            leftbtnUrl="/Portfolio"
            rightbtnUrl="/Portfolio"
            backgroundImg="bg22.jpeg"
            // arrow="false"
            textAlign="left"
            fullHeight={false}
          />
        </Content>
        <Content
          ref={addToRefs}
          style={{
            opacity: visibleSections[2] ? 1 : 0,
            transform: visibleSections[2]
              ? "translateY(0)"
              : "translateY(50px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
          }}
        >
          <Section
            noanimateTitle="Services"
            para="From property investment consulting to end-to-end development services, we provide personalized solutions designed to help you achieve your real estate goals."
            link="/Services"
            leftbtn="Learn More"
            leftbtnUrl="/Services"
            rightbtnUrl=""
            backgroundImg="bg26.jpeg"
            // arrow="false"
            textAlign="left"
            fullHeight={false}
          />
        </Content>
        <Content
          ref={addToRefs}
          style={{
            opacity: visibleSections[3] ? 1 : 0,
            transform: visibleSections[3]
              ? "translateY(0)"
              : "translateY(50px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
          }}
        >
          <Section
            noanimateTitle="Contact Us"
            para="Our dedicated team is ready to answer your questions and guide you through your real estate journey. Reach out today to discover how we can help you."
            link="/Contact"
            leftbtn="Contact Now"
            leftbtnUrl="/Contact"
            rightbtnUrl=""
            backgroundImg="bg25.jpeg"
            // arrow="false"
            textAlign="left"
            fullHeight={false}
          />
        </Content>
        <Content
          ref={addToRefs}
          style={{
            opacity: 1, // Footer always visible
            transform: "translateY(0)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            minHeight: "auto",
            display: "flex",
            alignItems: "flex-end",
            paddingTop: "0",
            paddingBottom: "0",
          }}
        >
          <Footer />
        </Content>
      </Wrapper>
    </>
  );
}

export default Home;

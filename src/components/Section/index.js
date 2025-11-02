import React, { useEffect, useRef, useState } from "react";
import { Wrapper, ContentTop, Content } from "./section.style";
import { Link } from "react-router-dom";
import { ContentMid } from "./section.style";
import { scrollAnimationStyles } from "./scrollAnimations";
import SplitText from "../SplitText";

function Section({
  title,
  desc,
  backgroundImg,
  backgroundVideo,
  link,
  leftbtn,
  rightbtn,
  leftbtnUrl,
  rightbtnUrl,
  arrow,
  range,
  textAlign,
  pagestitle,
  linkdesc,
  pagesdesc,
  fullHeight = true,
  para,
  animatePara = false,
  noanimateTitle
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsInView(true);
          // Trigger animation every time it comes into view
          setAnimationKey((prev) => prev + 1);
        } else {
          setIsInView(false);
          // Reset animation when out of view for repeat effect
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  const handleScrollDown = () => {
    // Check if we're on the home page with snap scrolling
    const homeWrapper = document.querySelector("[data-scroll-container]");

    if (homeWrapper) {
      // For snap scrolling, scroll by one viewport height
      homeWrapper.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    } else {
      // Fallback for regular scrolling
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <Wrapper
      ref={sectionRef}
      bg={backgroundImg}
      bgVideo={backgroundVideo}
      fullHeight={fullHeight}
      isInView={isInView}
    >
      {backgroundVideo && (
        <video className="background-video" autoPlay muted loop playsInline>
          <source src={`/images/${backgroundVideo}`} type="video/webm" />
          <source src={`/images/${backgroundVideo}`} type="video/mp4" />
        </video>
      )}
      {backgroundVideo && <div className="video-overlay"></div>}
      <div className="gradient-overlay"></div>
      <div className="blur-overlay"></div>

      <div
        className={`content-wrapper ${
          fullHeight !== false ? "full-height" : "compact"
        }`}
      >
        <ContentTop
          key={`content-top-${animationKey}`}
          textAlign={textAlign}
          fullHeight={fullHeight}
          style={{
            opacity: scrollAnimationStyles.contentTop.opacity(isVisible),
            transform: scrollAnimationStyles.contentTop.transform(isVisible),
            transition: scrollAnimationStyles.contentTop.transition,
          }}
        >
        {noanimateTitle && <h1 className="pagestitle">{noanimateTitle}</h1>}
          {pagestitle && (
            <SplitText
              text={pagestitle}
              className="pagestitle"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign={textAlign || "center"}
              tag="h1"
            />
          )}
          {pagesdesc && (
            <SplitText
              text={pagesdesc}
              className="pagesdesc"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign={textAlign || "center"}
              tag="h2"
            />
          )}
          {title && (
            <SplitText
              text={title}
              className=""
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign={textAlign || "center"}
              tag="h1"
            />
          )}
          {desc && (
            <SplitText
              text={desc}
              className="desc-text"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign={textAlign || "center"}
              tag="p"
            />
          )}
          {para && animatePara ? (
            <SplitText
              text={para}
              className="para-text"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign={textAlign || "left"}
              tag="p"
            />
          ) : (
            para && <p className="para-text">{para}</p>
          )}
          {linkdesc && <a href={link}>{linkdesc}</a>}
          {(leftbtn || rightbtn) && (
            <ContentMid
              key={`content-mid-${animationKey}`}
              className={arrow ? "" : "buttons"}
              textAlign={textAlign}
              fullHeight={fullHeight}
              style={{
                opacity: scrollAnimationStyles.contentMid.opacity(isVisible),
                transform:
                  scrollAnimationStyles.contentMid.transform(isVisible),
                transition: scrollAnimationStyles.contentMid.transition,
              }}
            >
              {leftbtn && (
                <div className="left">
                  <Link
                    to={leftbtnUrl || ""}
                    style={{ textDecoration: "none" }}
                  >
                    <button>{leftbtn}</button>
                  </Link>
                </div>
              )}
              {rightbtn && (
                <div className="right">
                  <Link
                    to={rightbtnUrl || "/learn-more"}
                    style={{ textDecoration: "none" }}
                  >
                    <button>{rightbtn}</button>
                  </Link>
                </div>
              )}
            </ContentMid>
          )}
        </ContentTop>

        <div>
          {range && (
            <Content>
              <div className="Info-bar">
                <div className="Specs range-text-animated">
                  <h2>{range}</h2>
                  {/* <p>Guru Homes</p> */}
                </div>
                {/* <div className="Specs">
                <h2>{speed}s</h2>
                <p>0-60 mph*</p>
              </div>
              <div className="Specs">
                <h2>{top} mph</h2>
                <p>Top Speed</p>
              </div> */}
                {/* {hp && (
                <div className="Specs hp">
                  <h2>{hp} hp</h2>
                  <p>Peak Power</p>
                </div>
              )}
               <div className="order_btn">
                 <Link to="/order" style={{ textDecoration: 'none' }}>
                   <button> ORDER NOW </button>
                 </Link>
               </div> */}
              </div>
            </Content>
          )}
          {arrow && (
            <div className="arrow" onClick={handleScrollDown}>
              <img
                src="/images/down-arrow.svg"
                alt="Scroll down to explore more content"
              />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Section;

import React from "react";
import { Wrapper, ContentTop, Content } from "./section.style";
import { Link } from "react-router-dom";

function Section({
  title,
  desc,
  backgroundImg,
  link,
  leftbtn,
  rightbtn,
  leftbtnUrl,
  rightbtnUrl,
  arrow,
  range,
  speed,
  hp,
  top,
  textAlign,
  abouUstitle,
  linkdesc
}) {
  const handleScrollDown = () => {
    // Check if we're on the home page with snap scrolling
    const homeWrapper = document.querySelector('[data-scroll-container]');
    
    if (homeWrapper) {
      // For snap scrolling, scroll by one viewport height
      homeWrapper.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    } else {
      // Fallback for regular scrolling
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };
  return (
    <Wrapper bg={backgroundImg}>
      <ContentTop textAlign={textAlign}>
        {abouUstitle && <h1 className="abouUstitle">{abouUstitle}</h1>}
        <h1>{title}</h1>
        <p>
          {desc} <a href={link}>{linkdesc}</a>
        </p>
      </ContentTop>

      <div>
         {/* <ContentMid className={arrow ? "" : "buttons"}>
           {leftbtn && (
             <div className="left">
               <Link to={leftbtnUrl || "/about"} style={{ textDecoration: 'none' }}>
                 <button>{leftbtn}</button>
               </Link>
             </div>
           )}
           {rightbtn && (
             <div className="right">
               <Link to={rightbtnUrl || "/learn-more"} style={{ textDecoration: 'none' }}>
                 <button>{rightbtn}</button>
               </Link>
             </div>
           )}
         </ContentMid> */}
        {range && (
          <Content>
            <div className="Info-bar">
              <div className="Specs">
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
            <img src="/images/down-arrow.svg" alt="arrow" />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Section;

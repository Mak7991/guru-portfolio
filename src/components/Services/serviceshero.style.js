import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background-image: ${props => props.backgroundImg ? `url('/images/${props.backgroundImg}')` : 'url(\'/images/bg14.jpeg\')'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
  position: relative;
  overflow: visible;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
    z-index: 0;
    pointer-events: none;
  }
  
  @media screen and (max-width: 768px) {
    min-height: 100vh;
    height: auto;
    padding-bottom: 40px;
    overflow: visible;
  }
  
  @media screen and (max-width: 480px) {
    min-height: 100vh;
    height: auto;
    padding-bottom: 30px;
    overflow: visible;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 60px;
  padding: 120px 60px 60px;
  overflow: visible;
  
  .card-swap-container {
    position: relative;
    z-index: 2;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
  }
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    padding: 100px 40px 60px;
    align-items: flex-start;
    justify-content: center;
    
    .card-swap-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
  }
  
  @media screen and (max-width: 768px) {
    padding: 60px 30px 60px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    overflow: visible;
    min-height: 100vh;
    
    .card-swap-container {
      padding-bottom: 30px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0;
      flex: 0 0 auto;
      overflow: visible;
    }
  }
  
  @media screen and (max-width: 480px) {
    padding: 50px 20px 50px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    overflow: visible;
    min-height: 100vh;
    
    .card-swap-container {
      padding-bottom: 20px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0;
      flex: 0 0 auto;
      overflow: visible;
    }
  }
`;

export const HeroText = styled.div`
  position: relative;
  z-index: 2;
  flex: 0 1 auto;
  max-width: 600px;
  text-align: left;
  margin: 0;
  
  h1.services-hero-title {
    color: white;
    font-size: 3.5rem;
    font-weight: 100;
    letter-spacing: 0.5px;
    line-height: 1.3;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
    
    .split-char {
      color: white !important;
    }
  }
  
  p.services-hero-desc {
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.6;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    margin: 0;
    text-align: justify;
    
    .split-word {
      color: white !important;
    }
  }
  
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    text-align: left;
    
    p.services-hero-desc {
      text-align: justify;
    }
  }
  
  @media screen and (max-width: 768px) {
    max-width: 100%;
    text-align: left;
    
    h1.services-hero-title {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }
    
    p.services-hero-desc {
      font-size: 1.2rem;
      text-align: justify;
    }
  }
  
  @media screen and (max-width: 480px) {
    max-width: 100%;
    text-align: left;
    
    h1.services-hero-title {
      font-size: 2rem;
      margin-bottom: 12px;
    }
    
    p.services-hero-desc {
      font-size: 1rem;
      text-align: justify;
    }
  }
`;


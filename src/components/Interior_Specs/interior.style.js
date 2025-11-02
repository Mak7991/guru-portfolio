import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;

    .title{
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        padding: 0 20px;
        
        h1{
            color: white;
            font-weight: 100;
            letter-spacing: 0.8px;
            font-size: 2rem;
            text-align: center;
            line-height: 1.4;
            
            @media screen and (max-width: 768px) {
                font-size: 1.5rem;
                letter-spacing: 0.5px;
                line-height: 1.3;
                padding: 0 15px;
            }
            
            @media screen and (max-width: 480px) {
                font-size: 1.2rem;
                letter-spacing: 0.3px;
                line-height: 1.2;
                padding: 0 10px;
            }
            
            @media screen and (max-width: 360px) {
                font-size: 1rem;
                letter-spacing: 0.2px;
                line-height: 1.1;
                padding: 0 8px;
            }
        }
    }

    
`;

export const Content = styled.div`
    background-image: ${props => `url('/images/${props.backgroundImg}')`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    /* Black overlay to make text visible */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
        pointer-events: none;
    }
    
    /* Ensure content is above overlay */
    h2 {
        position: relative;
        z-index: 2;
        color: white;
        font-weight: 100;
        letter-spacing: 1px;
        font-size: 2.5rem;
        text-align: center;
        line-height: 1.3;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        margin: 0;
        padding: 20px;
        
        /* Style SplitText words */
        .split-word {
            color: white !important;
        }
        
        .split-char {
            color: white !important;
        }
        
        @media screen and (max-width: 768px) {
            font-size: 2rem;
            letter-spacing: 0.8px;
            line-height: 1.2;
            padding: 15px;
        }
        
        @media screen and (max-width: 480px) {
            font-size: 1.5rem;
            letter-spacing: 0.5px;
            line-height: 1.1;
            padding: 10px;
        }
        
        @media screen and (max-width: 360px) {
            font-size: 1.2rem;
            letter-spacing: 0.3px;
            line-height: 1.1;
            padding: 8px;
        }
    }
    
    .scroll-arrow {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        z-index: 10;
        transition: all 0.3s ease;
        
        &:hover {
            transform: translateX(-50%) translateY(-5px);
        }
        
        .arrow-down {
            width: 0;
            height: 0;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-top: 20px solid rgba(255, 255, 255, 0.8);
            animation: bounce 2s infinite;
            transition: all 0.3s ease;
        }
        
        &:hover .arrow-down {
            border-top-color: rgba(255, 255, 255, 1);
            transform: scale(1.1);
        }
        
        @media screen and (max-width: 768px) {
            bottom: 1.5rem;
            
            .arrow-down {
                border-left: 12px solid transparent;
                border-right: 12px solid transparent;
                border-top: 16px solid rgba(255, 255, 255, 0.8);
            }
        }
        
        @media screen and (max-width: 480px) {
            bottom: 1rem;
            
            .arrow-down {
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 14px solid rgba(255, 255, 255, 0.8);
            }
        }
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
`;
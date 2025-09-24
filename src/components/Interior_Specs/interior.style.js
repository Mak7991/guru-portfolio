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
            font-weight: 500;
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
    
    h2 {
        color: white;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 2.5rem;
        text-align: center;
        line-height: 1.3;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        margin: 0;
        padding: 20px;
        
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
`;
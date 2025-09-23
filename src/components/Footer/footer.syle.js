import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    background-color: black;
    padding: 20px 0;
    width: 100%;

    .bottom{
        a{
            transition: color 200ms ease-in;
            :hover{
                color: white;
            }
        }
    }
    @media screen and (max-width: 420px){
        margin-top: -45px;
        padding: 15px 0;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;

    a{
        text-decoration: none;
        font-size: 0.85rem;
        font-weight: 500;
        padding: 8px 18px;
        letter-spacing: 0.4px;
        color: rgba(255, 255, 255, 0.8);
        transition: all 200ms ease-in;
        border-radius: 4px;
        
        :hover{
            color: white;
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
    
    div:first-child a {
        font-weight: 600;
        color: white;
    }
    
    div:last-child {
        display: flex;
        gap: 10px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
        text-align: center;
        
        div:last-child {
            justify-content: center;
        }
    }

    @media screen and (max-width: 430px) {
        flex-direction: column;
        align-items: center;
        padding: 0 15px;
        
        a{
            font-size: 0.8rem;
            padding: 6px 15px;
        }
    }
`;
import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 150vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    width: 80%;
    height: 80%;

    .row{
        display: flex;
        height: 40vh;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin-top: 50px;
        margin-bottom: 40px;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

    .col{
        flex: 1;
        min-width: 0; /* Prevents flex items from overflowing */
        h3{
            color: white;
            font-weight: 400;
            font-size: 1.4rem;
            letter-spacing: 0.6px;
            padding: 20px 0;
            word-spacing: 2px;
        }
        p{
            color: white;
            font-weight: 300;
            font-size: 0.95rem;
            letter-spacing: 0.4px;
            word-spacing: 1.2px;
            line-height: 25px;
        }
        
        ul{
            color: white;
            font-weight: 300;
            font-size: 0.9rem;
            letter-spacing: 0.3px;
            line-height: 22px;
            margin: 15px 0;
            padding-left: 20px;
            li{
                margin-bottom: 8px;
                position: relative;
                color: white;
                marker: white
                
                &::marker{
                    color: var(--teslaColor);
                    font-size: 1.2rem;
                }
            }
        }
    }

    .text{
        padding-left: 40px;
        h3, p, ul{
            padding-right: 20px;
        }
    }
    .text1{
        padding-right: 40px;
        h3, p, ul{
            padding-left: 20px;
        }
    }

    @media screen and (max-width: 1024px){
        .row{
            flex-direction: column;
            height: auto;
            gap: 30px;
        }
        
        .col{
            width: 100%;
        }
        
        .text, .text1{
            padding: 20px;
            h3, p, ul{
                padding-left: 0;
                padding-right: 0;
            }
        }
    }
    
    @media screen and (max-width: 750px){
        width: 90%;
        
        .row{
            gap: 20px;
        }
        
        .col{
            h3, p, ul{
                padding-left: 10px;
                padding-right: 10px;
            }
        }
    }
    @media screen and (max-width: 400px){
        width: 96%;
        height: 96%;

        .col{
            h3{
                font-size: 1.2rem;
            }
            p{
                font-size: 0.8rem;
                line-height: 18px;
            }
            ul{
                font-size: 0.75rem;
                line-height: 16px;
            }
        }
    }
    
    /* Specific styling for 1024px height */
    @media screen and (height: 1024px) {
        .row{
            height: 35vh;
            margin-bottom: 30px;
        }
        
        .col{
            h3{
                font-size: 1.3rem;
                padding: 15px 0;
            }
            p{
                font-size: 0.9rem;
                line-height: 22px;
            }
            ul{
                font-size: 0.85rem;
                line-height: 20px;
            }
        }
    }
`;
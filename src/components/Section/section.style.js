import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: ${props => props.fullHeight ? '100vh' : 'auto'};
    min-height: ${props => props.fullHeight ? '100vh' : '70vh'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => props.bgVideo ? 'none' : `url('/images/${props.bg}')`};
    overflow: ${props => props.fullHeight ? 'hidden' : 'visible'};

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .background-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .video-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 0;
    }

    .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.6) 20%,
            rgba(255, 255, 255, 0.3) 40%,
            rgba(255, 255, 255, 0.1) 60%,
            transparent 80%
        );
        z-index: 1;
        pointer-events: none;
    }

    .content-wrapper {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .left-content {
        position: absolute;
        left: 60px;
        top: 16vh;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
        .section-range-text {
            margin-top: 15px;
            
            h2 {
                color: white;
                font-weight: 400;
                font-size: 1.8rem;
                letter-spacing: 0.6px;
                margin: 0;
            }
        }
    }

    img{
        margin-top: 15px;
        margin-bottom: 10px;
        height: 50px;
        animation: animate infinite 1.8s;
    }
    .arrow{
        display: flex;
        justify-content: center;
    }

    .buttons{
        margin-bottom: 30px;
    }

    .additional-text {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 40px;
        animation: fadeInUp 1s ease-out;
        
        p {
            color: rgba(59, 59, 59, 0.8);
            font-size: 1.1rem;
            font-weight: 500;
            letter-spacing: 0.3px;
            line-height: 1.5;
            max-width: 600px;
            margin: 0 auto;
            padding: 0 20px;
        }
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes animate {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(5px);
        }
        60% {
            transform: translateY(3px);
        }
    }
    @media screen and (max-width: 600px){
        img{
            height: 40px;
        }
    }
    
    @media screen and (max-width: 480px){
        height: 100vh;
        min-height: 100vh;
        
        img{
            height: 35px;
        }
    }
`;

export const ContentTop = styled.div`
    text-align: ${props => props.textAlign || 'center'};
    padding-top: 16vh;
    padding-left: ${props => props.textAlign === 'left' ? '60px' : '0'};
    padding-right: ${props => props.textAlign === 'left' ? '60px' : '0'};
    h1{
        font-weight: 700;
        letter-spacing: 0.5px;
        font-size: 3.2rem;
        color: var(--teslaColor);
        line-height: 4;
        
        &.abouUstitle {
            font-size: 2.8rem;
            font-weight: 700;
            color: #2D5460;
            margin-bottom: 10px;
        }
    }
    p{
        font-size: 2rem;
        font-weight: 500;
        padding: 8px 5px;
        color: #2D5460;
        line-height: 1.5;
    }
    a{
        text-decoration: underline;
        text-underline-position: under;
        display: inline-block;
        color: #2D5460;
        transition: color 200ms ease-in;

        :hover{
            color: var(--teslaColor);
            text-decoration-thickness: 2px;
        }
    }
    h1.abouUstitle{
        color: #2D5460;
    }
    h2.abdesc{
        color: #2D5460;
    }

    animation: transform 1s;
    animation-timing-function: ease-in;
    @keyframes transform {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.3;
        }
        100%{
            opacity: 1;
        }
    }

    @media screen and (max-width: 768px){
        padding-left: ${props => props.textAlign === 'left' ? '20px' : '0'};
        padding-right: ${props => props.textAlign === 'left' ? '20px' : '0'};
        padding-top: 12vh;
        
        h1{
            font-size: 2.5rem;
            font-weight: 700;
            
            &.abouUstitle {
                font-size: 2.2rem;
            }
            &.abdesc {
                font-size: 1.5rem;
            }
        }

        .left-content {
            left: 20px;
            top: 12vh;
            
            .section-range-text h2 {
                font-size: 1.5rem;
            }
        }

        .gradient-overlay {
            background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.9) 0%,
                rgba(255, 255, 255, 0.7) 25%,
                rgba(255, 255, 255, 0.4) 50%,
                rgba(255, 255, 255, 0.2) 70%,
                transparent 85%
            );
        }
    }
    
    @media screen and (max-width: 480px){
        padding-top: 10vh;
        padding-left: ${props => props.textAlign === 'left' ? '15px' : '0'};
        padding-right: ${props => props.textAlign === 'left' ? '15px' : '0'};
        
        h1{
            font-size: 2rem;
            font-weight: 700;
            
            &.abouUstitle {
                font-size: 1.8rem;
            }
            &.abdesc {
                font-size: 1.5rem;
            }
        }
        
        p{
            font-size: 1rem;
            font-weight: 500;
        }

        .left-content {
            left: 15px;
            top: 10vh;
            
            .section-range-text h2 {
                font-size: 1.3rem;
            }
        }

        .gradient-overlay {
            background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.95) 0%,
                rgba(255, 255, 255, 0.8) 20%,
                rgba(255, 255, 255, 0.5) 40%,
                rgba(255, 255, 255, 0.3) 60%,
                transparent 80%
            );
        }
    }
`;

export const ContentMid = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    button{
        padding: 12px 24px;
        width: 280px;
        border-radius: 25px;
        outline: none;
        border: none;
        font-size: 0.85rem;
        font-weight: 500;
        letter-spacing: 0.8px;
        opacity: 0.95;
        transition: all 0.3s ease;
        text-transform: uppercase;
        :hover{
            cursor: pointer;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
    }

    .left {
        a {
            text-decoration: none;
        }
        button{
            background-color: rgba(23,26,32,0.9);
            color: white;
            margin-right: 25px;
            :hover{
                background-color: rgba(23,26,32,1);
            }
        }
    }

    .right {
        a {
            text-decoration: none;
        }
        button{
            background-color: rgba(255,255,255,0.8);
            color: rgba(23,26,32,0.9);
            :hover{
                background-color: rgba(255,255,255,1);
            }
        }
    }

    @media screen and (max-width: 600px){
        flex-direction: column;
        .left , .right{
            display: flex;
            justify-content: center;
        }
        .left button{
            margin-right: 0;
            margin-bottom: 15px;
        }
        button{
            width: 90%;
            padding: 5px 10px;
        }
    }

    animation: transform 1s;
    animation-timing-function: ease-in;
    @keyframes transform {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.3;
        }
        100%{
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    margin-top: ${props => props.fullHeight ? '-10vh' : '0'};

.Info-bar{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;

        /* When inside left-content, align to the left */
        .left-content & {
            justify-content: flex-start;
        }
        h2{
        color: white;
        font-weight: 400;
        font-size: 1.8rem;
        letter-spacing: 0.6px;
        }
        p{
            padding-top: 8px;
            color: white;
            font-weight: 200;
            font-size: 0.8rem;
            letter-spacing: 0.3px;
        }
        a {
            text-decoration: none;
        }
        button{
            outline: none;
            border: white solid 4px;
            border-radius: 20px;
            padding: 8px 55px;
            background-color: transparent;
            color: white;
            transition: all 300ms ease-in;
            cursor: pointer;
            :hover{
                background-color: white;
                color: #141414;
            }
        }

        @media screen and (max-width: 600px){
            .hp{
                display: none;
            }
            .order_btn{
                display: flex;
                justify-content: center;
                width: 100%;
                margin-top: 20px;
            }
            button{
                width: 90%;
                padding: 10px auto;
            }
            .Specs{
                margin: 10px 12px;
                
                &.range-text-animated h2 {
                    font-size: 2rem !important;
                    text-align: center;
                    width: 100%;
                }
            }
            h2{
                font-size: 1.5rem;
            }
            p{
                font-size: 0.7rem;
            }
        }

    }
    .Specs{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px 40px;
        
        &.range-text-animated {
            h2 {
                font-size: 2.5rem !important;
                font-weight: 300 !important;
                letter-spacing: 1px !important;
                animation: fadeUpFromBottom 1.2s ease-out 0.5s both;
                text-align: center;
                width: 100%;
            }
        }
    }

    @keyframes fadeUpFromBottom {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    animation: transform 1s;
    animation-timing-function: ease-in;
    @keyframes transform {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.3;
        }
        100%{
            opacity: 1;
        }
    }
`;
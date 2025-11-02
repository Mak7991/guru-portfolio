import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: ${props => props.fullHeight ? '100vh' : '50vh'};
    min-height: ${props => props.fullHeight ? '100vh' : '50vh'};
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
            135deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.6) 30%,
            rgba(0, 0, 0, 0.4) 60%,
            rgba(0, 0, 0, 0.2) 100%
        );
        z-index: 1;
        pointer-events: none;
    }

    .blur-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 55%;
        height: 100%;
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0) 100%
        );
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.8) 60%,
            rgba(0, 0, 0, 0) 100%
        );
        -webkit-mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.8) 60%,
            rgba(0, 0, 0, 0) 100%
        );
        z-index: 1;
        pointer-events: none;
        display: ${props => props.fullHeight === false ? 'block' : 'none'};
    }

    .content-wrapper {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        &.compact {
            justify-content: flex-start;
        }
    }

    .left-content {
        position: absolute;
        left: 60px;
        top: 6vh;
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
    @media screen and (max-width: 768px){
        .blur-overlay {
            width: 100%;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.5) 0%,
                rgba(0, 0, 0, 0.3) 50%,
                rgba(0, 0, 0, 0.1) 80%,
                rgba(0, 0, 0, 0) 100%
            );
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            mask-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0.9) 60%,
                rgba(0, 0, 0, 0) 100%
            );
            -webkit-mask-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0.9) 60%,
                rgba(0, 0, 0, 0) 100%
            );
        }
    }
    
    @media screen and (max-width: 600px){
        img{
            height: 40px;
        }
    }
    
    @media screen and (max-width: 480px){
        height: ${props => props.fullHeight ? '100vh' : '50vh'} !important;
        min-height: ${props => props.fullHeight ? '100vh' : '50vh'} !important;
        max-height: ${props => props.fullHeight ? '100vh' : '50vh'} !important;
        
        .blur-overlay {
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
        }
        
        img{
            height: 35px;
        }
    }
`;

export const ContentTop = styled.div`
    text-align: ${props => props.textAlign || 'center'};
    padding-top: ${props => props.fullHeight !== false ? '25vh' : '8vh'};
    padding-bottom: ${props => props.fullHeight !== false ? '0' : '10px'};
    padding-left: ${props => props.textAlign === 'left' ? '60px' : '0'};
    padding-right: ${props => props.textAlign === 'left' ? '60px' : '0'};
    max-width: ${props => props.textAlign === 'left' && props.fullHeight === false ? '50%' : '100%'};
    position: relative;
    z-index: 3;
    
    @media screen and (max-width: 768px){
        max-width: 100%;
        padding-left: ${props => props.textAlign === 'left' ? '20px' : '0'};
        padding-right: ${props => props.textAlign === 'left' ? '20px' : '0'};
    }
    
    @media screen and (max-width: 480px){
        max-width: 100%;
        padding-left: ${props => props.textAlign === 'left' ? '15px' : '0'};
        padding-right: ${props => props.textAlign === 'left' ? '15px' : '0'};
    }
    h1, h2{
        font-weight: 100;
        letter-spacing: 0.5px;
        color: white;
        line-height: 1.8;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        
        /* Style SplitText characters */
        .split-char {
            color: white !important;
        }
    }
    
    h1{
        font-size: 3rem;
        
        &.pagestitle {
            font-size: 2.8rem;
            font-weight: 100;
            margin-bottom: 10px;
        }
    }
    
    h2{
        font-size: 2.5rem;
        
        &.pagesdesc {
            font-size: 2rem;
            font-weight: 100;
            margin-bottom: 10px;
        }
    }
    p{
        font-size: 2rem;
        font-weight: 500;
        padding: 8px 5px;
        color: white;
        line-height: 1.5;
        display: inline; /* Ensure paragraph content flows inline */
        margin: 0; /* Remove default margins */
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        
        /* Style SplitText words and characters */
        .split-word {
            color: white !important;
        }
        .split-char {
            color: white !important;
        }
        
        &.desc-text {
            display: block;
            margin-bottom: 10px;
        }
        
        &.para-text {
            display: block;
            font-size: 1.3rem;
            font-weight: 400;
            line-height: 1.6;
            margin-top: ${props => props.fullHeight !== false ? '8vh' : '10px'};
            margin-bottom: 20px;
            padding: 20px 24px;
            max-width: 600px;
            text-align: justify;
            position: relative;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
    }
    a{
        position: relative;
        text-decoration: none;
        display: inline; /* Change to inline to flow with text */
        color: white;
        transition: color 300ms ease-in-out;
        overflow: hidden;
        vertical-align: baseline; /* Align with text baseline */
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

        /* Animated underline */
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: white;
            transition: width 400ms ease-in-out;
            transform-origin: left;
        }

        :hover{
            color: white;
            
            &::after {
                width: 100%;
            }
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

    @media screen and (max-width: 768px){
        padding-left: ${props => props.textAlign === 'left' ? '20px' : '0'};
        padding-right: ${props => props.textAlign === 'left' ? '20px' : '0'};
        padding-top: ${props => props.fullHeight !== false ? '12vh' : '5vh'};
        
        h1{
            font-size: 2.5rem;
            font-weight: 100;
            padding-top: 10vh;
            
            &.pagestitle {
                font-size: 2.2rem;
            }
        }
        
        h2{
            font-size: 2rem;
            
            &.pagesdesc {
                font-size: 1.5rem;
            }
        }
        
        p{
            &.para-text {
                font-size: 1.1rem;
                margin-top: ${props => props.fullHeight !== false ? '20vh' : '10px'};
                margin-bottom: 18px;
                max-width: 100%;
                padding: 16px 20px;
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
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
        padding-top: ${props => props.fullHeight !== false ? '10vh' : '4vh'};
        padding-left: ${props => props.textAlign === 'left' ? '15px' : '0'};
        padding-right: ${props => props.textAlign === 'left' ? '15px' : '0'};
        
        h1{
            font-size: 2rem;
            font-weight: 100;
            
            &.pagestitle {
                font-size: 1.8rem;
            }
        }
        
        h2{
            font-size: 1.8rem;
            
            &.pagesdesc {
                font-size: 1.5rem;
            }
        }
        
        p{
            font-size: 1rem;
            font-weight: 500;
            
            &.para-text {
                font-size: 1rem;
                margin-top: ${props => props.fullHeight !== false ? '20vh' : '10px'};
                margin-bottom: 15px;
                max-width: 100%;
                padding: 14px 18px;
                backdrop-filter: blur(6px);
                -webkit-backdrop-filter: blur(6px);
            }
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
    justify-content: ${props => props.textAlign === 'left' ? 'flex-start' : 'center'};
    flex-wrap: wrap;
    padding-left: ${props => props.textAlign === 'left' ? '60px' : '0'};
    margin-top: 5px;
    margin-bottom: ${props => props.fullHeight !== false ? '30px' : '5px'};
    width: 100%;

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
        text-decoration: none;
        :hover{
            cursor: pointer;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            text-decoration: none;
        }
    }

    .left {
        a {
            text-decoration: none !important;
            :hover {
                text-decoration: none !important;
            }
            :focus {
                text-decoration: none !important;
            }
            :active {
                text-decoration: none !important;
            }
        }
        button{
            background-color: transparent;
            color: white;
            border: 2px solid white;
            margin-right: 25px;
            width: 280px;
            text-decoration: none !important;
            :hover{
                background-color: white;
                color: black;
                text-decoration: none !important;
                text-underline-offset: none;
            }
            :focus {
                text-decoration: none !important;
            }
        }
    }

    .right {
      
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
        justify-content: center;
        align-items: center;
        padding-left: 0;
        margin-top: 5px;
        .left , .right{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        .left {
            a {
                text-decoration: none !important;
                :hover {
                    text-decoration: none !important;
                }
            }
            button{
                margin-right: 0;
                margin-bottom: 12px;
                width: 280px;
                text-align: center;
                text-decoration: none !important;
                :hover{
                    text-decoration: none !important;
                }
            }
        }
        button{
            width: 280px;
            padding: 10px 20px;
            font-size: 0.8rem;
        }
    }

    @media screen and (max-width: 480px){
        justify-content: center;
        align-items: center;
        padding-left: 0;
        margin-top: 3px;
        .left button{
            width: 280px;
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
            font-weight: 100;
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

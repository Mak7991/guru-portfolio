import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 1000;
    background: transparent;
    padding: 0 30px;
    transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    .close{
        color: black;
        padding: 5px;
        padding-bottom: 2px;
        border-radius: 50%;
        position: fixed;
        top: 15px;
        right: 20px;
        z-index: 5;
        transition: all 300ms ease-in;
        cursor: pointer;
        :hover{
            background-color: rgba(90, 90, 90, 0.1);
        }
    }
    .top{
        position: fixed;
        top: 0;
        right: 10px;
        z-index: 10;
        height: 75px;
        width: 270px;
        background-color: white;
        -webkit-animation: cssAnimation 400ms forwards; 
        animation: cssAnimation 400ms forwards;
    }
    @keyframes cssAnimation {
        0%   {opacity: 0;}
        99%  {opacity: 0;}
        100% {opacity: 1;}
    }
    @media screen and (max-width: 1150px){
        .close{
            background-color: lightgrey;
        }
    }

    .logo{
        cursor: pointer;
    }

    .header-actions {
        position: absolute;
        right: 30px;
        display: flex;
        align-items: center;
        gap: 15px;
        
        .social-icons {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .social-icon-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.25);
            background: rgba(255, 255, 255, 0.12);
            color: var(--brand-color, #ffffff);
            cursor: pointer;
            transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);

            svg {
                font-size: 1.3rem;
                color: var(--brand-color, #ffffff) !important;
            }

            &:hover,
            &:focus {
                transform: translateY(-2px) scale(1.05);
                border-color: rgba(255, 255, 255, 0.4);
                background: var(--brand-color, rgba(255, 255, 255, 0.3));
                box-shadow: 0 10px 22px rgba(0, 0, 0, 0.26);
                svg {
                    color: #ffffff !important;
                }
            }
        }

        @media screen and (max-width: 768px) {
            position: static;
            justify-content: center;
            .social-icons {
                gap: 10px;
            }
            .social-icon-button {
                width: 38px;
                height: 38px;
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
                svg {
                    font-size: 1.2rem;
                }
            }
        }
    }
    .logo-img{
        height: 140px;
        width: 160px;
    }
    img{
        height: 24px;
        width: 160px;
    }

    @media screen and (max-width: 1150px){
        min-height: 130px;
        padding: 0 20px;
        .header-actions {
            right: 20px;
        }
        .logo-img{
            height: 120px;
            width: 140px;
        }
        img{
            height: 20px;
            width: 140px;
        }
    }
    @media screen and (max-width: 768px){
        min-height: 110px;
        padding: 0 15px;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 10px;
        
        .logo {
            margin-bottom: 10px;
        }
        
        .header-actions {
            position: static;
            justify-content: center;
            gap: 10px;
            .social-icon-button {
                width: 34px;
                height: 34px;
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
                svg {
                    font-size: 1.1rem;
                }
            }
        }
        .logo-img{
            height: 100px;
            width: 120px;
        }
        img{
            height: 18px;
            width: 120px;
        }
    }
    @media screen and (max-width: 480px){
        min-height: 120px;
        padding: 0 10px;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 8px;
        
        .logo {
            margin-bottom: 8px;
        }
        
        .header-actions {
            position: static;
            justify-content: center;
            gap: 8px;
            .social-icon-button {
                width: 32px;
                height: 32px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                svg {
                    font-size: 1rem;
                }
            }
        }
        .logo-img{
            height: 80px;
            width: 100px;
        }
        img{
            height: 16px;
            width: 100px;
        }
    }

    @media screen and (max-width: 360px){
        min-height: 110px;
        padding: 0 5px;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 5px;
        
        .logo {
            margin-bottom: 5px;
        }
        
        .header-actions {
            position: static;
            justify-content: center;
            gap: 5px;
            .social-icon-button {
                width: 30px;
                height: 30px;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
                svg {
                    font-size: 0.95rem;
                }
            }
        }
        .logo-img{
            height: 70px;
            width: 90px;
        }
        img{
            height: 14px;
            width: 90px;
        }
    }

    /* Specific styling for 1024px height */
    @media screen and (height: 1024px) {
        min-height: 120px;
        padding: 0 25px;
        
        .logo-img {
            height: 110px;
            width: 130px;
        }
        
        img {
            height: 18px;
            width: 130px;
        }
        
        .header-actions {
            right: 25px;
            gap: 12px;
            .social-icon-button {
                width: 38px;
                height: 38px;
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
                svg {
                    font-size: 1.15rem;
                }
            }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: nowrap;

    a{
        padding: 7px 16px;
        font-size: 0.92rem;
        letter-spacing: 0.6px;
        text-decoration: none;
        font-weight: 500;
        border-radius: 10px;
        transition: background-color 200ms ease-in;
        cursor: pointer;
        :hover{
            background-color: rgba(90, 90, 90, 0.1);
        }
    }
    
    @media screen and (max-width: 1150px){
        display: none;
    }
`;

export const Content1 = styled.div`
    display: flex;
    flex-wrap: nowrap;
    position: fixed;
    right: 30px;

    a{
        padding: 7px 16px;
        font-size: 0.92rem;
        letter-spacing: 0.6px;
        text-decoration: none;
        font-weight: 500;
        border-radius: 10px;
        transition: background-color 200ms ease-in;
        cursor: pointer;
        :hover{
            background-color: rgba(90, 90, 90, 0.1);
        }
    }

    @media screen and (max-width: 1150px){
        .none{
            display: none;
        }
        a{
            background-color: rgba(90, 90, 90, 0.08);
        }
        right: 20px;
    }
    @media screen and (max-width: 400px){
        right: 15px;
    }
`;

export const WhatsAppButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: transparent;
    color: white;
    border: none;
    border-radius: 0;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    
    .whatsapp-icon {
        font-size: 1.2rem;
        display: none;
    }
    
    .whatsapp-number {
        font-size: 0.9rem;
        font-weight: 600;
        color: white;
    }
    
    &:hover {
        color: rgba(255, 255, 255, 0.8);
        transform: translateY(-1px);
    }
    
    @media screen and (max-width: 768px) {
        padding: 6px 12px;
        .whatsapp-number {
            font-size: 0.8rem;
        }
    }
    
    @media screen and (max-width: 480px) {
        padding: 4px 8px;
        .whatsapp-number {
            font-size: 0.7rem;
            white-space: nowrap;
        }
    }
    
    @media screen and (max-width: 360px) {
        padding: 3px 6px;
        .whatsapp-number {
            font-size: 0.65rem;
        }
    }
    
    /* Specific styling for 1024px height */
    @media screen and (height: 1024px) {
        padding: 7px 14px;
        .whatsapp-number {
            font-size: 0.85rem;
        }
    }
`;

export const ContactButton = styled.button`
    padding: 8px 20px;
    background: transparent;
    color: #2D5460;
    border: 2px solid #2D5460;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background: #2D5460;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(45, 84, 96, 0.3);
    }
    
    @media screen and (max-width: 768px) {
        padding: 6px 16px;
        font-size: 0.8rem;
    }
    
    @media screen and (max-width: 480px) {
        padding: 4px 10px;
        font-size: 0.7rem;
    }
    
    @media screen and (max-width: 360px) {
        padding: 3px 8px;
        font-size: 0.65rem;
    }
    
    /* Specific styling for 1024px height */
    @media screen and (height: 1024px) {
        padding: 7px 18px;
        font-size: 0.85rem;
    }
`;
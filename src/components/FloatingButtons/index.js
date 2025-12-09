import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const FloatingButtonsWrapper = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    right: 15px;
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    right: 10px;
    gap: 10px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  opacity: ${props => props.isExpanded ? 1 : 0};
  max-height: ${props => props.isExpanded ? '200px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  transform: ${props => props.isExpanded ? 'translateY(0)' : 'translateY(-20px)'};

  @media screen and (max-width: 768px) {
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    gap: 10px;
  }
`;

const FloatingButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.95);
    transform: scale(1.15);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    font-size: 24px;
    transition: transform 0.3s ease;
    color: white;
    fill: white;
  }

  &:hover svg {
    transform: scale(1.15);
  }

  @media screen and (max-width: 768px) {
    width: 45px;
    height: 45px;

    svg {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 40px;
    height: 40px;

    svg {
      font-size: 20px;
    }
  }
`;

const WhatsAppButton = styled(FloatingButton)`
  &:hover {
    background-color: #25D366;
    
    svg {
      color: white;
      fill: white;
    }
  }
`;

const EmailButton = styled(FloatingButton)`
  &:hover {
    background-color: #D44638;
    
    svg {
      color: white;
      fill: white;
    }
  }
`;

const ScrollButton = styled(FloatingButton)`
  background-color: rgba(0, 0, 0, 0.9);
  transform: ${props => props.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '9710588644320'; // UAE phone number format
    const message = 'Hello, I would like to know more about Guru Homes properties.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@guruhomes.ae';
  };

  return (
    <FloatingButtonsWrapper>
      <ButtonsContainer isExpanded={isExpanded}>
        <WhatsAppButton onClick={handleWhatsApp} aria-label="Contact via WhatsApp">
          <WhatsAppIcon style={{ color: 'white', fill: 'white' }} />
        </WhatsAppButton>
        <EmailButton onClick={handleEmail} aria-label="Send email">
          <EmailIcon style={{ color: 'white', fill: 'white' }} />
        </EmailButton>
      </ButtonsContainer>
      <ScrollButton 
        onClick={handleToggleExpand} 
        aria-label={isExpanded ? "Collapse menu" : "Expand menu"}
        isExpanded={isExpanded}
      >
        <KeyboardArrowDownIcon style={{ color: 'white', fill: 'white' }} />
      </ScrollButton>
    </FloatingButtonsWrapper>
  );
};

export default FloatingButtons;


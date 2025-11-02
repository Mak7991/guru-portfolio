import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-x: hidden;
`;

export const Content = styled.div`
  width: 100%;
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  padding: 80px 60px;
  background-color: #1a1a1a;
  min-height: 80vh;
  
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 60px 40px;
  }
  
  @media screen and (max-width: 768px) {
    gap: 40px;
    padding: 40px 30px;
  }
  
  @media screen and (max-width: 480px) {
    padding: 30px 20px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  .info-section {
    h3 {
      color: white;
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 12px;
      letter-spacing: 0.5px;
    }
    
    .phone {
      color: white;
      font-size: 1.8rem;
      font-weight: 600;
      margin: 8px 0;
      letter-spacing: 0.5px;
    }
    
    .hours {
      color: #999;
      font-size: 0.9rem;
      margin-top: 4px;
    }
    
    p {
      color: white;
      font-size: 1rem;
      line-height: 1.6;
      margin: 0;
    }
  }
  
  @media screen and (max-width: 768px) {
    gap: 30px;
    
    .info-section {
      .phone {
        font-size: 1.5rem;
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    span {
      font-size: 1.2rem;
      font-weight: 600;
    }
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }
  }
`;

export const ContactForm = styled.div`
  h2 {
    color: white;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
  }
  
  .instruction {
    color: #999;
    font-size: 0.95rem;
    margin-bottom: 30px;
    line-height: 1.5;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  .call-me-btn {
    background-color: transparent;
    border: 1px solid #666;
    color: white;
    padding: 14px 32px;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover:not(:disabled) {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: #999;
    }
    
    &:active:not(:disabled) {
      transform: scale(0.98);
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
  
  .alternative-contact {
    color: #999;
    font-size: 0.9rem;
    margin-top: 30px;
    line-height: 1.5;
    
    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: #ccc;
      }
    }
  }
  
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
  
  @media screen and (max-width: 480px) {
    h2 {
      font-size: 1.8rem;
    }
    
    .instruction {
      font-size: 0.9rem;
    }
  }
`;

export const FormGroup = styled.div`
  position: relative;
  
  input {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 1rem;
    padding: 12px 0;
    outline: none;
    transition: border-color 0.3s ease;
    font-family: Helvetica, sans-serif;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    
    &:focus {
      border-bottom-color: white;
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    &[type="tel"] {
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
  
  label {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: white;
    font-size: 0.9rem;
    cursor: pointer;
    line-height: 1.5;
    
    input[type="checkbox"] {
      margin-top: 4px;
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: white;
      flex-shrink: 0;
      
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
    
    span {
      flex: 1;
      
      a {
        color: white;
        text-decoration: underline;
        transition: color 0.3s ease;
        
        &:hover {
          color: #ccc;
        }
      }
    }
  }
`;

export const LoadingSpinner = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 8px;
  vertical-align: middle;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SuccessMessage = styled.div`
  margin-top: 16px;
  padding: 12px 16px;
  background-color: rgba(76, 175, 80, 0.2);
  border: 1px solid rgba(76, 175, 80, 0.5);
  color: #81c784;
  font-size: 0.9rem;
  border-radius: 4px;
  animation: fadeIn 0.3s ease-in;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 16px;
  padding: 12px 16px;
  background-color: rgba(244, 67, 54, 0.2);
  border: 1px solid rgba(244, 67, 54, 0.5);
  color: #ef5350;
  font-size: 0.9rem;
  border-radius: 4px;
  animation: fadeIn 0.3s ease-in;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

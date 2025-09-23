import React, { useState, useEffect } from "react";
import { Wrapper, ContactButton, WhatsAppButton } from "./header.style";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down (only after scrolling past 100px)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledControlNavbar = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlNavbar();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledControlNavbar, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledControlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <Wrapper isVisible={isVisible}>
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src="/images/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="header-actions">
          <WhatsAppButton onClick={handleWhatsAppClick}>
            <span className="whatsapp-icon">📱</span>
            <span className="whatsapp-number">+971 058 864 4320</span>
          </WhatsAppButton>

          <ContactButton onClick={toggleContactForm}>
            GET IN TOUCH
          </ContactButton>
        </div>
        {/* <Content1>
          <a href="#" onClick={() => setOpen(true)}>
            Menu
          </a>
        </Content1>
        {open && (
          <div className="top">
            <div className="close" onClick={() => setOpen(false)}>
              <CloseIcon />
            </div>
          </div>
        )} */}
        {/* <SideNav show={open} /> */}

        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/AboutUs">About Us</a>
                  </li>
                  <li>
                    <a href="/">Our Team</a>
                  </li>
                  <li>
                    <a href="/">Accomplishments</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* Contact Form Overlay */}
      {showContactForm && (
        <div className="contact-overlay" onClick={toggleContactForm}>
          <div className="contact-form" onClick={(e) => e.stopPropagation()}>
            <div className="contact-header">
              <h3>GET IN TOUCH</h3>
              <button className="close-btn" onClick={toggleContactForm}>
                ×
              </button>
            </div>
            <form className="contact-form-content">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Your Message" rows="4"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Wrapper } from "./header.style";
import { Link } from "react-router-dom";
import "./header.css";

const SOCIAL_LINKS = {
  whatsapp: {
    label: "WhatsApp",
    url: "https://wa.me/9710588644320",
    icon: WhatsAppIcon,
    color: "#25D366",
  },
  instagram: {
    label: "Instagram",
    url: "https://www.instagram.com/guruhomesofficial?igsh=djNjNzdmcGR2bXpi",
    icon: InstagramIcon,
    color: "#E4405F",
  },
  meta: {
    label: "Meta",
    url: "https://www.facebook.com/share/16fGYwgpUF/?mibextid=wwXIfr",
    icon: FacebookIcon,
    color: "#1877F2",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/guru-homes/",
    icon: LinkedInIcon,
    color: "#0A66C2",
  },
};

const generateQrImageUrl = (url) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(
    url
  )}`;

const Header = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedSocial, setSelectedSocial] = useState(null);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const handleSocialClick = (platformKey) => {
    setSelectedSocial(platformKey);
  };

  const closeQrModal = () => {
    setSelectedSocial(null);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide header when scrolling down (only after scrolling past 50px for better responsiveness)
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
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

    window.addEventListener("scroll", throttledControlNavbar, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", throttledControlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <Wrapper isVisible={isVisible}>
        <div className="logo">
          <Link to="/">
            <img
              className="logo-img"
              src="/images/logo.png"
              alt="Guru Homes Logo - Premium Real Estate Developer"
            />
          </Link>
        </div>

        <div className="header-actions">
          <div className="social-icons">
            {Object.entries(SOCIAL_LINKS).map(([key, config]) => {
              const IconComponent = config.icon;
              return (
                <button
                  key={key}
                  type="button"
                  className="social-icon-button"
                  onClick={() => handleSocialClick(key)}
                  aria-label={`Open ${config.label} QR code`}
                  style={{ "--brand-color": config.color }}
                >
                  <IconComponent />
                </button>
              );
            })}
          </div>
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
                    <a href="/AboutUs">About Us</a>
                  </li>
                  <li>
                    <a href="/Portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="/Services">Services</a>
                  </li>
                  <li>
                    <a href="/Contact">Contact Us</a>
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

      {selectedSocial && (
        <div className="qr-overlay" onClick={closeQrModal}>
          <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="qr-close"
              onClick={closeQrModal}
              aria-label="Close QR code"
            >
              ×
            </button>
            <div className="qr-modal-header">
              {(() => {
                const ActiveIcon = SOCIAL_LINKS[selectedSocial].icon;
                return (
                  <ActiveIcon
                    className="qr-modal-icon"
                    style={{ color: SOCIAL_LINKS[selectedSocial].color }}
                  />
                );
              })()}
              <span>{SOCIAL_LINKS[selectedSocial].label}</span>
            </div>
            <img
              src={generateQrImageUrl(SOCIAL_LINKS[selectedSocial].url)}
              alt={`QR code for ${SOCIAL_LINKS[selectedSocial].label}`}
              className="qr-image"
            />
            <p className="qr-caption">
              Scan to open {SOCIAL_LINKS[selectedSocial].label}.
            </p>
            <a
              className="qr-link"
              href={SOCIAL_LINKS[selectedSocial].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open link directly
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

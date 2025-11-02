import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Wrapper, Content } from "./contact.style";
import Section from "../Section";
import Header from "../Header";
import Footer from "../Footer";
import SEO from "../SEO";
import { ContactContainer, ContactInfo, ContactForm, FormGroup, CheckboxGroup, LoadingSpinner, SuccessMessage, ErrorMessage } from "./contact.style";

// Support both REACT_APP_ (Create React App) and NEXT_PUBLIC_ (Next.js) prefixes
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    newsOffers: false,
    privacyPolicy: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Initialize EmailJS
  React.useEffect(() => {
    // Debug: Log environment variable status (without exposing values)
    console.log("EmailJS Configuration Status:", {
      SERVICE_ID: SERVICE_ID ? "✓ Set" : "✗ Missing",
      TEMPLATE_ID: TEMPLATE_ID ? "✓ Set" : "✗ Missing",
      PUBLIC_KEY: PUBLIC_KEY ? "✓ Set" : "✗ Missing",
    });
    
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    } else {
      console.warn("EmailJS Public Key not found. Please set REACT_APP_EMAILJS_PUBLIC_KEY in your .env file.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check which environment variables are missing
    const missingVars = [];
    if (!SERVICE_ID) missingVars.push("REACT_APP_EMAILJS_SERVICE_ID");
    if (!TEMPLATE_ID) missingVars.push("REACT_APP_EMAILJS_TEMPLATE_ID");
    if (!PUBLIC_KEY) missingVars.push("REACT_APP_EMAILJS_PUBLIC_KEY");
    
    if (missingVars.length > 0) {
      setSubmitStatus("error");
      console.error("EmailJS configuration missing. Missing environment variables:", missingVars.join(", "));
      console.error("Please create a .env file in the root directory with these variables.");
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        phone: formData.phone,
        news_offers: formData.newsOffers ? "Yes" : "No",
        privacy_policy: formData.privacyPolicy ? "Accepted" : "Not Accepted",
        to_name: "Guru Homes Team",
        message: `Contact request from ${formData.name} (${formData.phone}).\nNews & Offers: ${formData.newsOffers ? "Yes" : "No"}\nPrivacy Policy: ${formData.privacyPolicy ? "Accepted" : "Not Accepted"}`,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      
      setSubmitStatus("success");
      // Reset form
      setFormData({
        phone: "",
        name: "",
        newsOffers: false,
        privacyPolicy: false,
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <SEO
        title="Contact Us - Guru Homes | Get in Touch"
        description="Contact Guru Homes Dubai for all your real estate needs. Reach out to our sales center or office. We're here to help you find your perfect property."
        keywords="contact Guru Homes, Dubai real estate contact, property inquiry, Guru Homes sales center"
        url="/Contact"
      />
      <Header />
      <Content>
        <Section
          pagestitle="Contact Us"
          desc="Looking to buy, sell, or invest in Dubai real estate? Guru Homes Dubai is here to guide you through every step of the process."
          backgroundImg="bg15.jpeg"
          arrow="true"
          range="Your Trusted Real Estate Partner"
          textAlign="left"
        />
      </Content>
      <Content>
        <ContactContainer>
          <ContactInfo>
            {/* <div className="info-section">
              <h3>Sales Center</h3>
              <p className="phone">+971 (4) 879 7272</p>
            </div> */}
            <div className="info-section">
              <h3>Office</h3>
              <p className="phone">+971 058 864 4320</p>
              <p className="hours">Mon-sun: 10:00-19:00</p>
            </div>
            <div className="info-section">
              <h3>Address</h3>
              <p>Dubai, UAE</p>
            </div>
          </ContactInfo>
          <ContactForm>
            <h2>Get in touch</h2>
            <p className="instruction">Leave your details and we will call you back</p>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 058 864 4320"
                  required
                  disabled={isLoading}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  disabled={isLoading}
                />
              </FormGroup>
              <CheckboxGroup>
                <label>
                  <input
                    type="checkbox"
                    name="newsOffers"
                    checked={formData.newsOffers}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <span>I'd like to hear about news and offers</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    checked={formData.privacyPolicy}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                  <span>
                    I've read and agree to the{" "}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </CheckboxGroup>
              <button type="submit" className="call-me-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <LoadingSpinner /> SENDING...
                  </>
                ) : (
                  "CALL ME"
                )}
              </button>
              {submitStatus === "success" && (
                <SuccessMessage>
                  Thank you! We will call you back soon.
                </SuccessMessage>
              )}
              {submitStatus === "error" && (
                <ErrorMessage>
                  Something went wrong. Please try again or contact us directly.
                </ErrorMessage>
              )}
            </form>
            <p className="alternative-contact">
              Or contact our sales department at: <a href="tel:+9710588644320">+971 058 864 4320</a>
            </p>
          </ContactForm>
        </ContactContainer>
      </Content>
      <Footer bottom="bottom" />
    </Wrapper>
  );
};

export default Contact;


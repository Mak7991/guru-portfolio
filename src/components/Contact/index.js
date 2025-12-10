import React, { useState, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { Wrapper, Content } from "./contact.style";
import Section from "../Section";
import Header from "../Header";
import Footer from "../Footer";
import SEO from "../SEO";
import { ContactContainer, ContactInfo, ContactForm, FormGroup, CheckboxGroup, LoadingSpinner, SuccessMessage, ErrorMessage } from "./contact.style";

// Email configuration constants
const RECIPIENT_EMAIL = "info@guruhomes.ae";
const RECIPIENT_NAME = "Guru Homes Team";
const MESSAGE_CLEAR_TIMEOUT = 5000; // 5 seconds

// Support both REACT_APP_ (Create React App) and NEXT_PUBLIC_ (Next.js) prefixes
const SERVICE_ID = "service_hs7bhng"
const TEMPLATE_ID = "template_38tzqai"
const PUBLIC_KEY = "fkN9kXyVocPVWiGp5"

// Initial form state
const INITIAL_FORM_STATE = {
  phone: "",
  name: "",
  newsOffers: false,
  privacyPolicy: false,
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Initialize EmailJS
  useEffect(() => {
    const initEmailJS = () => {
      // Debug: Log environment variable status (without exposing values)
      const configStatus = {
        SERVICE_ID: SERVICE_ID ? "✓ Set" : "✗ Missing",
        TEMPLATE_ID: TEMPLATE_ID ? "✓ Set" : "✗ Missing",
        PUBLIC_KEY: PUBLIC_KEY ? "✓ Set" : "✗ Missing",
      };
      
      console.log("EmailJS Configuration Status:", configStatus);
      
      if (PUBLIC_KEY) {
        emailjs.init(PUBLIC_KEY);
        console.log("EmailJS initialized successfully");
      } else {
        console.warn("EmailJS Public Key not found. Please set REACT_APP_EMAILJS_PUBLIC_KEY in your .env file.");
      }
    };

    initEmailJS();
  }, []);

  // Validate EmailJS configuration
  const validateEmailJSConfig = useCallback(() => {
    const missingVars = [];
    if (!SERVICE_ID) missingVars.push("REACT_APP_EMAILJS_SERVICE_ID");
    if (!TEMPLATE_ID) missingVars.push("REACT_APP_EMAILJS_TEMPLATE_ID");
    if (!PUBLIC_KEY) missingVars.push("REACT_APP_EMAILJS_PUBLIC_KEY");
    
    if (missingVars.length > 0) {
      console.error("EmailJS configuration missing. Missing environment variables:", missingVars.join(", "));
      console.error("Please create a .env file in the root directory with these variables.");
      return { isValid: false };
    }
    
    return { isValid: true };
  }, []);

  // Clear status message after timeout
  const clearStatusMessage = useCallback(() => {
    setTimeout(() => {
      setSubmitStatus(null);
    }, MESSAGE_CLEAR_TIMEOUT);
  }, []);

  // Handle form input changes
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    
    // Clear status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null);
    }
  }, [submitStatus]);

  // Build email template parameters
  const buildTemplateParams = useCallback((formData) => {
    const message = `New Contact Request from Guru Homes Website

Contact Details:
- Name: ${formData.name}
- Phone: ${formData.phone}
- News & Offers: ${formData.newsOffers ? "Yes" : "No"}
- Privacy Policy: ${formData.privacyPolicy ? "Accepted" : "Not Accepted"}

This email was sent from the contact form on the Guru Homes website.
Please contact the customer at ${formData.phone} to follow up on their inquiry.`;

    return {
      from_name: formData.name || "Website Visitor",
      from_email: "noreply@guruhomes.ae", // Sender email (can be configured in EmailJS)
      phone: formData.phone,
      news_offers: formData.newsOffers ? "Yes" : "No",
      privacy_policy: formData.privacyPolicy ? "Accepted" : "Not Accepted",
      to_name: RECIPIENT_NAME,
      to_email: RECIPIENT_EMAIL, // Recipient email for Hostinger mailbox
      reply_to: formData.phone, // Reply-to field (phone as contact method)
      message: message,
      subject: `New Contact Request from ${formData.name || "Website Visitor"}`,
    };
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate EmailJS configuration
    const { isValid } = validateEmailJSConfig();
    if (!isValid) {
      setSubmitStatus("error");
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const templateParams = buildTemplateParams(formData);

      // Send email via EmailJS
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      
      console.log("Email sent successfully:", response);
      
      setSubmitStatus("success");
      
      // Reset form to initial state
      setFormData(INITIAL_FORM_STATE);
      
      // Clear success message after timeout
      clearStatusMessage();
    } catch (error) {
      console.error("EmailJS Error Details:", {
        code: error?.code,
        text: error?.text,
        message: error?.message,
        fullError: error,
      });
      
      setSubmitStatus("error");
      
      // Clear error message after timeout
      clearStatusMessage();
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
              <p>SHEIKH ZAYED ROAD, DUBAI, UAE</p>
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


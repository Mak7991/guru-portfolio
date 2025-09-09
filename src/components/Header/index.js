import React, { useState } from "react";
import { Wrapper } from "./header.style";
import { Link } from "react-router-dom";

import SideNav from "../SideNav";
import './header.css'

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src="/images/logo.png" alt="logo" />
          </Link>
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
    </>
  );
};

export default Header;

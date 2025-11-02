import React from "react";

import { Wrapper } from "./modelx.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";
import SEO from "../SEO";

const ModelX = () =>{
    return(
        <Wrapper>
            <SEO 
                title="Model X - Guru Homes | Premium Real Estate Development"
                description="Discover Model X by Guru Homes - our flagship premium real estate development featuring luxury amenities, modern design, and exceptional living standards."
                keywords="Model X Guru Homes, premium real estate, luxury development, modern apartments, high-end properties"
                url="/modelx"
            />
            <Header/>
            <Section 
                title="Model X" 
                desc='Plaid'
                backgroundImg="model-x.jpg" 
                arrow="true" 
                range='333'
                speed='2.5'
                top='175'
                hp='1,020'
            />
            <Interior/>
            <Specs/>
            <Footer bottom='bottom'/>
        </Wrapper>
    )
}

export default ModelX;
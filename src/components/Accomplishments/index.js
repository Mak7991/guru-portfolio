import React from "react";

import { Wrapper } from "./accomplishments.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const Accomplishments = () => {
    document.title = "Accomplishments";
    return (
        <Wrapper>
            <Header />
            <Section
                pagestitle="Accomplishments"
                pagesdesc="Our achievements and milestones"
                range="Aspirations don't simply materialize, they create empires."
                backgroundImg="bg13.jpeg"
                arrow="true"
                speed='3.1'
                top='162'
                textAlign="left"
            />
            <Interior/>
            <Specs/>
            
            <Footer bottom='bottom' />
        </Wrapper>
    )
}

export default Accomplishments;
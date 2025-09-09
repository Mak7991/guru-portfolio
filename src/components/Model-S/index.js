import React from "react";

import { Wrapper,Content } from "./models.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const ModelS = () =>{

    document.title = "About Us";
    return(
        <Wrapper>
            <Header/>
            <Content>
                <Section 
                abouUstitle="About Us" 
                // desc="Plaid" 
                backgroundImg="bg16.jpeg" 
                arrow="true" 
                range='Where Entrepreneurship Meets Real Estate.'
                speed='1.99'
                top='200'
                hp='1,020'
                />
            </Content>
            <Content>
                <Interior/>
            </Content>
            <Content>
                <Specs/>
            </Content>
            <Footer bottom='bottom'/>
        </Wrapper>
    )
}

export default ModelS;
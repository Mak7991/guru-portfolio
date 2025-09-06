import React from 'react'
import { Wrapper,Content } from './home.style'

import Section from './Section'
import Header from './Header';
import Footer from './Footer';

function Home() {

    document.title = "Guru Homes";
    return (
        <>
        <Header/>
        <Wrapper>
            <Content>
                <Section 
                    title="About Us" 
                    desc="Discover our story and mission" 
                    link="Learn More"
                    leftbtn="About Us" 
                    rightbtn="Read More" 
                    backgroundImg="bg7.jpeg" 
                    arrow="true"
                    textAlign="left"
                />
            </Content>
            <Content>
                <Section 
                    title="Our Team" 
                    desc="Meet the experts behind our success" 
                    link="View Team"
                    leftbtn="Our Team" 
                    rightbtn="View more" 
                    backgroundImg="bg2.jpeg" 
                    arrow="true"
                    textAlign="left"
                />
            </Content>
            <Content>
                <Section 
                    title="Accomplishments" 
                    desc="Our achievements and milestones" 
                    link="See All"
                    leftbtn="Accomplishments" 
                    rightbtn="View More" 
                    backgroundImg="bg3.jpeg"
                    textAlign="left"
                />
            </Content>
            <Content>
                <Footer/>
            </Content>
        </Wrapper>
        </>
    )
}

export default Home
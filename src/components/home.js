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
        <Wrapper data-scroll-container>
            <Content>
                <Section 
                    title="Coming Soon" 
                    // desc="Discover our story and mission" 
                    // linkdesc="Learn More"
                    // backgroundVideo="video.webm"
                    link="/AboutUs"
                    // leftbtn="About Us"
                    // rightbtn="Read More"
                    leftbtnUrl=""
                    rightbtnUrl="/AboutUs"
                    backgroundImg="bg14.jpeg" 
                    arrow="true"
                    textAlign="center"
                />
            </Content>
            {/* <Content>
                <Section 
                    title="Our Team" 
                    desc="Meet the experts behind our success" 
                    linkdesc="View Team"
                    link="/"
                    leftbtn="Our Team"
                    rightbtn="View More"
                    leftbtnUrl=""
                    rightbtnUrl="/team-details"
                    backgroundImg="bg2.jpeg" 
                    arrow="true"
                    textAlign="left"
                />
            </Content> */}
            {/* <Content>
                <Section 
                    title="Accomplishments" 
                    desc="Our achievements and milestones" 
                    linkdesc="See All"
                    link="/Accomplishments"
                    leftbtn="Accomplishments"
                    rightbtn="View More"
                    leftbtnUrl=""
                    rightbtnUrl="/Accomplishments"
                    backgroundImg="bg3.jpeg"
                    textAlign="left"
                />
            </Content>
            <Content>
                <Footer/>
            </Content> */}
        </Wrapper>
        </>
    )
}

export default Home
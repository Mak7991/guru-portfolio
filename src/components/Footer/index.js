import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                    <a href="/" target='_blank' >Guru Homes &copy; {getCurrentYear()}</a>
                </div>
                <div>
                    <a href="/" target="_blank" >Our Team</a>
                    <a href="/" target="_blank" >About Us</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer
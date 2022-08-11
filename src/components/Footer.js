import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../styles/colors";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import IMG from "../assets/images";

const Footer = () => {
    return (
        <StyledFooter>
            <Logo src={IMG.frame} alt="logo" />
            <Row>
                <FirstCol>
                    <AppName>Yumme</AppName>
                    <SocialCont>
                        <SocialLink to="">
                            <BsFacebook style={social} />
                        </SocialLink>
                        <SocialLink to="">
                            <BsInstagram style={social} />
                        </SocialLink>
                        <SocialLink to="">
                            <BsLinkedin style={social} />
                        </SocialLink>
                        <CopyText>© 2022 Yumme. All rights reserved.</CopyText>
                    </SocialCont>
                </FirstCol>
                <SecondCol>
                    <Title>Company</Title>
                    <Text>About Yumme</Text>
                    <Text>Our Offerings</Text>
                    <Text>Newsroom</Text>
                    <Text>Investors</Text>
                    <Text>Blog</Text>
                    <Text>Careers</Text>
                    <Text>AI</Text>
                </SecondCol>
                <SecondCol>
                    <Title>Products</Title>
                    <Text>Yumme</Text>
                    <Text>Tran2GO</Text>
                    <Text>TranME</Text>
                </SecondCol>
                <SecondCol>
                    <Title>Help</Title>
                    <Text>FAQ</Text>
                    <Text>Hotline</Text>
                    <Text>Text</Text>
                    <Text>Text</Text>
                    <Text>Text</Text>
                    <Text>Text</Text>
                </SecondCol>
                <SecondCol>
                    <Title>Contact</Title>
                    <Text>+61 3728382</Text>
                    <Text>237 Thornridge Cir. Shiloh, Melbun...</Text>
                </SecondCol>
            </Row>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: ${COLORS.orange};
    color: ${COLORS.white};
    padding: 3% 7%;
    margin-top: 8%;
    position: relative;
`;

const Logo = styled.img`
    position: absolute;
    right: 50px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FirstCol = styled.div`
    position: relative;
    width: 20%;
`;

const AppName = styled.h4`
    font-size: 20px;
`;

const SocialCont = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const SocialLink = styled(Link)`
    marging-right: 10px;
    text-decoration: none;
`;

const social = {
    color: COLORS.white,
    marginRight: '10px'
}

const CopyText = styled.p`
    font-size: 8px;
`;

const SecondCol = styled.div`

`;

const Title = styled.h5`
    font-size: 14px;
`;

const Text = styled.p`
    font-size: 12px;
`;

export default Footer;
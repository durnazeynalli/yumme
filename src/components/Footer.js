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
                        <CopyText>TRAN Systems <br/>
                            ABN 99 773 857 017<br/>
                            All rights reserved.<br/>
                            Copyright 2018 - 2022.
                        </CopyText>
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
                    <Text>Support center</Text>
                    <Text>Terms &amp; Conditions</Text>
                    <Text>Privacy Policy</Text>
                </SecondCol>
                <SecondCol>
                    <Title>Contact</Title>
                    <Text>(+63) 678 276 888</Text>
                    <Text>237 Thornridge Cir. Shiloh, Melbun...</Text>
                </SecondCol>
            </Row>
        </StyledFooter>
    )
}



const StyledFooter = styled.div`
    background-color: ${COLORS.orange};
    color: ${COLORS.white};
    padding: 3% 7% 7%;
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
    margin: -1px 0;
    padding: 10px 0;
`;

const SocialCont = styled.div`
    position: absolute;
    bottom: -60px;
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
    font-weight: 300;
    font-size: 10px;
`;

const SecondCol = styled.div`

`;

const Title = styled.h5`
    font-size: 14px;
    margin: -1px 0;
    padding: 10px 0;
`;

const Text = styled.p`
    font-size: 12px;
`;

export default Footer;
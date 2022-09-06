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
                    <AppText>TRAN Systems</AppText>
                    <AppText>ABN 99 773 857 017</AppText>
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
                        <CopyText>© Copy right 2018-2022. All rights reserved.</CopyText>
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
                    <Text>(+61) 413 537 730</Text>
                    <Text>support@3co.network</Text>
                    <Text>info@3co.network</Text>
                    <Text>sale@3co.network</Text>
                </SecondCol>
                <SecondCol>
                    <Title>Address</Title>
                    <Text>198 Adelaide Street,
Brisbane, Queensland, 4000,
Australia.</Text>
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

const AppText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${COLORS.white},
`;

const SocialCont = styled.div`
    position: absolute;
    bottom: -30px;
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
    color: ${COLORS.white},
`;

const SecondCol = styled.div`
    width: 10%;
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
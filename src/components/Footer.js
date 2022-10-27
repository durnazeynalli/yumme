import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../styles/colors";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import IMG from "../assets/images";

const Footer = () => {
    return (
        <StyledFooter>
            <Logo src={IMG.frame} alt="logo" />
            <Row>
                <FirstCol>
                    <AppName>Yumme</AppName>
                    <AppText>TRAN Systems<br/>ABN 99 773 857 017</AppText>
                    <Text>198 Adelaide Street, <br/>Brisbane, Queensland, <br/>4000, Australia.</Text>

                    <SocialCont>
                        <SocialLink to="">
                            <BsFacebook style={social} />
                        </SocialLink>
                        <SocialLink to="">
                            <BsTwitter style={social} />
                        </SocialLink>
                        <SocialLink to="">
                            <FaInstagramSquare style={social} />
                        </SocialLink>
                        <CopyText>© Copy right 2018-2022. All rights reserved.</CopyText>
                    </SocialCont>
                </FirstCol>
                <SecondCol>
                    <Title>Information</Title>
                    <Text>About Yumme</Text>
                    <Text>Investors</Text>
                    <Text>Techies</Text>
                    <Text>Roadmap</Text>
                    <Text>Careers</Text>
                </SecondCol>
                <SecondCol>
                    <Title>Legal </Title>
                    <Text>Privacy Policy</Text>
                    <Text>Terms of service</Text>
                    <Text>Product Disclosure Statement</Text>
                    <Text>Terms and Conditions</Text>
                </SecondCol>
                <SecondCol>
                    <Title>Help</Title>
                    <Text>FAQ</Text>
                    <Text>Hotline</Text>
                    <Text>Support center</Text>
                    <Text>Help Desk</Text>
                </SecondCol>
                <SecondCol>
                    <Title>Contact</Title>
                    <Text>(+61) 413 537 730</Text>
                    <Text>support@3co.network</Text>
                    <Text>info@3co.network</Text>
                    <Text>sale@3co.network</Text>
                </SecondCol>
                <SecondCol></SecondCol>
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
    bottom: 0;   
    width: 22%; 
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
    margin: -1px 0;
    padding: 10px 0;
    font-family: 'Fuzzy Bubbles';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
`;

const AppText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${COLORS.white},
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
    color: ${COLORS.white},
`;

const SecondCol = styled.div`
    width: 10%;
`;

const Title = styled.h5`
    font-family: 'Fuzzy Bubbles';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin: -1px 0;
    padding: 10px 0;
`;

const Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
`;

export default Footer;
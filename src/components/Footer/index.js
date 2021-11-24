import React from "react";
import { FaFacebook, FaGithub, FaBehance, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinkTitle,
  FooterLink,
  FooterLinkitems,
  FooterLinksContainer,
  FooterWrap,
  FooterLinksWrapper,
  SocialMedia,
  SocialIcons,
  SocialIconLink,
  WebsitesRights,
  SocialLogo,
  SocialMediaWrap,
} from "./FooterEl";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>

            <FooterLinkitems>
              <FooterLinkTitle>FB Pages</FooterLinkTitle>
              <FooterLink to="/https://www.facebook.com/JayBeeGaming00/">JayBeeGaming00</FooterLink>
              <FooterLink to="/https://www.facebook.com/gaming/NGDR3D3Y3">NGDR3D3Y3</FooterLink>
              <FooterLink to="/https://www.facebook.com/TheOvertimeAU">TheOvertimeAU</FooterLink>
   </FooterLinkitems>

            <FooterLinkitems>
              <FooterLinkTitle>My Education</FooterLinkTitle>
              <FooterLink to="/https://www.stanly.edu/">Stanly Community College</FooterLink>
              <FooterLink to="/https://www.charlotte.edu/">UNC Charlotte</FooterLink>
            </FooterLinkitems>

            <FooterLinkitems>
              <FooterLinkTitle>Support</FooterLinkTitle>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
            </FooterLinkitems>

            <FooterLinkitems>
              <FooterLinkTitle>FAQ</FooterLinkTitle>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
            </FooterLinkitems>

          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/"> Mel</SocialLogo>

            <WebsitesRights>
              Mel Copyright {new Date().getFullYear()}All Rights Reserved.
            </WebsitesRights>

            <SocialIcons>
              <SocialIconLink href="/https://www.facebook.com/Vinny1133/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/https://github.com/Mvint2647" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="/https://www.behance.net/Melissasta10d9" target="_blank" aria-label="Behance">
                <FaBehance />
              </SocialIconLink>
              <SocialIconLink href="/ww.linkedin.com/in/melissav1133" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

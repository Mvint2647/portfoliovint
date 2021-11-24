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
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
            </FooterLinkitems>
            <FooterLinkitems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
            </FooterLinkitems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkitems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
            </FooterLinkitems>
            <FooterLinkitems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
              <FooterLink to="/services">About us</FooterLink>
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
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Behance">
                <FaBehance />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
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

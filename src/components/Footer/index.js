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

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/"> Mel</SocialLogo>

            <WebsitesRights>
              Mel Copyright {new Date().getFullYear()}All Rights Reserved.
            </WebsitesRights>

            <SocialIcons>
              <SocialIconLink
                a href="https://www.facebook.com/Vinny1133/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                a href="https://github.com/Mvint2647"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                a href="https://www.behance.net/Melissasta10d9"
                target="_blank"
                aria-label="Behance"
              >
                <FaBehance />
              </SocialIconLink>
              <SocialIconLink
               a href="https://www.linkedin.com/in/melissav1133/"
                target="_blank"
                aria-label="Linkedin"
              >
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

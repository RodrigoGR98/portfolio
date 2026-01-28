import type React from "react";
import { RiMacbookLine } from "react-icons/ri";
import { Logo, LogoText, Wrapper } from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Logo>
        <RiMacbookLine />
        <LogoText>
          Rodrigo <br /> Ribeiro
        </LogoText>
      </Logo>
      <LogoText>2026</LogoText>
    </Wrapper>
  );
};

export default Footer;

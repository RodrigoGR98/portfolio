import Image from "next/image";
import type React from "react";
import { useLanguage } from "@/contexts/language/useLanguage";
import {
  Description,
  SectionTitle,
  TextContainer,
  Wrapper,
} from "./About.styles";

const About: React.FC = () => {
  const { content } = useLanguage();

  return (
    <Wrapper id="AboutSection">
      <Image
        className="about-me-image"
        src="/me2.jpeg"
        alt="Rodrigo Ribeiro"
        width={300}
        height={300}
      />
      <TextContainer>
        <SectionTitle>{content.about.title}</SectionTitle>
        <Description>{content.about.description}</Description>
        <Description>{content.about.description2}</Description>
      </TextContainer>
    </Wrapper>
  );
};

export default About;

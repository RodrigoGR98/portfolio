import type React from "react";

import { BiLogoTypescript } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import {
  FaCss3,
  FaHtml5,
  FaNode,
  FaNpm,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { GiJesterHat } from "react-icons/gi";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiStorybook } from "react-icons/si";
import { useLanguage } from "@/contexts/language/useLanguage";
import {
  SectionTitle,
  SkillBox,
  SkillName,
  SkillsContainer,
  Wrapper,
} from "./MySkills.styles";

const MySkills: React.FC = () => {
  const { content } = useLanguage();

  return (
    <Wrapper id="SkillSection">
      <SectionTitle>{content.skills}</SectionTitle>
      <SkillsContainer>
        <SkillBox>
          <FaHtml5 />
          <SkillName>HTML</SkillName>
        </SkillBox>
        <SkillBox>
          <FaCss3 />
          <SkillName>CSS</SkillName>
        </SkillBox>
        <SkillBox>
          <RiJavascriptFill />
          <SkillName>Javascript</SkillName>
        </SkillBox>
        <SkillBox>
          <BiLogoTypescript />
          <SkillName>Typescript</SkillName>
        </SkillBox>
        <SkillBox>
          <FaReact />
          <SkillName>React</SkillName>
        </SkillBox>
        <SkillBox>
          <RiNextjsFill />
          <SkillName>Next.js</SkillName>
        </SkillBox>
        <SkillBox>
          <BsGit />
          <SkillName>Git</SkillName>
        </SkillBox>
        <SkillBox>
          <SiStorybook />
          <SkillName>Storybook</SkillName>
        </SkillBox>
        <SkillBox>
          <FaSass />
          <SkillName>Sass/Scss</SkillName>
        </SkillBox>

        <SkillBox>
          <FaNode />
          <SkillName>Node.js</SkillName>
        </SkillBox>
        <SkillBox>
          <GiJesterHat />
          <SkillName>Jest</SkillName>
        </SkillBox>
        <SkillBox>
          <FaNpm />
          <SkillName>NPM</SkillName>
        </SkillBox>
      </SkillsContainer>
    </Wrapper>
  );
};

export default MySkills;

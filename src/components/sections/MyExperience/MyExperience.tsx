import Image from "next/image";
import type React from "react";
import { useLanguage } from "@/contexts/language/useLanguage";
import {
  ExperienceBox,
  ExperienceDescription,
  ExperienceList,
  Header,
  HeaderLeftContent,
  HeaderRightContent,
  SectionTitle,
  Wrapper,
} from "./MyExperience.styles";

const MyExperience: React.FC = () => {
  const { content } = useLanguage();

  return (
    <Wrapper>
      <SectionTitle>{content.experience.title}</SectionTitle>
      <ExperienceList>
        <ExperienceBox>
          <Header>
            <HeaderLeftContent>
              <Image
                width={72}
                height={200}
                src="banco-inter-logo.svg"
                alt={content.experience.experiences[0].imgAltText}
                style={{ marginTop: -5 }}
              />
              {content.experience.experiences[0].title}
            </HeaderLeftContent>
            <HeaderRightContent>
              {content.experience.experiences[0].date}
            </HeaderRightContent>
          </Header>
          <ExperienceDescription>
            {content.experience.experiences[0].description}
          </ExperienceDescription>
        </ExperienceBox>
        <ExperienceBox>
          <Header>
            <HeaderLeftContent>
              <Image
                width={72}
                height={200}
                src="/estrela-bet-logo.png"
                alt={content.experience.experiences[1].imgAltText}
                style={{ marginTop: -5 }}
              />
              {content.experience.experiences[1].title}
            </HeaderLeftContent>
            <HeaderRightContent>
              {content.experience.experiences[1].date}
            </HeaderRightContent>
          </Header>
          <ExperienceDescription>
            {content.experience.experiences[1].description}
          </ExperienceDescription>
        </ExperienceBox>
        <ExperienceBox>
          <Header>
            <HeaderLeftContent>
              <Image
                width={72}
                height={200}
                src="/azapfy-logo.png"
                alt={content.experience.experiences[2].imgAltText}
                style={{ marginTop: -5 }}
              />
              {content.experience.experiences[2].title}
            </HeaderLeftContent>
            <HeaderRightContent>
              {content.experience.experiences[2].date}
            </HeaderRightContent>
          </Header>
          <ExperienceDescription>
            {content.experience.experiences[2].description}
          </ExperienceDescription>
        </ExperienceBox>
        <ExperienceBox>
          <Header>
            <HeaderLeftContent>
              <Image
                width={72}
                height={200}
                src="/task-logo.webp"
                alt={content.experience.experiences[3].imgAltText}
                style={{ marginTop: -5 }}
              />
              {content.experience.experiences[3].title}
            </HeaderLeftContent>
            <HeaderRightContent>
              {content.experience.experiences[3].date}
            </HeaderRightContent>
          </Header>
          <ExperienceDescription>
            {content.experience.experiences[3].description}
          </ExperienceDescription>
        </ExperienceBox>
      </ExperienceList>
    </Wrapper>
  );
};

export default MyExperience;

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { RiWhatsappFill } from "react-icons/ri";
import { useLanguage } from "@/contexts/language/useLanguage";
import {
  BannerContainer,
  BannerImage,
  MediaBox,
  MediaLine,
  MediaLink,
  SocialMediaContainer,
  TextContent,
  TextDescription,
  TextTitle,
  Wrapper,
} from "./Introduction.styles";

export const Introduction = () => {
  const { content } = useLanguage();

  return (
    <Wrapper>
      <BannerContainer>
        <TextContent>
          <TextTitle>{content.banner.title}</TextTitle>
          <TextDescription>{content.banner.description}</TextDescription>
        </TextContent>
        <BannerImage src="me.jpg" />
      </BannerContainer>
      <SocialMediaContainer>
        <MediaBox>
          <MediaLink href="/">
            <RiWhatsappFill />
          </MediaLink>
          <MediaLink href="/">
            <FaGithub />
          </MediaLink>
          <MediaLink href="/">
            <FaLinkedin />
          </MediaLink>
        </MediaBox>
        <MediaLine />
      </SocialMediaContainer>
    </Wrapper>
  );
};

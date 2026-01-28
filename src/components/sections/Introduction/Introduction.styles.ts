import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-inline: 256px;
  padding-top: 96px;
  padding-bottom: 48px;
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 60%;
`;

export const TextTitle = styled.h3`
  font-size: 48px;
  line-height: 64px;
`;

export const TextDescription = styled.p``;

export const BannerImage = styled.img`
  width: 36%;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.text.primary};
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 64px;
`;

export const MediaBox = styled.div`
  display: flex;
  gap: 24px;
`;

export const MediaLink = styled.a`
  padding: 16px;
  border: 2px solid ${({ theme }) => theme.colors.text.primary};
  border-radius: 4px;

  svg {
    font-size: 28px;
  }
`;

export const MediaLine = styled.hr`
  width: 100%;
  border: none;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.text.primary};
`;

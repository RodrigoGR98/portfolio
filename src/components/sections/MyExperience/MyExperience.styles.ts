import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 64px;
  padding-inline: 356px;
  padding-block: 72px;
  background-color: #000000;
  color: #FFFFFF;
`;

export const SectionTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
`;

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const ExperienceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  border: solid 1px ${({ theme }) => theme.colors.text.secondary};
  border-radius: 10px;
  padding: 40px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  place-content: space-between;
`;

export const HeaderLeftContent = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const HeaderRightContent = styled.span``;

export const ExperienceDescription = styled.p``;

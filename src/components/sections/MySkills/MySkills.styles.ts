import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 64px;
  padding-inline: 256px;
  padding-block: 72px;
`;

export const SectionTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 48px;
`;

export const SkillBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  place-content: center;
  border: 2px solid ${({ theme }) => theme.colors.text.primary};
  border-radius: 4px;
  aspect-ratio: 1/1;

  svg {
    font-size: 48px;
  }
`;

export const SkillName = styled.span`
  font-size: 20px;
`;

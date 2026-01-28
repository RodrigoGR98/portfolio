import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  gap: 64px;
  padding-inline: 372px;
  padding-block: 96px;

  .about-me-image {
    border: 2px solid ${({ theme }) => theme.colors.foreground};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionTitle = styled.h3`
  font-size: 36px;
  font-weight: 700;
`;

export const Description = styled.p`
  text-align: justify;
`;

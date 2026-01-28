import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 64px;
   padding-inline: 256px;
  padding-block: 96px;
`;

export const SectionTitle = styled.h3`
  width: 100%;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

export const TestimonialList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

export const TestimonialBox = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 2px solid #FFF;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-items: center;
  gap: 24px;
`;

export const ImageContainer = styled.div`
  img {
    border-radius: 50%;
  }
`;

export const Comentary = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

export const Divider = styled.hr`
  border: none;
  width: 33%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.text.primary};
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const Position = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

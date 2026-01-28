import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  height: 160px;
  padding-inline: 256px;
  display: flex;
  align-items: center;
  place-content: space-between;
  background-color: #000;
  color: #fff;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 36px;
  }
`;

export const LogoText = styled.span`
  text-align: center;
  line-height: 18px;
  font-weight: 700;
`;

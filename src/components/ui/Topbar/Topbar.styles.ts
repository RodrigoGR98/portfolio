import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  place-content: space-between;
  padding-inline: 256px;
  padding-block: 32px;
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

export const NavOptions = styled.div`
  display: flex;
  gap: 36px;
`;

export const Option = styled.span`
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.10);
  }
`;

export const LanguageToggle = styled.button`
  padding: 0 16px;
  display: flex;
  align-items: center;
  place-content: center;
  border: solid 1px ${({ theme }) => theme.colors.foreground};
  border-radius: 24px;
  gap: 8px;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;

export const LanguageText = styled.span``;

export const DarkModeToggle = styled.button`
  display: flex;
  align-items: center;
  place-content: center;
  border: solid 1px ${({ theme }) => theme.colors.foreground};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  

  svg {
    font-size: 20px;
  }
`;

export const DownloadResume = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 18px;
  }
`;

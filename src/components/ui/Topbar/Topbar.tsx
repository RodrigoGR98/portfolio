import { useEffect, useState } from "react";
import { MdDarkMode, MdLanguage, MdLightMode } from "react-icons/md";
import { RiDownloadLine, RiMacbookLine } from "react-icons/ri";
import {
  contentText,
  contentTextEn,
} from "@/contexts/language/languageContent";
import { useLanguage } from "@/contexts/language/useLanguage";
import {
  DarkModeToggle,
  DownloadResume,
  LanguageText,
  LanguageToggle,
  Logo,
  LogoText,
  NavOptions,
  Option,
  Wrapper,
} from "./Topbar.styles";

interface TopbarProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

export const Topbar = ({ darkMode, setDarkMode }: TopbarProps) => {
  const { content, setContent } = useLanguage();
  const [language, setLanguage] = useState("pt-BR");

  useEffect(() => {
    if (navigator.language !== "pt-BR") {
      setContent(contentTextEn);
      setLanguage("en-US");
    }
  }, [setContent]);

  const changeLanguage = () => {
    if (language === "pt-BR") {
      setLanguage("en-US");
      setContent(contentTextEn);
    } else {
      setLanguage("pt-BR");
      setContent(contentText);
    }
  };

  function scrollToSection(id: string) {
    const el = document.getElementById(id);

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <Wrapper>
      <Logo>
        <RiMacbookLine />
        <LogoText>
          Rodrigo <br /> Ribeiro
        </LogoText>
      </Logo>
      <NavOptions>
        <Option onClick={() => scrollToSection("AboutSection")}>
          {content.topbar.navOptions[0].label}
        </Option>
        <Option onClick={() => scrollToSection("SkillSection")}>
          {content.topbar.navOptions[1].label}
        </Option>
        <Option onClick={() => scrollToSection("ProjectSection")}>
          {content.topbar.navOptions[2].label}
        </Option>
      </NavOptions>
      <NavOptions>
        <LanguageToggle onClick={() => changeLanguage()}>
          {language ? <MdLanguage /> : <MdLanguage />}
          <LanguageText>
            {language === "pt-BR" ? "en-US" : "pt-BR"}
          </LanguageText>
        </LanguageToggle>
        <DarkModeToggle onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdDarkMode /> : <MdLightMode />}
        </DarkModeToggle>
        <DownloadResume>
          {content.topbar.cvButton} <RiDownloadLine />
        </DownloadResume>
      </NavOptions>
    </Wrapper>
  );
};

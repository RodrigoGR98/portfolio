"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import About from "@/components/sections/About/About";
import { Introduction } from "@/components/sections/Introduction/Introduction";
import MyExperience from "@/components/sections/MyExperience/MyExperience";
import MySkills from "@/components/sections/MySkills/MySkills";
import Testimonial from "@/components/sections/Testimonial/Testimonial";
import Footer from "@/components/ui/Footer/Footer";
import { Topbar } from "@/components/ui/Topbar/Topbar";
import { LanguageProvider } from "@/contexts/language/LanguageProvider";
import { darkTheme, lightTheme } from "@/theme";
import { GlobalStyle } from "@/theme/global";
import { Wrapper } from "./styles";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setDarkMode(isDarkMode);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <LanguageProvider>
          <Wrapper>
            <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Introduction />
            <MySkills />
            <MyExperience />
            <About />
            <Testimonial />
            <Footer />
          </Wrapper>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

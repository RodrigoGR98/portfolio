import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { contentText } from "./languageContent";

type Props = {
  children: React.ReactNode;
};

export function LanguageProvider({ children }: Props) {
  const [content, setContent] = useState(contentText);

  return (
    <LanguageContext.Provider value={{ content, setContent }}>
      {children}
    </LanguageContext.Provider>
  );
}

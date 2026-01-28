import { createContext } from "react";
import type { ContentTextType } from "@/types/language";

export type LanguageContextType = {
  content: ContentTextType;
  setContent: (content: ContentTextType) => void;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

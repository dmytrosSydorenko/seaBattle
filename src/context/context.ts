import { createContext } from "react";

type TranslationContextType = Record<string, string>;

export const TranslationContext = createContext<TranslationContextType>({});
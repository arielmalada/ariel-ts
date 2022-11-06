import { createContext, useContext } from "react";
export type SectionTypes =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "achievements"
  | "contacts";

export type SectionContextTypes = {
  section: SectionTypes;
  setSection: (section: SectionTypes) => void;
};

export const SectionContext = createContext<SectionContextTypes>({
  section: "home",
  setSection: () => {},
});

export const useSectionContext = () => useContext(SectionContext);

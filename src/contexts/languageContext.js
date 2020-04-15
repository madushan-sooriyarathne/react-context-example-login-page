import React, { createContext } from "react";
import useSelectListItemState from "../hooks/useSelectListItemState";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [languageList, selectLanguageList] = useSelectListItemState([
    { id: "LK", flag: "🇱🇰", name: "Sinhala", isSelected: false },
    { id: "EN", flag: "🇺🇸", name: "English", isSelected: true },
    { id: "FR", flag: "🇵🇫", name: "French", isSelected: false },
  ]);

  const selectedItem = languageList.filter((lan) => lan.isSelected)[0];

  return (
    <LanguageContext.Provider
      value={{ selectedItem, languageList, selectLanguageList }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Language Consumer Higher Order Component (for Class Based components)
const LanguageConsumer = (Component) => (props) => (
  <LanguageContext.Consumer>
    {(value) => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
);

export { LanguageContext, LanguageProvider, LanguageConsumer };

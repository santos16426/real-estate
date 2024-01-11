import React, { ReactNode, createContext, useContext, useState } from "react";
import { TNewsEvent, TProperty, TSearch } from "../utils/types";

type AppContextProps = {
  slider: {
    activeIndex: number | 0;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  };
  properties: {
    activeProperty: TProperty | null;
    setActiveProperty: React.Dispatch<React.SetStateAction<TProperty | null>>;
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number | 0>>;
  };
  newsEvent: {
    activeNewsEvent: TNewsEvent | null;
    setActiveNewsEvent: React.Dispatch<React.SetStateAction<TNewsEvent | null>>;
  };
  searchFilter: {
    searchFilters: TSearch | null;
    setSearchFilters: React.Dispatch<React.SetStateAction<TSearch | null>>;
  };
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode; // Define children prop
};
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [sliderActiveIndex, setSliderActiveIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeProperty, setActiveProperty] = useState<TProperty | null>(null);
  const [searchFilters, setSearchFilters] = useState<TSearch | null>(null);
  const [activeNewsEvent, setActiveNewsEvent] = useState<TNewsEvent | null>(
    null
  );

  const sliderContextValue = {
    activeIndex: sliderActiveIndex,
    setActiveIndex: setSliderActiveIndex,
  };
  const propertyContext = {
    activeProperty,
    setActiveProperty,
    activeTab,
    setActiveTab,
  };
  const newsEventContext = {
    activeNewsEvent,
    setActiveNewsEvent,
  };
  const searchFiltersContext = {
    searchFilters,
    setSearchFilters,
  };
  return (
    <AppContext.Provider
      value={{
        slider: sliderContextValue,
        properties: propertyContext,
        newsEvent: newsEventContext,
        searchFilter: searchFiltersContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be within an AppProvider");
  }
  return context;
};

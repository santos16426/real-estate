import React, { ReactNode, createContext, useContext, useState } from 'react'

type AppContextProps = {
    slider: {
        activeIndex: number | 0;
        setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    };
    properties: {
        title: string;
        image: string;
    }[];
    blog: {

    }
}

const AppContext = createContext<AppContextProps|undefined>(undefined);

type AppProviderProps = {
    children: ReactNode; // Define children prop
  };
export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
    const [sliderActiveIndex, setSliderActiveIndex] = useState<number>(0);

    const sliderContextValue = {
        activeIndex: sliderActiveIndex,
        setActiveIndex: setSliderActiveIndex,
    }

    const propertiesContextValue = [
        { title: 'Property A', image: "/images/property-1.jpg" },
        { title: 'Property B', image: "/images/property-2.jpg" },
        { title: 'Property C', image: "/images/property-3.jpg" },
        { title: 'Property D', image: "/images/property-4.jpg" },
        { title: 'Property E', image: "/images/property-5.jpg" },
        { title: 'Property F', image: "/images/property-66.jpg" },
        { title: 'Property G', image: "/images/property-7.jpg" },
      ]

    const blogContextValue = {}

    return(
        <AppContext.Provider value={{slider: sliderContextValue, properties: propertiesContextValue, blog: blogContextValue}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () =>{
    const context = useContext(AppContext);
    if(!context){
        throw new Error('useAppContext must be within an AppProvider')
    }
    return context
}
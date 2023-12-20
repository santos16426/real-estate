import React, { ReactNode, createContext, useContext, useState } from 'react'

type AppContextProps = {
    slider: {
        activeIndex: number | 0;
        setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    };
    properties: {
        title: string;
        location: string;
        image: string;
        shortDescription?: string;
        longDescription?: string;
        priceRange?: string

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
        { title: 'Property A', image: "/images/property-1.jpg", location: "Lorem Ipsum A" },
        { title: 'Property B', image: "/images/property-2.jpg", location: "Lorem Ipsum B" },
        { title: 'Property C', image: "/images/property-3.jpg", location: "Lorem Ipsum C" },
        { title: 'Property D', image: "/images/property-4.jpg", location: "Lorem Ipsum D" },
        { title: 'Property E', image: "/images/property-5.jpg", location: "Lorem Ipsum E" },
        { title: 'Property F', image: "/images/property-66.jpg", location: "Lorem Ipsum F" },
        { title: 'Property G', image: "/images/property-7.jpg", location: "Lorem Ipsum G" },
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
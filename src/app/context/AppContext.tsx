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
        type: string;

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
        { title: 'Property A', image: "/images/property-1.jpg", location: "Lorem Ipsum A", shortDescription: "Short Desc A", longDescription: "Long Desc A", type: "Townhouse" },
        { title: 'Property B', image: "/images/property-2.jpg", location: "Lorem Ipsum B", shortDescription: "Short Desc B", longDescription: "Long Desc B", type: "Townhouse" },
        { title: 'Property C', image: "/images/property-3.jpg", location: "Lorem Ipsum C", shortDescription: "Short Desc C", longDescription: "Long Desc C", type: "Townhouse" },
        { title: 'Property D', image: "/images/property-4.jpg", location: "Lorem Ipsum D", shortDescription: "Short Desc D", longDescription: "Long Desc D", type: "Townhouse" },
        { title: 'Property E', image: "/images/property-5.jpg", location: "Lorem Ipsum E", shortDescription: "Short Desc E", longDescription: "Long Desc E", type: "Townhouse" },
        { title: 'Property F', image: "/images/property-66.jpg", location: "Lorem Ipsum F", shortDescription: "Short Desc F", longDescription: "Long Desc F", type: "Townhouse" },
        { title: 'Property G', image: "/images/property-7.jpg", location: "Lorem Ipsum G", shortDescription: "Short Desc G", longDescription: "Long Desc G", type: "Townhouse" },
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
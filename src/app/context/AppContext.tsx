import React, { ReactNode, createContext, useContext, useState } from 'react'

type AppContextProps = {
    slider: {
        activeIndex: number | 0;
        setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    };
    properties: {
        id: string;
        title: string;
        location: string;
        image: string;
        shortDescription?: string;
        longDescription?: string;
        priceRange?: string
        type: string;
        price: number;
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
        { id: 'property-a', price:6000000, title: 'Property A', image: "/images/property-1.jpg", location: "San Antonio, Pasig", shortDescription: "Lorem Ipsum Short Description", longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo et orci lacinia ornare ut eget turpis. Aenean congue tincidunt sodales. Mauris molestie laoreet magna sed hendrerit. Maecenas non bibendum odio. Aenean imperdiet auctor diam, eget gravida lacus volutpat at. Phasellus porta efficitur odio, eu ultricies mauris pulvinar id. Maecenas mollis turpis ultrices nulla lobortis, eu lacinia nisl blandit. Praesent ut magna congue, iaculis lorem sed, varius purus. In vitae augue volutpat, volutpat orci nec, gravida dui. Praesent a eleifend magna, nec fringilla urna. Ut tortor nibh, consequat a quam nec, suscipit ornare ante. Mauris at elit a orci vehicula interdum sit amet imperdiet lorem. Morbi et ligula vitae quam pellentesque mollis. Suspendisse feugiat velit lacinia, interdum ante porttitor, placerat magna. In diam est, pellentesque ac dignissim quis, iaculis eu orci. \n Pellentesque interdum lectus diam, quis semper velit laoreet et. Praesent imperdiet tincidunt orci, at porttitor ipsum gravida a. Vivamus sit amet justo ut odio fermentum feugiat. Suspendisse vel maximus justo, non lobortis nibh. Cras ac rutrum ipsum. Pellentesque a urna at odio placerat viverra eget ut lorem. Nunc sodales orci nec aliquam efficitur. Praesent ut vulputate mauris. Pellentesque aliquet pellentesque pretium.", type: "Condominium" },
        { id: 'property-b', price:11000000, title: 'Property B', image: "/images/property-2.jpg", location: "Bacoor, Cavite", shortDescription: "Lorem Ipsum Short Description", longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo et orci lacinia ornare ut eget turpis. Aenean congue tincidunt sodales. Mauris molestie laoreet magna sed hendrerit. Maecenas non bibendum odio. Aenean imperdiet auctor diam, eget gravida lacus volutpat at. Phasellus porta efficitur odio, eu ultricies mauris pulvinar id. Maecenas mollis turpis ultrices nulla lobortis, eu lacinia nisl blandit. Praesent ut magna congue, iaculis lorem sed, varius purus. In vitae augue volutpat, volutpat orci nec, gravida dui. Praesent a eleifend magna, nec fringilla urna. Ut tortor nibh, consequat a quam nec, suscipit ornare ante. Mauris at elit a orci vehicula interdum sit amet imperdiet lorem. Morbi et ligula vitae quam pellentesque mollis. Suspendisse feugiat velit lacinia, interdum ante porttitor, placerat magna. In diam est, pellentesque ac dignissim quis, iaculis eu orci. \n Pellentesque interdum lectus diam, quis semper velit laoreet et. Praesent imperdiet tincidunt orci, at porttitor ipsum gravida a. Vivamus sit amet justo ut odio fermentum feugiat. Suspendisse vel maximus justo, non lobortis nibh. Cras ac rutrum ipsum. Pellentesque a urna at odio placerat viverra eget ut lorem. Nunc sodales orci nec aliquam efficitur. Praesent ut vulputate mauris. Pellentesque aliquet pellentesque pretium.", type: "House" },
        { id: 'property-c', price:16000000, title: 'Property C', image: "/images/property-3.jpg", location: "Urbiztondo, La Union", shortDescription: "Lorem Ipsum Short Description", longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo et orci lacinia ornare ut eget turpis. Aenean congue tincidunt sodales. Mauris molestie laoreet magna sed hendrerit. Maecenas non bibendum odio. Aenean imperdiet auctor diam, eget gravida lacus volutpat at. Phasellus porta efficitur odio, eu ultricies mauris pulvinar id. Maecenas mollis turpis ultrices nulla lobortis, eu lacinia nisl blandit. Praesent ut magna congue, iaculis lorem sed, varius purus. In vitae augue volutpat, volutpat orci nec, gravida dui. Praesent a eleifend magna, nec fringilla urna. Ut tortor nibh, consequat a quam nec, suscipit ornare ante. Mauris at elit a orci vehicula interdum sit amet imperdiet lorem. Morbi et ligula vitae quam pellentesque mollis. Suspendisse feugiat velit lacinia, interdum ante porttitor, placerat magna. In diam est, pellentesque ac dignissim quis, iaculis eu orci. \n Pellentesque interdum lectus diam, quis semper velit laoreet et. Praesent imperdiet tincidunt orci, at porttitor ipsum gravida a. Vivamus sit amet justo ut odio fermentum feugiat. Suspendisse vel maximus justo, non lobortis nibh. Cras ac rutrum ipsum. Pellentesque a urna at odio placerat viverra eget ut lorem. Nunc sodales orci nec aliquam efficitur. Praesent ut vulputate mauris. Pellentesque aliquet pellentesque pretium.", type: "Apartment" },
        { id: 'property-d', price:22000000, title: 'Property D', image: "/images/property-4.jpg", location: "Silang, Cavite", shortDescription: "Lorem Ipsum Short Description", longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo et orci lacinia ornare ut eget turpis. Aenean congue tincidunt sodales. Mauris molestie laoreet magna sed hendrerit. Maecenas non bibendum odio. Aenean imperdiet auctor diam, eget gravida lacus volutpat at. Phasellus porta efficitur odio, eu ultricies mauris pulvinar id. Maecenas mollis turpis ultrices nulla lobortis, eu lacinia nisl blandit. Praesent ut magna congue, iaculis lorem sed, varius purus. In vitae augue volutpat, volutpat orci nec, gravida dui. Praesent a eleifend magna, nec fringilla urna. Ut tortor nibh, consequat a quam nec, suscipit ornare ante. Mauris at elit a orci vehicula interdum sit amet imperdiet lorem. Morbi et ligula vitae quam pellentesque mollis. Suspendisse feugiat velit lacinia, interdum ante porttitor, placerat magna. In diam est, pellentesque ac dignissim quis, iaculis eu orci. \n Pellentesque interdum lectus diam, quis semper velit laoreet et. Praesent imperdiet tincidunt orci, at porttitor ipsum gravida a. Vivamus sit amet justo ut odio fermentum feugiat. Suspendisse vel maximus justo, non lobortis nibh. Cras ac rutrum ipsum. Pellentesque a urna at odio placerat viverra eget ut lorem. Nunc sodales orci nec aliquam efficitur. Praesent ut vulputate mauris. Pellentesque aliquet pellentesque pretium.", type: "Townhouse" },
        { id: 'property-e', price:21000000, title: 'Property E', image: "/images/property-5.jpg", location: "Cubao, Quezon City", shortDescription: "Lorem Ipsum Short Description", longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo et orci lacinia ornare ut eget turpis. Aenean congue tincidunt sodales. Mauris molestie laoreet magna sed hendrerit. Maecenas non bibendum odio. Aenean imperdiet auctor diam, eget gravida lacus volutpat at. Phasellus porta efficitur odio, eu ultricies mauris pulvinar id. Maecenas mollis turpis ultrices nulla lobortis, eu lacinia nisl blandit. Praesent ut magna congue, iaculis lorem sed, varius purus. In vitae augue volutpat, volutpat orci nec, gravida dui. Praesent a eleifend magna, nec fringilla urna. Ut tortor nibh, consequat a quam nec, suscipit ornare ante. Mauris at elit a orci vehicula interdum sit amet imperdiet lorem. Morbi et ligula vitae quam pellentesque mollis. Suspendisse feugiat velit lacinia, interdum ante porttitor, placerat magna. In diam est, pellentesque ac dignissim quis, iaculis eu orci. \n Pellentesque interdum lectus diam, quis semper velit laoreet et. Praesent imperdiet tincidunt orci, at porttitor ipsum gravida a. Vivamus sit amet justo ut odio fermentum feugiat. Suspendisse vel maximus justo, non lobortis nibh. Cras ac rutrum ipsum. Pellentesque a urna at odio placerat viverra eget ut lorem. Nunc sodales orci nec aliquam efficitur. Praesent ut vulputate mauris. Pellentesque aliquet pellentesque pretium.", type: "House" },
        { id: 'property-f', price:8000000, title: 'Property F', image: "/images/property-66.jpg", location: "Batangas City, Batangas", shortDescription: "Lorem Ipsum Short Description", longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo et orci lacinia ornare ut eget turpis. Aenean congue tincidunt sodales. Mauris molestie laoreet magna sed hendrerit. Maecenas non bibendum odio. Aenean imperdiet auctor diam, eget gravida lacus volutpat at. Phasellus porta efficitur odio, eu ultricies mauris pulvinar id. Maecenas mollis turpis ultrices nulla lobortis, eu lacinia nisl blandit. Praesent ut magna congue, iaculis lorem sed, varius purus. In vitae augue volutpat, volutpat orci nec, gravida dui. Praesent a eleifend magna, nec fringilla urna. Ut tortor nibh, consequat a quam nec, suscipit ornare ante. Mauris at elit a orci vehicula interdum sit amet imperdiet lorem. Morbi et ligula vitae quam pellentesque mollis. Suspendisse feugiat velit lacinia, interdum ante porttitor, placerat magna. In diam est, pellentesque ac dignissim quis, iaculis eu orci. \n Pellentesque interdum lectus diam, quis semper velit laoreet et. Praesent imperdiet tincidunt orci, at porttitor ipsum gravida a. Vivamus sit amet justo ut odio fermentum feugiat. Suspendisse vel maximus justo, non lobortis nibh. Cras ac rutrum ipsum. Pellentesque a urna at odio placerat viverra eget ut lorem. Nunc sodales orci nec aliquam efficitur. Praesent ut vulputate mauris. Pellentesque aliquet pellentesque pretium.", type: "House" },
        { id: 'property-g', price:14000000, title: 'Property G', image: "/images/property-7.jpg", location: "Makati", shortDescription: "Lorem Ipsum Short Description", longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo et orci lacinia ornare ut eget turpis. Aenean congue tincidunt sodales. Mauris molestie laoreet magna sed hendrerit. Maecenas non bibendum odio. Aenean imperdiet auctor diam, eget gravida lacus volutpat at. Phasellus porta efficitur odio, eu ultricies mauris pulvinar id. Maecenas mollis turpis ultrices nulla lobortis, eu lacinia nisl blandit. Praesent ut magna congue, iaculis lorem sed, varius purus. In vitae augue volutpat, volutpat orci nec, gravida dui. Praesent a eleifend magna, nec fringilla urna. Ut tortor nibh, consequat a quam nec, suscipit ornare ante. Mauris at elit a orci vehicula interdum sit amet imperdiet lorem. Morbi et ligula vitae quam pellentesque mollis. Suspendisse feugiat velit lacinia, interdum ante porttitor, placerat magna. In diam est, pellentesque ac dignissim quis, iaculis eu orci. \n Pellentesque interdum lectus diam, quis semper velit laoreet et. Praesent imperdiet tincidunt orci, at porttitor ipsum gravida a. Vivamus sit amet justo ut odio fermentum feugiat. Suspendisse vel maximus justo, non lobortis nibh. Cras ac rutrum ipsum. Pellentesque a urna at odio placerat viverra eget ut lorem. Nunc sodales orci nec aliquam efficitur. Praesent ut vulputate mauris. Pellentesque aliquet pellentesque pretium.", type: "Apartment" },      
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
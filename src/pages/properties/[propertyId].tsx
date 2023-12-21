// pages/properties/[propertyId].tsx
import React from 'react';
import { useRouter } from 'next/router';
import Header from '@/app/components/Header';
import { AppProvider, useAppContext } from '@/app/context/AppContext';
import LeftPane from '@/app/components/PropertyDetails/LeftPane';
import RightPane from '@/app/components/PropertyDetails/RightPane';
import PropertyNotFound from '@/app/components/PropertyDetails/PropertyNotFound';

const PropertyPage: React.FC = () => {
    const {slider, properties, blog} = useAppContext();
    const router = useRouter();
        const propertyId = Array.isArray(router.query.propertyId)
        ? router.query.propertyId[0]
        : typeof router.query.propertyId === 'string'
        ? router.query.propertyId
        : undefined;
        const property = properties.find((p) => p.id === propertyId);
    return (
        <AppProvider>
            <Header/>
            {
                (property) ?
                <div className="flex">
                    <LeftPane propertyId={propertyId}/>
                    <RightPane propertyId={propertyId}/>
                </div>
                :
                <PropertyNotFound/>
            }
        </AppProvider>
    );
};

export default PropertyPage;

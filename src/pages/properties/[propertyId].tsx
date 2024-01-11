// pages/properties/[propertyId].tsx
import React from 'react';
import { useRouter } from 'next/router';
import Header from '@/app/components/Header';
import { useAppContext } from '@/app/context/AppContext';

import PropertyDetails from '@/app/components/PropertyDetails';
import PropertyNotFound from '@/app/components/PropertyNotFound';

const PropertyPage: React.FC = () => {
    const { properties } = useAppContext();
    const router = useRouter();
    const propertyId = Array.isArray(router.query.propertyId)
        ? router.query.propertyId[0]
        : typeof router.query.propertyId === 'string'
            ? router.query.propertyId
            : undefined;
    const property = properties.find((p) => p.id === propertyId);
    return (
        <>
            <Header />
            {
                (property) ?
                    <div className="flex h-full flex-col lg:flex-row">
                        <div className='w-full'></div>
                        <PropertyDetails propertyId={propertyId} />
                    </div>
                    :
                    <PropertyNotFound />
            }
        </>
    );
};

export default PropertyPage;

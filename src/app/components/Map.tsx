import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MarkerPosition {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center: MarkerPosition = {
  lat: 14.608887672424316,
  lng: 121.02196502685547,
};

const mapOptions = {
  disableDefaultUI: true,
};

const markerOptions: google.maps.Icon = {
  url: "/images/pin.svg",
  scaledSize: {
    width: 50,
    height: 50,
  } as google.maps.Size,
};

const markers: MarkerPosition[] = [
  {
    lat: 14.608887672424316,
    lng: 121.02196502685547,
  },
  { lat: 14.508887672424316, lng: 121.02196502685547 },
  { lat: 14.608887672424316, lng: 121.12196502685547 },
  { lat: 14.608887672424316, lng: 121.32196502685547 },
  { lat: 14.608887672424316, lng: 121.52196502685547 },
];

const GoogleMapsComponent: React.FC<{ apiKey: string | undefined }> = ({
  apiKey,
}) => {
  const [hoveredMarker, setHoveredMarker] =
    useState<google.maps.MapMouseEvent | null>(null);
  if (!apiKey) return <div>No API key</div>;

  const handleMarkerHover = (mouseEvent: google.maps.MapMouseEvent) => {
    console.log((mouseEvent.domEvent as MouseEvent).clientX);
    console.log((mouseEvent.domEvent as MouseEvent).clientY);
    setHoveredMarker(mouseEvent);
  };

  const handleMarkerLeave = () => {
    console.log("handleMarkerLeave");

    setHoveredMarker(null);
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={mapOptions}
      >
        {/* {markers.map((markerPosition, index) => (
                    <Marker
                        key={index}
                        position={markerPosition}
                        icon={markerOptions}
                    // onMouseOver={(mouseEvent) => handleMarkerHover(mouseEvent)}
                    // onMouseOut={handleMarkerLeave}
                    />
                ))} */}

        {/* {hoveredMarker && (

                    <div
                        style={{
                            position: 'absolute',
                            top: (hoveredMarker.domEvent as MouseEvent).clientY - 200,
                            left: ((hoveredMarker.domEvent as MouseEvent).clientX / 2) - 200,
                            backgroundColor: 'white',
                            padding: '5px',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                            zIndex: 1000,
                            width: '200px',
                            height: '200px'
                        }}
                    >
                        {(hoveredMarker.domEvent as MouseEvent).clientY / 2}
                        {(hoveredMarker.domEvent as MouseEvent).clientX / 2}
                    </div>
                )} */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;

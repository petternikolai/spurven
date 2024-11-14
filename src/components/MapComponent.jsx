/* global google */
import { GoogleMap } from "@react-google-maps/api";
import { useEffect, useRef } from "react";

function MapComponent({ location, containerStyle, mapOptions }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current = null;
      }
    };
  }, []);

  const onMapLoad = (map) => {
    mapRef.current = map;
    if (!markerRef.current) {
      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        position: location.position,
        map,
      });
    } else {
      markerRef.current.map = map;
    }
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location.position}
      zoom={15}
      options={mapOptions}
      onLoad={onMapLoad}
    />
  );
}

export default MapComponent;

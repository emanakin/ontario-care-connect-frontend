"use client";

import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";
import styles from "@/styles/components/contact/Map.module.css";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(
    () => ({
      lat: 43.1167,
      lng: -79.2494,
    }),
    []
  );

  const mapOptions = {
    disableDefaultUI: true,
    clickableIcons: false,
    scrollwheel: true,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  if (!isLoaded) return <div className={styles.skeleton}>Loading map...</div>;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        {/* Info Card Overlay */}
        <div className={styles.infoCard}>
          <h3 className={styles.businessName}>Elderlyease</h3>
          <div className={styles.rating}>
            <div className={styles.stars}>{"★".repeat(5)}</div>
            <span className={styles.reviewCount}>8 reviews</span>
          </div>
          <a href="#" className={styles.directions}>
            Directions
          </a>
        </div>

        {/* Map */}
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName={styles.map}
          options={mapOptions}
        >
          <Marker
            position={center}
            icon={{
              url: "/icons/contact/map-marker.svg",
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        </GoogleMap>

        {/* Map Controls */}
        <div className={styles.mapControls}>
          <button className={styles.controlButton} aria-label="Zoom in">
            +
          </button>
          <button className={styles.controlButton} aria-label="Zoom out">
            -
          </button>
        </div>
      </div>
    </div>
  );
}

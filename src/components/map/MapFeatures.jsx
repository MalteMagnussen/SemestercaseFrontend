import React, { useState } from "react";
import {
  Marker,
  Popup,
  // FeatureGroup,
  // Circle,
  // Rectangle
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapFeatures = ({ setZone, feature, lat, lng }) => {
  const GeoJSONFeature = () => {
    return <GeoJSON data={gameArea} />;
  };

  if (feature === "zones") {
    return <GeoJSONFeature />;
  } else if (feature === "point") {
    return (
      <>
        <Marker position={[lat, lng]}>
          <Popup>IM A POPUP</Popup>
        </Marker>
      </>
    );
  } else {
    return null;
  }
};

export default MapFeatures;

/*
    stroke?: boolean;
    color?: string;
    weight?: number;
    opacity?: number;
    lineCap?: LineCapShape;
    lineJoin?: LineJoinShape;
    dashArray?: string | number[];
    dashOffset?: string;
    fill?: boolean;
    fillColor?: string;
    fillOpacity?: number;
    fillRule?: FillRule;
    renderer?: Renderer;
    className?: string;
*/

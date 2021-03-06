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

const gameArea = {
  type: "FeatureCollection",
  properties: { name: "DK2" },
  features: [
    {
      id: "DK2",
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [10.9423828125, 55.416543608580064],
            [11.0467529296875, 55.068932343778684],
            [10.810546875, 54.7404787914159],
            [11.2445068359375, 54.58797989384959],
            [11.8927001953125, 54.463652645044796],
            [13.0462646484375, 54.88608683754535],
            [15.287475585937498, 54.930298209559496],
            [15.27099609375, 55.363502833950776],
            [12.711181640625, 55.229023057406344],
            [12.711181640625, 55.50374985927514],
            [12.8759765625, 55.6682913590041],
            [12.601318359374998, 55.91227293006361],
            [12.645263671875, 56.05056742320484],
            [12.50244140625, 56.13330691237569],
            [11.4422607421875, 56.32567522544464],
            [10.772094726562498, 55.73638916286441],
            [10.9423828125, 55.416543608580064],
          ],
        ],
      },
    },
  ],
};

export default MapFeatures;

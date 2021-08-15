import "leaflet/dist/leaflet.css";

import React, { useState } from "react";
import {
  MapConsumer,
  MapContainer,
  Marker,
  TileLayer,
} from "react-leaflet";
import Leaflet from "leaflet";

import mapPin from "../assets/icon-location.svg";

import "../App.css";
import { fetchLocalMapBox } from "../services/apiIpfy";
import { FormContainerComponent } from "../components/FormContainer";
import styled from "styled-components";
import { ResultComponent } from "../components/ResultComponent";
import { theme } from "../theme";
import Background from "../assets/pattern-bg.png";

const initialPosition: Position = { lat: -22.2154042, lng: -54.8331331 };

const mapPinIcon = Leaflet.icon({
  iconUrl: mapPin,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

type Position = {
  lng: number;
  lat: number;
};

interface LocationData {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${theme.colors.lightGray};
  max-width: 100%;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: auto;
`;
const LeafletMapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;

export const Home: React.FC = () => {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState<Position>(initialPosition);
  const [state, setState] = useState<LocationData>({
    ipAddress: "",
    location: "",
    timezone: "",
    isp: "",
  });

  const loadIPAdress = async (ipAddress: string) => {
    const response = await fetchLocalMapBox(ipAddress);
    setState({
      ipAddress: response.ip,
      location: response.location.city,
      timezone: response.location.timezone,
      isp: response.isp,
    });
    setLocation({
      lat: response.location.lat,
      lng: response.location.lng,
    });

    return response;
  };

  const handleSubmit = async () => {
    await loadIPAdress(address);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event?.target.value);
  };

  return (
    <AppContainer>
      <FormContainerComponent
        onChange={onChange}
        handleSubmit={async () => {
          handleSubmit();
        }}
      />
      <ResultComponent
        ipAddress={state.ipAddress}
        location={state.location}
        timezone={state.timezone}
        isp={state.isp}
      />
      <BackgroundContainer>
        <BackgroundImg src={Background} alt={"Fundo de tela do site"} />
      </BackgroundContainer>
      <LeafletMapContainer>
        <MapContainer
          center={location}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapConsumer>
            {(map) => {
                map.flyTo(location)
              return <Marker position={location} icon={mapPinIcon} />;
            }}
          </MapConsumer>
        </MapContainer>
      </LeafletMapContainer>
    </AppContainer>
  );
};

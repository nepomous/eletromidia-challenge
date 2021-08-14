import "leaflet/dist/leaflet.css";

import React, { FormEvent, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { v4 as uuidv4 } from "uuid";

import mapPackage from "../src/assets/package.svg";
import mapPin from "../src/assets/pin.svg";

import "./App.css";
import { fetchLocalMapBox } from "./services/apiIpfy";
import { useEffect } from "react";

const initialPosition = { lat: -22.2154042, lng: -54.8331331 };

const mapPackageIcon = Leaflet.icon({
  iconUrl: mapPackage,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const mapPinIcon = Leaflet.icon({
  iconUrl: mapPin,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

type Position = {
  longitude: number;
  latitude: number;
};

function App() {
  const [address, setAddress] = useState("");

  const [location, setLocation] = useState(initialPosition);

  const loadIPAdress = async (address: string) => {
    // // const response = await fetchLocalMapBox(address);
    // console.log("minha response:", response);
    // return response;
  };

  useEffect(() => {
    loadIPAdress('')
  },[])


  async function handleSubmit(event: FormEvent) {

    event.preventDefault();

    if (!address) return;

    // setAddress(address?.value || "");
  }

  const onChange = (event: any) => {
    console.log('que vento foi esse?', event)
}

const onClickSubmit = () => {
  return
}

  return (
    <div id="page-map">
      <main>
        <form onSubmit={handleSubmit} className="landing-page-form">
          <fieldset>
            <legend>IP Address Tracker</legend>

            <div className="input-block">
              <input type='text' value={address} onChange={onChange} className='form-control' id='address' placeholder='Endereço de IP'/>  
            </div>
          </fieldset>

          <button className="confirm-button" onClick={onClickSubmit} type="submit">
            Confirmar
          </button>
        </form>
      </main>

      <MapContainer
        center={location}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;

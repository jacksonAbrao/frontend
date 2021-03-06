import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/orphanages-map.css";

import mapMarkerImg from "../img/map-marker.svg";
import "leaflet/dist/leaflet.css";

import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>
        <footer>
          <strong>Trindade</strong>
          <span>Goiás</span>
        </footer>
      </aside>
      <Map
        center={[-16.8526947, -49.3636151]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/titles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        /> */}
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;

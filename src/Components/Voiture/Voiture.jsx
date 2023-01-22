import React from "react";
import Cars from "./Cars";
import Listcars from "./Listcars";
import FilterBar from "./filter";
import CarRegistrationForm from "./AjouterVoiture";

export default function Voiture() {
  return (
    <div style={{ backgroundColor: "#faf1d9", paddingTop: "60px" }}>
      <div
        className="title"
        style={{
          fontSize: "40px",
          fontFamily: "poppins",
          padding: " 20px",
          color: "#000000",
          textAlign: "center",
        }}
      >
        ESPACE VOITURE
      </div>
      <div>
        <FilterBar />
      </div>
    </div>
  );
}

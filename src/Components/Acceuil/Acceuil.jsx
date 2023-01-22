import React from "react";
import Details from "./details";
import Guide from "./Guides";
import HomeInterface from "./HomeInterface";
import Properties from "./Proprieties";

export default function Acceuil() {
  return (
    <div style={{ paddingTop: "0px" }}>
      <HomeInterface />
      <Details />
      <Guide />
      <Properties />
    </div>
  );
}

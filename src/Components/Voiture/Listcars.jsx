import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";

import house2 from "../Acceuil/image/slider-2.jpg";
import house3 from "../Acceuil/image/slider-1.jpg";
import Cars from "./Cars";
const properties = [
  {
    id: "1",
    img: house2,
    proprietaire: "IDRISS BOUGARRANI",
    address:
      "Street:  Port de fes, 90000 \r City:   fes \r State/province/area: fes",
    marque: "MERCEDES",
    distance: 255697,
    prix: "488000",
    disponibilité: true,
    couleur: "Red",
  },
  {
    id: "2",
    img: house2,
    proprietaire: "IDRISS BOUGARRANI",
    address:
      "Street:  Port de fes, 90000 \r City:   fes \r State/province/area: fes",
    marque: "MERCEDES",
    distance: 255697,
    prix: "488000",
    disponibilité: true,
    couleur: "Red",
  },

  {
    id: "3",
    img: house3,
    proprietaire: "YASSINE BOUFNICHEL",
    address:
      "Street:  Port de tanger, 90000 \r City:   tanger \r State/province/area: tanger",
    marque: "DACIA",
    distance: 259526,
    prix: "354000",
    disponibilité: true,
    couleur: "Red",
  },
  {
    id: "3",
    img: house3,
    proprietaire: "YASSINE BOUFNICHEL",
    address:
      "Street:  Port de tanger, 90000 \r City:   tanger \r State/province/area: tanger",
    marque: "DACIA",
    distance: 259526,
    prix: "354000",
    disponibilité: true,
    couleur: "Red",
  },
];
const Listcars = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box
      sx={{ mt: 5, backgroundColor: "#fcf0cc", py: 10, padding: "30px" }}
    ></Box>
  );
};

export default Listcars;

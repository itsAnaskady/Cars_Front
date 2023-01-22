import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  styled,
} from "@material-ui/core";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Box,
  Button,
  Container,
  createTheme,
  Slider,
  Typography,
} from "@mui/material";
import house2 from "../Acceuil/image/slider-2.jpg";
import house3 from "../Acceuil/image/slider-1.jpg";
import Cars from "./Cars";
import axios from "axios";
const theme = createTheme({
  palette: {
    primary: {
      light: "#dfc482",
      main: "#dfc482",
      dark: "#dfc482",
      contrastText: "#ffffff",
    },
  },
});
const properties = [
  {
    id: "1",
    img: house2,
    proprietaire: "IDRISS BOUGARRANI",
    address:
      "Street:  Port de fes, 90000 \r City:   fes \r State/province/area: fes",
    marque: "MERCEDES",
    distance: 25564,
    prix: 488000,
    disponibilité: false,
    couleur: "Red",
  },
  {
    id: "2",
    img: house2,
    proprietaire: "IDRISS BOUGARRANI",
    address:
      "Street:  Port de fes, 90000 \r City:   fes \r State/province/area: fes",
    marque: "MERCEDES",
    distance: 25,
    prix: 80000,
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
    distance: 25,
    prix: 354000,
    disponibilité: true,
    couleur: "Red",
  },
  {
    id: "4",
    img: house3,
    proprietaire: "YASSINE BOUFNICHEL",
    address:
      "Street:  Port de tanger, 90000 \r City:   tanger \r State/province/area: tanger",
    marque: "DACIA",
    distance: 259526,
    prix: 35000,
    disponibilité: true,
    couleur: "Red",
  },
];
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
function valuetext(value) {
  return `${value}°C`;
}

const PropertiesTextBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));
const FilterBar = () => {
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [marque, setMarque] = React.useState("");

  const handleMarqueChange = (event) => {
    setMarque(event.target.value);
  };
  const [Proprietaire, setProprietaire] = React.useState("");

  const handleProprietaireChange = (event) => {
    setProprietaire(event.target.value);
  };
  const [Coleur, setColeur] = React.useState("");

  const handleColeurChange = (event, newValue) => {
    setColeur(event.target.value);
  };
  const [Disponible, setDisponible] = React.useState(true);

  const handleDisponibleChange = (event, newValue) => {
    setDisponible(event.target.value);
  };
  const [category, setCategory] = React.useState("");

  const handleCategoryChange = (event, newValue) => {
    setCategory(event.target.value);
  };
  const [valuePrice, setValuePrice] = React.useState([0, 100]);

  const handleChangePrice = (event) => {
    setValuePrice(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  useEffect(() => {
    // Make a request to the web API to fetch the menu items
    axios
      .get("https://localhost:7047/api/admin/ListeMarque")
      .then((response) => {
        // Extract the menu items from the data and store them in a state variable
        console.log(response.data);
        setMenuItems(response.data);
      });
  }, []);
  const [ProprietaireItem, setProprietaireItems] = useState([]);

  useEffect(() => {
    // Make a request to the web API to fetch the menu items
    axios
      .get("https://localhost:7047/api/Admin/listeNomProprietaire")
      .then((response) => {
        // Extract the menu items from the data and store them in a state variable
        console.log(response.data);
        setProprietaireItems(response.data);
      });
  }, []);
  const [CarItem, setCarItems] = useState([]);

  useEffect(() => {
    // Make a request to the web API to fetch the menu items
    axios
      .get("https://localhost:7047/api/Admin/ListeVoiture")
      .then((response) => {
        // Extract the menu items from the data and store them in a state variable
        console.log(response.data);
        setCarItems(response.data);
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "50px",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          fontFamily: "poppins",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <FilterAltIcon /> FILTER
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormControl style={{ width: "220px" }}>
            <InputLabel id="brand-label">Marque</InputLabel>
            <Select
              labelId="brand-label"
              id="brand"
              value={marque}
              onChange={handleMarqueChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {menuItems.map((menuItem) => (
                <MenuItem key={menuItem} value={menuItem}>
                  {menuItem}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl style={{ width: "220px" }}>
            <InputLabel id="brand-label">Coleur</InputLabel>

            <Select labelId="Km" id="Km" onChange={handleColeurChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Red">red</MenuItem>
              <MenuItem value="White">White</MenuItem>
              <MenuItem value="Black">Black</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: "220px" }}>
            <InputLabel id="brand-label">Proprietaire</InputLabel>
            <Select labelId="Km" id="Km" onChange={handleProprietaireChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {ProprietaireItem.map((menuItem) => (
                <MenuItem key={menuItem} value={menuItem}>
                  {menuItem}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ width: "220px" }}>
            <InputLabel id="brand-label">Disponibilité</InputLabel>
            <Select labelId="Km" id="Km" onChange={handleDisponibleChange}>
              <MenuItem value={true}>disponible</MenuItem>
              <MenuItem value={false}>indisponible</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ width: "300px", margin: "20px" }}>
            <Typography
              gutterBottom
              style={{ textAlign: "center", fontWeight: "700" }}
            >
              Price (x1000) :
            </Typography>
            <Slider
              getAriaLabel={() => "Price range"}
              value={valuePrice}
              onChange={handleChangePrice}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              sx={{ width: "300px", color: "#dfc482" }}
            />
          </div>

          <div style={{ width: "300px", margin: "20px" }}>
            <Typography
              gutterBottom
              style={{ textAlign: "center", fontWeight: "700" }}
            >
              KILOMETRAGE(x100) :
            </Typography>
            <Slider
              getAriaLabel={() => "Price range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              sx={{ width: "300px", color: "#dfc482" }}
            />
          </div>
        </div>

        <Button
          type="submit"
          style={{
            backgroundColor: "#dfc482",
            color: "#ffffff",
            textAlign: "center",
            margin: "20px 50%",
          }}
        >
          Filter
        </Button>
      </form>
      <Container>
        <PropertiesBox>
          {CarItem.map((property) => {
            if (
              property.couleur ===
                (Coleur.length === 0 ? property.couleur : Coleur) &&
              property.nomMarque ===
                (marque.length === 0 ? property.nomMarque : marque) &&
              property.iNomProprietaire ===
                (Proprietaire.length === 0
                  ? property.iNomProprietaire
                  : Proprietaire) &&
              property.disponible == Disponible &&
              valuePrice[0] * 100 < property.prix &&
              valuePrice[1] * 100 > property.prix &&
              value[0] * 100 < property.km &&
              value[1] * 100 > property.km
            )
              return (
                <Cars
                  key={property.id}
                  image2={property.urlPhoto}
                  proprietaire={property.iNomProprietaire}
                  annee={property.annee}
                  categorie={property.nomCategorie}
                  marque={property.nomMarque}
                  distance={property.km}
                  prix={property.prix}
                  disponibilité={property.disponible}
                  couleur={property.couleur}
                />
              );
          })}
        </PropertiesBox>
      </Container>
    </div>
  );
};

export default FilterBar;

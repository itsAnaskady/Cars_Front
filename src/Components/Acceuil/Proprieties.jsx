import { Box, Container, styled, Typography } from "@mui/material";
import React, { useRef } from "react";
import House from "./House";
import house1 from "./image/slider-3.jpg";
import Carousel from "react-elastic-carousel";
import house2 from "./image/slider-2.jpg";
import house3 from "./image/slider-1.jpg";
import GiftBackground from "./image/gifts.jpg";

import Cars from "../Voiture/Cars";
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
  },
  {
    id: "4",
    img: house3,
    proprietaire: "YASSINE BOUFNICHEL",
    address:
      "Street:  Port de tanger, 90000 \r City:   tanger \r State/province/area: tanger",
    marque: "DACIA",
    distance: 259526,
    prix: "354000",
  },
  {
    id: "5",
    img: house3,
    proprietaire: "YASSINE BOUFNICHEL",
    address:
      "Street:  Port de tanger, 90000 \r City:   tanger \r State/province/area: tanger",
    marque: "DACIA",
    distance: 259526,
    prix: "354000",
  },
  {
    id: "6",
    img: house3,
    proprietaire: "YASSINE BOUFNICHEL",
    address:
      "Street:  Port de tanger, 90000 \r City:   tanger \r State/province/area: tanger",
    marque: "DACIA",
    distance: 259526,
    prix: "354000",
  },
  {
    id: "7",
    img: house3,
    proprietaire: "YASSINE BOUFNICHEL",
    address:
      "Street:  Port de tanger, 90000 \r City:   tanger \r State/province/area: tanger",
    marque: "DACIA",
    distance: 259526,
    prix: "354000",
  },
  {
    id: "8",
    img: house3,
    proprietaire: "YASSINE BOUFNICHEL",
    address:
      "Street:  Port de tanger, 90000 \r City:   tanger \r State/province/area: tanger",
    marque: "DACIA",
    distance: 259526,
    prix: "354000",
  },
];
const Properties = () => {
  const carouselRef = useRef(null);
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
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
      sx={{
        mt: 5,
        backgroundImage: `url(${GiftBackground})`,
        backgroundSize: "cover",
        py: 10,
        padding: "30px",
      }}
    >
      <Container
        style={{
          margin: "50px",
          padding: "50px",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#4f8030",
            margin: "10px auto",
          }}
        ></div>

        <Typography
          variant="h3"
          sx={{
            fontSize: "80px",
            fontWeight: "bold",
            color: "#0000000",
            textAlign: "center",
          }}
          style={{ fontWeight: "bold" }}
        >
          OFFRES
        </Typography>
        <div
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#4f8030",
            margin: "10px auto",
          }}
        ></div>

        <PropertiesBox style={{ backgroundColor: "#f5c9cd", padding: "30px" }}>
          {
            <Carousel
              ref={carouselRef}
              enableAutoPlay
              showArrows={false}
              outerSpacing={30}
              autoPlaySpeed={1000}
              itemsToShow={3}
              onNextEnd={({ index }) => {
                clearTimeout(3000);
                if (index + 1 === 6) {
                  if (carouselRef?.current?.goTo) {
                    setTimeout(() => {
                      if (carouselRef?.current?.goTo) {
                        carouselRef.current.goTo(0);
                      }
                    }, 3000);
                  }
                }
              }}
            >
              {properties.map((property) => (
                <House
                  key={property.id}
                  img={property.img}
                  proprietaire={property.proprietaire}
                  address={property.address}
                  marque={property.marque}
                  distance={property.distance}
                  prix={property.prix}
                />
              ))}
            </Carousel>
          }
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Properties;

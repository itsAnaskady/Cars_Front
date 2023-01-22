import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";

import buyIcon from "./image/slider-1.jpg";
import sellIcon from "@mui/icons-material/ArrowRightAlt";
import rentIcon from "@mui/icons-material/ArrowRightAlt";
import VerifiedIcon from "@mui/icons-material/Verified";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { fontSize } from "@mui/system";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "90%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    maxWidth: 300,
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fcf0cc",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#4f8030",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "60px", fontWeight: "bold", color: "#0000000" }}
      >
        Services
      </Typography>
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#4f8030",
          margin: "0 auto",
        }}
      ></div>

      <GuidesBox>
        <GuideBox>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 1,
              color: "#4f8030",
            }}
          >
            <VerifiedIcon sx={{ fontSize: "40px" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "600",
              fontSize: "15px",
              fontFamily: "poppins",
              color: "#4f8030",
              padding: 2,
              textAlign: "center",
            }}
          >
            Rendre la voiture dans un autre point de location de l’agence
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "300",
              fontSize: "15px",
              fontFamily: "poppins",
              color: "#3B3c45",
              padding: 2,
              textAlign: "center",
            }}
          >
            Lorsque vous faites un long voyage, et vous vous éloignez assez du
            point de location il est préférable de rendre la voiture louée dans
            un service de l’agence au point d’arriver. Une agence de location de
            voiture peut vous proposer une telle option. Cette option de
            location peut être facturée ou non.
          </Typography>
        </GuideBox>
        <GuideBox>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 1,
              color: "#4f8030",
            }}
          >
            <GpsFixedIcon sx={{ fontSize: "40px" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "600",
              fontSize: "15px",
              fontFamily: "poppins",
              color: "#4f8030",
              padding: 2,
              textAlign: "center",
            }}
          >
            La mise à disposition d’un GPS
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "300",
              fontSize: "15px",
              fontFamily: "poppins",
              color: "#3B3c45",
              padding: 2,
              textAlign: "center",
            }}
          >
            Si vous êtes nouveaux dans une ville, cette option est probablement
            votre meilleur atout. Il est vrai qu’aujourd’hui, plusieurs
            applications pour smartphone permettent de consulter le GPS
            directement et facilement.
          </Typography>
        </GuideBox>
        <GuideBox>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 1,
              color: "#4f8030",
            }}
          >
            <DirectionsCarFilledIcon sx={{ fontSize: "40px" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "600",
              fontSize: "15px",
              fontFamily: "poppins",
              color: "#4f8030",
              padding: 2,
              textAlign: "center",
            }}
          >
            Les conducteurs supplémentaires
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "300",
              fontSize: "15px",
              fontFamily: "poppins",
              color: "#3B3c45",
              padding: 2,
              textAlign: "center",
            }}
          >
            Il est possible que vous ne désiriez pas conduire la voiture louée,
            ou préfériez avoir un conducteur en cas de problème. La plupart des
            agences de location de véhicule proposent de fournir des chauffeurs
            compétents, moyennant un supplément.
          </Typography>
        </GuideBox>
      </GuidesBox>
    </Box>
  );
};

export default Guide;

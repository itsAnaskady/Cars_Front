import { Box, styled, Typography } from "@mui/material";
import React from "react";
import CarIcon from "@mui/icons-material/DirectionsCarFilled";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Proprietaire from "@mui/icons-material/Person4";
import SpeedIcon from "@mui/icons-material/Speed";
import { Button } from "@material-ui/core";

const House = ({ img, proprietaire, address, marque, distance, prix }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    borderRadius: "20px",
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    <HouseBox>
      <ImgContainer>
        <img
          src={img}
          alt="CarPhoto"
          style={{ maxWidth: "100%", borderRadius: "20px 20px 0px 0px" }}
        />
      </ImgContainer>

      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" style={{ fontWeight: "700" }}>
          <Proprietaire /> {proprietaire}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          <span style={{ fontWeight: "700" }}>Adresse : </span> {address}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <InfoBox>
            <CarIcon />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {marque}
            </Typography>
          </InfoBox>

          <InfoBox>
            <SpeedIcon />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {distance}
            </Typography>
          </InfoBox>

          <InfoBox style={{ color: "#66b54c" }}>
            <MonetizationOnIcon />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {prix}
            </Typography>
          </InfoBox>
        </Box>
      </Box>
    </HouseBox>
  );
};

export default House;

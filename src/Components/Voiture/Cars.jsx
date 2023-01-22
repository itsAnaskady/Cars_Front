import { Box, styled, Typography } from "@mui/material";
import React from "react";
import CarIcon from "@mui/icons-material/DirectionsCarFilled";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Proprietaire from "@mui/icons-material/Person4";
import SpeedIcon from "@mui/icons-material/Speed";
import InventoryIcon from "@mui/icons-material/Inventory";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import image from "../Acceuil/image/slider-2.jpg";

import image5 from "../Acceuil/image/slider-4.jpg";
import image6 from "../Acceuil/image/slider-5.jpg";
import image7 from "../Acceuil/image/slider-1.jpg";

import { Button } from "@material-ui/core";
import axios from "axios";

const Cars = ({
  image2,
  proprietaire,
  annee,
  categorie,
  marque,
  distance,
  prix,
  disponibilité,
  couleur,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [date, setDate] = React.useState("");
  const [facture, setfacture] = React.useState({});
  const [prix2, setprix2] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const HouseBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    Width: "320px",
    backgroundColor: "#fce9bb",
    margin: theme.spacing(2, 2, 2, 2),
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
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    setfacture({
      idVoiture: 1010,
      idLocataire: localStorage.getItem("id"),
      idModePaiement: 1,
      dateRetour: date,
      remarque: "succes",
      mantant: prix * 3,
    });
    try {
      // Make an HTTP request to the API to post the data
      await axios.post(
        "https://localhost:7047/api/Locataire/AjouterReservation",
        facture
      );
      // Re-fetch the data from the API to update the table
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
    console.log(facture);
  }

  return (
    <HouseBox style={{ fontFamily: "poppins", fontWeight: "400" }}>
      <ImgContainer>
        <img src={image2} style={{ width: "340px" }} alt="" />
      </ImgContainer>

      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          <Proprietaire /> {proprietaire}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          <span style={{ fontWeight: "700" }}>Date D'Ajout : </span>
          {annee}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          <span style={{ fontWeight: "700" }}>Categorie : </span>
          {categorie}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            justifyContent: "space-between",
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
              {distance} km
            </Typography>
          </InfoBox>

          <InfoBox>
            <MonetizationOnIcon />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {prix} DH/jour
            </Typography>
          </InfoBox>
          <InfoBox>
            Color
            <Box
              variant="body2"
              sx={{
                mt: 1,
                backgroundColor: couleur,
                borderRadius: "20px",
                height: "20px",
                width: "20px",
              }}
            ></Box>
          </InfoBox>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            alignItems: "center",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          <InfoBox>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {disponibilité ? (
                <span
                  style={{
                    padding: "3px",
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  disponible
                </span>
              ) : (
                <span
                  style={{
                    padding: "3px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  indisponible
                </span>
              )}
            </Typography>
          </InfoBox>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            alignItems: "center",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          {localStorage.getItem("role") === "locataire" && disponibilité ? (
            <Button
              onClick={handleClickOpen}
              style={{
                display: "flex",
                margin: "10px 40%",
                padding: "20px 70px",
                backgroundColor: "#000000",
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Reserver
            </Button>
          ) : null}
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
          MARQUE : {marque}
        </DialogTitle>
        <DialogContent>
          <Card>
            <ImgContainer>
              <ImgContainer>
                <img
                  src={image2}
                  style={{ width: "100%", height: "250px" }}
                  alt=""
                />
              </ImgContainer>
            </ImgContainer>
            <CardContent style={{ display: "flex" }}>
              <CardContent
                style={{
                  borderRight: "1px solid #dfc482",
                  width: "70%",
                }}
              >
                <Typography
                  style={{
                    fontSize: "17px",
                    fontFamily: "poppins",
                  }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  <span style={{ color: "black", fontWeight: "400" }}>
                    Distance:
                  </span>{" "}
                  {distance}KM
                </Typography>
                <Typography
                  style={{
                    fontSize: "17px",
                    fontFamily: "poppins",
                  }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  <span style={{ color: "black", fontWeight: "400" }}>
                    Couleur:
                  </span>{" "}
                  {couleur}
                </Typography>

                <Typography
                  style={{
                    fontSize: "17px",
                    fontFamily: "poppins",
                  }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  <span style={{ color: "black", fontWeight: "400" }}>
                    Propriétaire:
                  </span>{" "}
                  {proprietaire}
                </Typography>
                <Typography
                  style={{
                    fontSize: "17px",
                    fontFamily: "poppins",
                  }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  <span style={{ color: "black", fontWeight: "400" }}>
                    prix:
                  </span>{" "}
                  {prix} DH/jour
                </Typography>
                <label
                  style={{
                    fontSize: "17px",
                    fontFamily: "poppins",
                  }}
                >
                  date retour :
                </label>
                <input
                  type="date"
                  style={{
                    marginLeft: "5px",
                    padding: "3px",
                    fontSize: "17px",
                    fontFamily: "poppins",
                  }}
                  name=""
                  id=""
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setprix2(true);
                    console.log(date);
                  }}
                />

                {prix2 ? (
                  <Typography
                    style={{
                      fontSize: "23px",
                      fontFamily: "poppins",
                      color: "#5ba642",
                      fontWeight: "500",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Prix total: {prix * 3} DH
                  </Typography>
                ) : null}
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Paiment par espece :
                </Typography>
                <Button
                  style={{
                    backgroundColor: "#dfc482",
                    color: "#ffffff",
                    fontFamily: "poppins",
                    fontWeight: "500",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                  onClick={handleSubmit}
                >
                  RESERVER VOTRE VOITURE!!!!
                </Button>
                <Dialog open={open2} onClose={handleClose2}>
                  <DialogContent>
                    <CheckCircleIcon style={{ color: "green" }} /> Reservation
                    Successfull
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose2} color="primary">
                      Fermer
                    </Button>
                  </DialogActions>
                </Dialog>
              </CardContent>
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </HouseBox>
  );
};

export default Cars;

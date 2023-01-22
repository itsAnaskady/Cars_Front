import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useHistory } from "react-router-dom";
// import { isLoggedOut } from '../../Redux/counterSlice '
import Dialog from "@material-ui/core/Dialog";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import TranslateIcon from "@mui/icons-material/Translate";
import locationVoiture from "../../Images/transparentvw.png";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import fr from "../Acceuil/image/FR.png";
import en from "../Acceuil/image/EN.png";
import SignInOutContainer from "../Login/index";
import DrawerComp from "./DrawerComp";
import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import axios from "axios";
const Header = () => {
  const history = useHistory();
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [inn, setInn] = useState(false);
  const [isLocataire, setIsLocataire] = useState(false);
  const [isProprietaire, setIsProprietaire] = useState(false);
  //isAdmin
  const [isAdmin, setIsAdmin] = useState(false);
  const [langue, setLangue] = useState("fr");
  const [ln, setLn] = useState({});
  const [Acceuil, setAcceuil] = useState("");
  const [Voiture, setVoiture] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  //create count to restore from redux
  const handleClose = () => {
    setOpen(false);
  };

  // //methide to destroy token
  const destroyToken = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("adress");
    localStorage.removeItem("phone");
    localStorage.removeItem("email");

    //refrech
    window.location.href = "/";
  };
  //dispatch isLoggedOut action to redux store

  //   dispatch(isLoggedOut())
  // }
  // if (!localStorage.getItem('token')) {
  //   // If the token is not present, redirect the user to the login page
  //   // window.location.href = '/login';
  // }
  useEffect(() => {
    // Make a request to the web API to fetch the menu items
    console.log(langue);
    axios
      .get(
        `https://localhost:7047/api/Phrase/Language_test?languageCode=${langue}`
      )
      .then((response) => {
        // Extract the menu items from the data and store them in a state variable
        console.log(response.data);

        setLn(response.data);
        const value = response.data.map((item) => {
          if (item.key === "Acceuil") {
            return item.value;
          }
        });
        setAcceuil(value);
        const value2 = response.data.map((item) => {
          if (item.key === "Voiture") {
            return item.value;
          }
        });
        setVoiture(value2);
      });
  });
  const role = localStorage.getItem("role");
  //test token with useEffect
  useEffect(() => {
    //console.log("count :"+ count);
    if (role) {
      setInn(true);
      if (role === "locataire") {
        setIsLocataire(true);
      } else if (role === "proprietaire") {
        setIsProprietaire(true);
      }
    } else {
      setInn(false);
    }
  }, [role]);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#ffffff" }}>
        <Toolbar>
          <img
            onClick={() => history.push("/")}
            src={locationVoiture}
            style={{ width: "150px", height: "50px", cursor: "pointer" }}
          />
          {isMatch ? (
            <>
              <Typography
                sx={{ fontSize: "2rem", paddingLeft: "10%" }}
              ></Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto", color: "black" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label={Acceuil} />
                <Tab
                  label={Voiture}
                  onClick={() => history.push("/Voitures")}
                />
                {isLocataire && (
                  <Tab
                    label="Locataire"
                    onClick={() => history.push("/Locataire")}
                  />
                )}
                {isProprietaire && (
                  <Tab
                    label="Proprietaire"
                    onClick={() => history.push("/Proprietaire")}
                  />
                )}
              </Tabs>
              {
                //if user is not logged in
                !inn ? (
                  <div>
                    <Button
                      style={{ backgroundColor: "#000" }}
                      sx={{ marginLeft: "auto" }}
                      variant="contained"
                      onClick={handleClickOpen}
                    >
                      connexion
                    </Button>
                    <Button
                      style={{ backgroundColor: "#000" }}
                      sx={{ marginLeft: "10px" }}
                      variant="contained"
                      onClick={handleClickOpen}
                    >
                      inscrire
                    </Button>
                  </div>
                ) : (
                  <Button
                    style={{ backgroundColor: "#000" }}
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    onClick={destroyToken}
                  >
                    Logout
                  </Button>
                )
              }

              <FormControl
                style={{ width: "150px", margin: "0px 10px 10px 10px" }}
              >
                <InputLabel id="demo-simple-select-label">Langue</InputLabel>
                <Select
                  value={langue}
                  onChange={(e) => {
                    setLangue(e.target.value);
                  }}
                  defaultValue={"fr"}
                >
                  <MenuItem style={{ display: "flex" }} value={"fr"}>
                    <img
                      src={fr}
                      style={{
                        width: "15px",
                        height: "15px",
                        margin: "0px 5px",
                      }}
                    ></img>
                    Francais
                  </MenuItem>
                  <MenuItem value={"en"}>
                    <img
                      src={en}
                      style={{
                        width: "15px",
                        height: "20px",
                        margin: " 0px 5px",
                      }}
                    ></img>
                    Anglais
                  </MenuItem>
                </Select>
              </FormControl>
              <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                  <SignInOutContainer />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;

import React, { useState } from "react";
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
import Dialog from "@material-ui/core/Dialog";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import locationVoiture from "../../Images/transparentvw.png";
import DialogActions from "@material-ui/core/DialogActions";

import DialogContent from "@material-ui/core/DialogContent";
import SignInOutContainer from "../Login/index";
import DrawerComp from "./DrawerComp";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#ffffff" }}>
        <Toolbar>
          <img
            src={locationVoiture}
            style={{ width: "150px", height: "50px" }}
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
                <Tab label="Acceuil" />
                <Tab label="Voitures" />
                <Tab label="Locataire" />
                <Tab label="Proprietd" />
              </Tabs>
              <Button
                style={{ backgroundColor: "#000" }}
                sx={{ marginLeft: "auto" }}
                variant="contained"
                onClick={handleClickOpen}
              >
                Log
              </Button>
              <Button
                style={{ backgroundColor: "#000" }}
                sx={{ marginLeft: "10px" }}
                variant="contained"
                onClick={console.log(true)}
              >
                SignUp
              </Button>
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

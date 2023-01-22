import React, { Fragment } from "react";
import { useStyles } from "../Header/HeaderStyle";
import SideNavLocataire from "./SideNavProprietaire";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Proprietaire from "./Proprietaire";
import Historique from "./Historique";
import P_Voiture from "./P_Voiture";
import Reclamation from "../Locataire/Reclamation";

export default function Proprietaire1() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <Fragment>
      <SideNavLocataire
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path="/Proprietaire/" render={() => <Proprietaire />} />
          <Route
            exact
            path="/Proprietaire/proprietaire"
            render={() => <Proprietaire />}
          />
          <Route
            exact
            path="/Proprietaire/Historique"
            render={() => <Historique />}
          />
          <Route
            exact
            path="/Proprietaire/Voitures"
            render={() => <P_Voiture />}
          />
          <Route
            exact
            path="/Proprietaire/Reclamations"
            render={() => <Reclamation />}
          />
        </Switch>
      </Box>
    </Fragment>
  );
}

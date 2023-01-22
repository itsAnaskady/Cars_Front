import React, { Fragment } from "react";
import { useStyles } from "../Header/HeaderStyle";
import SideNavLocataire from "./SideNavLocataire";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Locataire from "./Locataire";
import Historique from "./Historique";
import Reclamation from "./Reclamation";

export default function Dashboard1() {
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
          <Route exact path="/Locataire/" render={() => <Locataire />} />
          <Route
            exact
            path="/Locataire/locataire"
            render={() => <Locataire />}
          />
          <Route
            exact
            path="/Locataire/Historique"
            render={() => <Historique />}
          />
          <Route
            exact
            path="/Locataire/Reclamations"
            render={() => <Reclamation />}
          />
        </Switch>
      </Box>
    </Fragment>
  );
}

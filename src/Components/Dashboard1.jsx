import React, { Fragment } from "react";
import { useState } from "react";
import { useStyles } from "./Header/HeaderStyle";
import NavbarComponent from "./Header/NavbarComponent";
import Sidenav from "./Header/Sidenav";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Locataire from "./BodyComponent/Dashboard/Locataire";
import Dashboard from "./BodyComponent/Dashboard/Dashboard";
import ListeNoirs from "./BodyComponent/ListeNoirs";
import ListeFavoris from "./BodyComponent/ListeFavoris";
import Marques from "./BodyComponent/Marques";
import Offres from "./BodyComponent/Offres";
import Categories from "./BodyComponent/Categories";
import Reservations from "./BodyComponent/Reservations";
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
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path="/Dashboard/" render={() => <Dashboard />} />
          <Route
            exact
            path="/Dashboard/dashboard"
            render={() => <Dashboard />}
          />
          <Route
            exact
            path="/Dashboard/utilisateurs"
            render={() => <Locataire />}
          />
          <Route
            exact
            path="/Dashboard/ListeNoirs"
            render={() => <ListeNoirs />}
          />
          <Route
            exact
            path="/Dashboard/ListeFavoris"
            render={() => <ListeFavoris />}
          />
          <Route exact path="/Dashboard/Marques" render={() => <Marques />} />
          <Route exact path="/Dashboard/Offres" render={() => <Offres />} />
          <Route
            exact
            path="/Dashboard/Categories"
            render={() => <Categories />}
          />
          <Route
            exact
            path="/Dashboard/Reservations"
            render={() => <Reservations />}
          />
        </Switch>
      </Box>
    </Fragment>
  );
}

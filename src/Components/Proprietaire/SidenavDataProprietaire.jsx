import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "../Header/HeaderStyle";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import DashboardIcon from "@material-ui/icons/Dashboard";
import RedeemIcon from "@material-ui/icons/Redeem";
import FavoriteIcon from "@material-ui/icons/Favorite";

import BookIcon from "@material-ui/icons/Book";
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
export default function SidenavDataProprietaire({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    {
      label: "Infos",
      link: "/Proprietaire/",
      icon: <PersonIcon />,
    },

    {
      label: "Historique",
      link: "/Proprietaire/Historique",
      icon: <BookIcon />,
    },
    {
      label: "Gestion Voitures",
      link: "/Proprietaire/Voitures",
      icon: <DirectionsCarIcon />,
    },
  ];

  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size="small"
          onClick={() => handleDrawerClose()}
          className={classes.navButton}
        >
          <ListItem
            exact
            key={i}
            component={NavLink}
            to={item.link}
            className={classes.navlink}
            activeClassName={classes.selectedNav}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}

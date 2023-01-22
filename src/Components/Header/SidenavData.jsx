import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
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
export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    {
      label: "Dashboard",
      link: "/Dashboard/Dashboard",
      icon: <DashboardIcon />,
    },

    {
      label: "Utilisateurs",
      link: "/Dashboard/Utilisateurs",
      icon: <PersonIcon></PersonIcon>,
    },
    {
      label: "Liste Noire",
      link: "/Dashboard/ListeNoirs",
      icon: <SentimentVeryDissatisfiedIcon />,
    },
    {
      label: "Liste Favoris",
      link: "/Dashboard/ListeFavoris",
      icon: <FavoriteIcon />,
    },
    {
      label: "Offres",
      link: "/Dashboard/Offres",
      icon: <RedeemIcon />,
    },
    {
      label: "Marques",
      link: "/Dashboard/Marques",
      icon: <DirectionsCarIcon />,
    },
    {
      label: "Categories",
      link: "/Dashboard/Categories",
      icon: <ViewAgendaIcon />,
    },
    {
      label: "Reserrvations",
      link: "/Dashboard/Reservations",
      icon: <BookIcon />,
    },
    {
      label: "Reclamations",
      link: "/Dashboard/Marques",
      icon: <DirectionsCarIcon />,
    },
    {
      label: "Voitures",
      link: "/Dashboard/Categories",
      icon: <ViewAgendaIcon />,
    },
    {
      label: "deconnecter",
      link: "/Dashboard/logout",
      icon: <ExitToAppIcon />,
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

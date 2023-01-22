import { makeStyles } from "@material-ui/core";
import { blue, blueGrey } from "@material-ui/core/colors";
import { BorderColor } from "@material-ui/icons";

export const useStyles = makeStyles((theme) => {
  console.log(theme.breakpoints);
  return {
    //common
    navImg: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      color: "White",
      backgroundColor: "#dfc482",
    },
    logoBrand: {
      margin: "8px",
    },

    //header
    wrapper: {
      width: "100%",
      minHeight: "100vh",
      height: "auto",
      background: "#f7edd5",
      boxSizing: "border-box",
      padding: "70px 24px 24px 270px",
      [theme.breakpoints.down("sm")]: {
        padding: "70px 24px 24px 24px",
      },
    },
    logo: {
      lineHeight: "47px",
      color: "White",
    },

    // navbar styles

    toolbar: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      position: "relative",
      backgroundColor: "#ffffff",
    },
    brandBox: {
      display: "flex",
      flexFlow: "row wrap",
    },
    dropdownlist: {
      maxWidth: "250px",
    },
    listItem: {
      textTransform: "capitalize",
    },

    //sidenav
    drawerPaper: {
      width: "250px",
      marginTop: "64px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
      },
    },

    navlink: {
      color: blueGrey[700],
      transition: "0.8s",
      "&:hover  div": {
        color: "#ad8d3e",
      },
    },
    navButton: { width: "100%", textTransform: "capitalize" },
    selectedNav: {
      color: `#ad8d3e !important`,
      fontWeight: " bolder",
      " & div": {
        color: `#ad8d3e !important`,
      },
    },
  };
});

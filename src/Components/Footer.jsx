import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { red } from "@material-ui/core/colors";
import { useStyles } from "./BodyComponent/BodyStyles";

export default function Footer() {
  const classes = useStyles();
  const date = new Date();

  return (
    <Box className={classes.footer}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" color="textSecondary" align="center">
            Created by : IDRISS YASSINE ANASS MOUHSIN
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" color="textSecondary" align="center">
            All right reserved Location Voiture {date.getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

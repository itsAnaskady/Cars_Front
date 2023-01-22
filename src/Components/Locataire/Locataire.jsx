import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import image from "../../Images/handa.jpeg";
import UserCard from "./UserCard";
const useStyles = makeStyles({});
export default function Locataire() {
  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          width: "50%",
        }}
        className={classes.root}
      >
        <CardContent>
          <div
            style={{
              fontSize: "20px",
              fontFamily: "poppins",

              margin: " 0px",
              color: "#dfc482",
            }}
          >
            INFORMATION LOCATAIRE{" "}
          </div>
          <Avatar
            alt="Remy Sharp"
            src={image}
            style={{ width: 200, height: 200, margin: "10px 40%" }}
          />
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "poppins",
              margin: "10px 0px",
            }}
            variant="h5"
            component="h2"
          >
            {"IDRISS"} {"BOUGARRANI"}
          </Typography>
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "poppins",
            }}
            className={classes.pos}
            color="textSecondary"
          >
            Adresse:{" "}
            {
              "Street:  lot Anfa, résid. Yassmine entrée 4, ElAlia \r City:Elalia \r State/province/area:Mohammédia \r Country  Morocco"
            }
          </Typography>
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "poppins",
            }}
            className={classes.pos}
            color="textSecondary"
          >
            Téléphone: {"+2124598567566"}
          </Typography>
          <Typography
            style={{
              fontSize: "20px",
            }}
            className={classes.pos}
            color="textSecondary"
          >
            Email: {"Bougarranidriss@gmail.com"}
          </Typography>
        </CardContent>
      </Card>
      <UserCard />
    </div>
  );
}

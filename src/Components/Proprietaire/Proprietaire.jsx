import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import image from "../../Images/handa.jpeg";
import UserCard from "./UserCard";
import Authenticated from "../Login/Authenticated";
const useStyles = makeStyles({});
export default function Proprietaire() {
  const classes = useStyles();
  return (
    <Authenticated>
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
              INFORMATION Proprietaire{" "}
            </div>
            <Avatar
              alt="Remy Sharp"
              src={image}
              style={{ width: 200, height: 200, margin: "10px 30%" }}
            />
            <Typography
              style={{
                fontSize: "30px",
                fontFamily: "poppins",
                margin: "10px 0px",
              }}
              variant="h5"
              component="h2"
            >
              {localStorage.getItem("name")}
            </Typography>
            <Typography
              style={{
                fontSize: "20px",
                fontFamily: "poppins",
              }}
              className={classes.pos}
              color="textSecondary"
            >
              <span style={{ fontWeight: "700", color: "#000000" }}>
                Adresse:
              </span>{" "}
              {localStorage.getItem("address")}
            </Typography>
            <Typography
              style={{
                fontSize: "20px",
                fontFamily: "poppins",
              }}
              className={classes.pos}
              color="textSecondary"
            >
              <span style={{ fontWeight: "700", color: "#000000" }}>
                Telephone:
              </span>{" "}
              {localStorage.getItem("phone")}
            </Typography>
            <Typography
              style={{
                fontSize: "20px",
              }}
              className={classes.pos}
              color="textSecondary"
            >
              <span style={{ fontWeight: "700", color: "#000000" }}>
                Email:
              </span>{" "}
              {localStorage.getItem("email")}
            </Typography>
            <Typography
              style={{
                fontSize: "20px",
              }}
              className={classes.pos}
              color="textSecondary"
            >
              <span style={{ fontWeight: "700", color: "#000000" }}>Type:</span>{" "}
              {"agence"}
            </Typography>
          </CardContent>
        </Card>
        <UserCard />
      </div>
    </Authenticated>
  );
}

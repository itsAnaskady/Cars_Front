import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginLeft: "20px",
  },
  bullet: {
    display: "block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
  },
});

export default function Reclamation() {
  const classes = useStyles();

  const [nomm, setNom] = useState("");
  const [adresss, setAdress] = useState("");
  const [tele, setTele] = useState("");
  const [emaill, setEmail] = useState("");
  const [defaultNom, setDefaultName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      id: localStorage.getItem("id"),
      name: nomm,
      adress: adresss,
      phoneNumber: tele,
      email: emaill,
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className={classes.root}>
        <CardContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "40px",
              fontFamily: "poppins",

              margin: " 20px",
              color: "#dfc482",
            }}
          >
            RECLAMATION{" "}
          </div>

          <TextField
            label="Sujet"
            style={{ width: "400px" }}
            defaultValue={localStorage.getItem("name")}
            value={nomm}
            onChange={(event) => setNom(event.target.value)}
          />

          <TextField
            label="Reclamation"
            value={emaill}
            style={{ width: "80%", marginTop: "20px" }}
            defaultValue={localStorage.getItem("email")}
            onChange={(event) => setEmail(event.target.value)}
            multiline
            variant="filled"
          />
          <Button
            type="submit"
            variant="contained"
            //onClick={() => { window.location.reload();}}
            style={{
              backgroundColor: "#dfc482",
              color: "white",
              margin: "30px",
              cursor: "pointer",
            }}
          >
            Update
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}

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

export default function UserCard(props) {
  const classes = useStyles();
  const { avatarUrl } = props;
  const [nomm, setNom] = useState(props.nom);
  const [adresss, setAdress] = useState(props.adress);
  const [tele, setTele] = useState(props.tele);
  const [emaill, setEmail] = useState(props.email);
  const [defaultNom, setDefaultName] = useState(props.nom);
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      id: localStorage.getItem("id"),
      name: nomm,
      adress: adresss,
      phoneNumber: tele,
      email: emaill,
    };
    updateUser(userData);
  };

  async function updateUser(userData) {
    //console id
    console.log(userData);
    try {
      localStorage.setItem("name", userData.name);
      localStorage.setItem("adress", userData.adress);
      localStorage.setItem("phone", userData.phoneNumber);
      localStorage.setItem("email", userData.email);
      const response = await fetch(
        `https://localhost:7047/api/Admin/UpdateUser/${userData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
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
              fontSize: "20px",
              fontFamily: "poppins",

              margin: " 20px",
              color: "#dfc482",
            }}
          >
            Modifier les informations{" "}
          </div>
          <Avatar src={avatarUrl} className={classes.avatar} />

          <TextField
            label="Nom"
            style={{ width: "400px" }}
            defaultValue={localStorage.getItem("name")}
            value={nomm}
            onChange={(event) => setNom(event.target.value)}
          />
          <TextField
            label="Adresse"
            value={adresss}
            defaultValue={localStorage.getItem("adress")}
            style={{ width: "400px" }}
            onChange={(event) => setAdress(event.target.value)}
          />
          <TextField
            label="Téléphone"
            value={tele}
            defaultValue={localStorage.getItem("phone")}
            style={{ width: "400px" }}
            onChange={(event) => setTele(event.target.value)}
          />
          <TextField
            label="Email"
            value={emaill}
            style={{ width: "400px" }}
            defaultValue={localStorage.getItem("email")}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={updateUser}
            //onClick={() => { window.location.reload();}}
            style={{
              backgroundColor: "#1d4701",
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

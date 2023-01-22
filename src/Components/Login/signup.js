import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LocationVoiture from "../../Images/transparentvw.png";

const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const btnStyle = { backgroundColor: "#dfc482" };
  const marginTop = { marginTop: 5 };
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the password and confirm password fields match
    // if (password !== confirmPassword) {
    //   // If they don't match, show an error message
    //   console.error('The password and confirm password fields do not match');
    //   return;
    // }

    // Create the data object to be sent to the API
    const data = {
      name,
      firstName,
      email,
      telephone,
      adress,
      password,
      confirmPassword,
      role,
    };

    // Send a POST request to the API with the data object as the request body
    axios
      .post("https://localhost:7047/api/Auth/Register", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Grid>
      <Paper style={{ width: 350, padding: 20 }}>
        <Grid align="center">
          <img
            src={LocationVoiture}
            height={70}
            width={160}
            style={{ marginTop: 10 }}
          />
          <h2 style={{ color: "#dfc482" }}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="name"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            fullWidth
            label="firstName"
            placeholder="Enter your username"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            fullWidth
            label="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            fullWidth
            label="telephone"
            placeholder="Enter your phone number"
            name="telephone"
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
          />
          <TextField
            fullWidth
            label="adress"
            placeholder="Enter your address"
            name="adress"
            value={adress}
            onChange={(event) => setAdress(event.target.value)}
          />
          <TextField
            fullWidth
            label="password"
            placeholder="Enter your password"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextField
            fullWidth
            label="confirmPassword"
            placeholder="Enter your password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {/* <TextField fullWidth label="role" placeholder="Enter your password" name="role" type="password" value={role} onChange={event => setRole(event.target.value)} /> */}
          <FormControl style={{ width: "220px" }}>
            <InputLabel id="brand-label">Role</InputLabel>
            <Select
              labelId="Km"
              id="Km"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <MenuItem value="Locataire">Locataire</MenuItem>
              <MenuItem value="Proprietaire">Proprietaire</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            name="Submit"
            value="Submit"
            style={{ backgroundColor: "#dfc482", marginTop: 10 }}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;

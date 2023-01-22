import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
// import { useDispatch } from 'react-redux'
// import { isLoggedIn, isLoggedOut } from '../../Redux/counterSlice '
import FormControlLabel from "@material-ui/core/FormControlLabel";
import LocationVoiture from "../../Images/transparentvw.png";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";

const Login = () => {
  // const dispatch = useDispatch()
  // const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0", backgroundColor: "#dfc482" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /////////////////////////////////

  //////////////////////////////////
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create the data object to be sent to the API
    const data = {
      email,
      password,
    };
    // Send a POST request to the API with the data object as the request body
    axios
      .post("https://localhost:7047/api/Auth/Login", data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("role", response.data.role);
        if (response.data.role == "locataire")
          localStorage.setItem("id", response.data.idUser);
        window.location.href = "/locataire";
        //proprietaire
        if (response.data.role == "proprietaire")
          localStorage.setItem("id", response.data.id);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("phone", response.data.phoneNumber);
        localStorage.setItem("address", response.data.adress);
        window.location.href = "/proprietaire";

        // // Get the token from the response data
        // const token = response.data.token;
        // // Store the token in the browser's local storage
        // //localStorage.setItem('token', token);
        // // Set the token in the Authorization header for all subsequent requests
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // // Check for the presence of a valid token
        const storedToken = localStorage.getItem("role");
        // //if storedToken and response.data.roles[0] == "Admin" then redirect to admin dashboard
        if (response.data.role == "admin") {
          window.location.href = "/Dashboard";
          localStorage.setItem("id", response.data.id);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const token = localStorage.getItem("token");
  //methide to destroy token
  // const destroyToken = () => {
  //   localStorage.removeItem('token');
  //   //dispatch isLoggedOut action to redux store
  //   dispatch(isLoggedOut())
  // }

  return (
    <Paper style={{ width: 350, padding: 20 }}>
      <Grid align="center">
        <img
          src={LocationVoiture}
          height={70}
          width={160}
          style={{ marginTop: 10 }}
        />
        <h2 style={{ color: "#dfc482" }}>Login</h2>
      </Grid>
      <form onSubmit={handleSubmit}>
        <TextField
          color="#dfc482"
          label="email"
          placeholder="Enter email"
          value={email}
          fullWidth
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          color="#dfc482"
          label="Password"
          placeholder="Enter password"
          type="password"
          value={password}
          fullWidth
          onChange={(event) => setPassword(event.target.value)}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="#dfc482" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          onClick={() => {}}
          style={btnstyle}
          fullWidth
        >
          Login
        </Button>
      </form>
      <Typography>
        {" "}
        Do you have an account ?
        <Link href="#" style={{ color: "#dfc482", marginTop: 10 }}>
          Sign Up
        </Link>
      </Typography>
    </Paper>
  );
};

export default Login;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

function CarRegistrationForm() {
  const classes = useStyles();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.brand) {
      newErrors.brand = "Brand is required";
    }
    if (!formData.categorie) {
      newErrors.categorie = "Category is required";
    }
    if (!formData.kilometrage) {
      newErrors.kilometrage = "Kilometrage is required";
    }
    if (!formData.price) {
      newErrors.price = "Price is required";
    }
    if (!formData.color) {
      newErrors.color = "Color is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log(formData);
      // submit the form data to the server or do something else with it
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%x",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{
          width: "36%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          marginLeft: "30%",
          marginRight: "30%",
          marginBottom: "30px",
        }}
      >
        <Grid item xs={12}>
          <TextField
            name="brand"
            label="Brand"
            fullWidth
            value={formData.brand || ""}
            onChange={handleChange}
            error={Boolean(errors.brand)}
            helperText={errors.brand}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="categorie-select-label">Category</InputLabel>
            <Select
              labelId="categorie  -select-label"
              name="categorie"
              value={formData.categorie || ""}
              onChange={handleChange}
              error={Boolean(errors.categorie)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="sedan">Sedan</MenuItem>
              <MenuItem value="suv">SUV</MenuItem>
              <MenuItem value="hatchback">Hatchback</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="kilometrage"
            label="Kilometrage"
            fullWidth
            value={formData.kilometrage || ""}
            onChange={handleChange}
            error={Boolean(errors.kilometrage)}
            helperText={errors.kilometrage}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="price"
            label="Price"
            fullWidth
            value={formData.price || ""}
            onChange={handleChange}
            error={Boolean(errors.price)}
            helperText={errors.price}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="color"
            label="Color"
            fullWidth
            value={formData.color || ""}
            onChange={handleChange}
            error={Boolean(errors.color)}
            helperText={errors.color}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            className={classes.submitButton}
            style={{
              backgroundColor: "#dfc832",
              width: "100px",
              marginLeft: "36%",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default CarRegistrationForm;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const useStyles = makeStyles((theme) => ({
  toggleButtonGroup: {
    borderColor: "black",
  },
  toggleButton: {
    color: "black",
    "&$selected": {
      color: "black",
      backgroundColor: "transparent",
    },
  },
  selected: {},
}));

const LanguageSwitch = () => {
  const [language, setLanguage] = useState("english");
  const classes = useStyles();

  const handleLanguageChange = (event, newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <ToggleButtonGroup
      value={language}
      exclusive
      onChange={handleLanguageChange}
      aria-label="language-switch"
      classes={{
        root: classes.toggleButtonGroup,
        selected: classes.selected,
      }}
    >
      <ToggleButton
        value="english"
        aria-label="english"
        classes={{
          root: classes.toggleButton,
          selected: classes.selected,
        }}
      >
        English
      </ToggleButton>
      <ToggleButton
        value="french"
        aria-label="french"
        classes={{
          root: classes.toggleButton,
          selected: classes.selected,
        }}
      >
        French
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LanguageSwitch;

import { Grid,TextField } from "@mui/material";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  TextFieldLabel: {
    width: "600px",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
  },
}));

const handleSumit = (e) => {
  e.preventDefault();
};

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent={"center"} p={1}>
      <form onSubmit={handleSumit}>
        <TextField
          className={classes.TextFieldLabel}
          label="Search holiday i.e Chirstmas"
          id="fullWidth"
          size="medium"
        />
      </form>
    </Grid>
  );
};

export default SearchBar;

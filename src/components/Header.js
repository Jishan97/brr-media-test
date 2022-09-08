import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardLayout from "./shared/CardLayout";

const useStyles = makeStyles((theme) => ({
  TextFieldLabel: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
}));
const Header = () => {
  const classes = useStyles();

  return (
    <Grid  container justifyContent={"center"} p={2} >
      <Typography
        sx={{ typography: { sm: "h6", xs: "h6", lg: "h4" } }}
        variant="h4"
      >
        UK PUBLIC HOLIDAYS 2020{" "}
      </Typography>

    {/* <CardLayout>
        <p>Upcoming Holiday</p>
      </CardLayout> */}



    </Grid>
  );
};

export default Header;

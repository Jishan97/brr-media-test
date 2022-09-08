import { Grid, Typography, Chip, Stack, ButtonGroup, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomButton from './common/CustomButton'

const useStyles = makeStyles((theme) => ({
  TextFieldLabel: {
    backgroundColor: "red",
    fontSize: "30px",
    margin: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "red",
      color: "warning"
    }
  }
}));

const handleChipClick = ()=>{

}
const FilterOption = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent={"center"} p={1}>
      {/* <Grid
        spacing={1}
        direction={{ xs: "column", sm: "row" }}
        // spacing={{ xs: 2, sm: 2, md: 2 }}
      > */}
      {/* <ButtonGroup color="secondary" aria-label="medium secondary button group"> */}
      <CustomButton variant="contained" disableRipple>
          All
        </CustomButton>
        {[
          "January",
          "Febuary",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ].map((each) => (
          // <Chip  onClick={handleChipClick} variant="outlined" className={classes.TextFieldLabel} label={each}/>
          // <Button key="two">{each}</Button>
          <CustomButton key={each} variant="contained" disableRipple>
          {each}
        </CustomButton>

        ))}
      {/* </ButtonGroup> */}
      {/* </Grid> */}
    </Grid>
  );
};

export default FilterOption;

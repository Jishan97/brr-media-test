import { Grid } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import HolidayCards from "../components/HolidayCards";
import SearchBar from "../components/SearchBar";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import FilterOption from "../components/FilterOption";

const Home = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Grid container direction="column">

      
      <Header />
      <SearchBar />
      
      <FilterOption />
      <HolidayCards />
    </Grid>
  );
};

export default Home;

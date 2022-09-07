import { Container, Grid } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import HolidayCards from "../components/HolidayCards";
import SearchBar from "../components/SearchBar";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const Home = () => {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
  return (
    
    <Grid   theme={theme} container spacing={0} direction="column" alignContent="center">
      <Header />
      <SearchBar />
      <HolidayCards />
    </Grid>
  );
};

export default Home;

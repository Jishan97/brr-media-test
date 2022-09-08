import React from "react";
import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Stack, Typography } from "@mui/material";
import CardLayout from "./common/CardLayout";
import HolidayContext from "../context/HolidayContext";
import { useEffect } from "react";
import { getDMY } from "../utils/getDayMonthYear";

const HolidayCards = () => {
  const holidayContext = useContext(HolidayContext);
  const { getData, data } = holidayContext;

  useEffect(() => {
    getData();

    data.map((eachData) => {
      console.log(getDMY(eachData.date));
    });
  }, []);

  return (
    <Grid container justifyContent={"center"}>
      {
      
      [
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
        "December",
      ].map((month) => (
        <CardLayout key={month} yearName={month}>
          <Stack spacing={0}>
          
            <Typography variant={"h8"} gutterBottom>
              New Year's Day - 1st JANUARY
            </Typography>
          
          </Stack>
        </CardLayout>
      ))}
    </Grid>
  );
};

export default HolidayCards;

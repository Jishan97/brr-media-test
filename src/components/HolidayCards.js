import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

const useStyles = makeStyles({

    card: {
        maxWidth: 300,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
      },
      media: {
        paddingTop: "56.25%"
      },
      content: {
        textAlign: "center",
        padding: '10px'
      },
      divider: {
        margin: '10px'
      },
      heading: {
        fontWeight: "bold",
        color: "pink"
      },
      subheading: {
        lineHeight: 1.8
      },
      avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
        //   marginLeft: -muiBaseTheme.spacing.unit
        }
      }
  });
  
const HolidayCards = () => {
    const classes = useStyles();

  return (
        <Grid container justifyItems={'center'} spacing={2}>

        {
            
            [1,2,3,4,5,6,7,8,9].map((each)=>(
            <Card className={classes.card}>
            <CardHeader
              title={
                  <Typography style={{ color: "white" }} variant={"h4"}>
                  JANUARY
                </Typography>
              }
              subheader="Holidays"
              style={{ background: "#9b59b6" }}
              />
           
            <CardContent className={classes.content}>
              <Box
                sx={{
                    p: 2,
                    bgcolor: "background.default",
                    display: "grid",
                    gridTemplateColumns: { md: "1fr 1fr" },
                    gap: 2
                }}
                >
               
              </Box>
           
              <Typography variant={"h8"} gutterBottom>
                New Year's Day - 1st JANUARY
              </Typography>
           
              <Typography variant={"h8"} gutterBottom>
                Fixed - No
              </Typography>
           
              <Typography variant={"h8"} gutterBottom>
                Global - Yes
              </Typography>
           
              <Typography variant={"caption"}>
                We are going to learn different kinds of species in nature that live
                together to form amazing environment.
              </Typography>
              <Divider className={classes.divider} light />
            </CardContent>
           </Card>
          ))
          
          
          
        }

        
        </Grid>

  );
};

export default HolidayCards;

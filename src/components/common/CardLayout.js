import { Card, CardContent, CardHeader, Divider, Grid, Stack, Typography } from '@mui/material';
import React, { Children } from 'react';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      elevation: "2",
    },
    card: {
      width: "350px",
      padding: theme.padding * 2,
      margin: "0.5rem",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      },
      [theme.breakpoints.down("sm")]: {
        color: "red",
        // width: "200px"
      },
    },
    media: {
      paddingTop: "56.25%",
    },
    content: {
      textAlign: "center",
      padding: "10px",
    },
    divider: {
      margin: "10px",
    },
    heading: {
      fontWeight: "bold",
      color: "pink",
    },
    subheading: {
      lineHeight: 1.8,
    },
    avatar: {
      display: "inline-block",
      border: "2px solid white",
      "&:not(:first-of-type)": {
        //   marginLeft: -muiBaseTheme.spacing.unit
      },
    },
  }));

function GridItem({ classes }) {
    return (
      <Stack spacing={0}>
        <Typography variant={"h8"} gutterBottom>
          New Year's Day - 1st JANUARY
        </Typography>
        <Typography variant={"h8"} gutterBottom>
          New Year's Day - 1st JANUARY
        </Typography>
      </Stack>
    );
  }


const CardLayout = (props)=>{
    const classes = useStyles();

    return (
        <Card className={classes.card}>
        <CardHeader
          title={
            <Typography style={{ color: "white" }} variant={"h4"}>
              {props.yearName}
            </Typography>
          }
          subheader="Holidays"
          style={{ background: "#9b59b6" }}
        />

        <CardContent className={classes.content}>
          <Grid spacing={2}>
           
           {props.children}

          </Grid>

          <Divider className={classes.divider} light />
        </CardContent>
      </Card>
    )
}

export default CardLayout;
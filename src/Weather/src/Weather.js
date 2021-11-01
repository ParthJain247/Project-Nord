import React from "react";
import { Box } from "@mui/material";
import Form from "./Form";
import { makeStyles } from "@mui/styles";
import logo from "./image";

const useStyles = makeStyles({
  container: {
    height: `90vh`,
    display: `flex`,
    alignItems: `center`,
    width: `90%`,
    margin: `5% auto 5% auto`,
  },
  leftContainer: {
    backgroundImage: `url(${logo})`,
    height: `100%`,
    width: `40%`,
    backgroundSize: `cover`,
  },
  rightContainer: {
    background: `linear-gradient(to left ,#161616, #151515,#171717)`,
    height: `100%`,
    width: `60%`,
  },
});
function Weather() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.leftContainer}></Box>
        <Box className={classes.rightContainer}>
          <Form />
        </Box>
      </Box>
    </>
  );
}

export default Weather;

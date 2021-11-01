import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { getData } from "./request";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Info from "./Info";
import "./form.css";

const ColorButton = styled(Button)(() => ({
  color: `white`,
  backgroundColor: `#151515`,
  "&:hover": {
    backgroundColor: `#444444`,
  },
  marginLeft: 350,
  fontFamily: `Montserat`,
  fontWeight: `bold`,
}));

const useStyles = makeStyles({
  textComponent: {
    padding: `10px`,
    backgroundColor: `#444444`,
    display: `flex;`,
  },
});

function Form() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("");

  const [click, handleClick] = useState(false);

  const handleChange = (value) => {
    setCity(value);
  };

  useEffect(() => {
    const getWeather = async () => {
      city &&
        (await getData(city).then((value) => {
          setWeather(value.data);
          console.log(value.data);
        }));
    };
    handleClick(false);
    getWeather();
  }, [click]);
  const classes = useStyles();
  return (
    <>
      <Box className={classes.textComponent}>
        <input
          spellCheck="false"
          onChange={(e) => handleChange(e.target.value)}
          label="City"
        />

        <ColorButton onClick={() => handleClick(true)} variant="contained">
          {" "}
          Get Weather
        </ColorButton>
      </Box>
      <Info data={weather} />
    </>
  );
}

export default Form;

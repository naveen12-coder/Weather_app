import React from "react";
import { Box } from "@mui/material";
import { getDayMonthFromDate } from "../../../utilities/DatetimeUtils";
import { weatherIcon } from "../../../utilities/IconsUtils";
import ErrorBox from "../../Reusable/ErrorBox";
import CityDateDetail from "./CityDateDetail";
import TemperatureWeatherDetail from "./TemperatureWeatherDetail";
import WeatherIconDetail from "./WeatherIconDetail";
import Layout from "../../Reusable/Layout";

const dayMonth = getDayMonthFromDate();

const Details = ({ data }) => {
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === "404";

  const content = noDataProvided ? (
    <ErrorBox flex="1" type="error" />
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#2c2c2c", // Different background color for sectioning
        borderRadius: "6px",
        padding: "1rem",
        height: "80px",
      }}
    >
      <CityDateDetail city={data.city} date={dayMonth} />
      <TemperatureWeatherDetail
        temperature={data.main.temp}
        description={data.weather[0].description}
      />
      <WeatherIconDetail src={weatherIcon(`${data.weather[0].icon}.png`)} />
    </Box>
  );

  return <Layout title="CURRENT WEATHER" content={content} />;
};

export default Details;

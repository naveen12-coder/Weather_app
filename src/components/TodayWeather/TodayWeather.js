import React from "react";
import { Box } from "@mui/material";
import AirConditions from "./AirConditions/AirConditions";
import DailyForecast from "./Forecast/DailyForecast";
import Details from "./Details/Details";

const TodayWeather = ({ data, forecastList }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        paddingTop: "2rem",
        backgroundColor: "#1a1a1a", // Dark background for a modern look
        borderRadius: "8px",
        padding: "1.5rem",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Details data={data} />
      <AirConditions data={data} />
      <DailyForecast data={data} forecastList={forecastList} />
    </Box>
  );
};

export default TodayWeather;

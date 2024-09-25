import React from "react";
import { Grid } from "@mui/material";
import { getWeekDays } from "../../utilities/DatetimeUtils";
import { weatherIcon } from "../../utilities/IconsUtils";
import WeeklyForecastItem from "./WeeklyForecastItem";
import ErrorBox from "../Reusable/ErrorBox";
import UnfedForecastItem from "./UnfedForecastItem";
import DayWeatherDetails from "./DayWeatherDetails";
import Layout from "../Reusable/Layout";

const WeeklyForecast = ({ data }) => {
  const forecastDays = getWeekDays();

  const noDataProvided =
    !data ||
    Object.keys(data).length === 0 ||
    !data.list ||
    data.list.length === 0;

  let content = (
    <div style={{ width: "100%" }}>
      <ErrorBox type="error" />
    </div>
  );

  if (!noDataProvided)
    content = (
      <Grid item container flexDirection="column" xs={12} gap="4px">
        {data.list.map((item, idx) => (
          <Grid
            item
            key={idx}
            xs={12}
            display="flex"
            alignItems="center"
            sx={{
              padding: "2px 0 2px",
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -2px",
              borderRadius: "8px",
              backgroundColor: "#3a3a3a", // Dark background for each forecast item
            }}
          >
            <DayWeatherDetails
              day={forecastDays[idx]}
              src={weatherIcon(`${item.icon}`)}
              description={item.description}
            />

            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2a2a2a", // Darker background for the metrics
                borderRadius: "8px",
                padding: "0.5rem",
                marginTop: "1rem",
              }}
            >
              <WeeklyForecastItem
                type="temperature"
                value={Math.round(item.temp) + " °C"}
                color="white"
              />
              <WeeklyForecastItem
                type="clouds"
                value={item.clouds + " %"}
                color="white"
              />
            </Grid>

            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2a2a2a",
                borderRadius: "8px",
                padding: "0.5rem",
                marginTop: "1rem",
              }}
            >
              <WeeklyForecastItem
                type="wind"
                value={item.wind + " m/s"}
                color="green"
              />
              <WeeklyForecastItem
                type="humidity"
                value={item.humidity + " %"}
                color="green"
              />
            </Grid>
          </Grid>
        ))}
        {data.list.length === 5 && (
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            sx={{
              padding: "2px 0 2px",
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -2px",
              borderRadius: "8px",
              backgroundColor: "#3a3a3a",
            }}
          >
            <UnfedForecastItem
              day={forecastDays[5]}
              value="NaN"
              src={weatherIcon("unknown.png")}
            />
          </Grid>
        )}
      </Grid>
    );

  return (
    <Layout
      title="WEEKLY FORECAST"
      content={content}
      mb=".8rem"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        padding: "3rem 0 0",
        backgroundColor: "#1a1a1a", // Background color for the layout
        borderRadius: "12px",
        padding: "2rem",
      }}
    />
  );
};

export default WeeklyForecast;

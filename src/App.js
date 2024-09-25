import React, { useState } from "react";
import { Box, Container, Grid, Link, SvgIcon, Typography } from "@mui/material";
import Search from "./components/Search/Search";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import { fetchWeatherData } from "./api/OpenWeatherService";
import { transformDateFormat } from "./utilities/DatetimeUtils";
import UTCDatetime from "./components/Reusable/UTCDatetime";
import LoadingBox from "./components/Reusable/LoadingBox";
import { ReactComponent as SplashIcon } from "./assets/splash-icon.svg";
import Logo from "./assets/logo.png";
import ErrorBox from "./components/Reusable/ErrorBox";
import { ALL_DESCRIPTIONS } from "./utilities/DateConstants";
import {
  getTodayForecastWeather,
  getWeekForecastWeather,
} from "./utilities/DataUtils";

function App() {
  const [state, setState] = useState({
    todayWeather: null,
    todayForecast: [],
    weekForecast: null,
    isLoading: false,
    error: false,
  });

  const updateState = (newState) =>
    setState((prevState) => ({ ...prevState, ...newState }));

  const searchChangeHandler = async (enteredData) => {
    const [latitude, longitude] = enteredData.value.split(" ");
    updateState({ isLoading: true });

    const currentDate = transformDateFormat();
    const dt_now = Math.floor(Date.now() / 1000);

    try {
      const [todayWeatherResponse, weekForecastResponse] =
        await fetchWeatherData(latitude, longitude);
      const allTodayForecasts = getTodayForecastWeather(
        weekForecastResponse,
        currentDate,
        dt_now
      );
      const allWeekForecasts = getWeekForecastWeather(
        weekForecastResponse,
        ALL_DESCRIPTIONS
      );

      updateState({
        todayForecast: allTodayForecasts,
        todayWeather: { city: enteredData.label, ...todayWeatherResponse },
        weekForecast: { city: enteredData.label, list: allWeekForecasts },
        isLoading: false,
        error: false,
      });
    } catch {
      updateState({ error: true, isLoading: false });
    }
  };

  const renderContent = () => {
    if (state.error) {
      return (
        <ErrorBox
          margin="3rem auto"
          flex="inherit"
          errorMessage="Something went wrong"
        />
      );
    }

    if (state.isLoading) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            minHeight: "500px",
          }}
        >
          <LoadingBox value="1">
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "10px", sm: "12px" },
                color: "rgba(255, 255, 255, .8)",
                lineHeight: 1,
              }}
            >
              Loading...
            </Typography>
          </LoadingBox>
        </Box>
      );
    }

    if (
      state.todayWeather &&
      state.todayForecast.length &&
      state.weekForecast
    ) {
      return (
        <>
          <Grid item xs={12} md={6}>
            <TodayWeather
              data={state.todayWeather}
              forecastList={state.todayForecast}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <WeeklyForecast data={state.weekForecast} />
          </Grid>
        </>
      );
    }

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%", minHeight: "500px" }}
      >
        <SvgIcon
          component={SplashIcon}
          inheritViewBox
          sx={{ fontSize: { xs: "100px", sm: "120px", md: "140px" } }}
        />
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "12px", sm: "14px" },
            color: "rgba(255,255,255, .85)",
            textAlign: "center",
            margin: "2rem 0",
            maxWidth: "80%",
          }}
        >
          Explore current weather data and 6-day forecast of more than 200,000
          cities!
        </Typography>
      </Box>
    );
  };

  return (
    <Container
      sx={{
        maxWidth: { xs: "95%", sm: "80%", md: "1100px" },
        padding: "1rem 0 3rem",
        marginBottom: "1rem",
      }}
    >
      <Grid container columnSpacing={2}>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginBottom: "1rem" }}
          >
            <Box
              component="img"
              sx={{ height: { xs: "16px", sm: "22px", md: "26px" } }}
              alt="logo"
              src={Logo}
            />
            <UTCDatetime />
          </Box>
          <Search onSearchChange={searchChangeHandler} />
        </Grid>
        {renderContent()}
      </Grid>
    </Container>
  );
}

export default App;

import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import WeeklyForecastItem from "./WeeklyForecastItem";

const UnfedForecastItem = ({ day, value, src }) => {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft: { xs: "12px", sm: "20px", md: "32px" },
          backgroundColor: "#2a2a2a", // Dark background color
          borderRadius: "8px",
          padding: "1rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: { xs: "400", sm: "600" },
            fontSize: { xs: "12px", sm: "13px", md: "14px" },
            color: "#ffffff",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            height: "31px",
          }}
        >
          {day}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "31px",
            marginTop: "8px",
          }}
        >
          <Box
            component="img"
            sx={{
              width: { xs: "24px", sm: "28px", md: "31px" },
              height: "auto",
              marginRight: "4px",
            }}
            alt="weather"
            src={src}
          />
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "12px", md: "14px" },
              color: "rgba(255,255,255, .8)",
              lineHeight: 1,
              fontFamily: "Roboto Condensed",
            }}
          >
            {value}
          </Typography>
        </Box>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1f1f1f", // Slightly darker background for contrast
          borderRadius: "8px",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <WeeklyForecastItem type="temperature" value={value} color="black" />
        <WeeklyForecastItem type="clouds" value={value} color="black" />
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1f1f1f", // Matching background
          borderRadius: "8px",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <WeeklyForecastItem type="wind" value={value} color="green" />
        <WeeklyForecastItem type="humidity" value={value} color="green" />
      </Grid>
    </>
  );
};

export default UnfedForecastItem;

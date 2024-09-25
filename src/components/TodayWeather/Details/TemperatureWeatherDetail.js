import React from "react";
import { Box, Typography } from "@mui/material";

const TemperatureWeatherDetail = ({ temperature, description }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#3a3a3a", // Adding a subtle background for contrast
        borderRadius: "6px",
        padding: "1rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "600",
          fontSize: { xs: "14px", md: "16px" },
          color: "#ffffff",
          textTransform: "uppercase",
          mb: 1,
        }}
      >
        {Math.round(temperature)} °C
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "12px", md: "14px" },
          color: "rgba(255,255,255, .7)",
          letterSpacing: { xs: "1px", md: "0" },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default TemperatureWeatherDetail;

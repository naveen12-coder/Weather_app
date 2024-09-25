import React from "react";
import { Box, Typography } from "@mui/material";

const CityDateDetail = ({ city, date }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#3a3a3a", // Matching the background with TemperatureWeatherDetail
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
        {city}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "12px", md: "14px" },
          color: "rgba(255,255,255, .7)",
          letterSpacing: { xs: "1px", md: "0" },
        }}
      >
        Today {date}
      </Typography>
    </Box>
  );
};

export default CityDateDetail;

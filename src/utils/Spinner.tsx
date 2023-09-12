import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Spinner() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        zIndex: 9999,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

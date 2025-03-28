import { keyframes } from "@emotion/react";
import { Backdrop, CircularProgress, Typography } from "@mui/material";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export default function Loading() {
  return (
    <Backdrop
      open
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 9999,
      }}
    >
      <CircularProgress
        sx={{
          color: "var(--primary-color-btn)",
          animation: "spin 1.5s linear infinite",
        }}
        data-testid="loading"
      />
      <Typography
        sx={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          color: "#fff",
          ml: 2,
          letterSpacing: "2px",
          fontWeight: "400",
          animation: `${fadeIn} 1s ease-in-out`,
        }}
        data-testid="text-loading"
      >
        Carregando...
      </Typography>
    </Backdrop>
  );
}

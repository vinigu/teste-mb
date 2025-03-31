import { Box, SxProps, Theme } from "@mui/material";

interface IWrapperProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function Wrapper({ children, sx }: IWrapperProps) {
  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          width: "1280px",
          margin: "0 auto",
          maxWidth: "100%",
        },
        [theme.breakpoints.down("md")]: {
          width: "100%",
          margin: "0 auto",
          padding: "0",
          maxWidth: "100%",
        },
        ...sx,
      })}
    >
      {children}
    </Box>
  );
}

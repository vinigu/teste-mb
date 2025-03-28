import { Box } from "@mui/material";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Box>{children}</Box>
    </>
  );
}

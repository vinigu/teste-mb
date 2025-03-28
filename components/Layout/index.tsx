import Footer from "@components/Footer";
import Header from "@components/Header";
import { Box } from "@mui/material";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
}

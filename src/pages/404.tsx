import { Button, Container, Typography } from "@mui/material";
import Head from "next/head";

const FourOhFour: React.FC = () => (
  <>
    <Head>
      <title>Pagina não encontrada</title>
    </Head>
    <Container
      maxWidth="sm"
      sx={{
        mt: 5,
        mb: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#848484",
      }}
    >
      <Typography
        sx={(theme) => ({
          fontFamily: "",
          lineHeight: "normal",
          [theme.breakpoints.up("md")]: {
            fontSize: "200px",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "100px",
          },
        })}
      >
        404
      </Typography>

      <Typography
        sx={(theme) => ({
          mt: 2,
          fontFamily: "var(--font-title)",
          [theme.breakpoints.up("md")]: {
            fontSize: "48px",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "23px",
          },
        })}
      >
        Desculpe, página não encontrada
      </Typography>

      <Typography
        sx={(theme) => ({
          fontFamily: "var(--font-title)",
          [theme.breakpoints.up("md")]: {
            fontSize: "16px",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "12px",
          },
        })}
      >
        A página solicitada não pode ser encontrada
      </Typography>

      <Button
        href="/"
        sx={{
          alignItems: "center ",
          p: 2,
          mt: 3,
          background: "var(--primary-color-btn)",
          color: "#fff",
          width: "230px",
          "&:hover": {
            background: "var(--primary-color-btn-hover)",
            color: "#fff",
          },
          borderRadius: "10px",
          textTransform: "UpperCase",
          fontFamily: "var(--font-title)",
          fontSize: "12px",
        }}
      >
        Voltar para a home
      </Button>
    </Container>
  </>
);

export default FourOhFour;

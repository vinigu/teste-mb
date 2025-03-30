import Grid from "@components/Wrapper";
import { Instagram as InstagramIcon } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  const data = new Date();
  const currentYear = data.getFullYear();

  return (
    <>
      <Box
        sx={{
          background: "var(--color-footer)",
          display: "flex",
          flexDirection: "column",
          color: "#fff",
          pt: 2,
          pb: 2,
        }}
      >
        <Grid>
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
              [theme.breakpoints.up("md")]: {
                padding: "0 20px",
                flexDirection: "row",
                gap: "25px",
                m: "25px",
              },
              padding: "20px",
            })}
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                [theme.breakpoints.down("md")]: {
                  order: 2,
                  mt: 3,
                },
              })}
            >
              <Image
                src="https://placehold.co/130x130/3D8EFC/fff/?text=Filmes"
                width={130}
                height={130}
                data-testid="logo"
                alt="Logo Filmes"
              />
            </Box>

            <Box
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                [theme.breakpoints.up("md")]: {
                  gap: 3,
                  flexDirection: "row",
                  pt: 1,
                  ml: 2,
                },
                [theme.breakpoints.down("md")]: {
                  order: 2,
                  gap: 1,
                  mt: 3,
                },
              })}
            >
              <Stack spacing={1} direction="column">
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "var(--font-body)",
                    fontSize: "18px",
                  }}
                >
                  Nossa Api
                </Typography>
                <Stack spacing={0} pl={1}>
                  <Link
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noreferrer"
                    sx={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "#fff",
                        "&:hover": {
                          color: "#00A844",
                        },
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      The movie DB
                    </Typography>
                  </Link>
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                [theme.breakpoints.up("md")]: {
                  gap: 3,
                  flexDirection: "row",
                },
                [theme.breakpoints.down("md")]: {
                  order: 1,
                  gap: 1,
                },
              })}
              data-testid="social"
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "var(--font-body)",
                  fontSize: "18px",
                }}
              >
                Nos siga nas redes sociais
              </Typography>
              <List
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  ".icons": {
                    fontSize: "28px",
                    color: "#fff",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      color: "var(--secondary-color-btn-hover)",
                    },
                  },
                }}
              >
                <ListItem disablePadding>
                  <a target="_blank" href="#" rel="noreferrer">
                    <InstagramIcon className="insta-icon icons" />
                  </a>
                </ListItem>
                <ListItem disablePadding>
                  <a target="_blank" href="#" rel="noreferrer">
                    <FacebookIcon
                      sx={{
                        color: "#fff",
                      }}
                    />
                  </a>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
      </Box>

      <Box
        sx={{
          background: "var(--color-pos-footer)",
          color: "rgba(255, 255, 255, 0.75)",
          display: "flex",
          pb: 2,
          pt: 2,
          pl: "20px",
          pr: "20px",
          justifyContent: "center",
        }}
        data-testid="copy"
      >
        <Grid>
          <Typography
            sx={(theme) => ({
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.75)",
              [theme.breakpoints.up("md")]: {
                textAlign: "left",
                pl: "20px",
              },
            })}
          >
            © {currentYear} Filmes
          </Typography>
        </Grid>
      </Box>
    </>
  );
}

/* eslint-disable import/order */
import { ExpandMore, Menu as MenuIcon } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Link as MUILink,
  Toolbar,
  Typography,
} from "@mui/material";
import { get } from "@services/api";
import Image from "next/image";
import { useState } from "react";
import { useAsync } from "react-use";
import IGenre from "../../types/Genre";

export default function Header() {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [menu, setMenu] = useState<IGenre[]>([]);

  useAsync(async () => {
    const { genres } = await get({
      url: "/genre/movie/list?language=pt-BR&region=BR",
    });
    setMenu(genres);
  }, []);

  const clickIcon = () => {
    setIsMenuDrawerOpen((prevState) => !prevState);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#fff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          p: 2,
          "&.MuiToolbar-root": {
            p: " 0 20px",
          },
        }}
      >
        {/* Desktop */}
        <Link
          sx={{
            mr: 3,
            display: { xs: "none", md: "flex" },
            alignItems: { xs: "none", md: "center" },
          }}
          href="/"
        >
          <Image
            src="https://placehold.co/600x480/3D8EFC/fff/?text=Filmes"
            width={180}
            height={80}
            alt="Logo Filmes"
            data-testid="logo-md"
          />
        </Link>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            mr: 4,
            gap: 2,
          }}
          data-testid="menu-md"
        >
          <Box
            sx={{
              position: "relative",
              "&:hover": {
                color: "#2C48EC",
                backgroundColor: "transparent",
                "& > .dropdown-menu": {
                  opacity: 1,
                  visibility: "visible",
                },
              },
            }}
          >
            <Button
              endIcon={<ExpandMoreIcon />}
              href="/estoque"
              sx={{
                my: 2,
                display: "flex",
                alignItems: "center",
                color: "#343A40",
                textTransform: "none",
                fontFamily: "var(--font-title)",
                transition: "all 0.3s ease-in-out",
                position: "relative",
              }}
            >
              Gêneros cinematográficos
            </Button>
            <Box
              className="dropdown-menu"
              sx={{
                display: "flex",
                flexFlow: "row wrap",
                position: "absolute",
                justifyContent: "normal",
                alignItems: "center",
                top: "70px",
                left: "0 ",
                opacity: 0,
                visibility: "hidden",
                gap: 4,
                bgcolor: "#fff",
                borderRadius: "5px",
                boxShadow: "0px 0px 15px rgba(0, 12, 46, 0.1)",
                p: "35px 40px",
                width: "500px",
                transition: "all 0.3s ease-in-out",
              }}
            >
              {menu.map((genre: IGenre) => (
                <Box key={genre.id}>
                  <Link
                    key={genre.id}
                    href={"/genre/" + genre.id}
                    data-testid="genre-link"
                    sx={{
                      color: "#4C4C4C",
                      fontFamily: "var(--font-title)",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#58595B",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        textTransform: "capitalize",
                        textDecoration: "none",
                        transition: "all 0.3s ease-in-out",
                        "&:hover, &:focus, &:active": {
                          color: "#2C48EC",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {genre.name}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            component="a"
            href="/favorites"
            data-testid="favorites"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                color: "#E53935",
                backgroundColor: "transparent",
                "& > .MuiSvgIcon-root": {
                  color: "#D32F2F",
                },
                "& svg": {
                  fontSize: "24px",
                },
              },
            }}
          >
            <FavoriteIcon
              sx={{
                color: "#E53935",
                fontSize: "20px",
                transition: "all 0.3s ease-in-out",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "#E53935",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                textTransform: "capitalize",
                textDecoration: "none",
                transition: "all 0.3s ease-in-out",
                "&:hover, &:focus, &:active": {
                  color: "#D32F2F",
                  textDecoration: "none",
                  cursor: "pointer",
                },
              }}
            >
              Meus Favoritos
            </Typography>
          </Box>
        </Box>

        {/* Mobile */}
        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            onClick={clickIcon}
            data-testid="drawerMenuButton"
            sx={{
              pl: 0,
              pr: 0,
              mr: "15px",
            }}
          >
            <MenuIcon sx={{ color: "#4c4c4c" }} />
          </IconButton>
          <Drawer
            anchor="left"
            open={isMenuDrawerOpen}
            onClose={() => setIsMenuDrawerOpen(false)}
            data-testid="drawer"
          >
            <MUILink
              href="/"
              sx={{
                p: 1,
                display: { sm: "block", md: "none" },
              }}
            >
              <Image
                src="https://placehold.co/200x20/3D8EFC/fff/?text=Filmes"
                width={200}
                alt="Logo Filmes"
                height={20}
                data-testid="logo-sm"
              />
            </MUILink>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100vh",
              }}
            >
              <List>
                <ListItem
                  onClick={() => {
                    setIsMenuDrawerOpen(false);
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 2,
                  }}
                >
                  {/* Accordion Mobile */}
                  <Accordion
                    sx={{
                      width: "100%",
                      boxShadow: "none",
                      "&.MuiAccordion-root": {
                        backgroundColor: "transparent",
                      },
                    }}
                    data-testid="accordion"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        "&.MuiAccordionSummary-root": {
                          padding: 0,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "var(--font-title)",
                          fontSize: "16px",
                          color: "var(--title-text-color)",
                        }}
                      >
                        Gêneros de filmes
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        backgroundColor: "transparent",
                        "&.MuiAccordionDetails-root": {
                          padding: 0,
                        },
                      }}
                    >
                      <List>
                        {menu.map((item) => (
                          <ListItem
                            key={item.id}
                            onClick={() => {
                              setTimeout(() => setIsMenuDrawerOpen(false), 100);
                            }}
                          >
                            <Link
                              href={`/genre/${item.id}`}
                              sx={{
                                color: "var(--subtitle-text-color)",
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                textDecoration: "none",
                              }}
                            >
                              <ListItemText
                                primary={item.name}
                                sx={{
                                  color: "var(--subtitle-text-color)",
                                  fontFamily: "var(--font-body)",
                                  fontSize: "14px",
                                  fontWeight: 400,
                                }}
                              />
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </ListItem>
              </List>
            </Box>
            <Box
              component="a"
              href="/favorites"
              data-testid="favorites"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                my: 2,
                textDecoration: "none",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  color: "#E53935",
                  backgroundColor: "transparent",
                  "& > .MuiSvgIcon-root": {
                    color: "#D32F2F",
                  },
                  "& svg": {
                    fontSize: "24px",
                  },
                },
              }}
            >
              <FavoriteIcon
                sx={{
                  color: "#E53935",
                  fontSize: "20px",
                  transition: "all 0.3s ease-in-out",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#E53935",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  textTransform: "capitalize",
                  textDecoration: "none",
                  transition: "all 0.3s ease-in-out",
                  "&:hover, &:focus, &:active": {
                    color: "#D32F2F",
                    textDecoration: "none",
                    cursor: "pointer",
                  },
                }}
              >
                Meus Favoritos
              </Typography>
            </Box>
          </Drawer>
        </Box>

        <MUILink
          href="/"
          sx={{
            flexGrow: 2,
            display: { xs: "flex", md: "none" },
          }}
        >
          <Image
            src="https://placehold.co/200x50/3D8EFC/fff/?text=Filmes"
            width={200}
            alt="Logo Filmes"
            height={50}
            data-testid="logo-xs"
            style={{ marginLeft: "10px" }}
          />
        </MUILink>
      </Toolbar>
    </AppBar>
  );
}

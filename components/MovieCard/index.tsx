import { Explicit, GradeOutlined } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
export interface MovieCardProps {
  id: number;
  title: string;
  path: string;
  genre: string;
  description: string | null;
  rating: number;
  isAdult?: boolean;
  className?: string;
  href: string;
  sx?: object;
}

export default function MovieCard({
  id,
  title,
  path,
  genre,
  description,
  rating,
  isAdult,
  className,
  href,
  sx,
}: MovieCardProps) {
  return (
    <Card
      sx={(theme) => ({
        borderRadius: "8px",
        border: "1.09px solid var(--border-cards-color)",
        boxShadow: "none",
        maxWidth: "350px",
        flexShrink: 0,
        [theme.breakpoints.up("md")]: {
          width: "calc(100% - 10px)",
          ml: "10px",
        },
        [theme.breakpoints.down("md")]: {
          width: "calc(95vw - 10px)",
        },
        "&.equipment-card-mobile": {
          width: "100%",
        },
        ...sx,
      })}
      key={id}
      className={className}
    >
      <Box component="a" href={href} sx={{ textDecoration: "none" }}>
        <Box sx={{ textDecoration: "none", position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "10px",
              position: "absolute",
              top: "10px",
              left: "10px",
            }}
          ></Box>
          <CardMedia
            component="img"
            alt={title}
            width="290"
            height="180"
            image={path}
            sx={{
              objectFit: "cover",
            }}
          />
        </Box>
        <CardContent sx={{ p: "16px !important" }}>
          <Box sx={{ textDecoration: "none" }}>
            <Box>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: "var(--title-text-color)",
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  mb: "5px",
                }}
                data-testid="genre-id"
              >
                {genre}
              </Typography>
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  color: "#444444",
                  fontFamily: "var(--font-title)",
                  fontSize: "16px",
                  textTransform: "capitalize",
                  fontWeight: "600",
                }}
                data-testid="title"
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: "var(--subtitle-text-color)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  mt: "10px",
                }}
                data-testid="description"
              >
                {description || "Sem descrição"}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                marginTop: "10px",
              }}
            >
              <Box
                sx={(theme) => ({
                  [theme.breakpoints.up("md")]: {
                    width: "100%",
                  },
                })}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "2px",
                    mt: 1,
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "15px",
                    mt: 2,
                  }}
                >
                  {isAdult && (
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                    >
                      <Explicit
                        sx={{
                          color: "var(--title-text-color)",
                          fontSize: "16px",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        component="div"
                        sx={{
                          color: "var(--title-text-color)",
                          fontFamily: "var(--font-secondary)",
                          fontSize: "12px",
                        }}
                        data-testid="adult_content"
                      >
                        Conteúdo adulto
                      </Typography>
                    </Box>
                  )}

                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <GradeOutlined
                      sx={{
                        color: "var(--title-text-color)",
                        fontSize: "16px",
                      }}
                    />
                    <Typography
                      variant="subtitle2"
                      component="div"
                      sx={{
                        color: "var(--title-text-color)",
                        fontFamily: "var(--font-secondary)",
                        fontSize: "12px",
                      }}
                      data-testid="hour_meter"
                    >
                      {rating}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "10px",
                    mt: 2,
                  }}
                >
                  <Button
                    startIcon={<FavoriteBorderIcon />}
                    sx={{
                      color: "#fff",
                      width: "calc(50% - 30px)",
                      fontFamily: "var(--font-title)",
                      fontSize: "14px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                      borderRadius: "8px",
                      padding: "6px 10px",
                      border: "1px solid var(--secondary-color-btn)",
                      backgroundColor: "var(--secondary-color-btn)",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "var(--secondary-color-btn-hover)",
                      },
                    }}
                    variant="outlined"
                    data-testid="favorite-button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    Favoritar
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

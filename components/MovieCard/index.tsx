import { useFavorite } from "@contexts/Favorite";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

export interface MovieCardProps {
  id: number;
  title: string;
  path: string;
  description: string | null;
  vote_average: number;
  isAdult?: boolean;
  className?: string;
  href: string;
  sx?: object;
}

export default function MovieCard({
  id,
  title,
  path,
  description,
  vote_average,
  isAdult,
  className,
  href,
  sx,
}: MovieCardProps) {
  const { favoriteMovies, addFavorite, removeFavorite } = useFavorite();
  const isFavorite =
    Array.isArray(favoriteMovies) &&
    favoriteMovies.some((movie) => movie.id === id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({
        id,
        title,
        overview: description || "",
        poster_path: path,
        vote_average,
        adult: !!isAdult,
      });
    }
  };

  return (
    <Card
      data-testid={`movie-card-${id}`}
      sx={(theme) => ({
        borderRadius: "8px",
        border: "1.09px solid var(--border-cards-color)",
        boxShadow: "none",
        maxWidth: "350px",
        flexShrink: 0,
        [theme.breakpoints.up("md")]: {
          ml: "10px",
        },
        [theme.breakpoints.down("md")]: {
          width: "calc(90vw - 10px)",
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
            data-testid="movie-image"
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
                data-testid="id"
              >
                {id}
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
                sx={{
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "15px",
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Rating
                      name="rating_vote"
                      defaultValue={vote_average / 2}
                      precision={0.5}
                      data-testid="rating"
                      readOnly
                    />
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
                    startIcon={
                      isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />
                    }
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
                    onClick={handleFavoriteClick}
                  >
                    {isFavorite ? "Remover" : "Favoritar"}
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

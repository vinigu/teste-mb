import Wrapper from "@components/Wrapper";
import { useLoading } from "@contexts/Loading";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Chip, Rating, Typography } from "@mui/material";
import { get } from "@services/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAsync } from "react-use";
import { IMoviePage } from "../../../types/Movie";

export default function MoviePage() {
  const { showLoading } = useLoading();
  const [movieInfo, setMovieInfo] = useState<IMoviePage>({} as IMoviePage);
  const [movieRating, setMovieRating] = useState<number | null>(null);

  const router = useRouter();
  const { movie } = router.query;

  useAsync(async () => {
    showLoading(true);

    if (!movie) return;

    const result = await get({
      url: `/movie/${movie}?language=pt-BR&region=BR`,
    });

    setMovieInfo(result);
    setMovieRating(result.vote_average / 2);

    showLoading(false);
  }, [movie]);

  return (
    <Wrapper>
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
          mb: 4,
          gap: "30px",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.up("md")]: {
              width: "60%",
            },
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          })}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                sx={{
                  color: "var(--gray-light)",
                  fontFamily: "var(--font-title)",
                  fontSize: "12px",
                  fontWeight: 400,
                }}
              >
                iD IMDB: {movieInfo.imdb_id}
              </Typography>
            </Box>
            <Typography
              sx={(theme) => ({
                color: "var(--text-color-title)",
                fontFamily: "var(--font-title)",
                fontWeight: 600,
                mt: 2,
                [theme.breakpoints.up("md")]: {
                  fontSize: "34px",
                },
                [theme.breakpoints.down("md")]: {
                  fontSize: "22px",
                },
              })}
            >
              {movieInfo.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                mt: 2,
              }}
            >
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {movieInfo.genres?.map((genre) => {
                  const randomColor = `#${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)}`;
                  return (
                    <Chip
                      key={genre.id}
                      label={genre.name}
                      sx={{
                        backgroundColor: randomColor,
                        color: "white",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                      }}
                    />
                  );
                })}
              </Box>
            </Box>

            <Box sx={{ display: "flex", mt: 2, gap: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--gray-light)",
                  }}
                >
                  Avaliação:
                </Typography>
                <Rating
                  name="rating_vote"
                  value={movieRating}
                  precision={0.5}
                  readOnly
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
                <CalendarMonthIcon
                  sx={{ color: "var(--gray-light)", fontSize: "20px" }}
                />
                <Box
                  sx={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--gray-light)",
                    ml: 1,
                  }}
                >
                  {new Date(movieInfo.release_date).toLocaleDateString(
                    "pt-BR",
                    {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }
                  )}
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTimeIcon
                  sx={{ color: "var(--gray-light)", fontSize: "18px" }}
                />
                <Box
                  sx={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--gray-light)",
                    ml: 1,
                  }}
                >
                  {movieInfo.runtime} min
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-title)",
                  fontSize: "24px",
                  mt: 3,
                  color: "var(--text-color-title)",
                }}
              >
                Sobre o Filme:
              </Typography>
            </Box>
            <Box>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  marginTop: "8px",
                  color: "var(--body-text-color)",
                }}
                dangerouslySetInnerHTML={{ __html: movieInfo.overview }}
              />
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
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.up("md")]: {
              width: "40%",
            },
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          })}
        >
          <Box
            component="img"
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={movieInfo.title}
            sx={{
              borderRadius: "10px",
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </Box>

        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flexFlow: "row wrap",
            justifyContent: "center",
            [theme.breakpoints.up("md")]: {
              flexDirection: "row",
              gap: "25px",
            },
          })}
        ></Box>
      </Box>
    </Wrapper>
  );
}

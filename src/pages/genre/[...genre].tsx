import MovieCard from "@components/MovieCard";
import Wrapper from "@components/Wrapper";
import { useLoading } from "@contexts/Loading";
import { Box, Typography } from "@mui/material";
import { get } from "@services/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAsync } from "react-use";
import { IMovie } from "../../../types/Movie";

export default function GenrePage() {
  const { showLoading } = useLoading();
  const [movies, setMovies] = useState<IMovie[]>([]);

  const router = useRouter();
  const { genre } = router.query;

  useAsync(async () => {
    showLoading(true);
    console.log("genre", genre);
    if (!genre) return;

    const itens = await get({
      url: `/discover/movie?language=pt-BR&region=BR&with_genres=${genre}&sort_by=popularity.desc&page=1`,
    });

    console.log(itens);

    setMovies(itens.results);

    showLoading(false);
  }, [genre]);

  return (
    <Wrapper>
      <Box>
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
          <Typography
            variant="h3"
            sx={(theme) => ({
              mb: 3,
              mt: "50px",
              fontFamily: "var(--font-title)",
              color: "var(--title-text-color)",
              [theme.breakpoints.up("md")]: {
                fontSize: "24px",
                pl: "10px",
              },
              [theme.breakpoints.down("md")]: {
                mb: 3,
                mt: 4,
                fontSize: "16px",
              },
            })}
          >
            Categoria de filmes: {genre}
          </Typography>
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
        >
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                href={`/movie/${movie.id}`}
                title={movie.title}
                path={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                genre={movie.genre_ids.join(", ")}
                className="equipment-card-mobile"
                description={movie.overview}
                vote_average={movie.vote_average}
                isAdult={movie.adult}
              />
            ))
          ) : (
            <Typography
              variant="h5"
              sx={{
                fontFamily: "var(--font-title)",
                color: "var(--title-text-color)",
                textAlign: "center",
                mt: "20px",
              }}
            >
              Nenhum filme encontrado
            </Typography>
          )}
        </Box>
      </Box>
    </Wrapper>
  );
}

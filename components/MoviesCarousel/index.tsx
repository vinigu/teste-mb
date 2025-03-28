import Carousel from "@components/Carousel";
import MovieCard from "@components/MovieCard";
import { Box } from "@mui/material";
import IMovie from "../../types/Movie";

interface IMovieCarousel {
  data: IMovie[];
}

export default function MovieCarousel({ data }: IMovieCarousel) {
  return (
    <Box data-testid="MovieCarousel">
      <Carousel
        slidesToScroll={1}
        slidesToShow={5}
        arrows={false}
        sx={{
          "& .slick-slide": {
            padding: "0 10px",
          },
        }}
      >
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            href={`/movie/${movie.id}`}
            title={movie.title}
            path={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            genre={movie.genre_ids.join(", ")}
            className="equipment-card-mobile"
            description={movie.overview}
            rating={movie.vote_average}
            isAdult={movie.adult}
          />
        ))}
      </Carousel>
    </Box>
  );
}

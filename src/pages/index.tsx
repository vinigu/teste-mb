import { useLoading } from "@contexts/Loading";
import { Box, Typography } from "@mui/material";
import { useAsync } from "react-use";

export default function Page() {
  const { showLoading } = useLoading();

  useAsync(async () => {
    showLoading(true);
    //    const itens = await get({
    //     url: "/movie/popular?language=pt-BR&page=1",
    //     });
    const item = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "allow-control-allow-origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjkyOTg3MjY0NjQ4Njg2NDQ5MWM2YTUzMzg5Mjk3NSIsIm5iZiI6MTc0MzExNDMwNC4xMjUsInN1YiI6IjY3ZTVkMDQwMDI3ZTczNzQwNjAwMTZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LZjgeF288rCAykVrWSdxQZCqhDsAdnWLwGyvDI46A1I",
        },
      }
    );
    const itens = await item.json();
    console.log(item);
    console.log(itens);
    showLoading(false);
  }, []);
  return (
    <Box>
      <Typography
        variant="h3"
        sx={(theme) => ({
          mb: 3,
          mt: "50px",
          fontFamily: "Axiforma Bold",
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
        Categorias
      </Typography>
    </Box>
  );
}

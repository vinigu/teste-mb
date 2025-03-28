import { useLoading } from "@contexts/Loading";
import { Box, Typography } from "@mui/material";
import { get } from "@services/api";
import { useAsync } from "react-use";

export default function Page() {
  const { showLoading } = useLoading();

  useAsync(async () => {
    showLoading(true);
    const itens = await get({
      url: `/movie/popular?language=pt-BR&region=BR&page=1`,
    });

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

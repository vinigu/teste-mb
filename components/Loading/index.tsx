import { Backdrop, CircularProgress, Typography } from '@mui/material';

export default function Loading() {
  return (
    <Backdrop
      open
      sx={{
        gap: 2,
        zIndex: '9999999999999999999999999',
      }}
    >
      <CircularProgress sx={{ color: '#304BE9' }} data-testid="loading" />
      <Typography sx={{ fontFamily: 'Montserrat' }} color="#fff" data-testid="text-loading">
        Carregando...
      </Typography>
    </Backdrop>
  );
}

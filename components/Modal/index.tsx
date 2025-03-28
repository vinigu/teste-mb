import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal as MuiModal } from '@mui/material';

interface IModal {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  fullScreen?: boolean;
}

export default function Modal({ children, handleClose, isOpen, fullScreen }: IModal) {
  const newStyleFull = fullScreen && {
    width: '86vw',
    height: '100vh',
    top: 'unset',
    left: 'unset',
    transform: 'unset',
    mt: '56px',
    borderRadius: 'unset',
    overflowY: 'auto',
  };

  return (
    <MuiModal open={isOpen} onClose={handleClose}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '10px',
          maxWidth: '100%',
          [theme.breakpoints.down('md')]: {
            width: '80%',
            ...newStyleFull,
          },
        })}
      >
        <IconButton onClick={handleClose} sx={{ position: 'absolute', right: '10px', top: '10px' }}>
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </MuiModal>
  );
}

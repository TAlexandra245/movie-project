
import { useState } from 'react';
import './App.css'
import Movies from './components/Movies'
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useTheme, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createContext, useContext, useMemo } from 'react'
import { CssBaseline } from '@mui/material';

const ColorModeContext = createContext({
  toggleColorMode: () => { }
});

export function ChangeColor() {

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const themeMode = theme.palette.mode === 'dark' ? 'light' : 'dark';

  localStorage.setItem('themeMode', themeMode);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        color: 'text.primary',
        margin: '1em',
        transition: 'all 0.5s linear'
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

function App() {

  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        },
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ChangeColor></ChangeColor>
        <Movies />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}


export default App

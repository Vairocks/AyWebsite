import React from 'react';
import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import router from './components/router';
import {theme} from './utils/appTheme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;

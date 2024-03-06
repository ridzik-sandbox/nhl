import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import StatLeaders from './pages/StatLeaders';
import StatInsights from './pages/StatInsights';

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<StatLeaders />} />
          <Route path="/insights" element={<StatInsights />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

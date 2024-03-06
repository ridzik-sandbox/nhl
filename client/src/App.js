import * as React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SkaterTable from './pages/Skaters';
import Insights from './pages/Insights';

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<SkaterTable />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

import * as React from 'react';
import { Box, Toolbar, Container } from '@mui/material';
import StatsTable from '../components/StatsTable';
import Title from '../components/Title';

export default function StatLeaders() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Title>Stat Leaders</Title>
          <StatsTable />
        </Container>
      </Box>
    </Box>
  );
}

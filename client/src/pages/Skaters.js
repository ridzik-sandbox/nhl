import { useState, React } from 'react';
import { Box, Toolbar, Container, Paper, Grid, Card } from '@mui/material';
import SkaterTable from '../components/SkaterTable';
import SkaterProfile from '../components/SkaterProfile';
import Title from '../components/Title';
import { SkaterContext } from '../contexts/SkaterContext';

export default function StatLeaders() {
  const [id, setSkaterId] = useState('');
  return (
    <SkaterContext.Provider value={{ id, setSkaterId }}>
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
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 800,
                }}
              >
                <Title>Skating Leaders</Title>
                <SkaterTable />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 800,
                }}
              >
                <Title>Skater Profile</Title>
                {id && <SkaterProfile />}
                {!id && <h3>Select a skater</h3>}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </SkaterContext.Provider>
  );
}

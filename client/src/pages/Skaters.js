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
        <Container maxWidth="xl" sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12} sx={{ display: 'flex' }}>
            <Paper sx={{ p: 2, flexFlow: 'row nowrap' }}>
              <Title>Stat Leaders</Title>
              <SkaterTable />
            </Paper>
            <Card sx={{ p: 2, flexFlow: 'row nowrap', border: 'solid 1px red' }}>
              <Title>Skater Profile</Title>
              {id && <SkaterProfile />}
            </Card>
          </Grid>
        </Container>
      </Box>
    </SkaterContext.Provider>
  );
}

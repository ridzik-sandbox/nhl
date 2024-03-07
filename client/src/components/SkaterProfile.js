import { useContext, React } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { GET_SKATER } from '../queries/StatsQuery';
import { SkaterContext } from '../contexts/SkaterContext';
import Title from '../components/Title';

export default function SkaterProfile() {
  const skater = useContext(SkaterContext);
  const { id } = skater;

  const { loading, error, data } = useQuery(GET_SKATER, {
    variables: { id: id },
  });

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <Grid>
      <Grid>
        <Box
          component="img"
          sx={{
            height: 300,
            width: 300,
          }}
          src={data.skater.headshot}
        />
      </Grid>
      <Grid sx={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between' }}>
        <Grid>
          <Grid sx={{ mt: 2 }}>
            <Typography variant="h6">{data.skater.firstName.default}</Typography>
          </Grid>
          <Grid>
            <Typography variant="h4">{data.skater.lastName.default}</Typography>
          </Grid>
        </Grid>
        <Grid sx={{ pr: 4 }}>
          <Typography color="text.secondary" variant="h2">
            #{data.skater.sweaterNumber}
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between' }}>
        <Grid sx={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-start' }}>
          <Box
            component="img"
            sx={{
              height: 40,
              width: 40,
            }}
            src={data.skater.teamLogo}
          />
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {data.skater.teamAbbrev} {data.skater.teamName.default}
          </Typography>
        </Grid>
        <Grid>
          <Typography color="text.secondary" variant="h6" sx={{ mt: 1, pr: 6 }}>
            {data.skater.position}
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ mt: 2 }}>
        <Title>23-24 Season</Title>
        <Grid
          sx={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between', pb: 1 }}
        >
          <Grid>
            <Typography color="text.primary">Goals</Typography>
          </Grid>
          <Grid>
            <Typography color="text.primary">Assists</Typography>
          </Grid>
          <Grid>
            <Typography color="text.primary">Points</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid sx={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-between' }}>
          <Grid>
            <Typography color="text.secondary">{data.skater.goals}</Typography>
          </Grid>
          <Grid>
            <Typography color="text.secondary">{data.skater.assists}</Typography>
          </Grid>
          <Grid>
            <Typography color="text.secondary">{data.skater.points}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

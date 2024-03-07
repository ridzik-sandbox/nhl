import { useContext, React } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Button } from '@mui/material';
import { GET_SKATER } from '../queries/StatsQuery';
import { SkaterContext } from '../contexts/SkaterContext';

export default function SkaterProfile() {
  const skater = useContext(SkaterContext);
  const { id } = skater;
  console.log(id);
  const { loading, error, data } = useQuery(GET_SKATER, {
    variables: { id: id },
  });

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <Box>
      <Box
        component="img"
        sx={{
          height: 100,
          width: 100,
          ml: 2,
        }}
        src={data.skater.headshot}
      />
    </Box>
  );
}

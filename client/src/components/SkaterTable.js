import { useContext, React } from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@apollo/client';
import { GET_SKATERS } from '../queries/StatsQuery';
import { SkaterContext } from '../contexts/SkaterContext';

export default function SkaterTable() {
  const { loading, error, data } = useQuery(GET_SKATERS);

  const { id, setSkaterId } = useContext(SkaterContext);

  const columns = [
    {
      field: 'fullName',
      headerName: 'Name',
      width: 180,
      renderCell: (params) => (
        <Button
          variant="text"
          size="small"
          onClick={() => {
            setSkaterId(params.row.id);
          }}
        >
          {params.row.firstName.default || ''} {params.row.lastName.default || ''}
        </Button>
      ),
    },
    {
      field: 'teamAbbrev',
      headerName: 'Team',
      type: 'string',
      width: 110,
      renderCell: (params) => (
        <>
          {params.row.teamAbbrev}
          <Box
            component="img"
            sx={{
              height: 35,
              width: 35,
              ml: 2,
            }}
            src={params.row.teamLogo}
          />
        </>
      ),
    },
    {
      field: 'assists',
      headerName: 'Assists',
      type: 'number',
      width: 130,
      editable: true,
    },
    {
      field: 'goals',
      headerName: 'Goals',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'points',
      headerName: 'Points',
      type: 'number',
      width: 110,
      editable: true,
    },
  ];

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={data.skaters}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        checkboxSelection={false}
        hideFooterSelectedRowCount={true}
      />
    </Box>
  );
}

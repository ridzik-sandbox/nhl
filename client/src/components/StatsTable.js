import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@apollo/client';
import { GET_SKATERS } from '../queries/StatsQuery';

const columns = [
  {
    field: 'fullName',
    headerName: 'Name',
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName.default || ''} ${params.row.lastName.default || ''}`,
  },
  {
    field: 'assists',
    headerName: 'Assists',
    type: 'number',
    width: 110,
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

export default function StatsTable() {
  const { loading, error, data } = useQuery(GET_SKATERS);

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <React.Fragment>
      <Box sx={{ height: 900, width: '100%' }}>
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
          disableRowSelectionOnClick
        />
      </Box>
    </React.Fragment>
  );
}

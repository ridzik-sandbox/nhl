import * as React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard as DashboardIcon, People as PeopleIcon } from '@mui/icons-material';

const navList = [
  { linkTitle: 'Stat Leaders', linkHref: '/', icon: <PeopleIcon /> },
  { linkTitle: 'Insights', linkHref: '/insights', icon: <DashboardIcon /> },
];

export const listItems = (
  <React.Fragment>
    {navList.map((nav, idx) => (
      <ListItemButton key={idx} component="a" href={nav.linkHref}>
        <ListItemIcon>{nav.icon}</ListItemIcon>
        <ListItemText primary={nav.linkTitle} />
      </ListItemButton>
    ))}
  </React.Fragment>
);

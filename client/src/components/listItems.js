import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

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

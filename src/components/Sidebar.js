import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FeedbackIcon from '@mui/icons-material/Feedback';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../Assets/Logotemp.png";

const drawerWidth = 50;

function Sidebar() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleListItemClick = (text) => {
    setActiveItem(text);
  };

  const iconColor = (text) => activeItem === text ? '#1e88e5' : 'white';  // Blue color for active item, white for inactive

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#171717',
          color: 'white'
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '64px',
          //borderBottom: '1px solid white'
        }}
      >
        <img src={logo} alt="Site Logo" style={{ height: '40px' }} />
      </Box>
      <List sx={{ flexGrow: 1 }}>
        {['Home', 'Dashboard', 'Activity', 'Orders', 'Feedback'].map((text, index) => (
          <ListItem
            button
            key={text}
            sx={{
              justifyContent: 'center',
              padding: '20px 0',
              backgroundColor: activeItem === text ? '#333' : 'inherit'
            }}
            onClick={() => handleListItemClick(text)}
          >
            <ListItemIcon sx={{ color: iconColor(text), minWidth: 'auto' }}>
              {index === 0 ? <HomeIcon /> : index === 1 ? <DashboardIcon /> : index === 2 ? <BarChartIcon /> : index === 3 ? <ListAltIcon /> : <FeedbackIcon />}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <ListItem
        button
        sx={{
          justifyContent: 'center',
          padding: '20px 0'
        }}
      >
        <ListItemIcon sx={{ color: 'white', minWidth: 'auto' }}>
          <LogoutIcon />
        </ListItemIcon>
      </ListItem>
    </Drawer>
  );
}

export default Sidebar;

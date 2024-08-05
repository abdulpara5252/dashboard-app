import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EventNoteIcon from '@mui/icons-material/EventNote';
import StarIcon from '@mui/icons-material/Star';

const items = [
    { text: 'Goals', icon: <EmojiEventsIcon style={{ color: '#f44336' }} /> },
    { text: 'Popular Dishes', icon: <RestaurantMenuIcon style={{ color: '#3f51b5' }} /> },
    { text: 'Menus', icon: <MenuBookIcon style={{ color: '#00bcd4' }} /> },
    { text: 'Events', icon: <EventNoteIcon style={{ color: '#ff9800' }} /> },
    { text: 'Favorites', icon: <StarIcon style={{ color: '#ffd700' }} /> },
];

function Goals() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Quick Actions
                </Typography>
                <List>
                    {items.map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}

export default Goals;

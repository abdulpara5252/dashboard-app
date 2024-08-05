import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function StatsCard({ title, value, change, positive, icon: Icon }) {
    return (
        <Card>
            <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" gutterBottom>
                        {title}
                    </Typography>
                    {Icon && <Icon sx={{ fontSize: 30, color: '#fff' }} />}
                </Box>
                <Typography variant="h4" sx={{ color: '#fff', fontSize: '2rem', fontWeight: 'bold' }}>{value}</Typography>
                <Box display="flex" alignItems="center" color={positive ? 'green' : 'red'}>
                    {positive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                    <Typography variant="body2" color="textSecondary">
                        {change}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default StatsCard;

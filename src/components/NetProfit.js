import React from 'react';
import { Box, Typography } from '@mui/material';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const NetProfit = () => {
    const percentage = 70;

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                Net Profit
            </Typography>
            <div className='profit-price'>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant="h5" sx={{ color: '#fff', fontSize: '2rem', fontWeight: 'bold' }}>
                            $6759.25
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#00e676', display: 'flex', alignItems: 'center' }}>
                            <ArrowUpwardIcon sx={{ marginBottom: 1, marginRight: 0.5 }} /> 3% this week
                        </Typography>
                    </Box>
                    <Box sx={{ width: '30%', display: 'flex', alignItems: 'center', height: '60%', marginTop: '15px' }}>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                        })} />
                    </Box>
                </Box>
            </div>
        </Box>
    );
};

export default NetProfit;

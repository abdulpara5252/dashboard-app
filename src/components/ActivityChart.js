import React, { useEffect, useRef } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ActivityChart = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Array.from({ length: 20 }, (_, i) => i + 1),
                datasets: [
                    {
                        label: 'Activity',
                        data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 15000)),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        type: 'category',
                        ticks: {
                            color: '#fff',
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#fff',
                        },
                    },
                },
            },
        });

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <Box sx={{ height: '50%' }}>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                       Activity
                    </Typography>
                    <canvas ref={canvasRef} style={{ width: '20%', height: '20%' }}></canvas>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ActivityChart;

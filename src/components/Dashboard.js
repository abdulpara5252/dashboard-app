import React from 'react';
import { Grid, Typography, Box, Card } from '@mui/material';
import OrdersTable from './OrdersTable';
import Feedback from './Feedback';
import Goals from './Goals';
import ActivityChart from './ActivityChart';
import StatsCard from './StatsCard';
import NetProfit from './NetProfit';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import AssessmentIcon from '@mui/icons-material/Assessment';
import '../../src/App.css';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 1 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard title="Total Orders" value="75" change="3%" positive icon={ShoppingBasketIcon} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard title="Total Delivered" value="70" change="3%" negative icon={LocalShippingIcon} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard title="Total Cancelled" value="5" change="3%" positive icon={EventBusyIcon} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard title="Total Revenue" value="$12k" change="3%" negative icon={AssessmentIcon} />
            </Grid>
            <Grid item xs={12}>
              <div className='activity-chart'>
                <Card sx={{ height: '100%' }}>
                  <ActivityChart />
                </Card>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ height: '100%' }}>
                <OrdersTable />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className='net-profit-chart'>
                <Card sx={{ height: '100%' }}>
                  <NetProfit />
                </Card>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className='quick-action'>
                <Card sx={{ height: '100%' }}>
                  <Goals />
                </Card>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ height: '100%' }}>
                <Feedback />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';
import user from "../Assets/37.jpg";
import user1 from "../Assets/1.jpg";
import user2 from "../Assets/17.jpg";
import user3 from "../Assets/60.jpg";
import user4 from "../Assets/61.jpg";
import user5 from "../Assets/86.jpg";
import user6 from "../Assets/79.jpg";
const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', img: user},
  { customer: 'Jane Cooper', orderNo: '48965786', amount: '$365.02', status: 'Delivered', img: user1 },
  { customer: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled', img: user2 },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending', img: user3 },
  { customer: 'Cody Fisher', orderNo: '95715820', amount: '$545.00', status: 'Delivered', img: user4 },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', img: user5 },
  { customer: 'John Doe', orderNo: '12345678', amount: '$78.00', status: 'Delivered', img: user6 },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: '#fff',
}));

const statusStyles = {
  Delivered: { color: '#00e676' },
  Cancelled: { color: '#ff1744' },
  Pending: { color: '#ffa726' },
};

const OrdersTable = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
        Recent Orders
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Customer</StyledTableCell>
              <StyledTableCell>Order No.</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <StyledTableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={order.img} alt={order.customer} sx={{ marginRight: 2 }} />
                    {order.customer}
                  </Box>
                </StyledTableCell>
                <StyledTableCell>{order.orderNo}</StyledTableCell>
                <StyledTableCell>{order.amount}</StyledTableCell>
                <StyledTableCell>
                  <Typography sx={statusStyles[order.status]}>{order.status}</Typography>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrdersTable;

import React from 'react';
import { Box, Avatar, Typography, Grid, Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import user from "../Assets/cust1.jpg";
import user1 from "../Assets/cust2.jpg";
import user2 from "../Assets/cust3.jpg";

const feedbacks = [
  {
    name: 'Jenny Wilson',
    img: user,
    rating: 5,
    review: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'
  },
  {
    name: 'Dianne Russell',
    img: user1,
    rating: 5,
    review: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service!'
  },
  {
    name: 'Devon Lane',
    img: user2,
    rating: 4.5,
    review: 'Normally wings are wings, but theirs are even meatier and tender.'
  }
];

const Feedback = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
        Customer's Feedback
      </Typography>
      <Grid container spacing={2}>
        {feedbacks.map((feedback, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', backgroundColor: '#29293A', borderRadius: 2 }}>
                <Avatar src={feedback.img} alt={feedback.name} sx={{ width: 50, height: 50, marginRight: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ color: '#fff' }}>
                    {feedback.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1.5 }}>
                    {[...Array(Math.floor(feedback.rating))].map((_, i) => (
                      <StarIcon key={i} sx={{ color: '#ffc107' }} />
                    ))}
                    {feedback.rating % 1 !== 0 && <StarHalfIcon sx={{ color: '#ffc107' }} />}
                  </Box>
                  <Typography variant="body2" sx={{ color: '#ccc' }}>
                    {feedback.review}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {index < feedbacks.length - 1 && (
              <Grid item xs={12}>
                <Divider sx={{ borderColor: '#444' }} />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default Feedback;

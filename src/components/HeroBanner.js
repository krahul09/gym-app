import React from 'react';
import { Box , Stack , Typography , Button} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpeg';


const HeroBanner = () => (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } , mt:'60px' }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat , Smile <br /> And Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={3}>
        Check out the most effective exercises personalized for you
      </Typography>
      <Button variant="contained" color="error" sx={{width:"200px" , height:"50px" , mb:"20px"}} href="#exercises">Explore Exercise</Button>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.3', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" justifyContent="center" />
    </Box>
  );
export default HeroBanner

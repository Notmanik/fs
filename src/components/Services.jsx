import { Box, Container, Grid, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    number: '01',
    title: 'Business Digitization',
    description: 'We assess how your business operates today and identify where processes, tasks, and data can be digitized. From workflows to approvals, we help structure your operations into a clear, scalable system.'
  },
  {
    number: '02',
    title: 'Website Creation',
    description: 'We design and build fast, reliable websites and eCommerce stores that support your business goals — from lead generation to online sales.'
  },
  {
    number: '03',
    title: 'Search Engine Optimization',
    description: 'We help your website rank higher through technical improvements, content optimization, and ongoing performance tracking.'
  },
  {
    number: '04',
    title: 'ERP Setup & Training',
    description: 'We set up your ERP software — a system that brings your accounting, sales, inventory, and operations into one place — and train your team to use it confidently every day.'
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate('/contact');
  };

  return (
    <Box 
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        py: 10,
        backgroundColor: '#000000',
        color: 'white',
      }}
      id="services"
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              mb: 3,
              color: 'white',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Our Services
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: '700px',
              mx: 'auto',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.6,
            }}
          >
            Comprehensive solutions to digitize, optimize, and scale your business
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                onClick={handleServiceClick}
                sx={{
                  position: 'relative',
                  height: '100%',
                  backgroundColor: 'rgba(20, 20, 20, 0.4)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '40px 30px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #00ffff, #00d4d4, #00a8a8)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s ease',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1), transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none',
                  },
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    backgroundColor: 'rgba(30, 30, 30, 0.6)',
                    borderColor: 'rgba(0, 255, 255, 0.4)',
                    boxShadow: '0 20px 60px rgba(0, 255, 255, 0.2), inset 0 0 40px rgba(0, 255, 255, 0.05)',
                    '&::before': {
                      transform: 'scaleX(1)',
                    },
                    '&::after': {
                      opacity: 1,
                    },
                    '& .service-number': {
                      transform: 'scale(1.1)',
                      textShadow: '0 0 20px rgba(52, 192, 121, 0.6)',
                    },
                    '& .service-arrow': {
                      transform: 'translate(5px, -5px)',
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Number */}
                <Typography
                  className="service-number"
                  sx={{
                    fontSize: { xs: '4rem', md: '5rem' },
                    fontWeight: 900,
                    color: 'transparent',
                    WebkitTextStroke: '3px #34C079',
                    textStroke: '3px #34C079',
                    fontFamily: '"Impact", "Arial Black", sans-serif',
                    letterSpacing: '0.05em',
                    lineHeight: 1,
                    mb: 2,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {service.number}
                </Typography>

                {/* Title */}
                <Typography 
                  variant="h5" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 600,
                    mb: 2,
                    color: 'white',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {service.title}
                </Typography>

                {/* Description */}
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3,
                    color: 'rgba(255, 255, 255, 0.75)',
                    lineHeight: 1.8,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {service.description}
                </Typography>

                {/* Arrow Icon */}
                <Box
                  className="service-arrow"
                  sx={{
                    position: 'absolute',
                    bottom: '30px',
                    right: '30px',
                    opacity: 0.5,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ArrowForward 
                    sx={{ 
                      fontSize: '2rem',
                      color: '#00ffff',
                    }} 
                  />
                </Box>

                {/* Decorative corner element */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 255, 255, 0.15), transparent)',
                    filter: 'blur(20px)',
                    pointerEvents: 'none',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
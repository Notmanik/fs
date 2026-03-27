import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Hero = () => {
  const roles = [
    'business process',
    'operation',
    'workflow',
    'function',
    'system',
    'department',
    'activity'
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 15, md: 20 },
        pb: 10,
        textAlign: 'center',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        '@keyframes float1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(100px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-50px, 100px) scale(0.9)' },
          '75%': { transform: 'translate(80px, 50px) scale(1.05)' },
        },
        '@keyframes float2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-80px, 100px) scale(1.2)' },
          '66%': { transform: 'translate(120px, -80px) scale(0.85)' },
        },
        '@keyframes float3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '20%': { transform: 'translate(-120px, -60px) scale(1.15)' },
          '40%': { transform: 'translate(100px, 80px) scale(0.95)' },
          '60%': { transform: 'translate(-80px, 120px) scale(1.1)' },
          '80%': { transform: 'translate(60px, -100px) scale(0.9)' },
        },
        '@keyframes float4': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-100px, -100px) scale(1.3)' },
        },
        '@keyframes float5': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(90px, 90px) scale(0.8)' },
          '50%': { transform: 'translate(-110px, -70px) scale(1.2)' },
          '75%': { transform: 'translate(70px, -90px) scale(0.95)' },
        },
      }}
    >
      {/* Floating turquoise blobs */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Blob 1 */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4), rgba(0, 179, 179, 0.2), transparent)',
            filter: 'blur(60px)',
            animation: 'float1 20s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
        
        {/* Blob 2 */}
        <Box
          sx={{
            position: 'absolute',
            top: '60%',
            right: '10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.35), rgba(0, 204, 204, 0.15), transparent)',
            filter: 'blur(70px)',
            animation: 'float2 25s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
        
        {/* Blob 3 */}
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 230, 230, 0.38), rgba(0, 150, 150, 0.18), transparent)',
            filter: 'blur(55px)',
            animation: 'float3 30s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
        
        {/* Blob 4 */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '25%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.32), rgba(0, 179, 179, 0.16), transparent)',
            filter: 'blur(65px)',
            animation: 'float4 22s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
        
        {/* Blob 5 */}
        <Box
          sx={{
            position: 'absolute',
            top: '25%',
            right: '30%',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 240, 240, 0.36), rgba(0, 160, 160, 0.14), transparent)',
            filter: 'blur(58px)',
            animation: 'float5 28s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
      </Box>

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
            mb: 4,
            color: 'white',
            lineHeight: 1.2,
            display: 'inline-block',
            transition: 'all 0.4s ease',
          }}
        >
          Integrate every  {' '}
          <Box
            component="span"
            sx={{
              fontWeight: 400,
              opacity: fade ? 1 : 0,
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              transform: fade ? 'translateY(0)' : 'translateY(10px)',
              display: 'inline-block',
              minWidth: '180px',
              textAlign: 'center',
              background: 'linear-gradient(90deg, #00ffff, #00d4d4, #00a8a8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {roles[index]}
          </Box>{' '}
          into one connected platform.
        </Typography>

        <Typography
          variant="h6"
          paragraph
          sx={{
            mb: 4,
            maxWidth: '800px',
            mx: 'auto',
            color: 'rgba(255, 255, 255, 0.85)',
            transition: 'color 0.3s ease',
          }}
        >
          Built for freelancers and growing businesses at every stage.
        </Typography>

        <Button
          variant="outlined"
          size="large"
          onClick={scrollToServices}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            textTransform: 'none',
            color: 'white',
            borderColor: 'white',
            borderWidth: '2px',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'white',
            },
          }}
        >
         Learn More
        </Button>

        <Typography
          variant="overline"
          display="block"
          sx={{
            mt: 4,
            fontWeight: 500,
            letterSpacing: 1,
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          JOIN THE COMPANIES THAT TRUST US
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
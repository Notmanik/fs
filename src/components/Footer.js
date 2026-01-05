import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import logo from '../content/Faylen Logo Simple alpha 2.png';

const Footer = () => {
  const services = [
    { name: 'Accounting', path: '/accounting' },
    { name: 'CRM', path: '/CRM' },
    { name: 'Sales', path: '/sales' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Marketing', path: '/marketing' },
    { name: 'Website' },
    { name: '& More, Tailored for You', path:'/contact' },
  
   
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000000',
        color: 'white',
        pt: 8,
        pb: 4,
        '@keyframes floatFooter1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(100px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-50px, 100px) scale(0.9)' },
          '75%': { transform: 'translate(80px, 50px) scale(1.05)' },
        },
        '@keyframes floatFooter2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-80px, 100px) scale(1.2)' },
          '66%': { transform: 'translate(120px, -80px) scale(0.85)' },
        },
        '@keyframes floatFooter3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-100px, -100px) scale(1.15)' },
        },
        '@keyframes floatFooter4': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(90px, 90px) scale(0.8)' },
          '50%': { transform: 'translate(-110px, -70px) scale(1.2)' },
          '75%': { transform: 'translate(70px, -90px) scale(0.95)' },
        },
      }}
    >
      {/* Floating turquoise blobs for footer */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3), rgba(0, 179, 179, 0.15), transparent)',
            filter: 'blur(60px)',
            animation: 'floatFooter1 18s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '15%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 240, 240, 0.35), rgba(0, 160, 160, 0.12), transparent)',
            filter: 'blur(65px)',
            animation: 'floatFooter2 22s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 230, 230, 0.28), rgba(0, 150, 150, 0.14), transparent)',
            filter: 'blur(55px)',
            animation: 'floatFooter3 20s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            right: '25%',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.32), rgba(0, 190, 190, 0.16), transparent)',
            filter: 'blur(58px)',
            animation: 'floatFooter4 24s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Services Box */}
        <Box
          sx={{
            backgroundColor: 'rgba(30, 30, 30, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            p: 4,
            mb: 3,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              borderBottom: '2px solid white',
              display: 'inline-block',
              pb: 1,
            }}
          >
            Our Services
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 3,
              mt: 2,
            }}
          >
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.path}
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#00ffff',
                  },
                }}
              >
                {service.name}
              </Link>
            ))}
          </Box>
        </Box>

        {/* Main Footer Content - Two Columns Centered */}
        <Grid 
          container 
          spacing={6} 
          sx={{ 
            mb: 4,
            justifyContent: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            mb: 4,
          }}
        >
          {/* Column 1 - Company Info */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                cursor: 'pointer',
                mb: 2
              }}
            >
              <img 
                src={logo} 
                alt="Faylen Systems" 
                style={{ 
                  height: '120px',
                  width: 'auto',
                  display: 'block'
                }} 
              />
            </Box>
            
            <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}>
             Our Socials
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
              <Link 
                href="#" 
                sx={{
                  color: 'white',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#00ffff' }
                }}
              >
                <Facebook sx={{ fontSize: '1.8rem' }} />
              </Link>
              <Link 
                href="#" 
                sx={{
                  color: 'white',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#00ffff' }
                }}
              >
                <Instagram sx={{ fontSize: '1.8rem' }} />
              </Link>
              <Link 
                href="#" 
                sx={{
                  color: 'white',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#00ffff' }
                }}
              >
                <LinkedIn sx={{ fontSize: '1.8rem' }} />
              </Link>
              <Link 
                href="#" 
                sx={{
                  color: 'white',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#00ffff' }
                }}
              >
                <Twitter sx={{ fontSize: '1.8rem' }} />
              </Link>
            </Box>
          </Grid>

          {/* Column 2 - Pour les entreprises */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2, textDecoration: 'underline' }}>
              For businesses
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                Custom Solutions 
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}>
            Seamless Integration 
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}>
            Scalable & Future-Ready
            </Typography>
            <Button
              variant="outlined"
              href="https://calendar.app.google/oHhU3dJtPUTQBwUQ6"
              sx={{
                color: 'white',
                borderColor: 'white',
                borderWidth: '2px',
                borderRadius: '8px',
                px: 3,
                py: 0.5,
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: '#00ffff',
                  color: '#00ffff',
                }
              }}
            >
             Make an Appointment
            </Button>
          </Grid>
        </Grid>

        {/* Bottom Footer */}
        <Box 
          sx={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
            pt: 4,  
            mt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
            <Link
              href="#sitemap"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                '&:hover': { color: '#00ffff' }
              }}
            >
              Privacy
            </Link>
            <Box component="span" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>|</Box>
            <Link
              href="#confidentialite"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                '&:hover': { color: '#00ffff' }
              }}
            >
              Legal Notice
            </Link>
            <Box component="span" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>|</Box>
            <Link
              href="#mentions"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                '&:hover': { color: '#00ffff' }
              }}
            >
             Cookies
            </Link>
          </Box>

          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
  Copyright © {new Date().getFullYear()} 
  <Link 
    href="/" 
    sx={{ 
      color: '#00ffff',
      textDecoration: 'none',
      '&:hover': { 
        textDecoration: 'underline' 
      }
    }}
  >
     . Faylen Systems
  </Link>
  . All Rights Reserved.
</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
import { AppBar, Box, Button, Container, Paper, Toolbar } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../content/Faylen Logo Simple alpha 2.png';

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'Accounting', path: '/accounting' },
    { name: 'CRM', path: '/crm' },
    { name: 'Sales', path: '/sales' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Marketing', path: '/marketing' },
    { name: 'Website' },
    { name: '& More, Tailored for You', path: '/contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      color="transparent"
      elevation={0} 
      sx={{ 
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(10, 10, 10, 0.3)',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer'
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
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            <Button 
              component={Link} 
              to="/" 
              color="inherit" 
              sx={{ color: 'white', textTransform: 'none', fontSize: '1rem' }}
            >
              Home
            </Button>

            {/* Services Dropdown */}
            <Box
              sx={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Button 
                color="inherit" 
                sx={{ 
                  color: 'white', 
                  textTransform: 'none', 
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                Services
              </Button>

              {/* Dropdown Menu */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  pt: 1,
                  opacity: servicesOpen ? 1 : 0,
                  visibility: servicesOpen ? 'visible' : 'hidden',
                  transition: 'opacity 0.3s ease, visibility 0.3s ease',
                  pointerEvents: servicesOpen ? 'auto' : 'none',
                }}
              >
                <Paper
                  sx={{
                    minWidth: '220px',
                    backgroundColor: '#000000',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 255, 255, 0.15)',
                    transform: servicesOpen ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {services.map((service, index) => (
                    <Box
                      key={index}
                      component={Link}
                      to={service.path}
                      sx={{
                        display: 'block',
                        px: 3,
                        py: 1.5,
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        borderBottom: index < services.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 255, 255, 0.05)',
                          color: '#00ffff',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          position: 'relative',
                          display: 'inline-block',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-2px',
                            left: 0,
                            width: '0%',
                            height: '2px',
                            backgroundColor: '#00ffff',
                            transition: 'width 0.4s ease',
                          },
                          '&:hover::after': {
                            width: '100%',
                          },
                        }}
                      >
                        {service.name}
                      </Box>
                    </Box>
                  ))}
                </Paper>
              </Box>
            </Box>

            
            <Button 
              color="inherit" 
              to="/contact"
              href="/contact" 
              sx={{ color: 'white', textTransform: 'none', fontSize: '1rem' }}
            >
              Contact
            </Button>
            
            <Button 
              variant="outlined" 
              href="https://calendar.app.google/oHhU3dJtPUTQBwUQ6"
              sx={{ 
                color: 'white',
                borderColor: 'white',
                textTransform: 'none',
                fontSize: '1rem',
                px: 2.5,
                py: 0.5,
                borderRadius: '8px',
                ml: 2,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white'
                }
              }}
            >
              Make an Appointment
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
import { Check, VolumeOff, VolumeUp } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import odooVideo from '../content/Odoo Accounting.mov';

const Mailing = () => {
  // CTA section role animation
  const ctaRoles = ['accounting','compliance','reporting','books','audits','finances','controls'];
  const [ctaRoleIndex, setCtaRoleIndex] = useState(0);
  const [ctaRoleFade, setCtaRoleFade] = useState(true);
  
  // Video mute control
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // CTA role animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCtaRoleFade(false);
      setTimeout(() => {
        setCtaRoleIndex((prev) => (prev + 1) % ctaRoles.length);
        setCtaRoleFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [ctaRoles.length]);

  // Ensure video plays on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <Box>
      {/* Section 1: Hero with Animation */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          color: 'white',
          textAlign: 'center',
          pt: { xs: 15, md: 20 },
          pb: 10,
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
        {/* Floating blobs */}
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                top: i === 1 ? '10%' : i === 2 ? '60%' : i === 3 ? '40%' : i === 4 ? 'auto' : '25%',
                bottom: i === 4 ? '20%' : 'auto',
                left: i === 1 || i === 3 || i === 4 ? ['15%', '15%', '50%', '25%', ''][i - 1] : 'auto',
                right: i === 2 || i === 5 ? ['', '10%', '', '', '30%'][i - 1] : 'auto',
                width: `${[400, 500, 350, 450, 380][i - 1]}px`,
                height: `${[400, 500, 350, 450, 380][i - 1]}px`,
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(0, ${[255, 255, 230, 255, 240][i - 1]}, ${[255, 255, 230, 255, 240][i - 1]}, ${[0.4, 0.35, 0.38, 0.32, 0.36][i - 1]}), rgba(0, ${[179, 204, 150, 179, 160][i - 1]}, ${[179, 204, 150, 179, 160][i - 1]}, ${[0.2, 0.15, 0.18, 0.16, 0.14][i - 1]}), transparent)`,
                filter: `blur(${[60, 70, 55, 65, 58][i - 1]}px)`,
                animation: `float${i} ${[20, 25, 30, 22, 28][i - 1]}s ease-in-out infinite`,
                mixBlendMode: 'screen',
              }}
            />
          ))}
        </Box>

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '3rem', md: '5rem' }, 
              fontWeight: 900, 
              mb: 3,
              fontFamily: '"Outfit", "Inter", "Helvetica Neue", "Arial", sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
           Accounting
          </Typography>
          <Typography variant="h5" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.9)' }}>
          So clean that you will experience work differently and avoid the frustration of slow interfaces, overflowing email inboxes, and endless data.
          </Typography>
          
          
        </Container>
      </Box>

      {/* Black Border Between Sections */}
      <Box sx={{ height: '50px', backgroundColor: '#000000' }} />

      {/* Section 2: Video + Text with Animation */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#000000',
          py: 10,
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
        {/* Floating blobs - Behind everything */}
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                top: i === 1 ? '10%' : i === 2 ? '60%' : i === 3 ? '40%' : i === 4 ? 'auto' : '25%',
                bottom: i === 4 ? '20%' : 'auto',
                left: i === 1 || i === 3 || i === 4 ? ['15%', '15%', '50%', '25%', ''][i - 1] : 'auto',
                right: i === 2 || i === 5 ? ['', '10%', '', '', '30%'][i - 1] : 'auto',
                width: `${[400, 500, 350, 450, 380][i - 1]}px`,
                height: `${[400, 500, 350, 450, 380][i - 1]}px`,
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(0, ${[255, 255, 230, 255, 240][i - 1]}, ${[255, 255, 230, 255, 240][i - 1]}, ${[0.4, 0.35, 0.38, 0.32, 0.36][i - 1]}), rgba(0, ${[179, 204, 150, 179, 160][i - 1]}, ${[179, 204, 150, 179, 160][i - 1]}, ${[0.2, 0.15, 0.18, 0.16, 0.14][i - 1]}), transparent)`,
                filter: `blur(${[60, 70, 55, 65, 58][i - 1]}px)`,
                animation: `float${i} ${[20, 25, 30, 22, 28][i - 1]}s ease-in-out infinite`,
                mixBlendMode: 'screen',
              }}
            />
          ))}
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Video Box with Mute Control */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              mb: 6,
              boxShadow: '0 20px 60px rgba(0, 255, 255, 0.3)',
              border: '2px solid rgba(0, 255, 255, 0.3)',
            }}
          >
            <Box
              component="video"
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              src={odooVideo}
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            >
              Your browser does not support the video tag.
            </Box>

            
          </Box>

          {/* Text Box - Below Video */}
          <Box
            sx={{
              maxWidth: '900px',
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                mb: 4,
                color: 'white',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
             Accountants waste time working the old way
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: '1.1rem',
                }}
                >
                Odoo Accounting eliminates manual data entry by using advanced AI-powered invoice data capture with up to a 98% recognition rate. In most cases, all you need to do is review and validate the invoice, saving hours of repetitive work and reducing human errors. This allows your finance team to focus more on analysis and decision-making rather than data entry.
                </Typography>

                <Typography
                variant="body1"
                sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: '1.1rem',
                }}
                >
                Designed for global use, Odoo Accounting works in almost every country through built-in Fiscal Localization Packages. These packages automatically configure your system with the correct taxes, chart of accounts, fiscal positions, and legal reports based on your country, enabling you to start operating immediately without complex setup. Bank reconciliation becomes effortless with Odoo's direct integration with over 28,000 banks worldwide.
                </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: '1.1rem',
              }}
            >
              Some of its features include:
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 2,
                mb: 4,
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              {[
                'Worldwide Compatibility',
                'Real-time Reporting',
                'Automated Follow-ups',
                'Dynamic Taxes and Accounts',
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    backgroundColor: 'rgba(0, 255, 255, 0.05)',
                    padding: '12px 20px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 255, 255, 0.2)',
                  }}
                >
                  <Check sx={{ color: '#00ffff', flexShrink: 0, fontSize: '1.5rem' }} />
                  <Typography sx={{ fontWeight: '500', color: 'white', fontSize: '1rem' }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: '1.1rem',
              }}
            >
              Transactions are synced automatically, removing the need for manual imports. The system also tracks late payments, helps you identify overdue invoices, and allows you to send automated payment reminders via email, post, or SMS based on predefined follow-up rules.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Section 3: CTA Box with Floating Blobs */}
      <Box sx={{ backgroundColor: '#000000', py: 8, px: 3 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              backgroundColor: '#000000',
              borderRadius: '30px',
              p: { xs: 4, md: 6 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 3,
              position: 'relative',
              overflow: 'hidden',
              '@keyframes floatCta1': {
                '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                '25%': { transform: 'translate(80px, -40px) scale(1.1)' },
                '50%': { transform: 'translate(-40px, 80px) scale(0.95)' },
                '75%': { transform: 'translate(60px, 40px) scale(1.05)' },
              },
              '@keyframes floatCta2': {
                '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                '50%': { transform: 'translate(-70px, -70px) scale(1.15)' },
              },
              '@keyframes floatCta3': {
                '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                '33%': { transform: 'translate(-50px, 60px) scale(1.08)' },
                '66%': { transform: 'translate(70px, -50px) scale(0.92)' },
              },
            }}
          >
            {/* Floating blobs inside CTA box */}
            <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, borderRadius: '30px', overflow: 'hidden' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '20%',
                  left: '10%',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 255, 255, 0.35), rgba(0, 179, 179, 0.18), transparent)',
                  filter: 'blur(50px)',
                  animation: 'floatCta1 18s ease-in-out infinite',
                  mixBlendMode: 'screen',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '10%',
                  right: '10%',
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 240, 240, 0.3), rgba(0, 160, 160, 0.15), transparent)',
                  filter: 'blur(55px)',
                  animation: 'floatCta2 20s ease-in-out infinite',
                  mixBlendMode: 'screen',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 230, 230, 0.32), rgba(0, 150, 150, 0.16), transparent)',
                  filter: 'blur(48px)',
                  animation: 'floatCta3 22s ease-in-out infinite',
                  mixBlendMode: 'screen',
                }}
              />
            </Box>

            <Box sx={{ flex: 1, minWidth: '300px', position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2.5rem' },
                  color: 'white',
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
               We handle your{' '}
                <Box
                  component="span"
                  sx={{
                    opacity: ctaRoleFade ? 1 : 0,
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    transform: ctaRoleFade ? 'translateY(0)' : 'translateY(10px)',
                    display: 'inline-block',
                    color: '#00ffff',
                  }}
                >
                  {ctaRoles[ctaRoleIndex]}
                </Box>{' '}
                so your finances stay investor-ready.
              </Typography>
            </Box>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Button
                variant="outlined"
                href="https://calendar.app.google/oHhU3dJtPUTQBwUQ6"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  color: 'white',
                  borderColor: 'white',
                  borderWidth: '2px',
                  borderRadius: '50px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white',
                  },
                }}
              >
                Schedule an Appointment
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Mailing;
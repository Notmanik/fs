import { Box, Container, Grid, Typography } from '@mui/material';

const stats = [
  { number: '6500+', label: 'Projets réalisés' },
  { number: '400+', label: 'Clients satisfaits' },
  { number: '50K+', label: 'Abonnés' }
];

const Stats = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: 'primary.main', 
        color: 'white',
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index} sx={{ textAlign: 'center' }}>
              <Typography 
                variant="h2" 
                component="div" 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 1
                }}
              >
                {stat.number}
              </Typography>
              <Typography variant="subtitle1">
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
import { Avatar, Box, Grid, Paper, Slider, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMemo, useState } from 'react';

// Import logos
import slackLogo from '../content/logos/slack.jpeg';
import asanaLogo from '../content/logos/asana.jpeg';
import teamsLogo from '../content/logos/microsoft teams.jpeg';
import driveLogo from '../content/logos/google.jpeg';
import salesforceLogo from '../content/logos/salesforce.jpeg';
import jiraLogo from '../content/logos/jira.jpeg';
import zohoLogo from '../content/logos/zoho.jpeg';
import wixLogo from '../content/logos/wix.jpeg';
import pipedriveLogo from '../content/logos/pipedrive.jpeg';
import hubspotLogo from '../content/logos/hubspot.jpeg';
import clickupLogo from '../content/logos/clickup.jpeg';
import calendlyLogo from '../content/logos/calendly.jpeg';
import wrikeLogo from '../content/logos/wrike.jpeg';
import miroLogo from '../content/logos/miro.jpeg';
import mondayLogo from '../content/logos/monday.jpeg';

// App data (logos + base prices in €)
const apps = [
  { id: 'slack', name: 'Slack', logo: slackLogo, basePrice: 10 },
  { id: 'asana', name: 'Asana', logo: asanaLogo, basePrice: 18 },
  { id: 'teams', name: 'Microsoft Teams', logo: teamsLogo, basePrice: 7 },
  { id: 'drive', name: 'Google Drive', logo: driveLogo, basePrice: 7 },
  { id: 'salesforce', name: 'Salesforce', logo: salesforceLogo, basePrice: 25 },
  { id: 'jira', name: 'Jira', logo: jiraLogo, basePrice: 8 },
  { id: 'zoho', name: 'Zoho', logo: zohoLogo, basePrice: 20 },
  { id: 'wix', name: 'Wix', logo: wixLogo, basePrice: 25 },
  { id: 'pipedrive', name: 'Pipedrive', logo: pipedriveLogo, basePrice: 26 },
  { id: 'hubspot', name: 'HubSpot', logo: hubspotLogo, basePrice: 30 },
  { id: 'clickup', name: 'ClickUp', logo: clickupLogo, basePrice: 9 },
  { id: 'calendly', name: 'Calendly', logo: calendlyLogo, basePrice: 10 },
  { id: 'wrike', name: 'Wrike', logo: wrikeLogo, basePrice: 20 },
  { id: 'miro', name: 'Miro', logo: miroLogo, basePrice: 12 },
  { id: 'monday', name: 'Monday', logo: mondayLogo, basePrice: 14 },
];

// Styled card
const AppCard = styled(Paper)(({ theme, selected }) => ({
  textAlign: 'center',
  padding: theme.spacing(1.5),
  cursor: 'pointer',
  borderRadius: 16,
  border: selected ? '2px solid #00ffff' : '1px solid rgba(255, 255, 255, 0.2)',
  backgroundColor: selected ? 'rgba(0, 255, 255, 0.15)' : 'rgba(30, 30, 30, 0.6)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  '&:hover': { 
    boxShadow: '0 8px 24px rgba(0, 255, 255, 0.3)', 
    transform: 'translateY(-4px)',
    borderColor: '#00ffff',
  },
}));

// Custom styled tooltip
const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  '& .MuiTooltip-tooltip': {
    backgroundColor: 'rgba(0, 20, 20, 0.95)',
    color: '#00ffff',
    fontSize: '0.95rem',
    fontWeight: 600,
    border: '2px solid #00ffff',
    borderRadius: '12px',
    padding: '10px 18px',
    boxShadow: '0 4px 20px rgba(0, 255, 255, 0.4)',
  },
  '& .MuiTooltip-arrow': {
    color: '#00ffff',
  },
}));

const PricingEstimator = () => {
  const [selectedApps, setSelectedApps] = useState([]);
  const [userCount, setUserCount] = useState(21);

  const handleAppClick = (id) => {
    setSelectedApps((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const totalPrice = useMemo(() => {
    const base = apps
      .filter((a) => selectedApps.includes(a.id))
      .reduce((sum, a) => sum + a.basePrice, 0);
    return base * userCount;
  }, [selectedApps, userCount]);

  const yearlySavings = totalPrice * 12;

  return (
    <Box 
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000000',
        py: 8,
      }}
    >
      {/* Floating background blobs */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent)',
            filter: 'blur(60px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 230, 230, 0.18), transparent)',
            filter: 'blur(70px)',
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
            background: 'radial-gradient(circle, rgba(0, 200, 200, 0.15), transparent)',
            filter: 'blur(55px)',
          }}
        />
      </Box>

      <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center', px: 4, position: 'relative', zIndex: 1 }}>
        {/* Emphasized message box */}
        <Box
          sx={{
            mb: 6,
            p: 3,
            backgroundColor: 'rgba(20, 20, 20, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '2px solid rgba(0, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 255, 255, 0.15)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 500,
              lineHeight: 1.6,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              '& strong': {
                color: '#00ffff',
                fontWeight: 700,
              },
            }}
          >
            We handle <strong>setup, customization, tailoring</strong> and <strong>team training</strong> upfront—so you only pay a <strong>negligible monthly fee</strong> going forward.
          </Typography>
        </Box>

        <Typography 
          variant="h5" 
          fontWeight={600} 
          gutterBottom
          sx={{ color: 'white', mb: 4 }}
        >
          Which apps do you use?
        </Typography>

        {/* App grid */}
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          {apps.map((app) => (
            <Grid item xs={3} sm={2} md={2} key={app.id}>
              <StyledTooltip
                title={`${app.name} €${app.basePrice} per user`}
                arrow
                placement="top"
              >
                <AppCard
                  selected={selectedApps.includes(app.id)}
                  onClick={() => handleAppClick(app.id)}
                >
                  <Avatar
                    src={app.logo}
                    alt={app.name}
                    sx={{ width: 48, height: 48, mx: 'auto', mb: 1 }}
                  />
                </AppCard>
              </StyledTooltip>
            </Grid>
          ))}
        </Grid>

        {/* Slider */}
        <Typography 
          variant="h6" 
          gutterBottom
          sx={{ color: 'white' }}
        >
          How many people work at your company?
        </Typography>
        <Slider
          value={userCount}
          onChange={(e, val) => setUserCount(val)}
          min={1}
          max={100}
          valueLabelDisplay="auto"
          sx={{ 
            width: 400, 
            mx: 'auto', 
            mb: 4,
            color: '#00ffff',
            '& .MuiSlider-thumb': {
              backgroundColor: '#00ffff',
              border: '2px solid #000',
            },
            '& .MuiSlider-track': {
              backgroundColor: '#00ffff',
            },
            '& .MuiSlider-rail': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        />
        <Typography 
          variant="body1" 
          gutterBottom
          sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
        >
          Team size: <strong style={{ color: '#00ffff' }}>{userCount}</strong>
        </Typography>

        {/* Price box */}
        <Paper
          elevation={3}
          sx={{
            py: 4,
            px: 3,
            borderRadius: '20px',
            backgroundColor: 'rgba(30, 30, 30, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 255, 255, 0.2)',
            maxWidth: 500,
            mx: 'auto',
            boxShadow: '0 8px 32px rgba(0, 255, 255, 0.2)',
          }}
        >
          <Typography 
            variant="subtitle1" 
            sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            Total price per month for a team of {userCount} users:
          </Typography>
          <Typography 
            variant="h3" 
            fontWeight={700} 
            gutterBottom
            sx={{ 
              color: '#00ffff',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            }}
          >
            € {totalPrice.toLocaleString('en-US')}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            {selectedApps.length} app{selectedApps.length !== 1 && 's'} selected
          </Typography>
        </Paper>

        {/* Yearly saving */}
        <Typography
          variant="h6"
          sx={{ 
            mt: 3,
            color: '#00ffff',
            fontWeight: 600,
          }}
        >
          Save € {yearlySavings.toLocaleString('en-US')}/year
        </Typography>

        {/* Disclaimer */}
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 4,
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.7rem',
            fontStyle: 'italic',
          }}
        >
          * Prices shown are indicative median values as of January 2026 and may vary based on scope, complexity, and local requirements.
        </Typography>
      </Box>
    </Box>
  );
};

export default PricingEstimator;
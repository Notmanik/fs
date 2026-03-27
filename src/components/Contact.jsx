import { Box, Button, Card, CardContent, Checkbox, Container, FormControlLabel, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Email } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const Contact = () => {
  const solutions = [
    'CRM & sales automation',
    'accounting & invoicing',
    'inventory & operations',
    'marketing automation',
    'HR & payroll',
    'project management',
    'website & eCommerce'
  ];

  // Country codes with flags (alphabetically sorted)
  const countryCodes = [
    { code: '+93', country: 'Afghanistan', flag: '🇦🇫' },
    { code: '+355', country: 'Albania', flag: '🇦🇱' },
    { code: '+213', country: 'Algeria', flag: '🇩🇿' },
    { code: '+376', country: 'Andorra', flag: '🇦🇩' },
    { code: '+244', country: 'Angola', flag: '🇦🇴' },
    { code: '+54', country: 'Argentina', flag: '🇦🇷' },
    { code: '+374', country: 'Armenia', flag: '🇦🇲' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+43', country: 'Austria', flag: '🇦🇹' },
    { code: '+994', country: 'Azerbaijan', flag: '🇦🇿' },
    { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
    { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
    { code: '+375', country: 'Belarus', flag: '🇧🇾' },
    { code: '+32', country: 'Belgium', flag: '🇧🇪' },
    { code: '+501', country: 'Belize', flag: '🇧🇿' },
    { code: '+229', country: 'Benin', flag: '🇧🇯' },
    { code: '+975', country: 'Bhutan', flag: '🇧🇹' },
    { code: '+591', country: 'Bolivia', flag: '🇧🇴' },
    { code: '+387', country: 'Bosnia', flag: '🇧🇦' },
    { code: '+267', country: 'Botswana', flag: '🇧🇼' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+673', country: 'Brunei', flag: '🇧🇳' },
    { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
    { code: '+226', country: 'Burkina Faso', flag: '🇧🇫' },
    { code: '+257', country: 'Burundi', flag: '🇧🇮' },
    { code: '+855', country: 'Cambodia', flag: '🇰🇭' },
    { code: '+237', country: 'Cameroon', flag: '🇨🇲' },
    { code: '+1', country: 'Canada', flag: '🇨🇦' },
    { code: '+238', country: 'Cape Verde', flag: '🇨🇻' },
    { code: '+236', country: 'Central African Republic', flag: '🇨🇫' },
    { code: '+235', country: 'Chad', flag: '🇹🇩' },
    { code: '+56', country: 'Chile', flag: '🇨🇱' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+57', country: 'Colombia', flag: '🇨🇴' },
    { code: '+269', country: 'Comoros', flag: '🇰🇲' },
    { code: '+242', country: 'Congo', flag: '🇨🇬' },
    { code: '+506', country: 'Costa Rica', flag: '🇨🇷' },
    { code: '+385', country: 'Croatia', flag: '🇭🇷' },
    { code: '+53', country: 'Cuba', flag: '🇨🇺' },
    { code: '+357', country: 'Cyprus', flag: '🇨🇾' },
    { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' },
    { code: '+253', country: 'Djibouti', flag: '🇩🇯' },
    { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+503', country: 'El Salvador', flag: '🇸🇻' },
    { code: '+240', country: 'Equatorial Guinea', flag: '🇬🇶' },
    { code: '+291', country: 'Eritrea', flag: '🇪🇷' },
    { code: '+372', country: 'Estonia', flag: '🇪🇪' },
    { code: '+251', country: 'Ethiopia', flag: '🇪🇹' },
    { code: '+679', country: 'Fiji', flag: '🇫🇯' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+241', country: 'Gabon', flag: '🇬🇦' },
    { code: '+220', country: 'Gambia', flag: '🇬🇲' },
    { code: '+995', country: 'Georgia', flag: '🇬🇪' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+233', country: 'Ghana', flag: '🇬🇭' },
    { code: '+30', country: 'Greece', flag: '🇬🇷' },
    { code: '+502', country: 'Guatemala', flag: '🇬🇹' },
    { code: '+224', country: 'Guinea', flag: '🇬🇳' },
    { code: '+245', country: 'Guinea-Bissau', flag: '🇬🇼' },
    { code: '+592', country: 'Guyana', flag: '🇬🇾' },
    { code: '+509', country: 'Haiti', flag: '🇭🇹' },
    { code: '+504', country: 'Honduras', flag: '🇭🇳' },
    { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
    { code: '+36', country: 'Hungary', flag: '🇭🇺' },
    { code: '+354', country: 'Iceland', flag: '🇮🇸' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+98', country: 'Iran', flag: '🇮🇷' },
    { code: '+964', country: 'Iraq', flag: '🇮🇶' },
    { code: '+353', country: 'Ireland', flag: '🇮🇪' },
    { code: '+972', country: 'Israel', flag: '🇮🇱' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+225', country: 'Ivory Coast', flag: '🇨🇮' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+962', country: 'Jordan', flag: '🇯🇴' },
    { code: '+7', country: 'Kazakhstan', flag: '🇰🇿' },
    { code: '+254', country: 'Kenya', flag: '🇰🇪' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+996', country: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: '+856', country: 'Laos', flag: '🇱🇦' },
    { code: '+371', country: 'Latvia', flag: '🇱🇻' },
    { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
    { code: '+266', country: 'Lesotho', flag: '🇱🇸' },
    { code: '+231', country: 'Liberia', flag: '🇱🇷' },
    { code: '+218', country: 'Libya', flag: '🇱🇾' },
    { code: '+423', country: 'Liechtenstein', flag: '🇱🇮' },
    { code: '+370', country: 'Lithuania', flag: '🇱🇹' },
    { code: '+352', country: 'Luxembourg', flag: '🇱🇺' },
    { code: '+853', country: 'Macau', flag: '🇲🇴' },
    { code: '+389', country: 'Macedonia', flag: '🇲🇰' },
    { code: '+261', country: 'Madagascar', flag: '🇲🇬' },
    { code: '+265', country: 'Malawi', flag: '🇲🇼' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+960', country: 'Maldives', flag: '🇲🇻' },
    { code: '+223', country: 'Mali', flag: '🇲🇱' },
    { code: '+356', country: 'Malta', flag: '🇲🇹' },
    { code: '+222', country: 'Mauritania', flag: '🇲🇷' },
    { code: '+230', country: 'Mauritius', flag: '🇲🇺' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+373', country: 'Moldova', flag: '🇲🇩' },
    { code: '+377', country: 'Monaco', flag: '🇲🇨' },
    { code: '+976', country: 'Mongolia', flag: '🇲🇳' },
    { code: '+382', country: 'Montenegro', flag: '🇲🇪' },
    { code: '+212', country: 'Morocco', flag: '🇲🇦' },
    { code: '+258', country: 'Mozambique', flag: '🇲🇿' },
    { code: '+95', country: 'Myanmar', flag: '🇲🇲' },
    { code: '+264', country: 'Namibia', flag: '🇳🇦' },
    { code: '+977', country: 'Nepal', flag: '🇳🇵' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
    { code: '+505', country: 'Nicaragua', flag: '🇳🇮' },
    { code: '+227', country: 'Niger', flag: '🇳🇪' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+850', country: 'North Korea', flag: '🇰🇵' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+968', country: 'Oman', flag: '🇴🇲' },
    { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '+970', country: 'Palestine', flag: '🇵🇸' },
    { code: '+507', country: 'Panama', flag: '🇵🇦' },
    { code: '+675', country: 'Papua New Guinea', flag: '🇵🇬' },
    { code: '+595', country: 'Paraguay', flag: '🇵🇾' },
    { code: '+51', country: 'Peru', flag: '🇵🇪' },
    { code: '+63', country: 'Philippines', flag: '🇵🇭' },
    { code: '+48', country: 'Poland', flag: '🇵🇱' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+974', country: 'Qatar', flag: '🇶🇦' },
    { code: '+40', country: 'Romania', flag: '🇷🇴' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+250', country: 'Rwanda', flag: '🇷🇼' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+221', country: 'Senegal', flag: '🇸🇳' },
    { code: '+381', country: 'Serbia', flag: '🇷🇸' },
    { code: '+248', country: 'Seychelles', flag: '🇸🇨' },
    { code: '+232', country: 'Sierra Leone', flag: '🇸🇱' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
    { code: '+386', country: 'Slovenia', flag: '🇸🇮' },
    { code: '+252', country: 'Somalia', flag: '🇸🇴' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+211', country: 'South Sudan', flag: '🇸🇸' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+249', country: 'Sudan', flag: '🇸🇩' },
    { code: '+597', country: 'Suriname', flag: '🇸🇷' },
    { code: '+268', country: 'Swaziland', flag: '🇸🇿' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+963', country: 'Syria', flag: '🇸🇾' },
    { code: '+886', country: 'Taiwan', flag: '🇹🇼' },
    { code: '+992', country: 'Tajikistan', flag: '🇹🇯' },
    { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
    { code: '+66', country: 'Thailand', flag: '🇹🇭' },
    { code: '+228', country: 'Togo', flag: '🇹🇬' },
    { code: '+216', country: 'Tunisia', flag: '🇹🇳' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+993', country: 'Turkmenistan', flag: '🇹🇲' },
    { code: '+256', country: 'Uganda', flag: '🇺🇬' },
    { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
    { code: '+971', country: 'United Arab Emirates', flag: '🇦🇪' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+598', country: 'Uruguay', flag: '🇺🇾' },
    { code: '+998', country: 'Uzbekistan', flag: '🇺🇿' },
    { code: '+678', country: 'Vanuatu', flag: '🇻🇺' },
    { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
    { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
    { code: '+967', country: 'Yemen', flag: '🇾🇪' },
    { code: '+260', country: 'Zambia', flag: '🇿🇲' },
    { code: '+263', country: 'Zimbabwe', flag: '🇿🇼' }
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+32',
    phone: '',
    message: '',
    agreeToPrivacy: false
  });

  const [captcha, setCaptcha] = useState({ text: '', canvas: null });
  const [captchaInput, setCaptchaInput] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % solutions.length);
        setFade(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [solutions.length]);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 180;
    canvas.height = 60;
    const ctx = canvas.getContext('2d');

    // Background with gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f0f0f0');
    gradient.addColorStop(1, '#e0e0e0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}, 0.3)`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Generate random text
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let text = '';
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Draw text with variation
    ctx.font = 'bold 32px Arial';
    ctx.textBaseline = 'middle';
    
    for (let i = 0; i < text.length; i++) {
      ctx.save();
      const x = 20 + i * 25;
      const y = 30;
      const angle = (Math.random() - 0.5) * 0.4;
      
      ctx.translate(x, y);
      ctx.rotate(angle);
      
      // Random color for each character
      const r = Math.floor(Math.random() * 100);
      const g = Math.floor(Math.random() * 100);
      const b = Math.floor(Math.random() * 100);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }

    // Add noise dots
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`;
      ctx.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        2,
        2
      );
    }

    setCaptcha({ text, canvas: canvas.toDataURL() });
  };

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (captchaInput.toLowerCase() !== captcha.text.toLowerCase()) {
      alert('Incorrect security code. Please try again.');
      generateCaptcha();
      setCaptchaInput('');
      return;
    }

    if (!formData.agreeToPrivacy) {
      alert('Please agree to the privacy policy');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/meeovgdz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          message: formData.message
        })
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+32',
          phone: '',
          message: '',
          agreeToPrivacy: false
        });
        setCaptchaInput('');
        generateCaptcha();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
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
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: 4,
              color: 'white',
              lineHeight: 1.3,
            }}
          >
            Contact us for{' '}
            <Box
              component="span"
              sx={{
                fontWeight: 400,
                opacity: fade ? 1 : 0,
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                transform: fade ? 'translateY(0)' : 'translateY(10px)',
                display: 'inline-block',
                minWidth: '280px',
                textAlign: 'center',
                background: 'linear-gradient(90deg, #00ffff, #00d4d4, #00a8a8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {solutions[index]}
            </Box>{' '}
            tailored to your business.
          </Typography>

          <Typography
            variant="h6"
            paragraph
            sx={{
              mb: 4,
              maxWidth: '900px',
              mx: 'auto',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.8,
            }}
          >
            During the meeting, we take time to understand how your business operates today — your teams, workflows, tools, and pain points. We discuss where manual work, disconnected software, or inefficiencies slow you down, and what you want to improve as you scale.
          </Typography>

          <Typography
            variant="h6"
            paragraph
            sx={{
              maxWidth: '900px',
              mx: 'auto',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.8,
            }}
          >
            Based on this, we walk you through how Odoo can be structured around your business, which modules make sense for your needs, and what level of customization or automation is required. You'll leave the call with a clear view of the solution, implementation approach, timelines, and what the next steps would look like.
          </Typography>
        </Container>
      </Box>

      {/* Section 2: Contact Information and Form */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#000000',
          py: 10,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Left Side - Contact Card */}
            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  backgroundColor: 'rgba(20, 20, 20, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 255, 255, 0.2)',
                  p: 4,
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative gradient blob */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent)',
                filter: 'blur(40px)',
              }}
            />

            <CardContent sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 4,
                  color: 'white',
                }}
              >
                Make an Appointment
              </Typography>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  mb: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  color: 'white',
                  borderColor: '#00ffff',
                  borderWidth: '2px',
                  borderRadius: '12px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'rgba(0, 255, 255, 0.1)',
                    borderColor: '#00ffff',
                  },
                }}
              >
                Schedule Now
              </Button>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  mb: 4,
                  color: 'white',
                }}
              >
                Contact Us:
              </Typography>

              {/* Email */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Email sx={{ color: '#00ffff', fontSize: '1.8rem' }} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'white',
                    }}
                  >
                    Email
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '1.1rem',
                    ml: 6,
                  }}
                >
                  sarthak@faylensystems.com
                </Typography>
              </Box>

              {/* Decorative graphic element */}
              <Box
                sx={{
                  mt: 6,
                  p: 3,
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 200, 200, 0.05))',
                  border: '1px solid rgba(0, 255, 255, 0.2)',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  📞 Get in Touch
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  Fill out the form and we'll get back to you within 24 hours
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side - Contact Form */}
        <Grid item xs={12} md={7}>
          <Card
            sx={{
              backgroundColor: 'rgba(20, 20, 20, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(0, 255, 255, 0.2)',
              p: 4,
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 4,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Contact Form
              </Typography>

              <form onSubmit={handleSubmit}>
                {/* Name Fields */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'white',
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  Name *
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          '& fieldset': {
                            borderColor: 'rgba(0, 255, 255, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(0, 255, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#00ffff',
                          },
                        },
                        '& .MuiInputBase-input::placeholder': {
                          color: 'rgba(255, 255, 255, 0.5)',
                        },
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: 'rgba(255, 255, 255, 0.6)', mt: 0.5, display: 'block' }}
                    >
                      First name
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          '& fieldset': {
                            borderColor: 'rgba(0, 255, 255, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(0, 255, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#00ffff',
                          },
                        },
                        '& .MuiInputBase-input::placeholder': {
                          color: 'rgba(255, 255, 255, 0.5)',
                        },
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: 'rgba(255, 255, 255, 0.6)', mt: 0.5, display: 'block' }}
                    >
                      Last name
                    </Typography>
                  </Grid>
                </Grid>

                {/* Email */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'white',
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  Email *
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      '& fieldset': {
                        borderColor: 'rgba(0, 255, 255, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(0, 255, 255, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#00ffff',
                      },
                    },
                  }}
                />

                {/* Phone with Country Code */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'white',
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  Phone
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={4}>
                    <Select
                      fullWidth
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      sx={{
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(0, 255, 255, 0.3)',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(0, 255, 255, 0.5)',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#00ffff',
                        },
                        '& .MuiSvgIcon-root': {
                          color: 'white',
                        },
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            backgroundColor: 'rgba(20, 20, 20, 0.95)',
                            maxHeight: 300,
                            '& .MuiMenuItem-root': {
                              color: 'white',
                              '&:hover': {
                                backgroundColor: 'rgba(0, 255, 255, 0.1)',
                              },
                              '&.Mui-selected': {
                                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                              },
                            },
                          },
                        },
                      }}
                    >
                      {countryCodes.map((country, idx) => (
                        <MenuItem key={idx} value={country.code}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <span style={{ fontSize: '1.2rem' }}>{country.flag}</span>
                            <span>{country.code}</span>
                            <span style={{ marginLeft: '8px', opacity: 0.8 }}>{country.country}</span>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      fullWidth
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="123456789"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          '& fieldset': {
                            borderColor: 'rgba(0, 255, 255, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(0, 255, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#00ffff',
                          },
                        },
                        '& .MuiInputBase-input::placeholder': {
                          color: 'rgba(255, 255, 255, 0.5)',
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Message */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'white',
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  Message *
                </Typography>
                <TextField
                  fullWidth
                  name="message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      '& fieldset': {
                        borderColor: 'rgba(0, 255, 255, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(0, 255, 255, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#00ffff',
                      },
                    },
                  }}
                />

                {/* CAPTCHA */}
                <Box
                  sx={{
                    mb: 3,
                    p: 3,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 255, 255, 0.2)',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    CAPTCHA Security No in the Box *
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                    {captcha.canvas && (
                      <Box
                        sx={{
                          border: '2px solid rgba(0, 255, 255, 0.3)',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          backgroundColor: 'white',
                        }}
                      >
                        <img 
                          src={captcha.canvas} 
                          alt="CAPTCHA" 
                          style={{ display: 'block', width: '180px', height: '60px' }}
                        />
                      </Box>
                    )}
                    <Button
                      onClick={generateCaptcha}
                      sx={{
                        minWidth: 'auto',
                        p: 1,
                        color: '#00ffff',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 255, 255, 0.1)',
                        },
                      }}
                      title="Refresh CAPTCHA"
                    >
                      🔄
                    </Button>
                  </Box>
                  <TextField
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    required
                    placeholder="Type text here"
                    sx={{
                      mt: 2,
                      width: '100%',
                      maxWidth: '280px',
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        '& fieldset': {
                          borderColor: 'rgba(0, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 255, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00ffff',
                        },
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.5)',
                      },
                    }}
                  />
                </Box>

                {/* Privacy Policy */}
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleInputChange}
                      required
                      sx={{
                        color: 'rgba(255, 255, 255, 0.5)',
                        '&.Mui-checked': {
                          color: '#00ffff',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      I agree that my data will be processed in accordance with our privacy policy. *
                    </Typography>
                  }
                  sx={{ mb: 3 }}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 2,
                    fontSize: '1.1rem',
                    backgroundColor: '#00ffff',
                    color: '#000',
                    fontWeight: 700,
                    borderRadius: '12px',
                    textTransform: 'uppercase',
                    '&:hover': {
                      backgroundColor: '#00d4d4',
                    },
                  }}
                >
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
</Box>
);
};
export default Contact;
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Mailing from './components/Accounting';
import PricingSlider from './components/PricingSlider';
import Services from './components/Services';
import './styles/App.css';
import CRM from './components/CRM';
import Sales from './components/Sales';
import Inventory from './components/Inventory';
import Marketing from './components/Marketing';
import Contact from './components/Contact';
import CTVApp from './pages/CTV/CTVApp';

const theme = createTheme({
  palette: {
    primary: { main: '#000000' },
    secondary: { main: '#ffffff' },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '2rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <main>
                      <Hero />
                      <Services />
                      <PricingSlider />
                    </main>
                    <Footer />
                  </>
                }
              />
              <Route path="/accounting" element={<><Header /><main><Mailing /></main><Footer /></>} />
              <Route path="/crm" element={<><Header /><main><CRM/></main><Footer /></>} />
              <Route path="/sales" element={<><Header /><main><Sales/></main><Footer /></>} />
              <Route path="/inventory" element={<><Header /><main><Inventory/></main><Footer /></>} />
              <Route path="/marketing" element={<><Header /><main><Marketing/></main><Footer /></>} />
              <Route path="/contact" element={<><Header /><main><Contact/></main><Footer /></>} />
              <Route path="/ctv" element={<CTVApp />} />
            </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
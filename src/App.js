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
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Services />
                    <PricingSlider />
                  </>
                }
              />
              <Route path="/accounting" element={<Mailing />} />
              <Route path="/crm" element={<CRM/>} />
              <Route path="/sales" element={<Sales/>} />
              <Route path="/inventory" element={<Inventory/>} />
              <Route path="/marketing" element={<Marketing/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
import { useEffect, useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { countries } from 'countries-list';

const solutions = [
  'data-driven CTV insights that actually improve performance.',
  'a deep dive into your CTV data and strategy.',
  'actionable insights on your CTV campaigns and spend.',
  'a smarter, data-backed approach to CTV performance.',
  'clarity on what’s really driving your CTV results.',
];

const allCountryData = Object.values(countries)
  .map((c) => ({
    code: `+${Array.isArray(c.phone) ? c.phone[0] : c.phone}`,
    country: c.name,
    flag: c.emoji,
  }))
  .sort((a, b) => a.country.localeCompare(b.country));

export default function Contact() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    message: '',
    agreeToPrivacy: false,
  });

  const [captcha, setCaptcha] = useState({ text: '', canvas: null });
  const [captchaInput, setCaptchaInput] = useState('');

  // Searchable dropdown state
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % solutions.length);
        setFade(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const generateCaptcha = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 180;
    canvas.height = 60;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f0f0f0');
    gradient.addColorStop(1, '#e0e0e0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}, 0.3)`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let text = '';
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    ctx.font = 'bold 32px Arial';
    ctx.textBaseline = 'middle';
    
    for (let i = 0; i < text.length; i++) {
        ctx.save();
        const x = 20 + i * 25;
        const y = 30;
        const angle = (Math.random() - 0.5) * 0.4;
        ctx.translate(x, y);
        ctx.rotate(angle);
        const r = Math.floor(Math.random() * 100);
        const g = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillText(text[i], 0, 0);
        ctx.restore();
    }

    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`;
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }

    setCaptcha({ text, canvas: canvas.toDataURL() });
  };

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    
    if (name === 'phone') {
      const rawValue = value.replace(/\s+/g, '');
      const formattedValue = rawValue.replace(/(\d{5})/g, '$1 ').trim();
      setFormData((prev) => ({ ...prev, phone: formattedValue }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const filteredCountries = allCountryData.filter((c) =>
    c.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
    c.code.includes(countrySearch)
  );

  const selectedCountry = allCountryData.find(c => c.code === formData.countryCode) || allCountryData[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captchaInput.toLowerCase() !== captcha.text.toLowerCase()) {
      toast.error('Incorrect security code. Please try again.');
      generateCaptcha();
      setCaptchaInput('');
      return;
    }
    if (!formData.agreeToPrivacy) {
      toast.error('Please agree to the privacy policy');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/meeovgdz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+1',
          phone: '',
          message: '',
          agreeToPrivacy: false,
        });
        setCaptchaInput('');
        generateCaptcha();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h2 className="title">
            Contact us for{' '}
            <br />
            <span className={`animated-solution ${fade ? 'fade-in' : 'fade-out'}`}>
              {solutions[index]}
            </span>
          </h2>
          <p className="desc">
            During our call, we start by understanding your current media strategy, targeting approach, and campaign structure. We review how you're using CTV today — or where it fits within your broader mix.
          </p>
          <p className="desc">
            From there, we analyze your existing data to uncover inefficiencies, missed opportunities, and performance gaps. We focus on what’s actually happening beneath the surface. From audience behavior to delivery patterns.
          </p>
          <p className="desc">
            You’ll walk away with clear, data-backed insights and a strategic direction on how to optimize your campaigns, improve performance, and scale with confidence.
          </p>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-info-card">
          <div className="contact-blob"></div>
          <h3>Make an Appointment</h3>
          <button className="btn-secondary full-width">Schedule Now</button>

          <h4 className="info-title">Contact Us:</h4>
          <div className="email-block">
            <span className="email-icon">✉</span>
            <div className="email-details">
              <span>Email</span>
              <a href="mailto:sarthak@faylensystems.com">sarthak@faylensystems.com</a>
            </div>
          </div>

          <div className="touch-banner">
            <h4>📞 Get in Touch</h4>
            <p>Fill out the form and we'll get back to you within 24 hours</p>
          </div>
        </div>

        <div className="contact-form-card">
          <h3 className="form-header">Contact Form</h3>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-row">
              <div className="form-group">
                <label>First name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Last name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <div className="phone-row">
                <div className="custom-country-select" ref={dropdownRef}>
                  <div 
                    className="country-select-trigger"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  >
                    {selectedCountry.flag} {selectedCountry.code}
                  </div>
                  {isCountryDropdownOpen && (
                    <div className="country-dropdown-menu">
                      <input
                        type="text"
                        placeholder="Search country..."
                        className="country-search-input"
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        autoFocus
                      />
                      <ul className="country-list">
                        {filteredCountries.map((country, idx) => (
                          <li
                            key={idx}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, countryCode: country.code }));
                              setIsCountryDropdownOpen(false);
                              setCountrySearch('');
                            }}
                          >
                            {country.flag} {country.country} ({country.code})
                          </li>
                        ))}
                        {filteredCountries.length === 0 && (
                          <li className="no-results">No countries found</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="captcha-box">
              <label>CAPTCHA Security No in the Box *</label>
              <div className="captcha-row">
                {captcha.canvas && (
                  <div className="captcha-img">
                    <img src={captcha.canvas} alt="CAPTCHA" />
                  </div>
                )}
                <button type="button" className="btn-icon" onClick={generateCaptcha} title="Refresh CAPTCHA">
                  🔄
                </button>
              </div>
              <input
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
                placeholder="Type text here"
                className="captcha-input"
              />
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={handleInputChange}
                  required
                />
                <span>I agree that my data will be processed in accordance with our privacy policy. *</span>
              </label>
            </div>

            <button type="submit" className="btn-primary full-width">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

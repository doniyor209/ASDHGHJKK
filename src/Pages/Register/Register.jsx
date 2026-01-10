import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Register.css';
import ThemeToggle from '../../Components/ThemeToggle/ThemeToggle';

function Register() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const apiUrl = 'https://68c8141e5d8d9f5147343917.mockapi.io/Users';

  const [form, setForm] = useState({
    name: '',
    surname: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [langOpen, setLangOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    if (!form.name || !form.phone || !form.password) {
      setMessage(t('Please fill in Name, Phone, and Password'));
      setIsError(true);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage(t('Passwords do not match'));
      setIsError(true);
      return;
    }

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          surname: form.surname,
          address: form.address,
          phone: form.phone,
          password: form.password
        })
      });

      if (!res.ok) throw new Error();

      setMessage(t('Registration successful! Redirecting to login...'));
      setIsError(false);

      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error) {
      setMessage(t('Registration failed. Try again.'));
      setIsError(true);
    }
  };

  return (
    <div className="page">
      <ThemeToggle /> {/* Переключатель тёмной/светлой темы */}

      <div className="form-box">
        {/* Селект языка */}
        <div className={`language-select ${langOpen ? 'open' : ''}`}>
          <div className="selected-lang" onClick={() => setLangOpen(!langOpen)}>
            {i18n.language.toUpperCase()}
          </div>
          <div className={`lang-options ${langOpen ? 'open' : ''}`}>
            <div onClick={() => handleLanguageChange('en')}>EN</div>
            <div onClick={() => handleLanguageChange('ru')}>RU</div>
            <div onClick={() => handleLanguageChange('uz')}>UZ</div>
          </div>
        </div>

        <h2>{t('Create your account')}</h2>

        {message && (
          <p className={`message ${isError ? 'error' : 'success'}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t('Name')}
            value={form.name}
            onChange={handleChange}
            required
          /> <br />
          <br />


          <input
            type="text"
            name="surname"
            placeholder={t('Surname')}
            value={form.surname}
            onChange={handleChange}
          /> <br />
          <br />

          <input
            type="text"
            name="address"
            placeholder={t('Address')}
            value={form.address}
            onChange={handleChange}
          /> <br />
          <br />

          <input
            type="text"
            name="phone"
            placeholder={t('Phone (+998...)')}
            value={form.phone}
            onChange={handleChange}
            required
          /> <br />
          <br />

          <input
            type="password"
            name="password"
            placeholder={t('Password')}
            value={form.password}
            onChange={handleChange}
            required
          /> <br />
          <br />

          <input
            type="password"
            name="confirmPassword"
            placeholder={t('Confirm Password')}
            value={form.confirmPassword}
            onChange={handleChange}
            required
          /> <br />
          <br />

          <button type="submit">{t('Create Account')}</button>
        </form>

        <p className="footer-text">
          {t('Already have an account?')} <a href="/login">{t('Login')}</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
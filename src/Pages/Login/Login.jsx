import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Login.css';
import ThemeToggle from '../../Components/ThemeToggle/ThemeToggle';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const from = location.state?.from?.pathname || '/';

  const [form, setForm] = useState({ phone: '', password: '' });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const apiUrl = 'https://68c8141e5d8d9f5147343917.mockapi.io/Users';

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

    try {
      const res = await fetch(apiUrl);
      const users = await res.json();

      const user = users.find(
        (u) => u.phone === form.phone && u.password === form.password
      );

      if (user) {
        localStorage.setItem('token', 'fake-token-from-mockapi');
        setMessage(t('Login successful! Redirecting...'));
        setIsError(false);

        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500);
      } else {
        setMessage(t('Invalid phone or password'));
        setIsError(true);
      }
    } catch (error) {
      setMessage(t('Connection error. Check MockAPI URL.'));
      setIsError(true);
    }
  };

  return (
    <div className="page">
      <ThemeToggle /> {/* Переключатель темы */}

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

        <h2>{t('Login')}</h2>
        <p className="subtitle">{t('Welcome!')}</p>

        {message && (
          <p className={`message ${isError ? 'error' : 'success'}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
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

          <button type="submit">{t('Login')}</button>
        </form>

        <p className="footer-text">
          {t('No account?')} <a href="/register">{t('Register')}</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
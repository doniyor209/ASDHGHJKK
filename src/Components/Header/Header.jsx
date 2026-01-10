import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './Header.css';
import ThemeToggle from '../../Components/ThemeToggle/ThemeToggle'; // ← Добавлено

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [langOpen, setLangOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/a.png" alt="ABDO Education Logo" />
        </div>

        {/* Навигационные pill-кнопки */}
        <nav className="nav-pills">
          <Link to="/" className="pill-btn">{t('Home')}</Link>
          <Link to="/about" className="pill-btn">{t('About us')}</Link>
          <Link to="/othercenters" className="pill-btn">{t('Other centers')}</Link>
          <Link to="/contact" className="pill-btn">{t('Contact us')}</Link>
        </nav>

        {/* Правая часть */}
        <div className="right-section">
          {/* Язык */}
          <div className="lang-wrapper">
            <div className="pill-btn lang-selected" onClick={() => setLangOpen(!langOpen)}>
              {i18n.language.toUpperCase()}
            </div>
            {langOpen && (
              <div className="lang-dropdown">
                <div onClick={() => changeLanguage('ru')}>Русский</div>
                <div onClick={() => changeLanguage('en')}>English</div>
                <div onClick={() => changeLanguage('uz')}>O‘zbekcha</div>
              </div>
            )}
          </div>

          {/* Кнопки входа */}
          <div className="auth-buttons">
            {token ? (
              <button className="pill-btn auth-register" onClick={logout}>
                {t('Logout')}
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button className="pill-btn auth-login">{t('Login')}</button>
                </Link>
                <Link to="/register">
                  <button className="pill-btn auth-register">{t('Register')}</button>
                </Link>
              </>
            )}
          </div>

          {/* ← НОВОЕ: Переключатель темы */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
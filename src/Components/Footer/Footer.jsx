import { useTranslation } from 'react-i18next';
import './Footer.css';
import ThemeToggle from '../../Components/ThemeToggle/ThemeToggle'; // ← Добавлено

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer fade-in-footer">
      <div className="container footer-content">

        <div className="footer-col">
          <h3>ABDO Education</h3>
          <p>{t('ABDO Education is an online learning platform designed to help students develop real-world skills in programming, technology, and digital careers.')}</p>
        </div>

        <div className="footer-col">
          <h4>{t('Quick Links')}</h4>
          <ul>
            <li>{t('Home')}</li>
            <li>{t('Other centers')}</li>
            <li>{t('About us')}</li>
            <li>{t('Contact us')}</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('Contact')}</h4>
          <p>Email: support@abdoeducation.com</p>
          <p>Phone: +998 88-701-95-75</p>
          <p>Phone: +998 33-702-97-77</p>
          <p>Location: Online Worldwide</p>
        </div>

        <div className="footer-col">
          <h4>{t('Follow Us')}</h4>
          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">Telegram</a>
            <a href="#">YouTube</a>
          </div>

          {/* ← НОВОЕ: Единый переключатель темы */}
          <ThemeToggle />
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 ABDO Education. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <section className="about">
        <div className="about-container">

          <h2 className="about-title">{t('About us')}</h2>

          <p className="about-intro">
            {t('We are a modern digital project designed to simplify daily tasks and make using the service as convenient as possible. We combine technology, design, and practicality to deliver high-quality results without extra hassle.')}
          </p>

          <div className="about-block">
            <h3>{t('Who we are')}</h3>
            <p>{t('We are a team of developers and designers creating functional and modern web solutions using the latest technologies and best practices for a stable, fast, and user-friendly service.')}</p>
            <p>{t('Our project was built from scratch with a focus on convenience and real user needs. We constantly analyze user experience and implement improvements based on feedback.')}</p>
          </div>

          <div className="about-block">
            <h3>{t('What we offer')}</h3>
            <p>{t('Our service provides convenient functionality to help you navigate and solve tasks efficiently, with attention to interface details and logic.')}</p>
            <ul>
              <li>✔ {t('Clear and intuitive interface')}</li>
              <li>✔ {t('High performance')}</li>
              <li>✔ {t('Modern and responsive design')}</li>
              <li>✔ {t('Works on all devices')}</li>
              <li>✔ {t('Regular updates and improvements')}</li>
            </ul>
          </div>

          <div className="about-block">
            <h3>{t('Our values and approach')}</h3>
            <p>{t('We believe that quality starts with an honest approach to the user. Transparency, responsibility, and attention to detail guide our work.')}</p>
            <p>{t('Quality over quantity. Each element is designed for convenience, safety, and stability. Our team constantly evolves and follows modern digital trends.')}</p>
          </div>

          <div className="about-end">
            <h3>{t('Who our service is for')}</h3>
            <p>{t('Our project is for people who value time, comfort, and simplicity. Suitable for beginners and those expecting high functionality.')}</p>
            <p>{t('In the future, we plan to expand platform features, add new functions, and improve user experience to keep the service relevant and useful.')}</p>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;

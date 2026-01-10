import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Home.css';
import ThemeToggle from '../../Components/ThemeToggle/ThemeToggle'; // ← Добавлено

function Home() {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));
  }, []);

  return (
    <div>
      <Header />

      <main style={{marginTop:"90px"}}>
      
       <section className="hero-new">
          <div className="hero-container">
            <img src="./b.png" alt="Rocket Robot" className="robot-left fade-in" />
            <div className="hero-content">
              <h1 className="hero-title fade-in">ABDO Education</h1>
              <h2 className="hero-subtitle fade-in">
                {t('The Path to Your Future')}  
              </h2>
              <button className="explore-btn fade-in">
                {t('Explore Courses')}
              </button>
            </div>

            <div className="hero-right">
              <img src="./c.png" alt="Waving Robot" className="robot-right fade-in" />

              <div className="lang-wrapper hero-lang">
                <div
                  className="pill-btn lang-selected"
                  onClick={() => setLangOpen(!langOpen)}
                >
                  {i18n.language.toUpperCase()} Translator
                </div>
                {langOpen && (
                  <div className="lang-dropdown">
                    <div onClick={() => changeLanguage('ru')}>RU Русский</div>
                    <div onClick={() => changeLanguage('en')}>EN English</div>
                    <div onClick={() => changeLanguage('uz')}>UZ O‘zbekcha</div>
                  </div>
                )}
              </div>

              {/* ← НОВОЕ: Переключатель темы в hero */}
              <ThemeToggle />
            </div>
          </div>

          {/* Остальной код без изменений */}
          <div className="courses-preview">
            <div className="course-preview-card fade-in">
              <h3>{t('Web Development')}</h3>
              <p>{t('Learn HTML, CSS, JavaScript & React')}</p>
            </div>
            <div className="course-preview-card fade-in">
              <h3>{t('Python Programming')}</h3>
              <p>{t('Automate tasks, Data analysis, AI basics')}</p>
            </div>
            <div className="course-preview-card fade-in">
              <h3>{t('Data Science')}</h3>
              <p>{t('Analyze data, build models, visualize results')}</p>
            </div>
          </div>
        </section>

        {/* Все остальные секции без изменений */}
        <section className="advantages fade-in">
          <div className="container">
            <h2>{t('Why Choose ABDO Education?')}</h2>
            <div className="adv-list">
              <div className="adv-item">{t('Online Courses')}</div>
              <div className="adv-item">{t('Hands-on Projects')}</div>
              <div className="adv-item">{t('Certificates')}</div>
              <div className="adv-item">{t('Mentor Support')}</div>
            </div>
          </div>
        </section>

        <section className="why-choose-stats fade-in">
          <div className="container">
            <h2 className="why-title">{t('Why Choose ABDO Education?')}</h2>
            <div className="advantages-pills">
              <div className="pill-advantage">{t('Online Courses')}</div>
              <div className="pill-advantage">{t('Hands-on Projects')}</div>
              <div className="pill-advantage">{t('Certificates')}</div>
              <div className="pill-advantage large">{t('Mentor Support')}</div>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <img src="/icons/students.png" alt="Students" className="stat-icon" />
                <h3 data-target="1200">0</h3>
                <p>{t('Students Enrolled')}</p>
              </div>
              <div className="stat-item">
                <img src="/icons/courses.png" alt="Courses" className="stat-icon" />
                <h3 data-target="50">0</h3>
                <p>{t('Available Courses')}</p>
              </div>
              <div className="stat-item">
                <img src="/icons/projects.png" alt="Projects" className="stat-icon" />
                <h3 data-target="300">0</h3>
                <p>{t('Projects Completed')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="roadmap fade-in">
          <div className="container">
            <h2>{t('Student Journey')}</h2>
            <ul className="timeline">
              <li><span>{t('Start')}</span></li>
              <li><span>{t('Learn')}</span></li>
              <li><span>{t('Practice')}</span></li>
              <li><span>{t('Graduate')}</span></li>
            </ul>
          </div>
        </section>

        <section className="skills fade-in">
          <div className="container skill-circles">
            <div className="skill">
              <div className="circle" data-percentage="90"></div>
              <p>HTML</p>
            </div>
            <div className="skill">
              <div className="circle" data-percentage="80"></div>
              <p>CSS</p>
            </div>
            <div className="skill">
              <div className="circle" data-percentage="75"></div>
              <p>JavaScript</p>
            </div>
          </div>
        </section>

        <section className="quotes fade-in">
          <div className="container">
            <h2 className="quote">{t('Learning never stops.')}</h2>
          </div>
        </section>

        <section className="mentors fade-in">
          <div className="container">
            <h2>{t('Meet Our Mentors')}</h2>
            <div className="mentor-list">
              <div className="mentor-card">
                <img src="https://via.placeholder.com/150" alt="Mentor 1" />
                <h3>Toshev Doniyor</h3>
                <p>Frontend Specialist</p>
                <p>Backend Expert</p>
              </div>
              <div className="mentor-card">
                <img src="https://via.placeholder.com/150" alt="Mentor 2" />
                <h3>Sobirov Abdulbosid</h3>
                <p>Designer Expert</p>
              </div>
              <div className="mentor-card">
                <img src="https://via.placeholder.com/150" alt="Mentor 3" />
                <h3>Odilov Mukhammadyusuf</h3>
                <p>Support Teacher | Frontend and Backend</p>
              </div>
            </div>
          </div>
        </section>

        <section className="faq fade-in">
          <div className="container">
            <h2>{t('Frequently Asked Questions')}</h2>
            <div className="faq-item">
              <h3>{t('How long are the courses?')}</h3>
              <p>{t('Courses typically last 9-12 months depending on the topic.')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('Do I get a certificate?')}</h3>
              <p>{t('Yes! All completed courses provide an official certificate.')}</p>
            </div>
          </div>
        </section>

        <section className="partners fade-in">
          <div className="container partner-logos">
            <img src="https://via.placeholder.com/150" alt="Company 1" />
            <img src="https://via.placeholder.com/150" alt="Company 2" />
            <img src="https://via.placeholder.com/150" alt="Company 3" />
          </div>
        </section>

        <section className="cta fade-in">
          <div className="container">
            <h2>{t('Ready to start learning?')}</h2>
            <button className="main-cta-btn large fade-in">{t('Start Your Free Lesson')}</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
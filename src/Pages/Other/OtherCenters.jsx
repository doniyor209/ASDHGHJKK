import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { useTranslation } from 'react-i18next';
import './OtherCenters.css';

const centers = [
    { name: "MarsItSchool", img: "https://optim.tildacdn.one/tild6537-6332-4665-a532-633662346332/-/resize/268x/-/format/webp/image_387.png.webp", link: "#" },
    { name: "Cambridge", img: "https://cambridgeonline.uz/images/logo-white.svg", link: "#" },
    { name: "IELTS ZONE", img: "https://ieltszone.uz/_next/image?url=%2Flogo-dark.png&w=256&q=75", link: "#" },
    { name: "Power Study", img: "./images/powerstudy.png", link: "#" },
    { name: "Najot Talim", img: "https://najottalim.uz/icons/logo.svg", link: "#" },
    { name: "Everest", img: "https://kursy.uz/components/com_mtree/img/listings/m/4317.png", link: "#" },
    { name: "Inter Nation", img: "https://inter-nation.uz/logo-light.svg", link: "#" },
];

function OtherCenters() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <section className="other-centers">
        <div className="centers-container">
          <h2 className="centers-title">{t('Other centers')}</h2>
          <div className="centers-grid">
            {centers.map((center, index) => (
              <div key={index} className="center-card">
                <div className="center-img" style={{ backgroundImage: `url(${center.img})` }}></div>
                <div className="center-info">
                  <h3>{center.name}</h3>
                  <a href={center.link} target="_blank" rel="noopener noreferrer" className="center-btn">{t('Go')}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default OtherCenters;

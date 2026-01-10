import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ru: {
    translation: {
      // Header
      "Home": "Главная",
      "About us": "О нас",
      "Other centers": "Другие центры",
      "Contact us": "Контакты",
      "Login": "Войти",
      "Register": "Регистрация",
      "Logout": "Выйти",

      // Footer
      "ABDO Education": "ABDO Education",
      "Quick Links": "Быстрые ссылки",
      "Contact": "Контакты",
      "Follow Us": "Подписывайтесь",
      "Switch Theme": "Сменить тему",
      "All rights reserved.": "Все права защищены",

      // Home
      "Learn. Grow. Succeed.": "Учись. Расти. Добивайся успеха.",
      "The Path to Your Future": "Путь в твоё будущее",
      "Web Development": "Веб-разработка",
      "Learn HTML, CSS, JavaScript & React": "Изучай HTML, CSS, JavaScript и React",
      "Python Programming": "Программирование на Python",
      "Automate tasks, Data analysis, AI basics": "Автоматизация задач, Анализ данных, Основы ИИ",
      "Data Science": "Наука о данных",
      "Analyze data, build models, visualize results": "Анализируй данные, строй модели, визуализируй результаты",
      "Explore Courses": "Посмотреть курсы",
      "Why Choose ABDO Education?": "Почему выбирают ABDO Education?",
      "Online Courses": "Онлайн-курсы",
      "Hands-on Projects": "Практические проекты",
      "Certificates": "Сертификаты",
      "Mentor Support": "Поддержка менторов",
      "Students Enrolled": "Студентов записалось",
      "Available Courses": "Доступных курсов",
      "Projects Completed": "Проектов завершено",
      "Student Journey": "Путь студента",
      "Start": "Начало",
      "Learn": "Учеба",
      "Practice": "Практика",
      "Graduate": "Выпуск",
      "Learning never stops.": "Обучение никогда не останавливается.",
      "Meet Our Mentors": "Наши менторы",
      "Frequently Asked Questions": "Часто задаваемые вопросы",
      "How long are the courses?": "Сколько длятся курсы?",
      "Courses typically last 9-12 months depending on the topic.": "Курсы обычно длятся 9–12 месяцев в зависимости от темы.",
      "Do I get a certificate?": "Получу ли я сертификат?",
      "Yes! All completed courses provide an official certificate.": "Да! Все завершённые курсы дают официальный сертификат.",
      "Ready to start learning?": "Готов начать обучение?",
      "Start Your Free Lesson": "Начать бесплатный урок",

      // About
      "Who we are": "Кто мы",
      "What we offer": "Что мы предлагаем",
      "Our values and approach": "Наши ценности и подход",
      "Who our service is for": "Для кого наш сервис",
      "We are a modern digital project designed to simplify daily tasks and make using the service as convenient as possible. We combine technology, design, and practicality to deliver high-quality results without extra hassle.": "Мы — современный цифровой проект, созданный для того, чтобы упростить повседневные задачи и сделать использование сервиса максимально удобным. Мы объединяем технологии, дизайн и практичность, чтобы вы получали качественный результат без лишних сложностей.",
      "We are a team of developers and designers creating functional and modern web solutions using the latest technologies and best practices for a stable, fast, and user-friendly service.": "Мы — команда разработчиков и дизайнеров, которая занимается созданием функциональных и современных веб-решений. В своей работе мы используем актуальные технологии и лучшие практики, чтобы сервис был стабильным, быстрым и понятным для пользователей любого уровня.",
      "Our project was built from scratch with a focus on convenience and real user needs. We constantly analyze user experience and implement improvements based on feedback.": "Наш проект создавался с нуля, с акцентом на удобство и реальные потребности пользователей. Мы постоянно анализируем опыт пользователей и внедряем улучшения на основе обратной связи.",
      "Our service provides convenient functionality to help you navigate and solve tasks efficiently, with attention to interface details and logic.": "Наш сервис предоставляет удобный функционал, который помогает быстро ориентироваться и решать задачи без лишних шагов. Мы уделяем особое внимание деталям интерфейса и логике работы платформы.",
      "Clear and intuitive interface": "Понятный и интуитивный интерфейс",
      "High performance": "Высокая скорость работы",
      "Modern and responsive design": "Современный и адаптивный дизайн",
      "Works on all devices": "Корректная работа на всех устройствах",
      "Regular updates and improvements": "Регулярные обновления и улучшения",
      "We believe that quality starts with an honest approach to the user. Transparency, responsibility, and attention to detail guide our work.": "Мы убеждены, что качественный продукт начинается с честного подхода к пользователю. Поэтому в основе нашей работы лежат прозрачность, ответственность и внимание к деталям.",
      "Quality over quantity. Each element is designed for convenience, safety, and stability. Our team constantly evolves and follows modern digital trends.": "Мы не стремимся к количеству — для нас важнее качество. Каждый элемент сервиса продумывается с точки зрения удобства, безопасности и стабильности. Наша команда постоянно развивается и следит за современными тенденциями в сфере цифровых технологий.",
      "Our project is for people who value time, comfort, and simplicity. Suitable for beginners and those expecting high functionality.": "Наш проект создан для людей, которые ценят своё время, комфорт и простоту в использовании. Мы подходим как для начинающих пользователей, так и для тех, кто ожидает от сервиса высокой функциональности.",
      "In the future, we plan to expand platform features, add new functions, and improve user experience to keep the service relevant and useful.": "В будущем мы планируем расширять возможности платформы, добавлять новые функции и улучшать пользовательский опыт, чтобы сервис оставался актуальным и полезным.",

      // Register & Login
      "Create your account": "Создайте аккаунт",
      "Name": "Имя",
      "Surname": "Фамилия",
      "Address": "Адрес",
      "Phone (+998...)": "Телефон (+998...)",
      "Password": "Пароль",
      "Confirm Password": "Подтвердите пароль",
      "Create Account": "Создать аккаунт",
      "Passwords do not match": "Пароли не совпадают",
      "Please fill in Name, Phone, and Password": "Заполните имя, телефон и пароль",
      "Registration successful! Redirecting to login...": "Регистрация успешна! Переходим на вход...",
      "Login successful! Redirecting...": "Успешный вход! Перенаправляем...",
      "Invalid phone or password": "Неверный телефон или пароль",
      "Connection error. Check MockAPI URL.": "Ошибка соединения с MockAPI",
      "No account?": "Нет аккаунта?",
      "Welcome!": "Добро пожаловать!",
      "Already have an account?": "Уже есть аккаунт?",

      // OtherCenters
      "Go": "Перейти"
    }
  },
  en: {
    translation: {
      // Header
      "Home": "Home",
      "About us": "About Us",
      "Other centers": "Other centers",
      "Contact us": "Contact us",
      "Login": "Login",
      "Register": "Register",
      "Logout": "Logout",

      // Footer
      "ABDO Education": "ABDO Education",
      "Quick Links": "Quick Links",
      "Contact": "Contact",
      "Follow Us": "Follow Us",
      "Switch Theme": "Switch Theme",
      "All rights reserved.": "All rights reserved.",

      // Home
      "Learn. Grow. Succeed.": "Learn. Grow. Succeed.",
      "Explore Courses": "Explore Courses",
      "Why Choose ABDO Education?": "Why Choose ABDO Education?",
      "Online Courses": "Online Courses",
      "Hands-on Projects": "Hands-on Projects",
      "Certificates": "Certificates",
      "Mentor Support": "Mentor Support",
      "Students Enrolled": "Students Enrolled",
      "Available Courses": "Available Courses",
      "Projects Completed": "Projects Completed",
      "Student Journey": "Student Journey",
      "Start": "Start",
      "Learn": "Learn",
      "Practice": "Practice",
      "Graduate": "Graduate",
      "Learning never stops.": "Learning never stops.",
      "Meet Our Mentors": "Meet Our Mentors",
      "Frequently Asked Questions": "Frequently Asked Questions",
      "How long are the courses?": "How long are the courses?",
      "Courses typically last 9-12 months depending on the topic.": "Courses typically last 9-12 months depending on the topic.",
      "Do I get a certificate?": "Do I get a certificate?",
      "Yes! All completed courses provide an official certificate.": "Yes! All completed courses provide an official certificate.",
      "Ready to start learning?": "Ready to start learning?",
      "Start Your Free Lesson": "Start Your Free Lesson",

      // About
      "Who we are": "Who we are",
      "What we offer": "What we offer",
      "Our values and approach": "Our values and approach",
      "Who our service is for": "Who our service is for",
      "We are a modern digital project designed to simplify daily tasks and make using the service as convenient as possible. We combine technology, design, and practicality to deliver high-quality results without extra hassle.": "We are a modern digital project designed to simplify daily tasks and make using the service as convenient as possible. We combine technology, design, and practicality to deliver high-quality results without extra hassle.",
      "We are a team of developers and designers creating functional and modern web solutions using the latest technologies and best practices for a stable, fast, and user-friendly service.": "We are a team of developers and designers creating functional and modern web solutions using the latest technologies and best practices for a stable, fast, and user-friendly service.",
      "Our project was built from scratch with a focus on convenience and real user needs. We constantly analyze user experience and implement improvements based on feedback.": "Our project was built from scratch with a focus on convenience and real user needs. We constantly analyze user experience and implement improvements based on feedback.",
      "Our service provides convenient functionality to help you navigate and solve tasks efficiently, with attention to interface details and logic.": "Our service provides convenient functionality to help you navigate and solve tasks efficiently, with attention to interface details and logic.",
      "Clear and intuitive interface": "Clear and intuitive interface",
      "High performance": "High performance",
      "Modern and responsive design": "Modern and responsive design",
      "Works on all devices": "Works on all devices",
      "Regular updates and improvements": "Regular updates and improvements",
      "We believe that quality starts with an honest approach to the user. Transparency, responsibility, and attention to detail guide our work.": "We believe that quality starts with an honest approach to the user. Transparency, responsibility, and attention to detail guide our work.",
      "Quality over quantity. Each element is designed for convenience, safety, and stability. Our team constantly evolves and follows modern digital trends.": "Quality over quantity. Each element is designed for convenience, safety, and stability. Our team constantly evolves and follows modern digital trends.",
      "Our project is for people who value time, comfort, and simplicity. Suitable for beginners and those expecting high functionality.": "Our project is for people who value time, comfort, and simplicity. Suitable for beginners and those expecting high functionality.",
      "In the future, we plan to expand platform features, add new functions, and improve user experience to keep the service relevant and useful.": "In the future, we plan to expand platform features, add new functions, and improve user experience to keep the service relevant and useful.",

      // Register & Login
      "Create your account": "Create your account",
      "Name": "Name",
      "Surname": "Surname",
      "Address": "Address",
      "Phone (+998...)": "Phone (+998...)",
      "Password": "Password",
      "Confirm Password": "Confirm Password",
      "Create Account": "Create Account",
      "Passwords do not match": "Passwords do not match",
      "Please fill in Name, Phone, and Password": "Please fill in Name, Phone, and Password",
      "Registration successful! Redirecting to login...": "Registration successful! Redirecting to login...",
      "Login successful! Redirecting...": "Login successful! Redirecting...",
      "Invalid phone or password": "Invalid phone or password",
      "Connection error. Check MockAPI URL.": "Connection error. Check MockAPI URL.",
      "No account?": "No account?",

      // OtherCenters
      "Go": "Go"
    }
  },

  // uz translation
  uz: {
    translation: {
      // Header
      "Home": "Bosh sahifa",
      "About us": "Biz haqimizda",
      "Other centers": "Boshqa markazlar",
      "Contact us": "Bog'lanish",
      "Login": "Kirish",
      "Register": "Ro'yxatdan o'tish",
      "Logout": "Chiqish",

      // Footer
      "ABDO Education": "ABDO Education",
      "Quick Links": "Tezkor havolalar",
      "Contact": "Kontakt",
      "Follow Us": "Bizni kuzatish",
      "Switch Theme": "Mavzuni o'zgartirish",
      "All rights reserved.": "Barcha huquqlar himoyalangan",

      // Home
      "Learn. Grow. Succeed.": "O'rgan. O's. Muvaffaqiyatga erish.",
      "The Path to Your Future": "Sizning kelajagingiz sari yo‘l",
      "Explore Courses": "Kurslarni ko'rish",
      "Web Development": "Veb-dasturlash",
      "Learn HTML, CSS, JavaScript & React": "HTML, CSS, JavaScript va React-ni o'rganing",
      "Python Programming": "Python dasturlash",  
      "Automate tasks, Data analysis, AI basics": "Vazifalarni avtomatlashtirish, Ma'lumotlarni tahlil qilish, Sun'iy intellekt asoslari",
      "Data Science": "Ma'lumotlar fani",
      "Analyze data, build models, visualize results": "Ma'lumotlarni tahlil qiling, modellar yarating, natijalarni vizualizatsiya qiling",
      "Why Choose ABDO Education?": "Nega ABDO Educationni tanlash kerak?",
      "Online Courses": "Onlayn kurslar",
      "Hands-on Projects": "Amaliy loyihalar",
      "Certificates": "Sertifikatlar",
      "Mentor Support": "Mentor yordami",
      "Students Enrolled": "Talabalar ro'yxatdan o'tgan",
      "Available Courses": "Mavjud kurslar",
      "Projects Completed": "Tugallangan loyihalar",
      "Student Journey": "Talaba yo'li",
      "Start": "Boshlash",
      "Learn": "O'rganish",
      "Practice": "Amaliyot",
      "Graduate": "Bitiruv",
      "Learning never stops.": "O'rganish hech qachon to'xtamaydi.",
      "Meet Our Mentors": "Mentorlarimiz bilan tanishing",
      "Frequently Asked Questions": "Tez-tez so'raladigan savollar",
      "How long are the courses?": "Kurslar qancha davom etadi?",
      "Courses typically last 9-12 months depending on the topic.": "Kurslar odatda mavzuga qarab 9-12 oy davom etadi.",
      "Do I get a certificate?": "Sertifikat olamanmi?",
      "Yes! All completed courses provide an official certificate.": "Ha! Barcha tugallangan kurslar rasmiy sertifikat beradi.",
      "Ready to start learning?": "O'rganishni boshlashga tayyormisiz?",
      "Start Your Free Lesson": "Bepul darsni boshlash",

      // About
      "Who we are": "Kim biz",
      "What we offer": "Nimalarni taklif qilamiz",
      "Our values and approach": "Bizning qadriyatlarimiz va yondashuvimiz",
      "Who our service is for": "Xizmatimiz kimlar uchun",
      "We are a modern digital project designed to simplify daily tasks and make using the service as convenient as possible. We combine technology, design, and practicality to deliver high-quality results without extra hassle.": "Biz — zamonaviy raqamli loyiha, kundalik vazifalarni soddalashtirish va xizmatdan qulay foydalanishni ta’minlash uchun yaratilganmiz. Biz texnologiya, dizayn va amaliyotiylikni birlashtirib, ortiqcha qiyinchiliksiz yuqori sifatli natija taqdim etamiz.",
      "We are a team of developers and designers creating functional and modern web solutions using the latest technologies and best practices for a stable, fast, and user-friendly service.": "Biz — funksional va zamonaviy veb yechimlar yaratadigan dasturchilar va dizaynerlar jamoasi. Ishimizda barqaror, tez va foydalanuvchiga qulay xizmat yaratish uchun eng so‘nggi texnologiyalar va eng yaxshi amaliyotlardan foydalanamiz.",
      "Our project was built from scratch with a focus on convenience and real user needs. We constantly analyze user experience and implement improvements based on feedback.": "Loyihamiz qulaylik va foydalanuvchining haqiqiy ehtiyojlariga e’tibor bilan boshidan yaratilgan. Foydalanuvchi tajribasini doimiy tahlil qilib, fikr-mulohazalar asosida yaxshilanishlar kiritamiz.",
      "Our service provides convenient functionality to help you navigate and solve tasks efficiently, with attention to interface details and logic.": "Xizmatimiz qulay funksionallik taqdim etadi, bu sizga vazifalarni samarali bajarishga yordam beradi va interfeys tafsilotlari va mantiqqa e’tibor qaratiladi.",
      "Clear and intuitive interface": "Aniq va tushunarli interfeys",
      "High performance": "YuQori ish tezligi",
      "Modern and responsive design": "Zamonaviy va moslashuvchan dizayn",
      "Works on all devices": "Barcha qurilmalarda ishlaydi",
      "Regular updates and improvements": "Doimiy yangilanishlar va yaxshilanishlar",
      "We believe that quality starts with an honest approach to the user. Transparency, responsibility, and attention to detail guide our work.": "Biz sifat foydalanuvchiga halol yondashuvdan boshlanishiga ishonamiz. Ishimizni shaffoflik, mas’uliyat va tafsilotlarga e’tibor boshqaradi.",
      "Quality over quantity. Each element is designed for convenience, safety, and stability. Our team constantly evolves and follows modern digital trends.": "Sifat miqdordan ustundir. Har bir element qulaylik, xavfsizlik va barqarorlikni hisobga olgan holda yaratiladi. Jamoamiz doim rivojlanadi va zamonaviy raqamli tendentsiyalarni kuzatadi.",
      "Our project is for people who value time, comfort, and simplicity. Suitable for beginners and those expecting high functionality.": "Loyihamiz vaqt, qulaylik va soddalikni qadrlaydiganlar uchun mo‘ljallangan. Boshlovchilar va yuqori funksionallikni kutayotganlar uchun mos.",
      "In the future, we plan to expand platform features, add new functions, and improve user experience to keep the service relevant and useful.": "Kelajakda platforma imkoniyatlarini kengaytirish, yangi funksiyalar qo‘shish va foydalanuvchi tajribasini yaxshilashni rejalashtirmoqdamiz, shunda xizmat dolzarb va foydali bo‘lib qoladi.",

      // Register & Login
      "Create your account": "Hisob yaratish",
      "Name": "Ism",
      "Surname": "Familiya",
      "Address": "Manzil",
      "Phone (+998...)": "Telefon (+998...)",
      "Password": "Parol",
      "Confirm Password": "Parolni tasdiqlash",
      "Create Account": "Hisob yaratish",
      "Passwords do not match": "Parollar mos emas",
      "Please fill in Name, Phone, and Password": "Ism, telefon va parolni kiriting",
      "Registration successful! Redirecting to login...": "Ro'yxatdan o'tish muvaffaqiyatli! Kirishga yo'naltirilmoqda...",
      "Login successful! Redirecting...": "Kirish muvaffaqiyatli! Yo'naltirilmoqda...",
      "Invalid phone or password": "Noto'g'ri telefon yoki parol",
      "Connection error. Check MockAPI URL.": "Bog'lanish xatosi. MockAPI URLni tekshiring.",
      "No account?": "Hisobingiz yo'qmi?",
      "Welcome!": "Xush kelibsiz!",
      "Already have an account?": "Hisobingiz bormi?",

      // OtherCenters
      "Go": "O'tish"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;

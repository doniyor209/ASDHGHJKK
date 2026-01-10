// src/components/ThemeToggle.jsx
import { useState, useEffect } from 'react';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // При монтировании компонента определяем начальную тему
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    // Если в localStorage сохранено 'dark' — включаем тёмную тему
    // Если ничего не сохранено — проверяем системную предпочтительную тему
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);

    setIsDark(initialDark);

    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Функция переключения темы
  const toggleTheme = () => {
    setIsDark((prev) => {
      const newDark = !prev;

      if (newDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }

      return newDark;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Переключить тему (светлая/тёмная)"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
} 
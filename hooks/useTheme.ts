'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('system');
  const [resolvedTheme, setResolvedTheme] = useState('light');

  useEffect(() => {
    // Get saved theme from localStorage or default to 'system'
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'system') {
      // Remove data-theme attribute to let CSS media query handle it
      root.removeAttribute('data-theme');

      // Detect system preference for resolvedTheme
      const mediaQuery = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');

      // Listen for system theme changes
      const handleChange = (e: { matches: boolean }) => {
        setResolvedTheme(e.matches ? 'dark' : 'light');
      };

      mediaQuery.addEventListener('change', handleChange);
      return () =>
        mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Set explicit theme
      root.setAttribute('data-theme', theme);
      setResolvedTheme(theme);
    }

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setLightTheme = () => setTheme('light');
  const setDarkTheme = () => setTheme('dark');
  const setSystemTheme = () => setTheme('system');

  return {
    theme,
    resolvedTheme,
    setTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme,
  };
}

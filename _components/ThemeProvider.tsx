'use client';

import { useEffect, useState } from 'react';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initialize theme on mount
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (savedTheme === 'system' || !savedTheme) {
      // Remove data-theme to let CSS media query handle it
      document.documentElement.removeAttribute('data-theme');

      // Set default in localStorage if not set
      if (!savedTheme) {
        localStorage.setItem('theme', 'system');
      }
    }
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return <>{children}</>;
}

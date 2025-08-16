//* custom styled dropdown that works better across browsers than using a <select> element
'use client';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa6';

export function CustomThemeSelector() {
  const { theme, setLightTheme, setDarkTheme, setSystemTheme } =
    useTheme();

  const themes = [
    {
      value: 'light',
      label: 'Light',
      icon: <FaSun className="size-4" />,
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: <FaMoon className="size-4" />,
    },
    {
      value: 'system',
      label: 'System',
      icon: <FaDesktop className="size-4" />,
    },
  ];

  const currentTheme = themes.find((t) => t.value === theme);

  const handleSelect = (value: string) => {
    if (value === 'light') setLightTheme();
    else if (value === 'dark') setDarkTheme();
    else setSystemTheme();
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const themeMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        themeMenuRef.current &&
        !themeMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative inline-block">
      <button
        ref={menuButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-30 px-3 py-2 text-sm border rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 cursor-pointer"
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          borderColor: 'var(--border)',
        }}
      >
        <span>{currentTheme?.icon}</span>
        <span>{currentTheme?.label}</span>
        <svg
          className={`size-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={themeMenuRef}
          className="absolute top-full left-0 mt-1 w-full border rounded-lg shadow-lg z-50"
          style={{
            backgroundColor: 'var(--popover)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {themes.map((themeOption) => (
            <button
              key={themeOption.value}
              onClick={() => handleSelect(themeOption.value)}
              className={`flex gap-2 w-full px-3 py-2 text-sm text-left transition-colors first:rounded-t-lg last:rounded-b-lg cursor-pointer ${
                theme === themeOption.value ? 'font-semibold' : ''
              }`}
              style={{
                color: 'var(--popover-foreground)',
                backgroundColor:
                  theme === themeOption.value
                    ? 'var(--accent)'
                    : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (theme !== themeOption.value) {
                  e.currentTarget.style.backgroundColor =
                    'var(--input)';
                }
              }}
              onMouseLeave={(e) => {
                if (theme !== themeOption.value) {
                  e.currentTarget.style.backgroundColor =
                    'transparent';
                }
              }}
            >
              <span>{themeOption.icon}</span>
              <span>{themeOption.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

//* alt 1: theme toggle that cycles through light, dark, and system themes
// import { useTheme } from '../hooks/useTheme';
// import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa6';
// export default function ThemeToggle() {
//   const {
//     theme,
//     resolvedTheme,
//     setLightTheme,
//     setDarkTheme,
//     setSystemTheme,
//   } = useTheme();

//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setDarkTheme();
//     } else if (theme === 'dark') {
//       setSystemTheme();
//     } else {
//       setLightTheme();
//     }
//   };

//   const getIcon = () => {
//     if (theme === 'system') {
//       return <FaDesktop className="size-4" />;
//     }
//     return resolvedTheme === 'dark' ? (
//       <FaMoon className="size-4" />
//     ) : (
//       <FaSun className="size-4" />
//     );
//   };

//   const getLabel = () => {
//     if (theme === 'system') return 'System';
//     return resolvedTheme === 'dark' ? 'Dark' : 'Light';
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-lg transition-all duration-300 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
//       aria-label={`Switch to ${
//         theme === 'light'
//           ? 'dark'
//           : theme === 'dark'
//           ? 'system'
//           : 'light'
//       } theme`}
//       title={`Current: ${getLabel()}`}
//     >
//       <span className="sr-only">Toggle theme</span>
//       {getIcon()}
//     </button>
//   );
// }

//* alt 2: dropdown-style theme selector that uses a <select> element
// import { useTheme } from '../hooks/useTheme';
// export function ThemeSelector() {
//   const { theme, setLightTheme, setDarkTheme, setSystemTheme } =
//     useTheme();

//   return (
//     <div className="relative inline-block">
//       <select
//         value={theme}
//         onChange={(e) => {
//           const value = e.target.value;
//           if (value === 'light') setLightTheme();
//           else if (value === 'dark') setDarkTheme();
//           else setSystemTheme();
//         }}
//         className="appearance-none bg-background border border-border rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1"
//         style={{
//           backgroundColor: 'var(--background)',
//           color: 'var(--foreground)',
//           borderColor: 'var(--border)',
//         }}
//       >
//         <option value="light">Light</option>
//         <option value="dark">Dark</option>
//         <option value="system">System</option>
//       </select>
//       <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//         <svg
//           className="size-4 text-muted-foreground"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }

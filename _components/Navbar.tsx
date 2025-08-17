'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { PopoverGroup } from '@headlessui/react';
import { FaXmark, FaPhone, FaWater } from 'react-icons/fa6';
import { CustomThemeSelector } from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/staff', label: 'Staff' },
    { href: '/meetings', label: 'Meetings' },
    { href: '/reports', label: 'Reports' },
    { href: '/news', label: 'News' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`row-start-1 fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="navigation bar"
        className="container mx-auto px-6 py-4"
      >
        <div className="flex items-center justify-between">
          {/* logo & theme selector */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/favicon.ico"
                alt="Tahuya River Valley Water District"
                width={32}
                height={32}
              />
            </Link>
            <CustomThemeSelector />
          </div>

          {/* navigation links */}
          <PopoverGroup className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm/6 font-semibold px-4 py-2 m-1 border-1 rounded-lg ${
                  pathname === link.href
                    ? 'cursor-default'
                    : 'hover:opacity-80 transition-opacity'
                }`}
                style={{
                  color:
                    pathname === link.href
                      ? 'var(--primary)'
                      : 'currentColor',
                  borderColor:
                    pathname === link.href
                      ? 'var(--primary)'
                      : 'var(--border)',
                }}
                onMouseEnter={(e) => {
                  if (pathname !== link.href) {
                    e.currentTarget.style.backgroundColor =
                      'var(--primary)';
                    e.currentTarget.style.borderColor =
                      'var(--primary)';
                    e.currentTarget.style.color =
                      'var(--primary-foreground)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.href) {
                    e.currentTarget.style.backgroundColor =
                      'transparent';
                    e.currentTarget.style.borderColor =
                      'var(--border)';
                    e.currentTarget.style.color =
                      'var(--card-foreground)';
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </PopoverGroup>

          {/* phone */}
          <div className="hidden lg:flex">
            <Link
              href="tel:3602750279"
              className="text-sm/6 font-semibold transition-colors hover:opacity-80"
              title="Call Tahuya River Valley Water District"
              aria-label="Call Tahuya River Valley Water District"
            >
              <span aria-hidden="true">
                <FaPhone className="inline size-4" />
              </span>{' '}
              (360) 275-0279
            </Link>
          </div>

          {/* mobile menu button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 transition-colors hover:opacity-80 cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <FaXmark size={24} />
            ) : (
              <FaWater size={24} />
            )}
          </button>
        </div>

        {/* mobile menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="mt-4 flow-root rounded-lg border shadow-lg"
            style={{
              backgroundColor: 'var(--card)',
              color: 'var(--card-foreground)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div
              className=""
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-4 first:rounded-t-lg border-b-1 text-base/7 font-semibold transition-all ${
                      pathname === link.href
                        ? 'cursor-default'
                        : 'hover:opacity-80 transition-opacity'
                    }`}
                    style={{
                      backgroundColor:
                        pathname === link.href
                          ? 'var(--input)'
                          : 'transparent',
                      color:
                        pathname === link.href
                          ? 'var(--accent-foreground)'
                          : 'var(--card-foreground)',
                      borderColor: 'var(--border)',
                    }}
                    onMouseEnter={(e) => {
                      if (pathname !== link.href) {
                        e.currentTarget.style.backgroundColor =
                          'var(--primary)';
                        e.currentTarget.style.color =
                          'var(--primary-foreground)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (pathname !== link.href) {
                        e.currentTarget.style.backgroundColor =
                          'transparent';
                        e.currentTarget.style.color =
                          'var(--card-foreground)';
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="">
                <Link
                  href="tel:3602750279"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-4 border-t-1 rounded-b-lg text-base/7 font-semibold transition-colors"
                  style={{
                    color: 'var(--card-foreground)',
                    borderColor: 'var(--border)',
                  }}
                  title="Call Tahuya River Valley Water District"
                  aria-label="Call Tahuya River Valley Water District"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      'var(--primary)';
                    e.currentTarget.style.color =
                      'var(--primary-foreground)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      'transparent';
                    e.currentTarget.style.color =
                      'var(--card-foreground)';
                  }}
                >
                  <span aria-hidden="true">
                    <FaPhone className="inline size-4" />
                  </span>{' '}
                  (360) 275-0279
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

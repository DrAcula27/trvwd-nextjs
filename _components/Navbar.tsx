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
  // const [isScrolled, setIsScrolled] = useState(false);
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

  // useEffect(() => {
  //   const handleScroll = () => setIsScrolled(window.scrollY > 50);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

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
    <header className="nav-header">
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
          <PopoverGroup className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  pathname === link.href ? 'nav-link-active' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </PopoverGroup>

          {/* phone */}
          <div className="hidden lg:flex">
            <Link
              href="tel:3602750279"
              className="nav-phone"
              title="Call Tahuya River Valley Water District"
              aria-label="Call Tahuya River Valley Water District"
            >
              <FaPhone className="inline size-4 mr-2" />
              (360) 275-0279
            </Link>
          </div>

          {/* mobile menu button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-mobile-button"
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
          <div ref={mobileMenuRef} className="nav-mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`nav-mobile-item ${
                  pathname === link.href
                    ? 'nav-mobile-item-active'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="tel:3602750279"
              onClick={() => setMobileMenuOpen(false)}
              className="nav-mobile-phone"
              title="Call Tahuya River Valley Water District"
              aria-label="Call Tahuya River Valley Water District"
            >
              <FaPhone className="inline size-4 mr-2" />
              (360) 275-0279
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

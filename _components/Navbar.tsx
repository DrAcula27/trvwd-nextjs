'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { PopoverGroup } from '@headlessui/react';
import { FaXmark, FaPhone, FaWater } from 'react-icons/fa6';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-secondary-500 dark:bg-secondary-900/80 backdrop-blur-md shadow-sm text-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="navigation bar"
        className="container mx-auto px-6 py-4"
      >
        <div className="flex items-center justify-between">
          {/* logo & dark mode toggle */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/favicon.ico"
                alt="Tahuya River Valley Water District"
                width={32}
                height={32}
              />
            </Link>
            {/* TODO: add dark mode toggle */}
          </div>

          {/* links to other pages */}
          <PopoverGroup className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm/6 font-semibold ${
                  pathname === link.href
                    ? 'text-primary-600 dark:text-primary-100 cursor-default'
                    : 'hover:text-primary-300 dark:hover:text-primary-400'
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
              className="text-sm/6 font-semibold hover:text-primary-500"
            >
              <span aria-hidden="true">
                <FaPhone className="inline size-4" />
              </span>{' '}
              (360) 275-0279
            </Link>
          </div>

          {/* mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:text-primary-500 transition-colors"
          >
            {mobileMenuOpen ? (
              <FaXmark size={24} />
            ) : (
              <FaWater size={24} />
            )}
          </button>
        </div>

        {/* for mobile menu button */}
        {mobileMenuOpen && (
          <div className="mt-6 flow-root bg-white dark:bg-charcoal">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-300/20">
              <div className="space-y-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-stone-100 dark:hover:bg-stone-600 ${
                      pathname === link.href
                        ? 'bg-blue-100 text-primary-700 dark:bg-blue-300 hover:text-primary-100'
                        : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="tel:3602750279"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-stone-100 dark:hover:bg-stone-600"
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

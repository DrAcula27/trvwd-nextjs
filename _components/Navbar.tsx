'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { FaXmark, FaPhone, FaWater } from 'react-icons/fa6';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/staff', label: 'Staff' },
    { href: '/meetings', label: 'Meetings' },
    { href: '/reports', label: 'Reports' },
    { href: '/news', label: 'News' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-light">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">
              Tahuya River Valley Water District
            </span>
            <Image
              alt=""
              width={0}
              height={8}
              src="/favicon.ico"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <FaWater aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm/6 font-semibold ${
                pathname === link.href
                  ? 'text-blue-700 dark:text-blue-300'
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="tel:3602750279"
            className="text-sm/6 font-semibold"
          >
            <span aria-hidden="true">
              <FaPhone className="inline size-4" />
            </span>{' '}
            (360) 275-0279
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-light p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">
                Tahuya River Valley Water District
              </span>
              <Image
                alt=""
                width={0}
                height={8}
                src="/favicon.ico"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <FaXmark aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-300/20">
              <div className="space-y-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-stone-100 dark:hover:bg-stone-600 ${
                      pathname === link.href
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-300'
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
        </DialogPanel>
      </Dialog>
    </header>
  );
}

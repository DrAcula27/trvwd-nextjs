'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  title?: string;
  body?: string | React.ReactNode;
}

export default function Modal({
  title = 'Modal Title',
  body = 'Modal Body',
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for fade-out animation to complete before navigating
    setTimeout(() => {
      router.push('/resources');
    }, 300); // Match the duration-300 (300ms) in the CSS
  };

  return (
    <div
      className={`fixed inset-0 overflow-y-auto h-full w-full flex items-center justify-center z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`p-8 border border-border w-96 shadow-lg rounded-md bg-white dark:bg-stone-900 transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="mt-4 px-7 py-3 text-left">
            <div className="text-base text-gray-700 dark:text-stone-300">
              {body}
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button onClick={handleClose} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

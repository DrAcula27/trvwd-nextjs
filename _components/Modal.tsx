'use client'; // must be client component to use css transitions and useRouter

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
      className={`fixed inset-0 overflow-y-auto flex items-center justify-center z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* overlay */}
      <div
        className="absolute inset-0 backdrop-blur-sm transition-all duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* modal panel: responsive width, max height, and scroll if content is tall */}
      <div
        className={`relative z-10 w-max-content mx-4 sm:mx-0 max-h-[90vh] overflow-auto
           bg-[var(--background)] border border-border shadow-lg rounded-md transition-all duration-300 ${
             isVisible
               ? 'scale-100 opacity-100'
               : 'scale-95 opacity-0'
           }`}
        style={{ maxWidth: 'min(96vw, 680px)' }}
      >
        <div className="p-2 sm:p-4 flex flex-col items-center space-y-4">
          <h3 id="modal-title" className="text-2xl font-bold">
            {title}
          </h3>
          <div id="modal-description" className="text-left">
            <div className="text-base">{body}</div>
          </div>
          <button onClick={handleClose} className="btn btn-primary">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface Document {
  id: string;
  title: string;
  date: string;
  googleDriveId: string;
  directUrl: string;
}

export interface DocumentArchiveDropdownProps {
  data: Record<string, Document[]>;
  documentType: string;
  showTitle?: boolean;
  downloadBaseUrl?: string;
}

const YearDropdown = ({
  year,
  documents,
  documentType,
  downloadBaseUrl,
}: {
  year: string;
  documents: Document[];
  documentType: string;
  downloadBaseUrl?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card cursor-pointer">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <h3 className="card-title cursor-pointer">
          {year} {documentType}
        </h3>
        <svg
          className={`w-5 h-5 transition-transform duration-200 cursor-pointer ${
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
        <div className="px-4 pb-4 space-y-2 cursor-default">
          {documents.length > 0 ? (
            documents.map((document) => (
              <div
                key={document.id}
                className="flex justify-between items-center p-3 bg-muted rounded-lg border-b border-border"
              >
                <div>
                  <p className="font-medium">{document.title}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={document.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm px-3 py-1"
                  >
                    View PDF
                  </Link>
                  {downloadBaseUrl && (
                    <Link
                      href={`${downloadBaseUrl}/${document.id}`}
                      className="btn btn-secondary text-sm px-3 py-1"
                    >
                      Download
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground p-3">
              No {documentType.toLowerCase()} available for {year}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default function DocumentArchiveDropdown({
  data,
  documentType,
  showTitle = true,
  downloadBaseUrl,
}: DocumentArchiveDropdownProps) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) =>
    (currentYear - i).toString()
  );

  return (
    <div className="space-y-4">
      {showTitle && (
        <h2 className="subtitle text-center my-6">
          {documentType} Archive
        </h2>
      )}
      {years.map((year) => (
        <YearDropdown
          key={year}
          year={year}
          documents={data[year] || []}
          documentType={documentType}
          downloadBaseUrl={downloadBaseUrl}
        />
      ))}
    </div>
  );
}

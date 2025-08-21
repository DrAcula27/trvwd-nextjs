'use client';

import { useState } from 'react';
import Link from 'next/link';
import meetingData from '@/data/meeting-minutes.json';

interface MeetingMinute {
  id: string;
  title: string;
  date: string;
  googleDriveId: string;
  directUrl: string;
}

const YearDropdown = ({
  year,
  meetings,
}: {
  year: string;
  meetings: MeetingMinute[];
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
          {year} Meeting Minutes
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
          {meetings.length > 0 ? (
            meetings.map((meeting) => (
              <div
                key={meeting.id}
                className="flex justify-between items-center p-3 bg-muted rounded-lg border-b border-border"
              >
                <div>
                  <p className="font-medium">{meeting.title}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={meeting.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm px-3 py-1"
                  >
                    View PDF
                  </Link>
                  <Link
                    href={`/api/meeting-minutes/download/${meeting.id}`}
                    className="btn btn-secondary text-sm px-3 py-1"
                  >
                    Download
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground p-3">
              No meeting minutes available for {year}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default function MeetingMinutesDropdowns() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) =>
    (currentYear - i).toString()
  );

  return (
    <div className="space-y-4">
      <h2 className="title text-center mb-6">
        Meeting Minutes Archive
      </h2>
      {years.map((year) => (
        <YearDropdown
          key={year}
          year={year}
          meetings={
            (meetingData as Record<string, MeetingMinute[]>)[year] ||
            []
          }
        />
      ))}
    </div>
  );
}

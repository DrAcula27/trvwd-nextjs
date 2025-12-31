'use client';

import DocumentArchiveDropdown from './DocumentArchiveDropdown';
import meetingData from '@/data/meeting-minutes.json';

export default function MeetingMinutesArchive() {
  return (
    <DocumentArchiveDropdown
      data={meetingData}
      documentType="Meeting Minutes"
      showTitle={true}
      downloadBaseUrl="/api/meeting-minutes/download"
    />
  );
}

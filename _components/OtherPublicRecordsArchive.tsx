'use client';

import DocumentArchiveDropdown from './DocumentArchiveDropdown';
import otherPublicRecordsData from '@/data/other-public-records.json';

export default function OtherPublicRecordsArchive() {
  return (
    <DocumentArchiveDropdown
      data={otherPublicRecordsData}
      documentType="Other Public Records"
      showTitle={true}
      downloadBaseUrl="/api/other-public-records/download"
    />
  );
}

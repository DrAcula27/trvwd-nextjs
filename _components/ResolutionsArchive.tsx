'use client';

import DocumentArchiveDropdown from './DocumentArchiveDropdown';
import resolutionsData from '@/data/resolutions.json';

export default function ResolutionsArchive() {
  return (
    <DocumentArchiveDropdown
      data={resolutionsData}
      documentType="Resolutions"
      showTitle={true}
      downloadBaseUrl="/api/resolutions/download"
    />
  );
}

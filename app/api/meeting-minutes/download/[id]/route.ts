import { NextRequest, NextResponse } from 'next/server';
import meetingData from '@/data/meeting-minutes.json';

interface MeetingMinute {
  id: string;
  title: string;
  date: string;
  googleDriveId: string;
  directUrl: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Find the meeting across all years
  let meeting: MeetingMinute | null = null;
  const data = meetingData as Record<string, MeetingMinute[]>;

  for (const year in data) {
    const foundMeeting = data[year].find(
      (m: MeetingMinute) => m.id === id
    );
    if (foundMeeting) {
      meeting = foundMeeting;
      break;
    }
  }

  if (!meeting) {
    return NextResponse.json(
      { error: 'Meeting minutes not found' },
      { status: 404 }
    );
  }

  try {
    // Option 1: Simple redirect to Google Drive direct download
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${meeting.googleDriveId}`;
    return NextResponse.redirect(downloadUrl);

    // Option 2: Proxy the download with custom filename (uncomment to use)
    /*
    const response = await fetch(downloadUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch PDF from Google Drive' },
        { status: 500 }
      );
    }

    const buffer = await response.arrayBuffer();
    const filename = `${meeting.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': buffer.byteLength.toString(),
      },
    });
    */
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Failed to download PDF' },
      { status: 500 }
    );
  }
}

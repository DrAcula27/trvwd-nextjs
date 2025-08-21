import { NextResponse } from 'next/server';
import meetingData from '@/data/meeting-minutes.json';

export async function GET() {
  return NextResponse.json(meetingData);
}

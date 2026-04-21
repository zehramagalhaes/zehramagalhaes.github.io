import { NextResponse } from 'next/server';
import { experiences as mockExperiences } from '@/lib/data';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const dynamicDataPath = path.join(process.cwd(), 'src/data/resume-data.json');
  let experiences = mockExperiences;

  if (fs.existsSync(dynamicDataPath)) {
    try {
      const fileData = fs.readFileSync(dynamicDataPath, 'utf-8');
      const parsed = JSON.parse(fileData);
      if (parsed.experiences && parsed.experiences.length > 0) {
        experiences = parsed.experiences;
      }
    } catch (error) {
      console.error('Error reading dynamic resume data:', error);
    }
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(experiences);
}

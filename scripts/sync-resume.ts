import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';

async function syncResume() {
  const resumePath = path.join(process.cwd(), 'public/resume.pdf');
  const outputPath = path.join(process.cwd(), 'src/data/resume-data.json');

  if (!fs.existsSync(resumePath)) {
    console.error(
      '❌ Error: public/resume.pdf not found. Please place your resume in the public folder.'
    );
    return;
  }

  console.log('📄 Reading resume.pdf...');
  const dataBuffer = fs.readFileSync(resumePath);

  try {
    const parser = new PDFParse({ data: dataBuffer });
    const result = await parser.getText();
    const text = result.text;

    console.log('✨ PDF text extracted successfully.');

    // Pre-processing
    const rawLines = text
      .split('\n')
      .map((l: string) => l.trim())
      .filter((l: string) => l.length > 0);
    const lines = rawLines.filter(
      (line) =>
        !line.match(/page \d+ of \d+/i) && !line.match(/-- \d+ of \d+ --/i)
    );

    let currentSection = 'NONE';

    interface Experience {
      id: string;
      company: string;
      role: string;
      period: string;
      description: string;
      accomplishments: string[];
    }

    const experiences: Experience[] = [];
    let currentItem: Experience | null = null;
    let summaryText = '';
    let skillsList: string[] = [];

    // Detection logic
    const monthNames = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec';
    const dateRegex = new RegExp(
      `^(${monthNames})\\s+\\d{4}\\s+-\\s+(${monthNames}|Present)\\s*(?:\\d{4})?$`,
      'i'
    );

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const upperLine = line.toUpperCase();

      // Section Transitions
      if (upperLine === 'SUMMARY') {
        currentSection = 'SUMMARY';
        continue;
      }
      if (upperLine === 'EXPERIENCE') {
        currentSection = 'EXPERIENCE';
        continue;
      }
      if (upperLine === 'SKILLS') {
        currentSection = 'SKILLS';
        continue;
      }
      if (['EDUCATION', 'LICENSES & CERTIFICATIONS'].includes(upperLine)) {
        currentSection = 'NONE';
        continue;
      }

      if (currentSection === 'SUMMARY') {
        summaryText = (summaryText + ' ' + line).trim();
      }

      if (currentSection === 'SKILLS') {
        // Extract skills separated by dots
        const skills = line
          .split('•')
          .map((s) => s.trim())
          .filter((s) => s.length > 0);
        skillsList = [...skillsList, ...skills];
      }

      if (currentSection === 'EXPERIENCE') {
        if (line.includes(',') && !line.startsWith('•')) {
          const [company, ...roleParts] = line.split(',');
          const role = roleParts.join(',').trim();

          if (currentItem) experiences.push(currentItem);

          currentItem = {
            id: `exp-${experiences.length + 1}`,
            company: company.trim(),
            role: role,
            period: '',
            description: '',
            accomplishments: [],
          };
          continue;
        }

        if (dateRegex.test(line) && currentItem) {
          currentItem.period = line.trim();
          continue;
        }

        if (line.startsWith('•') && currentItem) {
          currentItem.accomplishments.push(line.replace('•', '').trim());
          continue;
        }

        if (currentItem && !line.startsWith('•') && !dateRegex.test(line)) {
          currentItem.description = (
            currentItem.description +
            ' ' +
            line
          ).trim();
        }
      }
    }

    if (currentItem) experiences.push(currentItem);

    const finalData = {
      summary: summaryText,
      skills: skillsList,
      experiences: experiences.filter((e) => e.company && e.period),
    };

    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 2));

    console.log(`✅ Success! Portfolio data updated.`);
    console.log(
      `📊 Found ${finalData.experiences.length} experiences, ${finalData.skills.length} skills.`
    );
  } catch (error) {
    console.error('❌ Error parsing PDF:', error);
  }
}

syncResume();

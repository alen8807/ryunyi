
import React from 'react';

// Added interface for experience data to ensure type safety
interface ExperienceItem {
  role: string;
  company?: string;
  period: string;
  link?: string;
}

// Moved TimelineItem outside and typed as React.FC to correctly handle 'key' and other React props
const TimelineItem: React.FC<{ exp: ExperienceItem }> = ({ exp }) => (
  <div className="relative pl-8 md:pl-0">
    <div className="md:grid md:grid-cols-5 md:gap-8 items-center">
      <div className="md:col-span-1 text-slate-400 font-medium hidden md:block text-right text-sm">
        {exp.period}
      </div>
      <div className="md:col-span-4 relative">
        <div className="absolute left-[-2rem] md:left-[-1.5rem] top-0 bottom-0 w-[2px] bg-slate-200"></div>
        <div className="absolute left-[-2.25rem] md:left-[-1.75rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-600 z-10"></div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
            <div className="md:hidden text-slate-400 text-xs mt-1">{exp.period}</div>
          </div>
          {exp.company && (
            <span className="text-blue-600 font-bold text-sm">
              {exp.link ? (
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  {exp.company}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              ) : exp.company}
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ExperienceSection: React.FC = () => {
  const professionalExperience: ExperienceItem[] = [
    {
      role: 'Research Intern',
      company: 'Symbio Living Tech',
      period: '2023.05.01 - 2023.07.31',
      link: 'http://www.symbiolivingtech.co.kr/'
    },
    {
      role: 'Research Intern',
      company: 'CSES (사회적가치연구원)',
      period: '2022.02.28 - 2022.08.31',
      link: 'https://www.cses.re.kr/'
    }
  ];

  const societyExperience: ExperienceItem[] = [
    {
      role: 'Ybigta (연세빅데이터학회)',
      company: '',
      period: '2024',
    },
    {
      role: 'ESC',
      company: '',
      period: '2021 - 2022',
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Professional Experience Section */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Experience</h2>
            </div>
            <div className="space-y-6">
              {professionalExperience.map((exp, idx) => (
                <TimelineItem key={idx} exp={exp} />
              ))}
            </div>
          </div>

          {/* Society Timeline Section */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Academic Society Timeline</h2>
            </div>
            <div className="space-y-6">
              {societyExperience.map((exp, idx) => (
                <TimelineItem key={idx} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

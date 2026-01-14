
import React from 'react';

const About: React.FC = () => {
  const education = [
    { 
      degree: 'Master of Statistics & Data Science', 
      institution: 'Yonsei University', 
      period: '2025 - Present', 
      gpa: '4.21 / 4.3' 
    },
    { 
      degree: 'Bachelor of Applied Statistics', 
      institution: 'Yonsei University', 
      period: '2020 - 2024', 
      gpa: '4.09 / 4.3' 
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 inline-flex items-center gap-4 justify-center w-full">
            <span className="w-12 h-[2px] bg-yonsei-blue"></span>
            Academic Excellence
            <span className="w-12 h-[2px] bg-yonsei-blue"></span>
          </h2>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all shadow-sm group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-yonsei-blue transition-colors">{edu.degree}</h3>
                  <div className="text-slate-500 font-medium text-lg mt-1">{edu.institution}</div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-2xl text-lg border border-blue-100 shadow-inner">
                    {edu.gpa}
                  </span>
                  <div className="text-sm text-slate-400 mt-2 font-medium tracking-wide">{edu.period}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

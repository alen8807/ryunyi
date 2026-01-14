
import React from 'react';

const Projects: React.FC = () => {
  const bigcontestImg = './bigcontest.png';
  const getScreenshotUrl = (url: string) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=800`;

  const achievements = [
    {
      title: 'Bigcontest (빅콘테스트)',
      category: 'Award',
      url: 'https://www.bigcontest.or.kr/',
      image: bigcontestImg, 
      description: '2022, 2023, 2024년 3년 연속 빅콘테스트 수상. 데이터 분석 역량과 문제 해결 능력을 입증했습니다.',
      tags: ['Winner', 'Data Science', 'Big Data']
    },
    {
      title: 'Research Paper: AI & Technology',
      category: 'Publication',
      url: 'https://arxiv.org/abs/2506.03426',
      image: getScreenshotUrl('https://arxiv.org/abs/2506.03426'),
      description: 'Arxiv(2506.03426) 및 KCI(ART003110007)에 등재된 학술 논문 연구에 참여했습니다.',
      links: [
        { label: 'Arxiv', url: 'https://arxiv.org/abs/2506.03426' },
        { label: 'KCI', url: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003110007' }
      ]
    },
    {
      title: 'CSES Research Reports',
      category: 'Report',
      url: 'https://www.cses.re.kr/publishedData/reportList.do',
      image: getScreenshotUrl('https://www.cses.re.kr/publishedData/reportList.do'),
      description: '사회적 가치 측정과 지속가능한 생태계 구축에 관한 전문 리포트 발간에 기여했습니다.',
      links: [
        { label: 'Report #1017', url: 'https://www.cses.re.kr/publishedData/reportView.do?boardSeq=1017&currentPage=2&listUrl=%2FpublishedData%2FreportList.do&keyword=all&search' },
        { label: 'Report #1007', url: 'https://www.cses.re.kr/publishedData/reportView.do?boardSeq=1007&currentPage=2&listUrl=%2FpublishedData%2FreportList.do&keyword=all&search' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Research & Achievements</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div key={idx} className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getScreenshotUrl(item.url);
                  }}
                />
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">{item.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed flex-1">{item.description}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                    {item.links ? item.links.map((link, lIdx) => (
                      <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold text-sm border-b border-transparent hover:border-blue-600 transition-all flex items-center gap-1">
                        {link.label} ↗
                      </a>
                    )) : (
                      <div className="flex flex-wrap gap-2">
                        {item.tags?.map((tag, tIdx) => (
                          <span key={tIdx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

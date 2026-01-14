
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-32 lg:py-52 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8 border border-blue-100 shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Future-Leading Data Scientist
          </div>
          
          <h1 className="text-6xl lg:text-9xl font-extrabold tracking-tight text-slate-900 mb-12 leading-[1] animate-slide-up">
            Crafting clarity from <br/> 
            <span className="text-blue-900">complex data.</span>
          </h1>

          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <a href="#projects" className="px-12 py-5 bg-yonsei-blue text-white rounded-2xl font-bold shadow-2xl shadow-blue-900/30 hover:bg-blue-800 transition-all transform hover:-translate-y-1 text-lg">
              View Portfolio
            </a>
            <a href="#contact" className="px-12 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all transform hover:-translate-y-1 shadow-sm text-lg">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden opacity-30">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Hero;

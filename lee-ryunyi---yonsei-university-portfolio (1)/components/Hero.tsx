
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8 border border-blue-100 shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Future-Leading Data Scientist
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight animate-slide-up">
            Hi, I'm <span className="text-yonsei-blue">Lee Ryunyi</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 animate-slide-up delay-200">
            Crafting clarity from <span className="font-semibold text-slate-900 underline decoration-blue-300 underline-offset-4">complex data</span> through statistical excellence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up delay-500">
            <a href="#projects" className="px-10 py-4 bg-yonsei-blue text-white rounded-2xl font-bold shadow-xl shadow-blue-900/20 hover:bg-blue-800 transition-all transform hover:-translate-y-1">
              View Research
            </a>
            <a href="#contact" className="px-10 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all transform hover:-translate-y-1 shadow-sm">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden opacity-30">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Hero;

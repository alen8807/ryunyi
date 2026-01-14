
import React from 'react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">
              LEE RYUNYI
            </span>
            <span className="hidden sm:block h-6 w-[1px] bg-slate-300 mx-2"></span>
            <span className="hidden sm:block text-sm font-medium text-slate-500 uppercase tracking-widest">
              Yonsei University
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-600 hover:text-blue-900 font-medium transition-colors text-sm">About</a>
            <a href="#experience" className="text-slate-600 hover:text-blue-900 font-medium transition-colors text-sm">Experience</a>
            <a href="#projects" className="text-slate-600 hover:text-blue-900 font-medium transition-colors text-sm">Research</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-900 font-medium transition-colors text-sm">Contact</a>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-blue-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-900">About</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-900">Experience</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-900">Research</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-900">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

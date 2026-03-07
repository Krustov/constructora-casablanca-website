import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-casa-red flex items-center justify-center font-heading font-bold text-white text-xl">
            C
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            CASABLANCA
          </span>
        </div>
        
        <p className="text-gray-500 font-sans text-sm text-center md:text-left">
          © {new Date().getFullYear()} Constructora Casablanca. Ingeniería y Soluciones Químicas para Suelos.
        </p>
        
        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

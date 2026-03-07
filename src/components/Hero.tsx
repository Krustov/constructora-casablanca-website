import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-casa-dark overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/d1qhz0Q5/mineria.jpg" 
          alt="Camino minero" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-casa-dark/80 via-casa-dark/60 to-casa-dark"></div>
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-casa-red/30 bg-casa-red/10 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-casa-red animate-pulse"></span>
              <span className="text-xs font-tech text-casa-red uppercase tracking-widest">Ingeniería Avanzada</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[1.1] tracking-tight mb-6 text-balance uppercase">
              Soluciones avanzadas para <span className="text-casa-red">estabilización</span> de suelos.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 font-sans max-w-2xl mb-10 leading-relaxed">
              Tecnología sustentable para minería, industria y construcción. Desarrollamos y aplicamos soluciones químicas para mejorar la estabilidad y durabilidad de los terrenos.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#soluciones"
                className="inline-flex items-center justify-center gap-2 bg-casa-red text-white px-8 py-4 font-tech text-sm uppercase tracking-wider hover:bg-red-800 transition-colors"
              >
                Ver Soluciones
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 font-tech text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
              >
                Contactar
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-4 hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 relative"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-casa-red"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-casa-red"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-casa-red"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-casa-red"></div>
            
            <h3 className="font-tech text-xs text-gray-500 uppercase tracking-widest mb-4">Datos Técnicos</h3>
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-heading font-bold text-white mb-1">+30</div>
                <div className="text-sm font-sans text-gray-400">Años de experiencia en construcción</div>
              </div>
              <div className="h-px w-full bg-white/10"></div>
              <div>
                <div className="text-3xl font-heading font-bold text-white mb-1">+15</div>
                <div className="text-sm font-sans text-gray-400">Años en estabilización química</div>
              </div>
              <div className="h-px w-full bg-white/10"></div>
              <div>
                <div className="text-3xl font-heading font-bold text-casa-red mb-1">100%</div>
                <div className="text-sm font-sans text-gray-400">Enfoque ecológico y sustentable</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

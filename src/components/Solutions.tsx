import React from 'react';
import { motion } from 'motion/react';
import { SOLUCIONES } from '../constants';

export function Solutions() {
  return (
    <section id="soluciones" className="py-24 bg-casa-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-tech text-casa-red uppercase tracking-widest mb-4">Áreas de Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-casa-dark uppercase leading-tight">
              Soluciones Químicas <br />
              <span className="text-casa-gray">Avanzadas</span>
            </h3>
          </div>
          <p className="text-casa-gray font-sans max-w-md border-l-2 border-casa-red pl-6">
            Desarrollamos y aplicamos tecnología para mejorar la estabilidad, durabilidad y comportamiento mecánico de los suelos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUCIONES.map((solucion, index) => (
            <motion.div 
              key={solucion.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white border border-gray-200 p-8 hover:border-casa-red transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-casa-light flex items-center justify-center group-hover:bg-casa-red transition-colors duration-300">
                <solucion.icon className="w-6 h-6 text-casa-gray group-hover:text-white transition-colors duration-300" />
              </div>
              
              <div className="text-5xl font-heading font-black text-gray-100 mb-6 select-none">
                0{index + 1}
              </div>
              
              <h4 className="text-2xl font-heading font-bold text-casa-dark uppercase mb-4">
                {solucion.title}
              </h4>
              
              <p className="text-casa-gray font-sans mb-8 min-h-[80px]">
                {solucion.description}
              </p>
              
              <div className="space-y-3">
                <h5 className="text-xs font-tech text-casa-dark uppercase tracking-widest border-b border-gray-200 pb-2">
                  Aplicaciones / Beneficios
                </h5>
                <ul className="grid grid-cols-2 gap-2">
                  {solucion.applications.map((app, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-casa-gray font-sans">
                      <span className="w-1 h-1 bg-casa-red rounded-full"></span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

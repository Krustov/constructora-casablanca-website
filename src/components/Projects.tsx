import React from 'react';
import { motion } from 'motion/react';
import { PROYECTOS } from '../constants';

export function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-casa-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-tech text-casa-red uppercase tracking-widest mb-4">Casos de Éxito</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-casa-dark uppercase">
            Aplicaciones en Terreno
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROYECTOS.map((proyecto, index) => (
            <motion.div 
              key={proyecto.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden bg-casa-dark"
            >
              <img 
                src={proyecto.image} 
                alt={proyecto.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-casa-dark to-transparent">
                <div className="w-8 h-1 bg-casa-red mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h4 className="text-2xl font-heading font-bold text-white uppercase">
                  {proyecto.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

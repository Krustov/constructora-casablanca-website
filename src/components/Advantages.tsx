import React from 'react';
import { motion } from 'motion/react';
import { VENTAJAS } from '../constants';

export function Advantages() {
  return (
    <section id="ventajas" className="py-24 bg-casa-red text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4">
            <h2 className="text-sm font-tech text-white/70 uppercase tracking-widest mb-4">Propuesta de Valor</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-6 leading-tight">
              ¿Por qué elegir Casablanca?
            </h3>
            <p className="text-white/80 font-sans mb-8">
              Optimizamos los costos y reducimos el impacto ambiental frente a soluciones tradicionales como asfaltos u hormigón, garantizando resultados superiores en condiciones extremas.
            </p>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VENTAJAS.map((ventaja, index) => (
                <motion.div 
                  key={ventaja.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/20 backdrop-blur-sm p-8 border border-white/10 hover:bg-black/30 transition-colors"
                >
                  <ventaja.icon className="w-10 h-10 text-white mb-6" strokeWidth={1.5} />
                  <h4 className="text-xl font-heading font-bold uppercase mb-3">
                    {ventaja.title}
                  </h4>
                  <p className="text-white/70 font-sans text-sm">
                    {ventaja.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

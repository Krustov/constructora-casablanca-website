import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTOS } from '../constants';

export function Products() {
  return (
    <section id="productos" className="py-24 bg-casa-dark text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-tech text-casa-red uppercase tracking-widest mb-4">Catálogo Técnico</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase">
            Productos Poliméricos
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTOS.map((producto, index) => (
            <motion.div 
              key={producto.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#222] border border-white/10 p-8 hover:bg-[#2a2a2a] transition-colors relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-casa-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-heading font-bold text-white uppercase tracking-tight">
                    {producto.name}
                  </h4>
                  <p className="text-xs font-tech text-casa-red uppercase tracking-widest mt-1">
                    {producto.subtitle}
                  </p>
                </div>
                <producto.icon className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              
              <p className="text-gray-400 font-sans text-sm mb-6 min-h-[60px]">
                {producto.description}
              </p>
              
              <div className="space-y-3 border-t border-white/10 pt-6">
                {producto.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-casa-red rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-sm text-gray-300 font-sans">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={producto.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 border border-white/20 text-xs font-tech uppercase tracking-widest hover:bg-white hover:text-casa-dark transition-colors flex items-center justify-center gap-2"
              >
                Ficha Técnica
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

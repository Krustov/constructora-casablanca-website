import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Nuevo mensaje de ${formData.nombre} (${formData.empresa})`;
    const body = `Nombre: ${formData.nombre}\nEmpresa: ${formData.empresa}\nCorreo: ${formData.correo}\n\nMensaje:\n${formData.mensaje}`;
    window.location.href = `mailto:casablanca20006@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 bg-casa-dark text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-tech text-casa-red uppercase tracking-widest mb-4">Contacto</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-8 leading-tight">
              Iniciemos su próximo proyecto
            </h3>
            <p className="text-gray-400 font-sans mb-12 max-w-md">
              Contáctenos para evaluar su terreno y proponer la solución química más eficiente y sustentable para sus necesidades.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-casa-red" />
                </div>
                <div>
                  <h4 className="text-xs font-tech text-gray-500 uppercase tracking-widest mb-1">Empresa</h4>
                  <p className="font-sans text-lg">Constructora Casablanca</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-casa-red" />
                </div>
                <div>
                  <h4 className="text-xs font-tech text-gray-500 uppercase tracking-widest mb-1">Correo</h4>
                  <p className="font-sans text-lg">casablanca20006@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-casa-red" />
                </div>
                <div>
                  <h4 className="text-xs font-tech text-gray-500 uppercase tracking-widest mb-1">Teléfono</h4>
                  <p className="font-sans text-lg">+56 9 8922 6315</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] border border-white/10 p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-tech text-gray-400 uppercase tracking-widest">Nombre</label>
                  <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-casa-red transition-colors font-sans"
                    placeholder="Su nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-tech text-gray-400 uppercase tracking-widest">Empresa</label>
                  <input 
                    type="text" 
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-casa-red transition-colors font-sans"
                    placeholder="Su empresa"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-tech text-gray-400 uppercase tracking-widest">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-casa-red transition-colors font-sans"
                  placeholder="correo@empresa.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-tech text-gray-400 uppercase tracking-widest">Mensaje</label>
                <textarea 
                  rows={4}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-casa-red transition-colors font-sans resize-none"
                  placeholder="Detalles de su proyecto..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-casa-red text-white py-4 font-tech text-sm uppercase tracking-wider hover:bg-red-800 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

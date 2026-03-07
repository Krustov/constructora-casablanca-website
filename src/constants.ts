import { 
  Building2, 
  HardHat, 
  Wind, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Leaf, 
  Clock, 
  DollarSign,
  Droplets,
  Wrench,
  ArrowRight
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: 'Soluciones', href: '#soluciones' },
  { name: 'Productos', href: '#productos' },
  { name: 'Ventajas', href: '#ventajas' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
];

export const SOLUCIONES = [
  {
    id: 'estabilizacion',
    title: 'Estabilización de Suelos',
    description: 'Aplicación de polímeros que mejoran la capacidad estructural del suelo, aumentando su resistencia y estabilidad.',
    icon: Building2,
    applications: ['Caminos rurales', 'Caminos mineros', 'Patios industriales', 'Estacionamientos', 'Taludes', 'Relaves']
  },
  {
    id: 'pavimentacion',
    title: 'Pavimentación Química',
    description: 'Sistema alternativo al asfalto que permite consolidar el terreno mediante polímeros ecológicos.',
    icon: HardHat,
    applications: ['Menor costo', 'Rápida implementación', 'Menor impacto ambiental', 'Alta durabilidad']
  },
  {
    id: 'polvo',
    title: 'Control de Polvo',
    description: 'Soluciones poliméricas diseñadas para reducir la emisión de material particulado en suspensión.',
    icon: Wind,
    applications: ['Caminos mineros', 'Correas transportadoras', 'Taludes', 'Áreas industriales']
  },
  {
    id: 'senalizacion',
    title: 'Señalización Vial',
    description: 'Diseño, fabricación e instalación de señalética especializada para entornos exigentes.',
    icon: MapPin,
    applications: ['Faenas', 'Obras', 'Rutas', 'Espacios industriales']
  }
];

export const PRODUCTOS = [
  {
    name: 'DirtFix 100',
    subtitle: 'Estabilizador Químico',
    description: 'Basado en polímeros acrílicos que mejora la resistencia del terreno y controla la emisión de polvo.',
    benefits: ['Aumenta el CBR hasta un 60%', 'Impermeabiliza el terreno', 'Evita erosión eólica y pluvial'],
    icon: ShieldCheck,
    pdf: 'https://drive.google.com/drive/folders/12ehgZZclcfE1NGuJHrXrjTV3Im4pk1Rz?usp=sharing'
  },
  {
    name: 'DirtFix 5000',
    subtitle: 'Alta Concentración',
    description: 'Estabilizador de suelos de alta concentración para pavimentación química.',
    benefits: ['Alta capacidad ligante', 'Gran resistencia mecánica', 'Adaptable a distintos suelos'],
    icon: Wrench,
    pdf: 'https://drive.google.com/drive/folders/12ehgZZclcfE1NGuJHrXrjTV3Im4pk1Rz?usp=sharing'
  },
  {
    name: 'DustFix 300',
    subtitle: 'Mitigador de Polvo',
    description: 'Basado en mezcla polimérica acuosa de alta resistencia.',
    benefits: ['Caminos', 'Estacionamientos', 'Taludes', 'Zonas industriales'],
    icon: Droplets,
    pdf: 'https://drive.google.com/drive/folders/12ehgZZclcfE1NGuJHrXrjTV3Im4pk1Rz?usp=sharing'
  },
  {
    name: 'G-500',
    subtitle: 'Control Avanzado',
    description: 'Sistema diseñado para operaciones mineras y correas transportadoras.',
    benefits: ['Control eficiente', 'Fácil aplicación', 'No interfiere en procesos'],
    icon: Wind,
    pdf: 'https://drive.google.com/drive/folders/12ehgZZclcfE1NGuJHrXrjTV3Im4pk1Rz?usp=sharing'
  },
  {
    name: 'BoreFix 500',
    subtitle: 'Estabilizador de Perforaciones',
    description: 'Diseñado para recubrir paredes de pozos durante perforación con aire.',
    benefits: ['Evita derrumbes', 'Mejora productividad', 'Ideal para exploración'],
    icon: ArrowRight,
    pdf: 'https://drive.google.com/drive/folders/12ehgZZclcfE1NGuJHrXrjTV3Im4pk1Rz?usp=sharing'
  },
  {
    name: 'CFX-8500',
    subtitle: 'Consolidador Acuoso',
    description: 'Emulsión polimérica altamente impermeable de elevada resistencia a la hidrólisis.',
    benefits: ['Estructura de malla', 'Resistencia a la tracción', 'Ideal para suelos con elevado IP'],
    icon: Building2,
    pdf: 'https://drive.google.com/drive/folders/12ehgZZclcfE1NGuJHrXrjTV3Im4pk1Rz?usp=sharing'
  },
  {
    name: 'RA-500',
    subtitle: 'Rejuvenecedor de Asfalto',
    description: 'Producto acuoso basado en emulsión polimérica para el rejuvenecimiento de asfalto.',
    benefits: ['Altamente impermeable', 'Resistencia a la hidrólisis', 'Rápida aplicación'],
    icon: HardHat,
    pdf: 'https://drive.google.com/drive/folders/12ehgZZclcfE1NGuJHrXrjTV3Im4pk1Rz?usp=sharing'
  }
];

export const VENTAJAS = [
  { title: 'Menor Costo', description: 'Reducción significativa frente a pavimentación tradicional.', icon: DollarSign },
  { title: 'Aplicación Rápida', description: 'Procesos eficientes que minimizan el tiempo de inactividad.', icon: Clock },
  { title: 'Mayor Durabilidad', description: 'Superficies tratadas con vida útil prolongada.', icon: ShieldCheck },
  { title: 'Soluciones Ecológicas', description: 'Menor impacto ambiental con productos sustentables.', icon: Leaf },
];

export const PROYECTOS = [
  { title: 'Minería', image: 'https://i.postimg.cc/d1qhz0Q5/mineria.jpg' },
  { title: 'Caminos Rurales', image: 'https://i.postimg.cc/nVmL071Z/caminos-rurales.jpg' },
  { title: 'Industria', image: 'https://i.postimg.cc/HsQVs5c1/industria.jpg' },
  { title: 'Construcción', image: 'https://i.postimg.cc/q7YkGMhL/construccion.jpg' },
];

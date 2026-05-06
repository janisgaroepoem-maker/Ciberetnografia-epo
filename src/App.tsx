/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  TreePine, 
  History, 
  Globe, 
  Users, 
  FileText, 
  Presentation, 
  ChevronRight, 
  Info,
  Bug,
  FlameKindling,
  Map as MapIcon,
  Search
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Types ---
interface Work {
  title: string;
  author: string;
  type: 'PDF' | 'PPT';
  description: string;
}

// --- Mock Data ---
const STUDENT_WORKS: Work[] = [
  { title: "Impacto en el Ecosistema", author: "Equipo 1 - Primero 2", type: "PDF", description: "Análisis sobre la pérdida de biodiversidad." },
  { title: "Flora de Coacalco", author: "Equipo 3 - Primero 3", type: "PPT", description: "Catálogo visual de especies nativas." },
  { title: "Defensa de la Sierra", author: "Equipo 5 - Primero 4", type: "PDF", description: "Propuestas de conservación ciudadana." },
  { title: "Micro-organismos locales", author: "Equipo 2 - Primero 2", type: "PPT", description: "Estudio microscópico proyectado." },
];

const FLORA_DATA = [
  { name: "Agave (Maguey)", scientific: "Agave salmiana", desc: "Planta ícono de la región, vital para la retención de suelo." },
  { name: "Encino", scientific: "Quercus sp.", desc: "Habitante de las zonas altas de la Sierra de Guadalupe." },
  { name: "Nopal", scientific: "Opuntia ficus-indica", desc: "Fundamental en la dieta y ecosistema local." },
];

const FAUNA_DATA = [
  { name: "Tlacuache", scientific: "Didelphis virginiana", desc: "Único marsupial mexicano, esencial para el control de plagas." },
  { name: "Águila Roja", scientific: "Buteo jamaicensis", desc: "Depredador tope en la cadena alimenticia de la Sierra." },
  { name: "Lagartija de Collar", scientific: "Sceloporus torquatus", desc: "Común en zonas rocosas de Coacalco." },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <TreePine className="text-emerald-600" size={24} />
            <span className="font-bold tracking-tight text-lg uppercase">EPOEM 170</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['Inicio', 'CiberEtnografía', 'Historia', 'Sierra', 'VidaSilvestre', 'Trabajos'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-emerald-600 transition-colors uppercase tracking-widest text-[10px]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1c1917]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop" 
            alt="Sierra de Guadalupe background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-transparent to-[#1c1917]/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] tracking-[0.2em] uppercase mb-6">
              Proyecto Académico Digital
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tighter shadow-sm">
              Ciber Etnografía de la <span className="text-emerald-500">Destrucción Silvestre</span> en Coacalco
            </h1>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg mb-12 font-light leading-relaxed">
              Una investigación profunda desarrollada por los alumnos de la <strong>Epoem 170</strong> (Primero 2, 3 y 4) 
              en las materias de Cultura Digital II y Pensamiento Filosófico y Humanidades.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#ciberetnografía" className="px-8 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-500 transition-all flex items-center gap-2">
                Explorar Proyecto <ChevronRight size={18} />
              </a>
              <a href="#trabajos" className="px-8 py-3 bg-white/10 text-white border border-white/20 backdrop-blur-sm rounded-full font-medium hover:bg-white/20 transition-all">
                Ver Trabajos Estudiantiles
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="ciberetnografía" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-rows-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Globe className="text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">¿Qué es la Ciber Etnografía?</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  La ciber etnografía es un proceso de investigación que traslada el método etnográfico tradicional (observación participante) al entorno digital. En este proyecto, los alumnos han utilizado herramientas digitales para documentar y analizar el impacto humano en la vida silvestre local.
                </p>
                <p>
                  A través del pensamiento filosófico, buscamos no solo registrar datos, sino reflexionar sobre nuestra relación con el entorno natural en la era de la información, transformando lo digital en un arma para la conservación.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-4">
                {['Observación Digital', 'Mapeo Crítico', 'Análisis de Redes', 'Curaduría Ética'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm font-medium text-stone-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-stone-100 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2028&auto=format&fit=crop" 
                  alt="Digital interaction"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-emerald-900 text-white p-8 rounded-3xl shadow-xl max-w-[280px]">
                <p className="text-sm font-light italic leading-relaxed">
                  "Convertimos la pantalla en una ventana hacia la biodiversidad amenazada de Coacalco."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="historia" className="py-24 bg-[#fafaf9] border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <History className="mx-auto text-emerald-600 mb-6" size={32} />
          <h2 className="text-3xl font-bold mb-8">Breve Historia de Coacalco</h2>
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-stone-100 text-left space-y-6">
            <p className="text-stone-600 leading-relaxed">
              <strong>Coacalco de Berriozábal</strong> tiene sus orígenes en la época prehispánica. Su nombre proviene de la lengua náhuatl: <em>coatl</em> (serpiente), <em>calli</em> (casa) y <em>co</em> (lugar), que significa <strong>"En la casa de la serpiente"</strong>.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Originalmente habitado por grupos otomíes y posteriormente acolhuas, Coacalco fue un punto estratégico en el Valle de México. Con el paso de los siglos, pasó de ser una zona predominantemente agrícola a una de las áreas urbanas más densas del Estado de México, lo que ha generado una presión sin precedentes sobre sus pulmones naturales.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-50">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-emerald-700">1314</span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400">Fundación Aprox.</span>
                </div>
                <div className="text-center border-x border-stone-100">
                  <span className="block text-2xl font-bold text-emerald-700">1862</span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400">Erección Mpal.</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-emerald-700">6,500ha</span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400">Extensión S.G.</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sierra Section */}
      <section id="sierra" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-emerald-600 font-semibold tracking-widest text-xs uppercase block mb-4">Pulmón del Valle de México</span>
            <h2 className="text-4xl font-bold tracking-tight">Sierra de Guadalupe</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-2 group relative h-[500px] rounded-[2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Sierra view"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
                  <h3 className="text-white text-2xl font-bold mb-2">Un Ecosistema en Peligro</h3>
                  <p className="text-white/70 max-w-md">La Sierra de Guadalupe es el principal corredor biológico de la zona, amenazada por incendios, tala y expansión urbana.</p>
                </div>
            </div>
            <div className="space-y-8 flex flex-col justify-center">
              <div className="p-8 bg-[#1c1917] text-white rounded-[2rem] flex-1">
                <MapIcon className="text-emerald-500 mb-4" />
                <h4 className="text-xl font-bold mb-2">Ubicación</h4>
                <p className="text-stone-400 text-sm">Abarca los municipios de Coacalco, Tlalnepantla, Tultitlán y Ecatepec.</p>
              </div>
              <div className="p-8 bg-emerald-50 rounded-[2rem] flex-1 border border-emerald-100">
                <FlameKindling className="text-emerald-600 mb-4" />
                <h4 className="text-xl font-bold text-emerald-900 mb-2">Peligros</h4>
                <p className="text-emerald-700/80 text-sm">Los incendios forestales anuales han reducido un 15% la cobertura vegetal en los últimos 5 años.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Gallery */}
      <section id="vidasilvestre" className="py-24 bg-[#1c1917] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tighter">Flora y Fauna Protegida</h2>
              <p className="text-stone-400 max-w-md">Especies que habitan nuestro municipio y que debemos defender a través del conocimiento digital.</p>
            </div>
            <div className="flex gap-4">
               <button className="px-6 py-2 rounded-full border border-stone-700 hover:bg-stone-800 transition-colors text-sm">Flora</button>
               <button className="px-6 py-2 rounded-full bg-emerald-600 text-white text-sm">Fauna</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FAUNA_DATA.concat(FLORA_DATA.slice(0, 3)).slice(0, 3).map((item, idx) => (
              <motion.div 
                key={item.name}
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-3xl p-8 border border-white/10"
              >
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  {idx === 0 ? <Bug className="text-emerald-400" /> : <TreePine className="text-emerald-400" />}
                </div>
                <h4 className="text-xl font-bold mb-1">{item.name}</h4>
                <p className="text-emerald-400 text-xs italic mb-4">{item.scientific}</p>
                <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Repository */}
      <section id="trabajos" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Presentation className="mx-auto text-emerald-600 mb-4" />
            <h2 className="text-4xl font-bold tracking-tight">Repositorio de Proyectos</h2>
            <p className="text-stone-500 mt-4 underline underline-offset-8 decoration-emerald-200">
              Evidencia del trabajo colaborativo de la Epoem 170
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STUDENT_WORKS.map((work, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-[2.5rem] bg-[#fafaf9] border border-stone-100 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${work.type === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'} group-hover:bg-white/20 group-hover:text-white`}>
                    <FileText size={20} />
                  </div>
                  <h4 className="font-bold mb-2 group-hover:text-white">{work.title}</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-60 mb-3">{work.author}</p>
                  <p className="text-xs text-stone-500 group-hover:text-emerald-50 line-clamp-2">{work.description}</p>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 translate-x-4 -translate-y-4">
                   <Presentation size={64} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#1c1917] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12 flex justify-center gap-12">
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 block mb-4">Institución</span>
              <p className="text-emerald-500 font-bold">EPOEM 170</p>
            </div>
            <div className="text-left border-l border-white/10 pl-12">
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 block mb-4">Materias</span>
              <p className="text-sm">Cultura Digital II</p>
              <p className="text-sm text-stone-400 font-light">Pensamiento Filosófico y Humanidades</p>
            </div>
            <div className="text-left border-l border-white/10 pl-12 hidden md:block">
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 block mb-4">Grupos</span>
              <p className="text-sm text-stone-400">1°2, 1°3, 1°4</p>
            </div>
          </div>
          <p className="text-stone-600 text-[10px] tracking-widest uppercase py-8 border-t border-white/5">
            © 2026 Epoem 170 - Investigación de Vida Silvestre Coacalco. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

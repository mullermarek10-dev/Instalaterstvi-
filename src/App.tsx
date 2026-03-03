/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Droplets, 
  Wrench, 
  Flame, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Služby', href: '#sluzby' },
    { name: 'O nás', href: '#o-nas' },
    { name: 'Reference', href: '#reference' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            ANDRES
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+420123456789" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
          >
            <Phone className="w-4 h-4" />
            +420 123 456 789
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:+420123456789" 
                className="bg-blue-600 text-white px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Zavolat hned
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Hero = ({ onOpenInquiry, onOpenWork }: { onOpenInquiry: () => void, onOpenWork: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Logo Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Bathroom" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-30 w-full pb-32 md:pb-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-600/30">
              Profesionální instalatérství
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
              Kvalitní práce, <br />
              <span className="text-blue-500">která neteče.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
              Jsme váš spolehlivý partner pro veškeré instalatérské a topenářské práce. Od drobných oprav až po kompletní rekonstrukce koupelen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 relative z-40">
              <button 
                onClick={onOpenInquiry}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 cursor-pointer"
              >
                Poptat služby
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={onOpenWork}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg transition-all cursor-pointer"
              >
                Naše práce
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pb-12 pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            {[
              { label: 'Let zkušeností', value: '15+' },
              { label: 'Hotových projektů', value: '1200+' },
              { label: 'Spokojených klientů', value: '98%' },
              { label: 'Záruka na práci', value: '5 let' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Instalatérské práce',
      description: 'Kompletní rozvody vody a odpadů, výměny baterií, opravy úniků a čištění kanalizace.',
      icon: <Droplets className="w-8 h-8" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Topenářské služby',
      description: 'Montáž radiátorů, podlahového vytápění a servis kotlů pro váš maximální tepelný komfort.',
      icon: <Flame className="w-8 h-8" />,
      color: 'bg-orange-500',
    },
    {
      title: 'Rekonstrukce koupelen',
      description: 'Návrh a realizace koupelen na klíč. Od bourání až po finální obklady a sanitární keramiku.',
      icon: <Wrench className="w-8 h-8" />,
      color: 'bg-emerald-500',
    },
    {
      title: 'Havarijní služba',
      description: 'Rychlý zásah při prasklém potrubí nebo ucpaném odpadu. Jsme tu pro vás, když je nejhůř.',
      icon: <Clock className="w-8 h-8" />,
      color: 'bg-rose-500',
    },
  ];

  return (
    <section id="sluzby" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Co nabízíme</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Komplexní řešení pro váš domov i firmu</p>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all hover:shadow-2xl hover:shadow-blue-600/5 group"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transition-transform group-hover:scale-110`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <button className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Zjistit více
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = ({ onOpenStory }: { onOpenStory: () => void }) => {
  return (
    <section id="o-nas" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 z-0" />
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                alt="Instalatér při práci" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-bold text-slate-900">Přes 500+ recenzí</div>
                </div>
                <div className="flex text-yellow-400 gap-0.5">
                  {[1,2,3,4,5].map(i => <CheckCircle2 key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">O nás</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Rodinná tradice s moderním přístupem
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Instalatérství Andres vzniklo z vášně pro řemeslo a touhy poskytovat služby na nejvyšší úrovni. Věříme, že i zdánlivě obyčejná práce jako oprava kapajícího kohoutku si zaslouží profesionální přístup a preciznost.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                'Certifikovaní odborníci s dlouholetou praxí',
                'Používáme pouze kvalitní a ověřené materiály',
                'Dodržujeme smluvené termíny a rozpočty',
                'Čistota a pořádek po dokončení práce'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <CheckCircle2 className="text-blue-600 w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={onOpenStory}
              className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl cursor-pointer"
            >
              Náš příběh
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kontakt" className="py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-20 -mb-20 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Máte projekt? <br /> Pojďme ho probrat.</h2>
              <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                Napište nám nebo zavolejte. Odpovíme vám co nejdříve a navrhneme nejlepší řešení pro vaši situaci.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm font-medium mb-1">Zavolejte nám</div>
                    <div className="text-2xl font-bold">+420 123 456 789</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm font-medium mb-1">Napište nám</div>
                    <div className="text-2xl font-bold">info@andres-instalaterstvi.cz</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm font-medium mb-1">Kde nás najdete</div>
                    <div className="text-2xl font-bold">Praha a okolí</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 text-slate-900 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Jméno</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Jan Novák" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">E-mail</label>
                    <input type="email" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="jan@email.cz" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Služba</label>
                  <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                    <option>Instalatérské práce</option>
                    <option>Topenářské služby</option>
                    <option>Rekonstrukce koupelny</option>
                    <option>Jiné</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Zpráva</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="Jak vám můžeme pomoci?"></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20">
                  Odeslat poptávku
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                ANDRES
              </span>
            </div>
            <p className="max-w-sm text-lg leading-relaxed mb-8">
              Vaše spokojenost je naší prioritou. Poskytujeme profesionální instalatérské služby s důrazem na kvalitu a moderní technologie.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Rychlé odkazy</h4>
            <ul className="space-y-4">
              <li><a href="#sluzby" className="hover:text-blue-500 transition-colors">Služby</a></li>
              <li><a href="#o-nas" className="hover:text-blue-500 transition-colors">O nás</a></li>
              <li><a href="#reference" className="hover:text-blue-500 transition-colors">Reference</a></li>
              <li><a href="#kontakt" className="hover:text-blue-500 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Pracovní doba</h4>
            <ul className="space-y-4">
              <li className="flex justify-between"><span>Po - Pá:</span> <span className="text-white">8:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Sobota:</span> <span className="text-white">9:00 - 14:00</span></li>
              <li className="flex justify-between"><span>Neděle:</span> <span className="text-white text-rose-500">Zavřeno</span></li>
              <li className="mt-6 text-blue-400 font-bold">Havarijní služba 24/7</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© {new Date().getFullYear()} Instalatérství Andres. Všechna práva vyhrazena.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Ochrana údajů</a>
            <a href="#" className="hover:text-white transition-colors">Obchodní podmínky</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [activeModal, setActiveModal] = useState<'inquiry' | 'work' | 'story' | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero 
          onOpenInquiry={() => setActiveModal('inquiry')} 
          onOpenWork={() => setActiveModal('work')} 
        />
        <Services />
        <About onOpenStory={() => setActiveModal('story')} />
        <Contact />
      </main>
      <Footer />

      {/* Modal: Inquiry Form */}
      <Modal 
        isOpen={activeModal === 'inquiry'} 
        onClose={closeModal} 
        title="Nezávazná poptávka"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h4 className="text-3xl font-bold text-slate-900">Pojďme vyřešit váš problém ještě dnes.</h4>
            <p className="text-slate-600 text-lg">
              Vyplňte formulář a my se vám ozveme zpět s návrhem řešení a cenovou nabídkou. Většinu poptávek zpracováváme do 24 hodin.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-700">
                <CheckCircle2 className="text-blue-600 w-6 h-6" />
                <span className="font-medium">Konzultace zdarma</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <CheckCircle2 className="text-blue-600 w-6 h-6" />
                <span className="font-medium">Transparentní ceny</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <CheckCircle2 className="text-blue-600 w-6 h-6" />
                <span className="font-medium">Rychlá realizace</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Vaše jméno</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Jan Novák" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Telefonní číslo</label>
              <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+420 777 123 456" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Popis práce</label>
              <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="Co potřebujete opravit nebo vybudovat?"></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20">
              Odeslat poptávku
            </button>
          </form>
        </div>
      </Modal>

      {/* Modal: Our Work Gallery */}
      <Modal 
        isOpen={activeModal === 'work'} 
        onClose={closeModal} 
        title="Naše realizace"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', title: 'Moderní koupelna Praha' },
            { url: 'https://images.unsplash.com/photo-1620626011761-9963d7521476?auto=format&fit=crop&q=80&w=800', title: 'Rekonstrukce rozvodů vody' },
            { url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800', title: 'Montáž podlahového topení' },
            { url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800', title: 'Servis kotle a topení' },
            { url: 'https://images.unsplash.com/photo-1585131235944-96ef09f72931?auto=format&fit=crop&q=80&w=800', title: 'Instalace sanitární keramiky' },
            { url: 'https://images.unsplash.com/photo-1607400201585-5ed5bb7ef956?auto=format&fit=crop&q=80&w=800', title: 'Havarijní oprava potrubí' },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg aspect-square"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-bold">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Modal>

      {/* Modal: About Story */}
      <Modal 
        isOpen={activeModal === 'story'} 
        onClose={closeModal} 
        title="Náš příběh"
      >
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="relative rounded-[3rem] overflow-hidden shadow-xl aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" 
              alt="Team working" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="prose prose-slate prose-lg max-w-none">
            <h4 className="text-3xl font-bold text-slate-900 mb-6">Od jednoho brašny k týmu profesionálů</h4>
            <p className="text-slate-600 leading-relaxed text-lg">
              Vše začalo v roce 2008, kdy zakladatel firmy, pan Andres, začínal jako samostatný instalatér s jednou starou dodávkou a velkým snem. Jeho vizí bylo změnit pohled lidí na instalatérské řemeslo – chtěl ukázat, že instalatér může být dochvilný, čistotný a používat nejmodernější technologie.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Díky poctivé práci a doporučením spokojených sousedů se firma začala rychle rozrůstat. Dnes, po více než 15 letech, tvoří Instalatérství Andres tým deseti špičkových odborníků, kteří se neustále vzdělávají v nových trendech, jako jsou tepelná čerpadla, chytré rozvody vody nebo ekologické vytápění.
            </p>
            <div className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100 my-10">
              <h5 className="text-blue-900 font-bold text-xl mb-4">Naše mise</h5>
              <p className="text-blue-800 italic text-lg">
                "Naším cílem není jen opravit trubku. Naším cílem je přinést do vašich domovů klid a bezpečí. Chceme, abyste věděli, že když se u vás něco stane, jsme tu pro vás – rychle, profesionálně a s úsměvem."
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              I když jsme dnes větší firmou, stále si zakládáme na rodinných hodnotách. Každý projekt, ať už jde o výměnu těsnění nebo kompletní zasíťování novostavby, řešíme s maximální péčí, jako bychom pracovali u sebe doma.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ShoppingBag, 
  MapPin, 
  MessageCircle, 
  Handshake, 
  Cookie, 
  FileEdit, 
  Instagram, 
  ChevronRight,
  Star,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { JASTIP_DATA } from './constants';

const ServiceCard = ({ icon: Icon, label, description }: { icon: any, label: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-start gap-4"
  >
    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="font-bold text-gray-900 text-lg">{label}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function App() {
  const iconMap: Record<string, any> = {
    Handshake: Handshake,
    ShoppingBag: ShoppingBag,
    Cookie: Cookie,
    FileEdit: FileEdit
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-gray-900 font-sans selection:bg-orange-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl italic">L</div>
            <span className="font-bold text-xl tracking-tight text-orange-600">{JASTIP_DATA.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-orange-500 transition-colors">Tentang</a>
            <a href="#services" className="hover:text-orange-500 transition-colors">Layanan</a>
            <a href="#locations" className="hover:text-orange-500 transition-colors">Lokasi</a>
          </div>
          <a 
            href={JASTIP_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Order Sekarang
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={14} fill="currentColor" />
              Trusted Personal Shopper
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 text-gray-900">
              Jastip Terpercaya <br />
              <span className="text-orange-500 italic">Antar Kota</span> & <br />
              Oleh-Oleh Lokal.
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
              {JASTIP_DATA.fullName}. Kami bantu belanja kebutuhanmu dari berbagai kota di Indonesia dengan aman dan cepat.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={JASTIP_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all flex items-center gap-3 group"
              >
                Gabung WhatsApp Group
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3 px-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-orange-200 overflow-hidden">
                      <img 
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold">100M+ Followers</div>
                  <div className="text-gray-500">Puas dengan layanan kami</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-orange-200 rounded-[40px] overflow-hidden shadow-2xl rotate-3">
              <img 
                src="https://picsum.photos/seed/shopping/800/800" 
                alt="Shopping" 
                className="w-full h-full object-cover -rotate-3 scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-orange-50 flex items-center gap-3 animate-bounce">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div className="text-sm">
                <div className="font-bold">Firsthand!</div>
                <div className="text-gray-500 text-xs">Dijamin Original</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-orange-50 flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div className="text-sm">
                <div className="font-bold">{JASTIP_DATA.location}</div>
                <div className="text-gray-500 text-xs">Base Location</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Layanan Kami</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Kami memberikan kemudahan bagi kamu yang ingin memiliki barang dari luar kota tanpa harus pergi sendiri.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {JASTIP_DATA.services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={iconMap[service.icon]}
                label={service.label}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-orange-500 rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8">Area Jangkauan Kami</h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {JASTIP_DATA.locations.map((loc, i) => (
                  <span key={i} className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-bold text-lg border border-white/30">
                    {loc}
                  </span>
                ))}
                <span className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-bold text-lg border border-white/30 italic">
                  & Banyak Lagi...
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-orange-50 leading-relaxed">Pengiriman aman dengan packing ekstra untuk oleh-oleh makanan.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-orange-50 leading-relaxed">Update stok real-time langsung dari toko/lokasi belanja.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-orange-50 leading-relaxed">Biaya jastip transparan dan kompetitif di kelasnya.</p>
                </div>
              </div>
            </div>
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Punya Request Khusus? <br />
            <span className="text-orange-500">Hubungi Kami Sekarang!</span>
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Jangan ragu untuk bertanya atau request barang yang kamu inginkan. Kami siap membantu sebagai personal shopper terpercaya kamu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={JASTIP_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-green-600 transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-3"
            >
              <MessageCircle size={28} />
              Chat via WhatsApp
            </a>
            <a 
              href={`https://instagram.com/${JASTIP_DATA.handle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-100 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3"
            >
              <Instagram size={28} />
              Instagram
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {JASTIP_DATA.tags.map((tag, i) => (
              <span key={i} className="text-gray-400 font-medium italic">#{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-orange-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl italic">L</div>
              <span className="font-bold text-xl tracking-tight text-orange-600">{JASTIP_DATA.name}</span>
            </div>
            <p className="text-gray-500 text-sm">© 2026 {JASTIP_DATA.name}. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { motion } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiClock } from 'react-icons/hi'
import { siteConfig } from '../siteConfig'

export default function Location() {
  return (
    <section
      id="contacto"
      className="py-24 relative overflow-hidden"
      style={{ background: '#F5F0E8' }}
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle, #C4622D 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-accent text-[#C4622D] text-2xl mb-3"
          >
            Encuéntranos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-[#2E1F0F]"
          >
            Visítanos en Panamá
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#EDE8DC] hover:shadow-lg hover:border-[#C4622D]/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C4622D]/10 flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="text-2xl text-[#C4622D]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[#2E1F0F] mb-1">Dirección</h3>
                  <p className="font-body text-[#6B5240] leading-relaxed">{siteConfig.business.address}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#EDE8DC] hover:shadow-lg hover:border-[#C4622D]/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C4622D]/10 flex items-center justify-center flex-shrink-0">
                  <HiPhone className="text-2xl text-[#C4622D]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[#2E1F0F] mb-1">Teléfono</h3>
                  <a href={siteConfig.business.phoneLink} className="font-body text-[#C4622D] font-semibold text-lg hover:text-[#E07A45] transition-colors">
                    {siteConfig.business.phone}
                  </a>
                  <p className="font-body text-[#6B5240] text-sm mt-1">También disponible por WhatsApp</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#EDE8DC]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C4622D]/10 flex items-center justify-center flex-shrink-0">
                  <HiClock className="text-2xl text-[#C4622D]" />
                </div>
                <div className="w-full">
                  <h3 className="font-heading text-lg font-semibold text-[#2E1F0F] mb-4">Horario de Atención</h3>
                  <div className="space-y-2">
                    {siteConfig.hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-center py-1 border-b border-[#EDE8DC] last:border-0">
                        <span className="font-body text-[#2E1F0F] text-sm font-medium">{h.day}</span>
                        <span className={`font-body text-sm ${h.hours === 'Por confirmar' ? 'text-[#6B5240]/50 italic' : 'text-[#4A5E3A] font-semibold'}`}>
                          {h.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="font-body text-[#6B5240]/70 text-xs mt-3 italic">
                    * Horario completo próximamente. Contáctenos para confirmar.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map placeholder with styled card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#EDE8DC] bg-white">
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-[#EDE8DC] to-[#F5F0E8] flex items-center justify-center">
                <img
                  src={siteConfig.images.tools}
                  alt="Electrónica Mega ubicación Av. Central España Panamá"
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E1F0F]/80 via-[#2E1F0F]/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#C4622D] flex items-center justify-center flex-shrink-0">
                        <HiLocationMarker className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="font-heading text-[#2E1F0F] font-semibold text-base">Electrónica Mega</p>
                        <p className="font-body text-[#6B5240] text-xs">Av. Central España, Panamá</p>
                      </div>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/Electrónica+Mega+Av+Central+España+Panama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-[#C4622D] hover:bg-[#E07A45] text-white font-semibold text-sm py-2.5 rounded-xl transition-colors duration-200"
                    >
                      Ver en Google Maps ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20 fill-[#1A0F00]">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"/>
        </svg>
      </div>
    </section>
  )
}

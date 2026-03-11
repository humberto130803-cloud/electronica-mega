import { motion } from 'framer-motion'
import { HiLightningBolt } from 'react-icons/hi'
import { siteConfig } from '../siteConfig'

export default function Promo() {
  return (
    <section
      className="py-20 relative overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.images.workshop}
          alt="Taller de electrónica"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E1F0F]/95 via-[#1A0F00]/85 to-[#C4622D]/60" />
      </div>

      {/* Organic shapes */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#C4622D]/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#D4A844]/20 border border-[#D4A844]/40 text-[#D4A844] text-sm font-medium px-4 py-2 rounded-full mb-6"
          >
            <HiLightningBolt />
            Diagnóstico sin compromiso
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8] leading-tight mb-6"
          >
            Trae tu equipo y{' '}
            <span className="text-[#D4A844] italic">nosotros nos encargamos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-[#F5F0E8]/75 text-lg leading-relaxed mb-4"
          >
            No necesitas saber qué le pasa a tu equipo. Tráelo a Electrónica Mega y nuestros técnicos harán el diagnóstico. Te explicamos el problema con claridad y te damos el presupuesto antes de tocar nada.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-accent text-[#D4A844] text-xl mb-8"
          >
            Sin sorpresas. Sin letras chicas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={siteConfig.business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4A844] hover:bg-[#E8C060] text-[#1A0F00] font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-[#D4A844]/20 transition-all duration-300 hover:scale-105"
            >
              Agendar diagnóstico
            </a>
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="inline-flex items-center gap-2 border-2 border-[#F5F0E8]/30 hover:border-white text-[#F5F0E8] hover:text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300"
            >
              📞 Llamar ahora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

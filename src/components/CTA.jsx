import { motion } from 'framer-motion'
import { siteConfig } from '../siteConfig'

export default function CTA() {
  return (
    <section
      className="py-20 relative overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.images.electronics}
          alt="Electrónica reparada"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#C4622D]/90 via-[#1A0F00]/85 to-[#2E1F0F]/95" />
      </div>

      {/* Organic shape */}
      <div className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(196,98,45,0.3) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-accent text-[#D4A844] text-2xl mb-4"
        >
          ¿Equipo dañado?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl font-bold text-[#F5F0E8] leading-tight mb-6"
        >
          No lo botes —{' '}
          <span className="text-[#D4A844] italic">¡lo reparamos!</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-[#F5F0E8]/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Antes de comprar uno nuevo, trae tu equipo a Electrónica Mega. Muchas veces la reparación cuesta una fracción del precio y el resultado es el mismo: tu aparato funcionando de nuevo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={siteConfig.business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D4A844] hover:bg-[#E8C060] text-[#1A0F00] font-bold text-lg px-10 py-5 rounded-full shadow-xl shadow-[#D4A844]/25 transition-all duration-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Escríbenos por WhatsApp
          </a>
          <a
            href={siteConfig.business.phoneLink}
            className="inline-flex items-center gap-2 border-2 border-[#F5F0E8]/40 hover:border-white text-[#F5F0E8] hover:text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300"
          >
            📞 {siteConfig.business.phone}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

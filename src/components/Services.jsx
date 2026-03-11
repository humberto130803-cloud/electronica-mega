import { motion } from 'framer-motion'
import { HiLightningBolt, HiWifi, HiCog, HiSparkles, HiClock, HiCurrencyDollar } from 'react-icons/hi'
import { siteConfig } from '../siteConfig'

const iconMap = {
  circuit: HiLightningBolt,
  appliance: HiWifi,
  diagnostic: HiCog,
  maintenance: HiSparkles,
  fast: HiClock,
  honest: HiCurrencyDollar,
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 relative overflow-hidden"
      style={{ background: '#F5F0E8' }}
    >
      {/* Subtle paper texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Organic blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#C4622D]/8 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#4A5E3A]/8 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-accent text-[#C4622D] text-2xl mb-3"
          >
            Nuestros servicios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-[#2E1F0F] leading-tight"
          >
            Todo lo que tu equipo necesita
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-[#6B5240] text-lg mt-4 max-w-2xl mx-auto"
          >
            Desde electrónica de consumo hasta grandes electrodomésticos, contamos con la experiencia y las herramientas para devolver la vida a tus aparatos.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] || HiLightningBolt
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:shadow-[#C4622D]/10 transition-all duration-400 border border-[#EDE8DC] hover:border-[#C4622D]/20 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4622D]/0 to-[#C4622D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" />

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#C4622D]/10 flex items-center justify-center mb-5 group-hover:bg-[#C4622D] transition-colors duration-300">
                  <Icon className="text-2xl text-[#C4622D] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="relative z-10 font-heading text-xl font-semibold text-[#2E1F0F] mb-3">
                  {service.title}
                </h3>
                <p className="relative z-10 font-body text-[#6B5240] text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative dot */}
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#D4A844] opacity-60 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="font-body text-[#6B5240] text-base mb-6">
            ¿No ves tu equipo en la lista? Escríbenos — es probable que lo reparemos igual.
          </p>
          <a
            href={siteConfig.business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C4622D] hover:bg-[#E07A45] text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-[#C4622D]/25 transition-all duration-300 hover:scale-105"
          >
            Consultar ahora
          </a>
        </motion.div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20 fill-[#1A0F00]">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z"/>
        </svg>
      </div>
    </section>
  )
}

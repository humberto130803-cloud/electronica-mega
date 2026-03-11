import { motion } from 'framer-motion'
import { HiLightningBolt } from 'react-icons/hi'
import { BsStarFill } from 'react-icons/bs'
import { siteConfig } from '../siteConfig'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.images.hero}
          alt="Taller de electrónica"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Layered overlays for organic feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0F00]/90 via-[#C4622D]/40 to-[#2E1F0F]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F00] via-transparent to-transparent" />
      </div>

      {/* Organic decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#C4622D]/10 blur-3xl z-0" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#4A5E3A]/15 blur-3xl z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#C4622D]/20 border border-[#C4622D]/40 backdrop-blur-sm text-[#D4A844] text-sm font-medium px-4 py-2 rounded-full mb-6"
          >
            <HiLightningBolt className="text-base" />
            Taller Especializado en Panamá
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F0E8] leading-tight mb-6"
          >
            Tu equipo,{' '}
            <span className="text-[#C4622D] italic">vuelve a la vida</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#F5F0E8]/80 text-lg md:text-xl font-body font-light leading-relaxed mb-8 max-w-lg"
          >
            Reparación de electrónica y electrodomésticos con diagnóstico honesto y servicio rápido. En Av. Central España, Panamá.
          </motion.p>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <BsStarFill key={i} className="text-[#D4A844] text-base" />
              ))}
            </div>
            <span className="text-[#F5F0E8]/70 text-sm font-body">
              <strong className="text-[#F5F0E8]">5.0</strong> — 100% de clientes satisfechos en Google
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={siteConfig.business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C4622D] hover:bg-[#E07A45] text-white font-semibold text-base px-8 py-4 rounded-full shadow-xl shadow-[#C4622D]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#C4622D]/50"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Escríbenos ahora
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 border border-[#F5F0E8]/30 hover:border-[#D4A844] text-[#F5F0E8] hover:text-[#D4A844] font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Ver servicios
            </a>
          </motion.div>
        </div>

        {/* Right side — stats card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:block"
        >
          <div className="relative">
            {/* Decorative background card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#C4622D]/20 to-[#4A5E3A]/10 rounded-3xl blur-xl" />
            <div className="relative bg-[#F5F0E8]/5 backdrop-blur-md border border-[#F5F0E8]/10 rounded-3xl p-8">
              <p className="font-accent text-[#D4A844] text-2xl mb-6">Lo que nos define</p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '5.0⭐', label: 'Calificación Google' },
                  { value: '100%', label: 'Clientes satisfechos' },
                  { value: 'Rápido', label: 'Tiempo de respuesta' },
                  { value: 'Honesto', label: 'Presupuesto claro' },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#2E1F0F]/60 rounded-2xl p-4 text-center">
                    <p className="font-heading text-2xl font-bold text-[#C4622D]">{stat.value}</p>
                    <p className="font-body text-[#F5F0E8]/60 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#4A5E3A]/30 rounded-2xl border border-[#4A5E3A]/40">
                <p className="font-accent text-[#F5F0E8]/80 text-lg leading-snug">
                  "Muy buen servicio, rápido y efectivo."
                </p>
                <p className="font-body text-[#D4A844] text-sm mt-2">— Irvin Godoy, Guía Local</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20 fill-[#1A0F00]">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"/>
        </svg>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import { siteConfig } from '../siteConfig'

const values = [
  'Diagnóstico honesto antes de cualquier reparación',
  'Precios justos y transparentes, sin cobros ocultos',
  'Técnicos con experiencia en electrónica y electrodomésticos',
  'Atención personalizada y cercana con cada cliente',
  'Respaldo en nuestras reparaciones — si falla, lo revisamos',
  'Ubicados en el corazón de Panamá, fácil acceso',
]

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A0F00 0%, #2E1F0F 50%, #1A0F00 100%)' }}
    >
      {/* Organic blob decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C4622D]/5 blur-3xl -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#4A5E3A]/8 blur-3xl translate-y-1/4 -translate-x-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
              <img
                src={siteConfig.images.about}
                alt="Taller de reparaciones Electrónica Mega"
                className="w-full h-80 md:h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F00]/60 via-transparent to-transparent" />
            </div>

            {/* Floating secondary image */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden border-4 border-[#1A0F00] shadow-xl">
              <img
                src={siteConfig.images.repair}
                alt="Reparación de circuitos"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Years badge */}
            <div className="absolute -top-4 -left-4 bg-[#C4622D] rounded-2xl px-5 py-4 shadow-lg shadow-[#C4622D]/30">
              <p className="font-accent text-white text-xl font-bold leading-none">Tu taller</p>
              <p className="font-body text-white/80 text-xs mt-1">de confianza</p>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-accent text-[#D4A844] text-2xl mb-3">Quiénes somos</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-6 leading-tight">
              Un taller con corazón en{' '}
              <span className="text-[#C4622D] italic">Av. Central</span>
            </h2>
            <p className="font-body text-[#F5F0E8]/70 text-lg leading-relaxed mb-8">
              En Electrónica Mega somos especialistas en reparación de electrónica y electrodomésticos. Nuestros clientes nos eligen por nuestra honestidad, rapidez y compromiso real con cada aparato que llega a nuestro taller.
            </p>
            <p className="font-body text-[#F5F0E8]/70 text-base leading-relaxed mb-10">
              No importa si es un televisor, una lavadora, una computadora o cualquier equipo eléctrico — lo revisamos con cuidado, te damos un presupuesto claro y lo devolvemos funcionando.
            </p>

            {/* Values list */}
            <ul className="space-y-3">
              {values.map((val, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <HiCheckCircle className="text-[#4A5E3A] text-xl flex-shrink-0 mt-0.5" />
                  <span className="font-body text-[#F5F0E8]/75 text-sm">{val}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-[#F5F0E8]/3">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z"/>
        </svg>
      </div>
    </section>
  )
}

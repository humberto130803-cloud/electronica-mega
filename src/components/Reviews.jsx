import { motion } from 'framer-motion'
import { BsStarFill } from 'react-icons/bs'
import { HiBadgeCheck } from 'react-icons/hi'
import { siteConfig } from '../siteConfig'

export default function Reviews() {
  return (
    <section
      id="resenas"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #2E1F0F 0%, #1A0F00 40%, #3A2A14 100%)' }}
    >
      {/* Organic blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#C4622D]/8 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#4A5E3A]/8 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-accent text-[#D4A844] text-2xl mb-3"
          >
            Lo que dicen nuestros clientes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8]"
          >
            ⭐ 5.0 en Google Maps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-[#F5F0E8]/60 mt-4 text-base"
          >
            Calificación perfecta — cada cliente importa
          </motion.p>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-[#F5F0E8]/5 backdrop-blur-sm border border-[#F5F0E8]/10 rounded-3xl p-8 hover:border-[#C4622D]/30 transition-all duration-300 group"
            >
              {/* Parchment texture feel */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4A844]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Stars */}
              <div className="flex gap-1 mb-5 relative z-10">
                {[...Array(review.rating)].map((_, j) => (
                  <BsStarFill key={j} className="text-[#D4A844] text-base" />
                ))}
              </div>

              {/* Opening quote */}
              <div className="relative z-10">
                <p className="font-accent text-[#C4622D]/40 text-6xl leading-none mb-2">"</p>
                <p className="font-body text-[#F5F0E8]/85 text-base leading-relaxed -mt-6">
                  {review.text}
                </p>
              </div>

              {/* Author */}
              <div className="relative z-10 mt-6 pt-6 border-t border-[#F5F0E8]/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C4622D]/20 flex items-center justify-center font-heading font-bold text-[#C4622D] text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body font-semibold text-[#F5F0E8] text-sm">{review.name}</p>
                  <div className="flex items-center gap-1">
                    <HiBadgeCheck className="text-[#4A5E3A] text-sm" />
                    <p className="font-body text-[#F5F0E8]/50 text-xs">{review.badge}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to leave a review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="font-body text-[#F5F0E8]/50 text-sm mb-4">
            ¿Fuiste cliente nuestro? Cuéntale a otros sobre tu experiencia.
          </p>
          <a
            href="https://www.google.com/maps/search/Electrónica+Mega+Panamá"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#D4A844]/40 hover:border-[#D4A844] text-[#D4A844] hover:text-[#E8C060] font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300"
          >
            Dejar reseña en Google ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}

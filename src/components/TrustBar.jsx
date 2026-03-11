import { motion } from 'framer-motion'
import { HiLightningBolt, HiShieldCheck, HiClock, HiStar } from 'react-icons/hi'

const items = [
  { icon: HiStar, text: '5.0 en Google' },
  { icon: HiLightningBolt, text: 'Diagnóstico rápido' },
  { icon: HiShieldCheck, text: 'Trabajo garantizado' },
  { icon: HiClock, text: 'Respuesta el mismo día' },
]

export default function TrustBar() {
  return (
    <section className="py-8 bg-[#C4622D] relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #D4A844 1px, transparent 1px), radial-gradient(circle at 80% 50%, #D4A844 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center gap-3"
            >
              <item.icon className="text-2xl text-white/90 flex-shrink-0" />
              <span className="font-body font-semibold text-white/95 text-sm md:text-base">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

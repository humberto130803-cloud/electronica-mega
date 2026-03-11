import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { siteConfig } from '../siteConfig'

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-[#F5F0E8]/10 rounded-2xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[#F5F0E8]/5 transition-colors duration-200"
      >
        <span className="font-body font-semibold text-[#F5F0E8] text-base leading-snug">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#C4622D] flex-shrink-0"
        >
          <HiChevronDown className="text-xl" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-body text-[#F5F0E8]/70 text-sm leading-relaxed px-6 pb-6">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A0F00 0%, #2E1F0F 100%)' }}
    >
      {/* Organic decorations */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#C4622D]/6 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#4A5E3A]/8 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-accent text-[#D4A844] text-2xl mb-3"
          >
            Preguntas frecuentes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8]"
          >
            Respondemos tus dudas
          </motion.h2>
        </div>

        <div className="space-y-3">
          {siteConfig.faq.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        {/* More questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="font-body text-[#F5F0E8]/50 text-sm mb-4">
            ¿Tienes otra pregunta? Escríbenos directamente.
          </p>
          <a
            href={siteConfig.business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4A5E3A] hover:bg-[#6B7F58] text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300"
          >
            Preguntar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}

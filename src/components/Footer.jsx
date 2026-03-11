import { motion } from 'framer-motion'
import { siteConfig } from '../siteConfig'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F0800] pt-16 pb-8 relative overflow-hidden">
      {/* Organic top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C4622D] via-[#D4A844] to-[#4A5E3A]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[#C4622D] flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 64 64" className="w-7 h-7" fill="none">
                  <path d="M20 32 L28 18 L32 26 L36 20 L44 32 L36 44 L32 36 L28 42 Z" fill="#F5F0E8" strokeLinejoin="round"/>
                  <circle cx="32" cy="32" r="4" fill="#D4A844"/>
                </svg>
              </div>
              <div>
                <p className="font-heading text-[#F5F0E8] text-xl font-semibold leading-tight">
                  Electrónica <span className="text-[#C4622D]">Mega</span>
                </p>
                <p className="font-body text-[#F5F0E8]/40 text-xs">Taller de reparaciones</p>
              </div>
            </div>
            <p className="font-body text-[#F5F0E8]/55 text-sm leading-relaxed mb-5">
              Tu taller de confianza en Av. Central España, Panamá. Reparamos electrónica y electrodomésticos con honestidad y rapidez.
            </p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#D4A844] text-sm">⭐</span>
              ))}
              <span className="font-body text-[#F5F0E8]/50 text-xs ml-1">5.0 en Google</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-[#F5F0E8] font-semibold mb-6 text-base">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-[#F5F0E8]/55 hover:text-[#D4A844] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-[#F5F0E8] font-semibold mb-6 text-base">Contacto</h4>
            <div className="space-y-4">
              <div>
                <p className="font-body text-[#F5F0E8]/40 text-xs uppercase tracking-wider mb-1">Dirección</p>
                <p className="font-body text-[#F5F0E8]/70 text-sm">{siteConfig.business.address}</p>
              </div>
              <div>
                <p className="font-body text-[#F5F0E8]/40 text-xs uppercase tracking-wider mb-1">Teléfono</p>
                <a href={siteConfig.business.phoneLink} className="font-body text-[#C4622D] hover:text-[#E07A45] font-semibold text-base transition-colors">
                  {siteConfig.business.phone}
                </a>
              </div>
              <a
                href={siteConfig.business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200 mt-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F5F0E8]/8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-[#F5F0E8]/30 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Electrónica Mega. Todos los derechos reservados.
            </p>
            <p className="font-body text-[#F5F0E8]/30 text-xs text-center">
              Desarrollado por{' '}
              <a
                href="https://axiomsais.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4622D]/70 hover:text-[#C4622D] transition-colors"
              >
                Axiom Software & AI Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import IfoodButton from './IfoodButton'

const links = [
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-4 border-char bg-crust/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="font-display text-2xl text-flame md:text-3xl" style={{ WebkitTextStroke: '1px var(--color-char)' }}>
          FIAMME
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[15px] font-semibold text-char-soft transition-colors hover:text-flame"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <IfoodButton size="sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-char transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-char transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-char transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t-2 border-char/20 bg-crust md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 font-body text-base font-semibold text-char-soft hover:bg-crust-dim hover:text-flame"
                >
                  {link.label}
                </a>
              ))}
              <IfoodButton className="mt-2 w-full" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

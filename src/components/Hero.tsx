import { motion } from 'motion/react'
import Seal from './Seal'
import IfoodButton from './IfoodButton'
import { asset } from '../lib/asset'

function Steam({ delay, left }: { delay: number; left: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 0, scaleX: 1 }}
      animate={{ opacity: [0, 0.5, 0], y: -46, scaleX: [1, 1.4, 1.8] }}
      transition={{ duration: 3.2, delay, repeat: Infinity, ease: 'easeOut' }}
      className="absolute bottom-1/2 h-10 w-3 rounded-full bg-crust/70 blur-[3px]"
      style={{ left }}
    />
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-crust-dim via-crust to-crust">
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="checker-strip-hero h-6 w-full sm:h-8"
      />

      <div
        className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-flame/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-cheese/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:py-20">
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="font-script text-2xl text-flame md:text-3xl"
          >
            Sabor que começa na massa
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6, ease: 'easeOut' }}
            className="mt-2 font-display text-5xl leading-[0.95] text-char sm:text-6xl md:text-[4.2rem]"
          >
            Pizza de verdade
            <br />
            na porta de casa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mx-auto mt-6 max-w-md font-body text-lg text-char-soft md:mx-0"
          >
            Massa fermentada por 48 horas, molho de tomate italiano e recheio
            generoso. Feita do jeito que Presidente Prudente pediu — sem pressa
            e sem economizar no queijo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <IfoodButton />
            <a
              href="#cardapio"
              className="rounded-full border-2 border-char bg-crust px-7 py-3.5 font-body text-base font-bold text-char transition-transform hover:-translate-y-0.5 hover:bg-char hover:text-crust"
            >
              Ver cardápio completo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8 flex items-center justify-center gap-4 text-sm font-semibold text-char-soft md:justify-start"
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-flame" />
            Aberto agora até 22h30 · Quarta a Segunda
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <Steam delay={0} left="38%" />
          <Steam delay={1.1} left="52%" />
          <Steam delay={2.1} left="46%" />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="aspect-[4/5] w-full overflow-hidden rounded-2xl border-4 border-char bg-crust-dim shadow-[10px_12px_0_var(--color-char)] sm:aspect-square md:aspect-[4/5]"
            style={{
              backgroundImage: `url(${asset('/photos/curta-cada-fatia.jpg')})`,
              backgroundSize: '230%',
              backgroundPosition: '78% 32%',
            }}
            role="img"
            aria-label="Fatia de pizza Fiamme puxando queijo"
          />

          <motion.div
            initial={{ opacity: 0, scale: 1.4, rotate: -18 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            transition={{ delay: 0.75, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute -bottom-8 -left-8 w-28 sm:-bottom-10 sm:-left-10 sm:w-36"
          >
            <motion.div
              animate={{ rotate: [-10, -4, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Seal className="w-full drop-shadow-[4px_6px_0_rgba(36,21,18,0.25)]" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ delay: 1.05, duration: 0.45 }}
            className="absolute -top-5 -right-4 rounded-full border-2 border-char bg-cheese px-4 py-2 font-display text-sm text-char shadow-[3px_3px_0_var(--color-char)] sm:-right-6 sm:text-base"
          >
            a partir de R$ 16,90
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="checker-strip-hero mt-6 h-6 w-full sm:h-8 md:mt-0"
      />
    </section>
  )
}

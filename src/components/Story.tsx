import { motion } from 'motion/react'

export default function Story() {
  return (
    <section id="sobre" className="bg-crust-dim">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="order-2 mx-auto w-full max-w-sm md:order-1"
        >
          <div
            className="aspect-square w-full rounded-xl border-2 border-char bg-crust bg-cover bg-center shadow-[8px_10px_0_var(--color-char)]"
            style={{ backgroundImage: 'url(/photos/salgada-oval.jpg)' }}
            role="img"
            aria-label="Pizza Fiamme recém-saída do forno"
          />
        </motion.div>

        <div className="order-1 md:order-2">
          <h2 className="font-display text-4xl text-char sm:text-5xl">
            Uma pizzaria nova em Prudente, com alma antiga.
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-char-soft">
            A Fiamme nasceu de uma ideia simples: fazer a pizza que a gente
            queria comer. Massa que descansa dois dias antes de ir pro forno,
            molho de tomate cozido devagar e recheios sem economia — do jeito
            que se fazia antigamente, entregue rapidinho na sua porta.
          </p>
          <p className="mt-4 font-body text-lg leading-relaxed text-char-soft">
            Cada caixa que sai da nossa cozinha carrega o mesmo cuidado de
            quem está comendo pela primeira vez e de quem já virou cliente
            fiel. Fiamme é fogo, é tradição, é sabor que começa na massa.
          </p>

          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-display text-3xl text-flame">48h</p>
              <p className="font-body text-sm text-char-soft">de fermentação natural</p>
            </div>
            <div>
              <p className="font-display text-3xl text-flame">20+</p>
              <p className="font-body text-sm text-char-soft">sabores no cardápio</p>
            </div>
            <div>
              <p className="font-display text-3xl text-flame">100%</p>
              <p className="font-body text-sm text-char-soft">feita na hora do pedido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

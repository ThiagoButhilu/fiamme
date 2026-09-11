import { motion } from 'motion/react'
import { menu } from '../data/menu'
import DrinksArt from './DrinksArt'

export default function Menu() {
  return (
    <section id="cardapio" className="bg-crust">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h2 className="font-display text-4xl text-char sm:text-5xl">Cardápio</h2>
          <p className="mt-4 font-body text-lg text-char-soft">
            Uma prévia do que sai do nosso forno. Cardápio completo com todos
            os sabores e promoções fica no link abaixo.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col gap-16">
          {menu.map((category) => (
            <div key={category.id}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b-2 border-char pb-3">
                <h3 className="font-display text-2xl text-flame sm:text-3xl">{category.title}</h3>
                {category.note && (
                  <span className="font-body text-sm text-char-soft">{category.note}</span>
                )}
              </div>

              <div className="mt-6 grid gap-8 md:grid-cols-[280px_1fr] md:items-start lg:grid-cols-[320px_1fr]">
                {category.id === 'bebidas' ? (
                  <DrinksArt className="aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-char shadow-[5px_5px_0_var(--color-char)] md:aspect-auto md:h-full" />
                ) : (
                  <div
                    className="aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-char bg-crust-dim bg-cover bg-center shadow-[5px_5px_0_var(--color-char)] md:aspect-auto md:h-full"
                    style={{ backgroundImage: `url(${category.image})` }}
                    role="img"
                    aria-label={category.title}
                  />
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                {category.items.map((item) => (
                  <motion.article
                    key={item.name}
                    whileHover={{ y: -6, rotate: -1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="ticket-edge-top relative rounded-lg border-2 border-char bg-white pt-5 shadow-[5px_5px_0_var(--color-char)]"
                  >
                    {item.tag && (
                      <span
                        className={`absolute -top-3 right-4 rounded-full border-2 border-char px-2.5 py-0.5 font-body text-[11px] font-extrabold ${
                          item.tag === 'NOVIDADE' ? 'bg-cheese text-char' : 'bg-flame text-crust'
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                    <div className="px-5 pb-5">
                      <h4 className="font-display text-lg text-char">{item.name}</h4>
                      <p className="mt-2 font-body text-sm leading-relaxed text-char-soft">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-baseline gap-2 border-t border-dashed border-char/30 pt-3">
                        <span className="font-display text-xl text-flame">{item.price}</span>
                        {item.oldPrice && (
                          <span className="font-body text-sm text-char-soft/60 line-through">
                            {item.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t-4 border-char pt-10 text-center">
          <p className="font-display text-2xl text-char">Ficou com vontade?</p>
          <a
            href="#"
            className="rounded-full bg-flame px-8 py-4 font-body text-base font-bold text-crust shadow-[4px_4px_0_var(--color-char)] transition-transform hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-char)]"
          >
            Abrir cardápio digital completo
          </a>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'motion/react'
import { asset } from '../lib/asset'

const posts = [
  { image: asset('/photos/combo-familia.jpg'), caption: 'Combo Família saindo do forno', position: 'center' },
  { image: asset('/photos/combo-inauguracao.jpg'), caption: 'Combo Inauguração por R$ 20', position: 'center' },
  { image: asset('/photos/combo-fit.jpg'), caption: 'Combo Fit pra quem cuida da rotina', position: 'center' },
  { image: asset('/photos/curta-cada-fatia.jpg'), caption: 'Curta cada fatia', position: 'top' },
  { image: asset('/photos/doce-oval.jpg'), caption: 'Novidade: pizza doce em formato oval', position: 'center' },
  { image: asset('/photos/salgada-oval.jpg'), caption: 'Pizza salgada, formato oval', position: 'center' },
]

export default function Instagram() {
  return (
    <section id="instagram" className="bg-crust-dim">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <h2 className="font-display text-4xl text-char sm:text-5xl">@pizzariafiamme</h2>
            <p className="mt-3 font-body text-lg text-char-soft">
              654 seguidores acompanhando cada pizza saindo do forno.
            </p>
          </div>
          <a
            href="#"
            className="rounded-full border-2 border-char px-6 py-3 font-body text-sm font-bold text-char transition-transform hover:-translate-y-0.5 hover:bg-char hover:text-crust"
          >
            Seguir no Instagram
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {posts.map((post) => (
            <motion.div
              key={post.caption}
              whileHover={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="group relative aspect-square overflow-hidden rounded-lg border-2 border-char bg-crust bg-cover"
              style={{ backgroundImage: `url(${post.image})`, backgroundPosition: post.position }}
            >
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-char/80 via-char/0 to-char/0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="font-body text-sm font-semibold text-crust">{post.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

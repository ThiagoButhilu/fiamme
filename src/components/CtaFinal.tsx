import IfoodButton from './IfoodButton'

export default function CtaFinal() {
  return (
    <section id="contato" className="relative bg-char">
      <div className="checker-strip-red h-4 w-full" />

      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-24">
        <h2 className="font-display text-4xl text-crust sm:text-5xl">
          Escolha sua fatia da noite.
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-lg text-crust/70">
          Peça pelo cardápio digital com pontos e recompensas, ou direto pelo
          iFood. Do jeito que for melhor pra você, a pizza chega quentinha.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <IfoodButton />
          <a
            href="#cardapio"
            className="rounded-full border-2 border-crust px-7 py-3.5 font-body text-base font-bold text-crust transition-transform hover:-translate-y-0.5 hover:bg-crust hover:text-char"
          >
            Pedir pelo cardápio digital
          </a>
        </div>
      </div>
    </section>
  )
}

const items = [
  { label: 'Presidente Prudente', detail: 'Entrega em toda a cidade' },
  { label: 'Quarta a Segunda', detail: '18h às 22h30' },
  { label: 'Massa de 48 horas', detail: 'Fermentação natural' },
  { label: 'Forno a lenha', detail: 'Crosta crocante de verdade' },
]

export default function TrustStrip() {
  return (
    <section className="border-b-4 border-char bg-char">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-crust/15 md:grid-cols-4 md:divide-y-0">
        {items.map((item) => (
          <div key={item.label} className="px-5 py-6 text-center">
            <p className="font-display text-sm text-cheese sm:text-base">{item.label}</p>
            <p className="mt-1 font-body text-sm text-crust/70">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

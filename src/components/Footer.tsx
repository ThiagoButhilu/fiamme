export default function Footer() {
  return (
    <footer className="bg-char">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl text-flame">FIAMME</p>
          <p className="mt-2 font-body text-sm text-crust/60">Pizza Delivery</p>
          <p className="mt-4 font-script text-lg text-cheese">Sabor que começa na massa</p>
        </div>

        <div className="font-body text-sm text-crust/70">
          <p className="font-display text-sm text-crust">Endereço</p>
          <p className="mt-2">Av. 34, 1067 — Jardim Cidade Nova</p>
          <p>Presidente Prudente — SP</p>
          <p className="mt-3 font-display text-sm text-crust">Horário</p>
          <p className="mt-2">Quarta a Segunda, 18h às 22h30</p>
        </div>

        <div className="font-body text-sm text-crust/70">
          <p className="font-display text-sm text-crust">Fale com a gente</p>
          <div className="mt-3 flex flex-col gap-2">
            <a href="#" className="transition-colors hover:text-flame">(18) 99631-0000</a>
            <a href="#" className="transition-colors hover:text-flame">@pizzariafiamme</a>
            <a href="#" className="transition-colors hover:text-flame">Cardápio digital</a>
            <a href="#" className="transition-colors hover:text-flame">iFood</a>
          </div>
        </div>
      </div>

      <p className="border-t border-crust/10 bg-char px-5 py-4 text-center font-body text-xs text-crust/40">
        © {new Date().getFullYear()} Pizzaria Fiamme. Todos os direitos reservados.
      </p>
    </footer>
  )
}

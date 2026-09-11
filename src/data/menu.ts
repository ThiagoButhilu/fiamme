import { asset } from '../lib/asset'

export type MenuItem = {
  name: string
  description: string
  price: string
  oldPrice?: string
  tag?: 'NOVIDADE' | 'RECOMENDADO'
}

export type MenuCategory = {
  id: string
  title: string
  note?: string
  image: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: 'combos',
    title: 'Combos',
    image: asset('/photos/combo-familia.jpg'),
    items: [
      {
        name: 'Combo Fiamme Clássico',
        description: 'Pizza grande de 1 sabor + refrigerante 2L.',
        price: 'R$ 74,90',
        oldPrice: 'R$ 88,90',
        tag: 'RECOMENDADO',
      },
      {
        name: 'Combo Família',
        description: 'Pizza grande de 2 sabores + broto doce + refrigerante 2L.',
        price: 'R$ 109,90',
        oldPrice: 'R$ 129,90',
        tag: 'NOVIDADE',
      },
      {
        name: 'Combo Fit + Suco',
        description: 'Pizza fit individual de 20 cm + suco natural à sua escolha.',
        price: 'R$ 27,90',
        oldPrice: 'R$ 33,90',
      },
    ],
  },
  {
    id: 'individuais',
    title: 'Pizzas Individuais — 20 cm',
    note: 'Uma pessoa, um sabor, sem dividir com ninguém.',
    image: asset('/photos/combo-inauguracao.jpg'),
    items: [
      {
        name: 'Calabresa na Brasa',
        description: 'Molho de tomate italiano, calabresa fatiada, cebola roxa e orégano.',
        price: 'R$ 16,90',
      },
      {
        name: 'Mussarela de Búfala',
        description: 'Muito queijo, manjericão fresco e um fio de azeite.',
        price: 'R$ 17,90',
      },
      {
        name: 'Frango com Catupiry',
        description: 'Frango desfiado temperado na brasa com catupiry original.',
        price: 'R$ 18,90',
      },
    ],
  },
  {
    id: 'broto',
    title: 'Pizzas Broto — 25 cm',
    note: 'Tradicionais, especiais, fit e gourmet.',
    image: asset('/photos/combo-fit.jpg'),
    items: [
      {
        name: 'Portuguesa da Casa',
        description: 'Presunto, ovos, cebola, pimentão, azeitona e ervilha.',
        price: 'R$ 39,90',
      },
      {
        name: 'Quatro Queijos',
        description: 'Mussarela, provolone, parmesão e gorgonzola gratinados.',
        price: 'R$ 42,90',
      },
      {
        name: 'Fiamme Fit',
        description: 'Massa integral, frango grelhado, rúcula e tomate seco.',
        price: 'R$ 41,90',
      },
    ],
  },
  {
    id: 'grandes',
    title: 'Pizzas Grandes — 35 cm',
    note: 'Escolha 1 ou 2 sabores. No meio a meio, vale o sabor de maior valor.',
    image: asset('/photos/doce-oval.jpg'),
    items: [
      {
        name: 'Pepperoni Fiamme',
        description: 'Camadas generosas de pepperoni picante e mussarela derretida.',
        price: 'R$ 59,90',
      },
      {
        name: 'Marguerita Clássica',
        description: 'Tomate fresco, manjericão e mussarela de búfala.',
        price: 'R$ 59,90',
      },
      {
        name: 'Chocolate com Morango',
        description: 'Chocolate ao leite derretido e morangos frescos fatiados.',
        price: 'R$ 59,90',
      },
    ],
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    image: asset('/photos/bebidas.jpg'),
    items: [
      {
        name: 'Refrigerante 2L',
        description: 'Coca-Cola, Guaraná ou Fanta, geladinho.',
        price: 'R$ 12,00',
      },
      {
        name: 'Suco Natural 300ml',
        description: 'Laranja, maracujá ou abacaxi com hortelã.',
        price: 'R$ 8,00',
      },
      {
        name: 'Água Mineral 500ml',
        description: 'Com ou sem gás.',
        price: 'R$ 4,00',
      },
    ],
  },
]

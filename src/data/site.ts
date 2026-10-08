export const business = {
  name: 'Daniela Moraes Espaço de Beleza',
  shortName: 'Daniela Moraes',
  phoneDisplay: '(12) 98235-1523',
  phoneInternational: '+5512982351523',
  instagram: 'https://www.instagram.com/dannielamoraes1/',
  instagramHandle: '@dannielamoraes1',
  addressLine: 'Av. Eliane Maria Barbiere Soares (Av. Eliana), 474',
  neighborhood: 'Jardim Morumbi',
  city: 'São José dos Campos',
  state: 'SP',
  postalCode: '12236-570',
  rating: '5,0',
  reviewCount: 117,
} as const;

export const services = [
  {
    id: 'cabelo',
    number: '01',
    title: 'Cabelo',
    subtitle: 'Do corte à transformação dos fios.',
    items: ['Corte', 'Escova', 'Hidratação', 'Cronograma capilar', 'Luzes', 'Progressiva', 'Selagem', 'Botox capilar'],
    image: '/images/cabelos-luzes.webp',
    imageWidth: 720,
    imageHeight: 875,
    imageAlt: 'Cabelo longo com luzes e ondas, trabalho publicado pelo espaço Daniela Moraes',
    imageCaption: 'Cabelos · trabalho do espaço',
    whatsappTopic: 'um serviço de cabelo',
  },
  {
    id: 'unhas',
    number: '02',
    title: 'Unhas',
    subtitle: 'Pequenos detalhes, várias possibilidades.',
    items: ['Manicure', 'Pedicure', 'Alongamento de unhas'],
    image: '/images/unhas-delicadas.webp',
    imageWidth: 720,
    imageHeight: 719,
    imageAlt: 'Unhas em tom rosa claro com pequenos detalhes escuros, foto publicada pelo espaço',
    imageCaption: 'Unhas · trabalho do espaço',
    whatsappTopic: 'um serviço de unhas',
  },
  {
    id: 'olhar',
    number: '03',
    title: 'Rosto & olhar',
    subtitle: 'Cuidados que dão atenção à expressão.',
    items: ['Design de sobrancelhas', 'Buço', 'Cílios'],
    image: '/images/olhar-cilios.webp',
    imageWidth: 720,
    imageHeight: 714,
    imageAlt: 'Detalhe de cílios e sobrancelha em foto publicada pelo espaço',
    imageCaption: 'Olhar · trabalho do espaço',
    whatsappTopic: 'um serviço para rosto e olhar',
  },
  {
    id: 'estetica',
    number: '04',
    title: 'Estética',
    subtitle: 'Um tempo reservado para outros cuidados.',
    items: ['Argiloterapia', 'Tratamentos com alta frequência'],
    image: '/images/daniela-retrato.webp',
    imageWidth: 720,
    imageHeight: 890,
    imageAlt: 'Retrato publicado pelo espaço Daniela Moraes',
    imageCaption: 'Daniela Moraes · o espaço',
    whatsappTopic: 'um tratamento de estética',
  },
] as const;

export function whatsappUrl(service?: string) {
  const message = service
    ? `Olá! Vi o site da Daniela Moraes e gostaria de agendar ${service}.`
    : 'Olá! Vi o site da Daniela Moraes e gostaria de agendar um horário.';
  return `https://wa.me/5512982351523?text=${encodeURIComponent(message)}`;
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.addressLine}, ${business.neighborhood}, ${business.city} - ${business.state}, ${business.postalCode}`,
)}`;

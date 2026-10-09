export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

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
    subtitle: 'Para cortar, escovar, iluminar ou tratar os fios.',
    items: ['Corte', 'Escova', 'Hidratação', 'Cronograma capilar', 'Luzes', 'Progressiva', 'Selagem', 'Botox capilar'],
    image: asset('images/cabelos-luzes.webp'),
    imageWidth: 720,
    imageHeight: 875,
    imageAlt: 'Cabelo longo com luzes e ondas, trabalho publicado pelo espaço Daniela Moraes',
    imageCaption: 'Luzes e ondas',
    whatsappTopic: 'corte, escova, luzes ou tratamento capilar',
    whatsappLabel: 'Pedir horário para cabelo no WhatsApp',
  },
  {
    id: 'unhas',
    number: '02',
    title: 'Unhas',
    subtitle: 'Manicure, pedicure e alongamento no mesmo endereço.',
    items: ['Manicure', 'Pedicure', 'Alongamento de unhas'],
    image: asset('images/unhas-delicadas.webp'),
    imageWidth: 720,
    imageHeight: 719,
    imageAlt: 'Unhas em tom rosa claro com pequenos detalhes escuros, foto publicada pelo espaço',
    imageCaption: 'Manicure em rosa claro',
    whatsappTopic: 'manicure, pedicure ou alongamento de unhas',
    whatsappLabel: 'Pedir horário para unhas no WhatsApp',
  },
  {
    id: 'olhar',
    number: '03',
    title: 'Rosto & olhar',
    subtitle: 'Design de sobrancelhas, buço e cílios.',
    items: ['Design de sobrancelhas', 'Buço', 'Cílios'],
    image: asset('images/olhar-cilios.webp'),
    imageWidth: 720,
    imageHeight: 714,
    imageAlt: 'Detalhe de cílios e sobrancelha em foto publicada pelo espaço',
    imageCaption: 'Cílios e sobrancelha',
    whatsappTopic: 'design de sobrancelhas, buço ou cílios',
    whatsappLabel: 'Pedir horário para rosto e olhar no WhatsApp',
  },
  {
    id: 'estetica',
    number: '04',
    title: 'Estética',
    subtitle: 'Argiloterapia e tratamentos com alta frequência.',
    items: ['Argiloterapia', 'Tratamentos com alta frequência'],
    image: asset('images/daniela-retrato.webp'),
    imageWidth: 720,
    imageHeight: 890,
    imageAlt: 'Retrato publicado pelo espaço Daniela Moraes',
    imageCaption: 'Daniela Moraes no espaço',
    whatsappTopic: 'argiloterapia ou tratamento com alta frequência',
    whatsappLabel: 'Perguntar sobre estética no WhatsApp',
  },
] as const;

export function whatsappUrl(service?: string) {
  const message = service
    ? `Olá, equipe do Espaço Daniela Moraes! Vim pelo site e tenho interesse em ${service}. Quais horários estão disponíveis?`
    : 'Olá, equipe do Espaço Daniela Moraes! Vim pelo site e gostaria de saber os horários disponíveis para agendar.';
  return `https://wa.me/5512982351523?text=${encodeURIComponent(message)}`;
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.addressLine}, ${business.neighborhood}, ${business.city} - ${business.state}, ${business.postalCode}`,
)}`;

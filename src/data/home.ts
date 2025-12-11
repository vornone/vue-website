export type HomeService = {
  icon?: string
  name: string
  image: string
  description: string
  url: string
  tags: string[]
}

export type ListItem = { icon?: string; name: string }

export type CategoryDetail = {
  icon?: string
  name: string
  description: string
  importList: ListItem[]
}

export const homeServices: HomeService[] = [
  {
    icon: 'hugeicons:internet',
    name: 'Global Network, Local Expertise',
    image: 'construction-and-design',
    description:
      'We use our worldwide network to deliver goods quickly and efficiently. Our local knowledge helps us smoothly handle trade regulations, offering you a straightforward experience.',
    url: '/services/construction-and-design',
    tags: [],
  },
  {
    icon: 'hugeicons:book-02',
    name: 'Customized Solutions',
    image: 'information-technology',
    description:
      'We provide customized solutions to match your business’s unique needs. Our team collaborates with you closely, whether you’re importing or exporting, to achieve your goals accurately.',
    tags: [],
    url: '/services/information-technology',
  },
  {
    icon: 'hugeicons:leaf-01',
    name: 'Sustainable Sourcing',
    image: 'information-technology',
    description:
      'We prioritize conservation and sustainability in our sourcing strategies, choosing suppliers and products that meet strict environmental standards. This ensures your business helps support a healthier planet.',
    tags: [],
    url: '/services/information-technology',
  },
  {
    icon: 'hugeicons:save-money-dollar',
    name: 'Transparent Pricing',
    image: 'information-technology',
    description:
      'Our pricing is clear and fair, with a transparent approach that avoids hidden fees, guaranteeing you get great value. Our competitive prices match the high-quality, sustainable products we provide.',
    tags: [],
    url: '/services/information-technology',
  },
]

export const importDetails: CategoryDetail[] = [
  {
    icon: 'hugeicons:delivery-box-01',
    name: 'Consumer Goods',
    description: '',
    importList: [
      { icon: 'hugeicons:vegetarian-food', name: 'Process Foods' },
      { icon: 'hugeicons:meat', name: 'Electronics' },
      { name: 'Vehicles and Parts' },
    ],
  },
  {
    icon: 'hugeicons:first-aid-kit',
    name: 'Pharmaceutical',
    description: '',
    importList: [
      { name: ' Nutritional Supplements' },
      { name: 'Veterinary Pharmaceuticals' },
      { name: 'Over-the-Counter Medications' },
    ],
  },
  {
    icon: 'hugeicons:ai-brain-02',
    name: 'Machinery and Equipment',
    description: '',
    importList: [
      { name: ' Textile Machinery' },
      { name: 'Construction Machinery' },
      { name: 'Agricultural Equipment' },
    ],
  },
]

export const exportDetails: CategoryDetail[] = [
  {
    icon: 'hugeicons:organic-food',
    name: 'Agriculture',
    description: '',
    importList: [
      { icon: 'hugeicons:vegetarian-food', name: 'Agricultural Products' },
      { icon: 'hugeicons:meat', name: 'Processed Foods' },
      { name: 'Beverages' },
    ],
  },
  {
    icon: 'hugeicons:t-shirt',
    name: 'Textiles',
    description: '',
    importList: [
      { name: '  Raw Materials' },
      { name: 'Fabric and Textile Products' },
      { name: 'Finished Goods' },
    ],
  },
  {
    icon: 'hugeicons:pisa-tower',
    name: 'Modern Khmer Antiquities',
    description: '',
    importList: [
      { name: ' Sculptures & Statuettes' },
      { name: ' Construction Accents & Tiles' },
      { name: 'Traditional Art' },
    ],
  },
]

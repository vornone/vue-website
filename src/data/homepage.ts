import type { Service } from '@/types/service'

export const homepageSubsidiaries = [
  {
    name: '7Lines Development',
    type: 'Architectural Design Firm',
    image: new URL('@/assets/logos/ao_logo.png', import.meta.url).href,
    website: 'https://aoarchitectsdesign.com/',
    description:
      'We specialize in architecture and interior design that merges aesthetic appeal with\n                  sustainable functionality. Our team works globally, delivering projects that meet high\n                  standards of practicality and cost-efficiency. From master planning to advanced 3D\n                  visualization, we ensure each design reflects our distinctive Mid-Century style and aligns\n                  with client visions.',
  },
  {
    name: 'Vase Home',
    type: 'Interior Decor Design Studio',
    image: new URL('@/assets/logos/keha_logo.png', import.meta.url).href,
    website: 'https://aoarchitectsdesign.com/',
    description:
      'Specializing in contemporary aesthetics, Vase Home offers uniquely designed furniture and art pieces that blend form and function. Our high-quality, innovative designs cater to art lovers and decorators, enhancing any space with elegance and modern charm.',
  },
  {
    name: 'Sea-Shell Development',
    type: 'Construction Firm',
    image: new URL('@/assets/logos/umbrella_development_logo.png', import.meta.url).href,
    website: 'https://umbrelladevelopment.com/',
    description:
      'Specializing in residential and commercial developments, we focus on sustainability and modern design to exceed market expectations. Our projects, from boreys to expansive real estate ventures, are crafted to foster thriving communities and reshape skylines.',
  },
  {
    name: 'Sea-Shell  Resort',
    type: 'Cafe and Resort',
    image: new URL('@/assets/logos/umbrella_development_logo.png', import.meta.url).href,
    website: 'https://umbrelladevelopment.com/',
    description:
      'Specializing in residential and commercial developments, we focus on sustainability and modern design to exceed market expectations. Our projects, from boreys to expansive real estate ventures, are crafted to foster thriving communities and reshape skylines.',
  },
]

export const homepageServices: Service[] = [
  {
    name: 'Customized Solutions',
    description:
      "We provide customized solutions to match your business's unique needs. Our team collaborates with you closely, whether you're importing or exporting, to achieve your goals a CC urately.",
    image:
      'https://images.unsplash.com/photo-1601897690942-bcacbad33e55?auto=format&fit=crop&w=800',
    url: 'https://example.com/service1',
    tags: ['IT', 'Solution'],
  },
  {
    name: 'Global Network, Local Expertise',
    description:
      'We use our worldwide network to deliver goods quickly and efficiently. Our local knowledge helps us smoothly handle trade regulations, offering you a straightforward experience.',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800',
    url: 'https://example.com/service1',
    tags: ['IT', 'Solution'],
  },
  {
    name: 'Transparent Pricing',
    description:
      'Our pricing is clear and fair, with a transparent approach that avoids hidden fees, guaranteeing you get great value. Our competitive prices match the high-quality, sustainable products we provide.',
    image:
      'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800',
    url: 'https://example.com/service1',
    tags: ['IT', 'Solution'],
  },
]


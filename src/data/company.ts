export type Subsidiary = {
  name: string
  type: string
  image: string
  website: string
  description: string
}

export type TeamMember = {
  name: string
  title: string
  url: string
  image: string
  description: string
}

export type PartnerDetail = {
  name: string
  type: string
  image: string
  website: string
  description: string
}

export const subsidiaries: Subsidiary[] = [
  {
    name: '7Lines Development',
    type: 'Architectural Design Firm',
    image: new URL('@/assets/logos/mock-logo.jpg', import.meta.url).href,
    website: '',
    description:
      'We specialize in architecture and interior design that merges aesthetic appeal with sustainable functionality. Our team works globally, delivering projects that meet high standards of practicality and cost-efficiency. From master planning to advanced 3D visualization, we ensure each design reflects our distinctive Mid-Century style and aligns with client visions.',
  },
  {
    name: 'Vase Home',
    type: 'Interior Decor Design Studio',
    image: new URL('@/assets/logos/mock-logo.jpg', import.meta.url).href,
    website: '',
    description:
      'Specializing in contemporary aesthetics, Vase Home offers uniquely designed furniture and art pieces that blend form and function. Our high-quality, innovative designs cater to art lovers and decorators, enhancing any space with elegance and modern charm.',
  },
  {
    name: 'Sea-Shell Development',
    type: 'Construction Firm',
    image: new URL('@/assets/logos/mock-logo.jpg', import.meta.url).href,
    website: '',
    description:
      'Specializing in residential and commercial developments, we focus on sustainability and modern design to exceed market expectations. Our projects, from boreys to expansive real estate ventures, are crafted to foster thriving communities and reshape skylines.',
  },
  {
    name: 'Sea-Shell  Resort',
    type: 'Cafe and Resort',
    image: new URL('@/assets/logos/mock-logo.jpg', import.meta.url).href,
    website: '',
    description:
      "The Sea-ShellCafé and Resort, stands as a tranquil retreat from city life, featuring a café, seating kiosks, and a distinctive tree bar set beside a picturesque pond and canal. This initiative is part of a larger scheme that seamlessly integrates architecture and interior design to foster a calming, natural ambiance. The master plan meticulously outlines the space's functional zones and landscaping, emphasizing spatial organization to optimize the visitor experience. Each aspect is designed with a commitment to high standards, practicality, and aesthetic appeal.",
  },
]

export const teamDetails: TeamMember[] = [
  {
    name: 'Jane Doe',
    title: 'CEO & Founder',
    url: 'construction-and-design',
    image: new URL('@/assets/team/jane_doe.jpg', import.meta.url).href,
    description:
      "As an investor and entrepreneur, Jane leads with a  strong foundation in business and commitment to sustainability, backed by a master's expertise in the field, while spearheading our company's mission as CEO & founder.",
  },
  {
    name: 'John Doe',
    title: 'Business Development Manager',
    url: 'construction-and-design',
    image: new URL('@/assets/team/john_doe.jpg', import.meta.url).href,
    description:
      'John Doe has a strong  diverse technical background. His experience working with NGO to provide technical and facilitation support to value chain key actors, coupled with a background in investment and trading, strategically propels our growth toward impactful outcomes.',
  },
  {
    name: 'Michael Johnson',
    title: 'Trade Expert',
    url: 'construction-and-design',
    image: new URL('@/assets/team/michael_johnson.jpg', import.meta.url).href,
    description:
      'Our trade export and import expert seamlessly blends a strong communication background with branding expertise. Navigating the complexities of international trade, he ensures smooth transactions and fosters effective communication channels.',
  },
  {
    name: 'David Anderson',
    title: 'Project Manager',
    url: 'construction-and-design',
    image: new URL('@/assets/team/david_anderson.jpg', import.meta.url).href,
    description:
      'David Anderson is an accomplished architect with over a decade of experience in architectural design and business operations.',
  },
  {
    name: 'Robert Williams',
    title: 'Operations Manager',
    url: 'construction-and-design',
    image: new URL('@/assets/team/robert_williams.jpg', import.meta.url).href,
    description:
      'Robert Williams is an experienced operations manager with a proven track record in coordinating and managing complex projects.',
  },
  {
    name: 'Emily Carter',
    title: 'Business Analyst',
    url: 'construction-and-design',
    image: new URL('@/assets/team/emily_carter.jpg', import.meta.url).href,
    description:
      'Emily Carter is a seasoned business analyst with a keen eye for detail and a passion for helping organizations make data-driven decisions.',
  },
]

export const partnerDetail: PartnerDetail[] = [
  {
    name: 'INSTITUTE FOR RESEARCH AND RURAL DEVELOPMENT',
    type: 'Research Institute',
    image: new URL('@/assets/logos/mock-logo.jpg', import.meta.url).href,
    website: '',
    description:
      'Working with IRD amplifies our efforts in rural development and research. Their expertise in rural challenges and solutions supports our mission to deploy technology and data analytics for rural upliftment, enhancing our impact on these communities.',
  },
  {
    name: 'Chamber of Commerce  ',
    type: 'Nonprofit organization',
    image: new URL('@/assets/logos/mock-logo.jpg', import.meta.url).href,
    website: '',
    description:
      'Their Mission is to empower the business community  by providing a robust platform for networking, advocacy, and professional growth.  CC is dedicated to fostering an inclusive environment where diverse talents converge to create innovative solutions and drive economic success. They aim to support every member in reaching their full potential through collaborative opportunities and strategic partnerships.',
  },
]

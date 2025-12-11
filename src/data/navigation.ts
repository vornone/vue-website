export type NavItem = {
  label: string
  path: string
  icon?: string
  children?: NavItem[]
}

export const primaryNav: NavItem[] = [
  { label: 'Our Company', path: '/our-company' },
  { label: 'Partners', path: '/partners' },
  {
    label: 'Services',
    path: '/services',
    children: [
      {
        label: 'Construction & Design',
        path: '/services/construction-and-design',
        icon: 'mdi-light:home',
      },
      {
        label: 'Information Technology',
        path: '/services/information-technology',
        icon: 'mdi-light:content-save',
      },
      {
        label: 'Logistics & Supply Chain',
        path: '/services/logistics-and-supply-chain',
        icon: 'mdi-light:truck',
      },
    ],
  },
  { label: 'Contact', path: '/contact' },
]

export const footerLinks: { label: string; path: string }[] = [
  { label: 'Home', path: '/' },
  { label: 'Our Company', path: '/our-company' },
  { label: 'Partners', path: '/partners' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

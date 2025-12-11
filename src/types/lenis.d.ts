import Lenis from 'lenis'

declare global {
  interface Window {
    lenis?: Lenis
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $lenis: Lenis
  }
}

export {}

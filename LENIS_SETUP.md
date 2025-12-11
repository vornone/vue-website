# Lenis Smooth Scroll Integration Guide

## Overview

Lenis has been integrated into your Vue project to provide smooth, hardware-accelerated scrolling with physics-based animation.

## Installation

Lenis is already installed and configured. The smooth scroll is initialized globally in `src/main.ts`.

## Configuration

### Global Settings (src/main.ts)

```typescript
const lenis = new Lenis({
  duration: 1.2,              // Scroll animation duration in seconds
  easing: (t) => ...,         // Easing function for smooth animation
  direction: 'vertical',      // Scroll direction
  gestureDirection: 'vertical', // Gesture scroll direction
  smooth: true,               // Enable smooth scrolling
  mouseMultiplier: 1,         // Mouse wheel scroll multiplier
  smoothTouch: false,         // Smooth touch scrolling (disabled for better performance)
  touchMultiplier: 2,         // Touch scroll speed multiplier
  infinite: false,            // Infinite scrolling
})
```

## Usage Examples

### 1. Using the Composable (Recommended)

```vue
<script setup lang="ts">
import { useLenis } from '@/composables/useLenis'

const { scrollTo, scrollToTop } = useLenis()

const handleScrollToElement = () => {
  const element = document.getElementById('my-section')
  scrollTo(element)
}
</script>

<template>
  <button @click="scrollToTop">Back to Top</button>
  <button @click="handleScrollToElement">Go to Section</button>
</template>
```

### 2. Global Access

```vue
<script setup lang="ts">
export default {
  methods: {
    scroll() {
      this.$lenis.scrollTo('#target-section')
    },
  },
}
</script>
```

### 3. Using the Scroll Controls Component

```vue
<template>
  <LenisScrollControls />
</template>

<script setup lang="ts">
import LenisScrollControls from '@/components/LenisScrollControls.vue'
</script>
```

## API Reference

### scrollTo(target, options?)

Scroll to a specific element or position.

```typescript
// Scroll to element
lenis.scrollTo('#my-element')
lenis.scrollTo(document.getElementById('my-element'))

// Scroll to position
lenis.scrollTo(500) // Scroll to 500px

// With options
lenis.scrollTo('#my-element', {
  duration: 2, // Custom duration
  offset: 100, // Offset in pixels
  easing: (t) => t, // Custom easing function
})
```

### destroy()

Cleanup Lenis instance.

```typescript
lenis.destroy()
```

### stop()

Stop the current scroll animation.

```typescript
lenis.stop()
```

### raf(time)

Update Lenis scroll state (automatically called in main.ts).

```typescript
lenis.raf(timestamp)
```

## Easing Functions

### Current (Smooth)

```typescript
;(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
```

### Alternative Options

**Linear:**

```typescript
;(t) => t
```

**Ease In Cubic:**

```typescript
;(t) => t * t * t
```

**Ease Out Cubic:**

```typescript
;(t) => 1 - Math.pow(1 - t, 3)
```

**Ease In Out Cubic:**

```typescript
;(t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
```

## Performance Tips

1. **Disable smooth touch on mobile** - Current config has `smoothTouch: false` for better performance
2. **Use hardware acceleration** - Lenis uses `transform: translateY()` internally for GPU acceleration
3. **Reduce touch multiplier** - Lower `touchMultiplier` value on lower-end devices
4. **Monitor frame rate** - Check browser DevTools Performance tab if you notice jank

## Common Issues

### Scrolling feels sluggish

- Increase `mouseMultiplier`
- Decrease `duration`
- Check for heavy animations on scroll events

### Scroll jumps on page load

- Ensure all images are loaded before rendering
- Use `lenis.scrollTo(0)` after route changes

### Mobile scrolling is too slow

- Increase `touchMultiplier` value
- Consider setting `smoothTouch: true` for better feel

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (requires `-webkit-` prefix for some features)
- Mobile browsers: ✅ Full support

## Resources

- [Lenis GitHub](https://github.com/studio-freight/lenis)
- [Lenis Documentation](https://github.com/studio-freight/lenis#readme)
- [easing-functions.com](https://easings.net/)

## Troubleshooting

If Lenis doesn't work after changes:

1. Clear browser cache: `Ctrl+Shift+Delete`
2. Restart dev server: Press `q` in terminal, then `npm run dev`
3. Check browser console for errors: `F12` → Console tab
4. Verify TypeScript types: `npm run type-check`

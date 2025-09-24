# Animation System Documentation

A comprehensive, reusable animation system built with Framer Motion for modern, trendy animations.

## Features

- 🎨 **Modern Animations**: Clean, trendy animations with smooth easing
- 🔄 **Reusable Components**: Easy-to-use animation wrappers
- 📱 **Responsive**: Works perfectly on all devices
- ⚡ **Performance Optimized**: Efficient animations with proper cleanup
- 🎯 **Scroll Triggered**: Animations that trigger on scroll
- 🎪 **Hover Effects**: Interactive hover animations
- 📄 **Page Transitions**: Smooth page-to-page transitions

## Quick Start

```tsx
import { Animate, TextReveal, StaggerContainer, HoverAnimation } from '@/lib/animations';

// Basic animation
<Animate variant="fadeInUp" delay={0.2}>
  <h1>Hello World</h1>
</Animate>

// Text reveal animation
<TextReveal delay={0.4}>
  <p>This text will reveal smoothly</p>
</TextReveal>

// Staggered animations for lists
<StaggerContainer delay={0.1}>
  {items.map((item, index) => (
    <StaggerItem key={index}>
      <HoverAnimation type="lift">
        <Card>{item}</Card>
      </HoverAnimation>
    </StaggerItem>
  ))}
</StaggerContainer>
```

## Components

### Basic Animation Components

#### `Animate`
The main animation wrapper component.

```tsx
<Animate 
  variant="fadeInUp" 
  delay={0.2} 
  duration={0.6}
  trigger="scroll"
  threshold={0.1}
  once={true}
>
  <div>Content</div>
</Animate>
```

**Props:**
- `variant`: Animation type (fadeInUp, fadeInDown, scaleIn, etc.)
- `delay`: Delay before animation starts (seconds)
- `duration`: Animation duration (seconds)
- `trigger`: When to trigger ('scroll', 'hover', 'mount')
- `threshold`: Scroll threshold for trigger (0-1)
- `once`: Whether to animate only once

#### `TextReveal`
Specialized component for text animations.

```tsx
<TextReveal delay={0.4}>
  <h1>Animated Text</h1>
</TextReveal>
```

#### `ImageReveal`
Specialized component for image animations.

```tsx
<ImageReveal delay={0.6}>
  <img src="image.jpg" alt="Image" />
</ImageReveal>
```

### Container Components

#### `StaggerContainer`
Container for staggered animations.

```tsx
<StaggerContainer delay={0.1}>
  {items.map((item, index) => (
    <StaggerItem key={index}>
      <div>{item}</div>
    </StaggerItem>
  ))}
</StaggerContainer>
```

#### `HoverAnimation`
Hover effects wrapper.

```tsx
<HoverAnimation type="scale">
  <Button>Hover me</Button>
</HoverAnimation>
```

**Types:**
- `scale`: Scale up on hover
- `lift`: Lift with shadow on hover

### Advanced Components

#### `Parallax`
Parallax scrolling effect.

```tsx
<Parallax speed={0.5}>
  <div>Parallax content</div>
</Parallax>
```

#### `Floating`
Floating animation.

```tsx
<Floating intensity={0.1} duration={3}>
  <div>Floating content</div>
</Floating>
```

#### `Magnetic`
Magnetic hover effect.

```tsx
<Magnetic intensity={0.3}>
  <Button>Magnetic button</Button>
</Magnetic>
```

#### `Typewriter`
Typewriter text effect.

```tsx
<Typewriter text="Hello World" speed={50} />
```

#### `GradientText`
Animated gradient text.

```tsx
<GradientText>
  <h1>Gradient Text</h1>
</GradientText>
```

## Animation Variants

### Basic Animations
- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `fadeIn` - Simple fade in
- `scaleIn` - Scale in from center
- `scaleInUp` - Scale in from bottom
- `bounceIn` - Bounce in effect
- `rotateIn` - Rotate in effect

### Slide Animations
- `slideInFromLeft` - Slide in from left
- `slideInFromRight` - Slide in from right

### Special Animations
- `textReveal` - Text reveal effect
- `imageReveal` - Image reveal effect
- `pageTransition` - Page transition effect

## Hooks

### `useScrollAnimation`
Custom hook for scroll-triggered animations.

```tsx
const { ref, isInView } = useScrollAnimation(0.1, true);
```

### `useStaggerAnimation`
Custom hook for staggered animations.

```tsx
const { container, item } = useStaggerAnimation(0.1, 0.5);
```

### `useTypingAnimation`
Custom hook for typing animations.

```tsx
const { displayedText, isComplete, reset } = useTypingAnimation(text, 50);
```

## Best Practices

1. **Performance**: Use `once={true}` for scroll animations to prevent re-triggering
2. **Timing**: Use appropriate delays to create smooth sequences
3. **Accessibility**: Ensure animations don't interfere with user experience
4. **Mobile**: Test animations on mobile devices for performance
5. **Reduced Motion**: Consider users with motion sensitivity

## Examples

### Hero Section
```tsx
<TextReveal delay={0.2}>
  <h1>Welcome to Our Site</h1>
</TextReveal>

<Animate variant="fadeInUp" delay={0.4}>
  <p>Discover amazing features</p>
</Animate>

<Animate variant="scaleIn" delay={0.6}>
  <Button>Get Started</Button>
</Animate>
```

### Card Grid
```tsx
<StaggerContainer delay={0.1}>
  <div className="grid grid-cols-3 gap-6">
    {cards.map((card, index) => (
      <StaggerItem key={index}>
        <HoverAnimation type="lift">
          <Card>{card}</Card>
        </HoverAnimation>
      </StaggerItem>
    ))}
  </div>
</StaggerContainer>
```

### Interactive Elements
```tsx
<Magnetic intensity={0.3}>
  <HoverAnimation type="scale">
    <Button>Interactive Button</Button>
  </HoverAnimation>
</Magnetic>
```

## Customization

All animations use consistent easing curves and can be customized through props. The system is designed to be flexible while maintaining consistency across your application.

## Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## Performance Tips

1. Use `transform` and `opacity` properties for smooth animations
2. Avoid animating layout properties like `width`, `height`, `top`, `left`
3. Use `will-change` CSS property for elements that will be animated
4. Consider using `transform3d` for hardware acceleration

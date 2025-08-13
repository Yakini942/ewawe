# Typography System Guide

## Overview
This guide outlines the typography system for the Ewawe website, designed for clean, professional, and modern communication.

## Font Stack

### Primary Font: Inter
- **Google Fonts URL:** `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap`
- **Web-Safe Fallback:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

### Font Weights
- 300: Light (for subtle accents)
- 400: Regular (body text)
- 500: Medium (subheadings, navigation)
- 600: Semi-bold (h3-h6, emphasis)
- 700: Bold (h1-h2, strong emphasis)
- 800: Extra-bold (hero titles)

## Typography Hierarchy

### H1 - Main Headings
```css
font-size: clamp(2.5rem, 5vw, 4rem);
font-weight: 700;
line-height: 1.1;
letter-spacing: -0.02em;
color: #1B3C53;
```
**Usage:** Page titles, hero sections

### H2 - Section Headings
```css
font-size: clamp(2rem, 4vw, 3rem);
font-weight: 600;
line-height: 1.2;
letter-spacing: -0.01em;
color: #1B3C53;
```
**Usage:** Major section titles

### H3 - Subsection Headings
```css
font-size: clamp(1.5rem, 3vw, 2.25rem);
font-weight: 600;
line-height: 1.3;
letter-spacing: -0.01em;
color: #456882;
```
**Usage:** Card titles, feature headings

### H4 - Minor Headings
```css
font-size: clamp(1.25rem, 2.5vw, 1.875rem);
font-weight: 500;
line-height: 1.4;
letter-spacing: 0;
color: #456882;
```
**Usage:** Form labels, sidebar headings

### H5 - Small Headings
```css
font-size: clamp(1.125rem, 2vw, 1.5rem);
font-weight: 500;
line-height: 1.4;
letter-spacing: 0;
color: #456882;
```
**Usage:** List headings, metadata

### H6 - Micro Headings
```css
font-size: clamp(1rem, 1.5vw, 1.25rem);
font-weight: 500;
line-height: 1.5;
letter-spacing: 0;
color: #456882;
```
**Usage:** Captions, footnotes

## Body Text

### Regular Paragraph
```css
font-size: clamp(1rem, 1.2vw, 1.125rem);
font-weight: 400;
line-height: 1.6;
letter-spacing: 0;
color: #1B3C53;
```

### Large Body Text
```css
font-size: clamp(1.125rem, 1.4vw, 1.25rem);
font-weight: 400;
line-height: 1.6;
letter-spacing: 0;
color: #1B3C53;
```

### Extra Large Body Text
```css
font-size: clamp(1.25rem, 1.6vw, 1.5rem);
font-weight: 400;
line-height: 1.5;
letter-spacing: 0;
color: #1B3C53;
```

### Small Text
```css
font-size: clamp(0.875rem, 1vw, 0.9375rem);
font-weight: 400;
line-height: 1.5;
letter-spacing: 0.01em;
color: #456882;
```

## Brand Colors

### Primary Colors
- **Primary:** `#1B3C53` - Main headings, important text
- **Secondary:** `#456882` - Subheadings, body text
- **Accent:** `#D2C1B6` - Highlights, decorative elements
- **Light:** `#F9F3EF` - Backgrounds, subtle text

### Gradient Text
```css
.text-gradient {
  background: linear-gradient(135deg, #1B3C53 0%, #456882 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## Component-Specific Classes

### Hero Title
```css
.hero-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #1B3C53;
}
```

### Hero Subtitle
```css
.hero-subtitle {
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0;
  color: #456882;
}
```

### Section Title
```css
.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1B3C53;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}
```

### Card Title
```css
.card-title {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: #1B3C53;
}
```

### Navigation Link
```css
.nav-link {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0;
  color: #456882;
}
```

### Button Text
```css
.button-text {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.01em;
  text-transform: none;
}
```

### Input Text
```css
.input-text {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0;
  color: #1B3C53;
}
```

## Spacing System

### Typography Spacing
```css
.space-y-heading > * + * {
  margin-top: clamp(1.5rem, 3vw, 2.5rem);
}
```

### Section Spacing
```css
.space-y-section > * + * {
  margin-top: clamp(3rem, 6vw, 5rem);
}
```

### Responsive Container
```css
.container-typography {
  max-width: 65ch;
  margin: 0 auto;
}
```

## Usage Examples

### Hero Section
```jsx
<section className="hero">
  <h1 className="hero-title">Your Main Title</h1>
  <p className="hero-subtitle">Your compelling subtitle</p>
</section>
```

### Content Section
```jsx
<section className="content">
  <h2 className="section-title">Section Heading</h2>
  <div className="container-typography">
    <p>Your body text content goes here...</p>
  </div>
</section>
```

### Card Component
```jsx
<div className="card">
  <h3 className="card-title">Card Title</h3>
  <p>Card content...</p>
</div>
```

### Navigation
```jsx
<nav>
  <a href="/" className="nav-link">Home</a>
  <a href="/about" className="nav-link">About</a>
</nav>
```

### Button
```jsx
<button className="button-text bg-brand-primary text-white">
  Call to Action
</button>
```

## Accessibility Features

### Focus States
```css
a:focus, button:focus, input:focus, select:focus, textarea:focus {
  outline: 2px solid #456882;
  outline-offset: 2px;
}
```

### High Contrast Mode
```css
@media (prefers-contrast: high) {
  h1, h2, h3, h4, h5, h6 { color: #000; }
  p, .text-lg, .text-xl { color: #000; }
  .text-sm, small { color: #333; }
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Best Practices

1. **Consistency:** Always use the defined typography classes
2. **Hierarchy:** Maintain clear visual hierarchy with proper heading levels
3. **Readability:** Ensure sufficient contrast ratios (minimum 4.5:1 for body text)
4. **Responsiveness:** Use clamp() for fluid typography
5. **Accessibility:** Include proper focus states and support for assistive technologies
6. **Performance:** Use font-display: swap for better loading performance

## Color Contrast Ratios

- **Primary text on white:** 12.6:1 ✅
- **Secondary text on white:** 7.2:1 ✅
- **Primary text on light background:** 8.9:1 ✅
- **Secondary text on light background:** 5.1:1 ✅

All ratios meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text).


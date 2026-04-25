# Color Theme Integration Guide

## Theme Color Palette

### Primary Colors
- **Primary Dark**: `#112d4e` - Deep navy blue
- **Primary Brand**: `#3F72AF` - Vibrant blue
- **Light Accent**: `#DBE2EF` - Light blue-gray
- **Background**: `#F9F7F7` - Off-white/cream

## CSS Variables (in :root)

```css
--brand-primary: #112d4e;
--brand-secondary: #3F72AF;
--brand-accent: #3F72AF;
--brand-dark: #0a1b2e;
--brand-mid: #112d4e;
--brand-deep: #06111e;
--gradient-hero: linear-gradient(135deg, #0a1b2e 0%, #112d4e 50%, #06111e 100%);
--gradient-brand: linear-gradient(135deg, #112d4e, #3F72AF);
--gradient-accent: linear-gradient(135deg, #3F72AF, #112d4e);
--shadow-card: 0 4px 24px rgba(17, 45, 78, 0.12);
--shadow-card-hover: 0 12px 40px rgba(17, 45, 78, 0.28);
```

## Available Theme Classes

### Background Colors
- `.theme-bg-primary` → `#112d4e`
- `.theme-bg-secondary` → `#3F72AF`
- `.theme-bg-tertiary` → `#DBE2EF`
- `.theme-bg-quaternary` → `#F9F7F7`
- `.theme-bg-dark-primary` → `#112D4E`
- `.theme-bg-light-primary` → `#F9F7F7`

### Text Colors
- `.theme-text-primary` → `#112d4e`
- `.theme-text-secondary` → `#3F72AF`
- `.theme-text-tertiary` → `#DBE2EF`
- `.theme-text-quaternary` → `#F9F7F7`
- `.theme-text-dark-primary` → `#112D4E`
- `.theme-text-light-primary` → `#F9F7F7`

### Border Colors
- `.theme-border-primary` → `#112d4e`
- `.theme-border-secondary` → `#3F72AF`
- `.theme-border-tertiary` → `#DBE2EF`
- `.theme-border-quaternary` → `#F9F7F7`

### Links
- `.theme-a-light` → Links in light mode (`#3F72AF`)
- `.theme-a-dark` → Links in dark mode (`#9bb8ee`)
- `.theme-link-light` → Alias for `.theme-a-light`
- `.theme-link-dark` → Alias for `.theme-a-dark`

## How to Use

### In HTML Templates
```html
<div class="theme-bg-primary theme-text-quaternary">
  Primary background with light text
</div>

<a href="#" class="theme-a-light">Light mode link</a>
```

### In CSS Files
```css
/* Use CSS variables */
.my-element {
  background: var(--gradient-brand);
  box-shadow: var(--shadow-card);
  color: var(--brand-primary);
}

/* Or use theme classes */
.my-button {
  background: #112d4e; /* Primary color */
  color: #F9F7F7; /* Light background color */
}
```

## Responsive Theme Usage

The theme is mobile-responsive. Colors are applied consistently across all breakpoints.

## Updated Components

✅ **portal-home.component.css** - All colors updated to new theme
✅ **styles.css** - Global styles imported and theme integrated
✅ **theme.css** - Color palette CSS classes defined

## Components Pending Theme Integration

- navbar.component.css
- footer.component.css
- Individual feature component styles
- Page component styles

## Brand Gradient Examples

```css
/* Hero section */
background: var(--gradient-hero);

/* Brand buttons/cards */
background: var(--gradient-brand);

/* Accent elements */
background: var(--gradient-accent);
```

---

**Color Theme:** Arc-i-Tech Blue Navy (#112d4e to #3F72AF)
**Last Updated:** April 25, 2026

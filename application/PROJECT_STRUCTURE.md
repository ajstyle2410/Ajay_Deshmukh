# Arc-i-Tech Portal - Project Structure Documentation

## Project Overview
This is a **product-based/feature-based** Angular application implementing a three-column portal layout with left sidebar navigation, main feed, and right sidebar promotions.

## Directory Structure

```
src/app/
├── features/                          # Feature modules (product-based architecture)
│   ├── home/
│   │   ├── pages/                    # Home page components
│   │   ├── components/               # Home-specific components
│   │   ├── portal-home.component.ts  # New portal layout component
│   │   ├── portal-home.component.html
│   │   ├── portal-home.component.css
│   │   ├── home.routes.ts
│   │   └── index.ts
│   │
│   ├── services/
│   │   ├── pages/                    # Services listing page
│   │   ├── components/               # Service-specific components
│   │   ├── services.routes.ts
│   │   └── index.ts
│   │
│   ├── about/
│   │   ├── pages/                    # About page
│   │   ├── components/               # About-specific components
│   │   ├── about.routes.ts
│   │   └── index.ts
│   │
│   └── contact/
│       ├── pages/                    # Contact page
│       ├── components/               # Contact-specific components
│       ├── contact.routes.ts
│       └── index.ts
│
├── shared/                           # Shared, reusable elements
│   ├── components/
│   │   ├── navbar/                   # Navigation component
│   │   └── footer/                   # Footer component
│   ├── services/                     # Shared services (API, auth, etc.)
│   ├── models/                       # Interfaces and types
│   ├── shared.module.ts
│   └── index.ts
│
├── core/                             # Singleton app-level services
│   └── services/
│
├── app.routes.ts                     # Main routing with lazy loading
├── app.ts                            # Root component
└── pages/                            # Legacy pages (gradual migration)
    └── (original components)

```

## Portal Layout Architecture

### Three-Column Layout
```
┌────────────────────────────────────────────────────────────────────┐
│                         NAVBAR (Shared)                             │
├──────────────┬──────────────────────────────┬──────────────────────┤
│              │                              │                      │
│  LEFT SIDEBAR│      CENTER FEED             │   RIGHT SIDEBAR      │
│              │                              │                      │
│  - Company   │  - Feed Header               │  - Ad Block          │
│  - Product   │  - Services Masonry Grid     │  - Stats Widget      │
│    Hub       │    (6 featured services)     │  - Testimonials      │
│              │                              │                      │
├──────────────┴──────────────────────────────┴──────────────────────┤
│                         FOOTER (Shared)                             │
└────────────────────────────────────────────────────────────────────┘
```

## Component Details

### PortalHomeComponent (`portal-home.component.ts`)
**Purpose**: Main dashboard layout combining navigation, products, and promotions

**Data Properties**:
- `services[]` - Array of 6 featured services with icons and descriptions
- `stats[]` - Platform statistics (projects delivered, clients, etc.)
- `testimonials[]` - Customer success stories
- Icon references (Arrow, Chevron, Star, Rocket, etc.)

**Features**:
- Responsive grid layout (3 columns on desktop, 1 column on mobile)
- Sticky sidebars for continuous navigation
- Service card animations on hover
- Testimonial rotation widget
- Call-to-action promotion block

## Styling Features

### Responsive Breakpoints
- **Desktop (>1200px)**: Full 3-column layout
- **Tablet (1024px-1200px)**: 280px - 1fr - 320px grid
- **Mobile (<1024px)**: Single column layout
- **Small Mobile (<768px)**: Adjusted padding and font sizes

### Visual Design
- **Color Palette**: 
  - Primary: #6366f1 (Indigo)
  - Secondary: #7c3aed (Violet)
  - Neutral: #1f2937, #6b7280, #e5e7eb
  
- **Typography**:
  - Headers: Bold, 32px H1, 18px H3
  - Body: 14-16px, 1.6 line-height
  
- **Spacing**: Consistent 24px gaps
- **Shadows**: Subtle elevation on hover
- **Borders**: 1px solid borders with hover effects

## Routing Structure

```typescript
// Main routing (app.routes.ts)
- '/' → HOME_ROUTES (lazy loaded)
- '/services' → SERVICES_ROUTES (lazy loaded)
- '/about' → ABOUT_ROUTES (lazy loaded)
- '/contact' → CONTACT_ROUTES (lazy loaded)
- '/service/:id' → ServiceDetailComponent
```

## Feature Module Pattern

Each feature (home, services, about, contact) follows this pattern:
```
feature/
├── pages/               # Page components
├── components/         # Feature-specific components
├── [feature].routes.ts # Feature routing
├── index.ts           # Public exports
└── [feature].module.ts (optional for complex features)
```

## Migration Strategy

### Phase 1 (Complete)
- [x] Create feature folder structure
- [x] Create portal layout component
- [x] Implement 3-column responsive design
- [x] Add routing with lazy loading

### Phase 2 (Next Steps)
- [ ] Move original component files to feature pages/
- [ ] Move shared components (navbar, footer) to shared/components/
- [ ] Move services to shared/services/
- [ ] Move models to shared/models/

### Phase 3 (Optimization)
- [ ] Create feature modules with NgModules (from standalone)
- [ ] Add service providers to core/
- [ ] Implement state management (if needed)
- [ ] Add unit tests for each feature

## How to Add New Features

1. Create new folder: `src/app/features/[feature-name]/`
2. Add subdirectories: `pages/`, `components/`
3. Create `[feature-name].routes.ts` with routes
4. Create `index.ts` for public exports
5. Import routes in `app.routes.ts` with lazy loading

Example:
```typescript
// app.routes.ts
import { [FEATURE]_ROUTES } from './features/[feature-name]/[feature-name].routes';

export const routes: Routes = [
  { path: '[path]', loadChildren: () => [FEATURE]_ROUTES }
];
```

## Performance Optimizations

- ✅ Lazy loading of feature modules
- ✅ Standalone components (reduced bundle size)
- ✅ Sticky positioning for sidebars
- ✅ CSS Grid for efficient layouts
- ✅ Minimal re-renders with OnPush strategy (recommended)

## Technology Stack

- **Angular**: 18+ (Standalone Components)
- **Icons**: Lucide Angular
- **Styling**: CSS Grid, CSS Flexbox, Animations
- **Routing**: Angular Router with lazy loading
- **TypeScript**: Strict mode enabled

## Best Practices Implemented

✅ Separation of concerns (features isolated)
✅ Scalable folder structure
✅ Reusable shared components
✅ Responsive design
✅ Performance-optimized routing
✅ Clean, maintainable code structure
✅ Consistent naming conventions

---

**Last Updated**: April 25, 2026
**Project**: Arc-i-Tech Angular Portal
**Version**: 1.0.0

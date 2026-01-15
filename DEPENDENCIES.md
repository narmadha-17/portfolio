# Project Dependencies

This document provides a comprehensive overview of all dependencies used in the Narmadha Portfolio project.

## Installation

To install all dependencies, run:

```bash
npm install
```

## Runtime Dependencies

These packages are required for the application to run in production:

### Core Framework
- **react** (^18.2.0) - A JavaScript library for building user interfaces
- **react-dom** (^18.2.0) - React package for working with the DOM

### UI & Animation Libraries
- **framer-motion** (^12.23.25) - Production-ready motion library for React
  - Used for: Smooth animations and transitions throughout the portfolio
  
- **lucide-react** (^0.280.0) - Beautiful & consistent icon toolkit
  - Used for: Icons across the application
  
- **react-circular-progressbar** (^2.2.0) - Circular progress bar component
  - Used for: Displaying skill proficiency levels
  
- **react-progressbar-semicircle** (^1.2.1) - Semi-circular progress bar component
  - Used for: Alternative progress visualization

- **react-fast-marquee** (^1.6.5) - Performant marquee component
  - Used for: Scrolling text/skill animations

### Navigation & Utilities
- **react-scroll** (^1.9.3) - React component for animating vertical scrolling
  - Used for: Smooth scrolling navigation between sections

### HTTP Client
- **axios** (^1.13.2) - Promise-based HTTP client
  - Used for: Making API requests (e.g., contact form submissions)

---

## Development Dependencies

These packages are only needed during development and build processes:

### TypeScript Support
- **typescript** (^5.2.2) - TypeScript language compiler
- **@types/react** (^18.2.0) - Type definitions for React
- **@types/react-dom** (^18.2.0) - Type definitions for React DOM
- **@types/react-scroll** (^1.8.10) - Type definitions for react-scroll

### Build Tools
- **vite** (^5.0.0) - Next generation frontend build tool
  - Fast development server with Hot Module Replacement (HMR)
  - Optimized production builds
  
- **@vitejs/plugin-react** (^4.0.0) - Official Vite plugin for React
  - Enables React Fast Refresh and JSX transformation

### CSS Processing
- **tailwindcss** (^3.4.7) - Utility-first CSS framework
  - Used for: Styling the entire application
  
- **postcss** (^8.4.23) - Tool for transforming CSS with JavaScript
  - Required by: Tailwind CSS
  
- **autoprefixer** (^10.4.14) - PostCSS plugin to parse CSS and add vendor prefixes
  - Ensures: Cross-browser CSS compatibility

---

## Scripts

Available npm scripts defined in `package.json`:

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## System Requirements

- **Node.js**: 16.x or higher recommended
- **npm**: 7.x or higher (comes with Node.js)

---

## Dependency Update Strategy

To check for outdated packages:
```bash
npm outdated
```

To update all dependencies to their latest compatible versions:
```bash
npm update
```

To update to the latest versions (including breaking changes):
```bash
npm install <package-name>@latest
```

---

## Security

To check for security vulnerabilities:
```bash
npm audit
```

To automatically fix vulnerabilities:
```bash
npm audit fix
```

---

## Notes

- All version numbers use semantic versioning (semver)
- The `^` symbol allows updates to minor and patch versions
- Dependencies are locked via `package-lock.json` for consistent installations

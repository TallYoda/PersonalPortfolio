# Landify - React TypeScript Project

A modern React + TypeScript conversion of the Landify Bootstrap template, built with Vite and ready for Vercel deployment.

## Features

- ⚡️ Vite for fast development and optimized builds
- ⚛️ React 19 with TypeScript for type safety
- 🎨 Bootstrap 5.3.7
- 🎭 AOS (Animate On Scroll)
- 🖼️ GLightbox for image galleries
- 📊 Swiper for carousels
- 🔢 Custom PureCounter implementation
- 🎯 ESLint for code quality
- 🚀 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

Build for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Project Structure

```
├── assets/          # Static assets (CSS, images, etc.)
├── forms/           # Form handlers
├── src/             # React TypeScript source files
│   ├── components/  # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   └── ...      # Other components
│   ├── utils/       # Utility functions
│   │   └── init.ts  # Third-party library initialization
│   ├── App.tsx      # Main App component
│   ├── main.tsx     # React entry point
│   └── index.css    # Global styles
├── index.html       # HTML entry point
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration
└── vercel.json      # Vercel deployment config
```

## Technologies

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Bootstrap 5.3.7** - CSS framework
- **AOS** - Animation library
- **GLightbox** - Lightbox library
- **Swiper** - Touch slider
- **Custom PureCounter** - Counter animations

## Deployment to Vercel

This project is configured for easy deployment to Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the Vite framework
4. Deploy!

The `vercel.json` file is included for optimal configuration.

## License

This template is based on the Landify Bootstrap template by BootstrapMade.com.


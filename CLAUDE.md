# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- **Dev Server**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Start Production**: `npm run start`

## Architecture & Structure
This is a **Next.js 16 (App Router)** website for WAKnowledgeBot. It utilizes a modern tech stack focused on high-quality design and interactivity.

### Key Technologies
- **Next.js 16**: App Router, Server Components, Turbopack.
- **Styling**: Tailwind CSS 4, Framer Motion for animations.
- **3D/Visuals**: Three.js via `@react-three/fiber` and `@react-three/drei` (used in `ParticleNetwork.tsx`).
- **Icons**: Lucide React.
- **Payments**: Stripe (`stripe-js` and `stripe` SDK).

### Directory Overview
- `app/`: Contains the main application routes and layouts.
  - `layout.tsx`: Root layout with font and metadata configuration.
  - `page.tsx`: Landing page assembling various components.
- `components/`: Modular UI components.
  - `WhatsAppSimulator.tsx`: Interactive chat simulation.
  - `RAGVisualizer.tsx`: Visualization of Retrieval-Augmented Generation logic.
  - `ParticleNetwork.tsx`: Interactive 3D background using Three.js.
  - `Navbar.tsx`, `Footer.tsx`, `Hero.tsx`, `Pricing.tsx`: Standard page sections.
- `lib/`: Utility libraries and shared logic.
  - `stripe.ts`: Stripe client and server configuration.
- `public/`: Static assets.

### Design Patterns
- **Component-Based**: UI is decomposed into small, reusable components in `/components`.
- **Animation-Heavy**: Significant use of Framer Motion for entry/exit animations and scroll-based interactions.
- **Interactive Visuals**: Use of Three.js for background effects to create a "premium" feel.
- **Stripe Integration**: Centralized Stripe logic in `lib/stripe.ts` for consistent payment handling.

## Deployment
- **Primary Platform**: Vercel.
- **CI/CD**: GitHub integration (automatic build on push to `main`).
- **Configuration**: `next.config.ts` includes specific `remotePatterns` for external images (e.g., Unsplash).

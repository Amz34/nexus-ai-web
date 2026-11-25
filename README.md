# NEXUS-AI: Autonomous Agent Infrastructure & 3D Telemetry Mesh

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Demo-Live_on_Cloudflare-0ea5e9.svg)](https://nexus-ai-web-5df.pages.dev)
[![React](https://img.shields.io/badge/React-19.3-61dafb.svg)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-0.187-black.svg)](https://threejs.org)
[![Vite](https://img.shields.io/badge/Vite-8.3-646cff.svg)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-38bdf8.svg)](https://tailwindcss.com)

Live Production URL: [https://nexus-ai-web-5df.pages.dev](https://nexus-ai-web-5df.pages.dev)

A production-grade, design-first web application that bridges high-fidelity Figma UI design directly into performant code. It features interactive 3D WebGL scenes, real-time agent telemetry stream visualization, and modular design tokens with zero vibe-coder slop.

---

## 🏛 System Topology

![NEXUS-AI Architecture](assets/architecture-overview.svg)

---

## The Problem With Generic Vibe-Coded UI

Most AI-generated frontends fall into identical traps:
1. Every component glows without visual hierarchy.
2. Spacing is erratic and disconnects from standard 4px/8px design grids.
3. Every card uses generic emojis instead of purposeful iconography.
4. Heavy animation libraries drop frames and block the main thread.

NEXUS-AI solves this through strict design tokens, a quiet chrome philosophy (calm backgrounds with high-contrast tinted neutrals), and a single high-craft 3D WebGL focal point.

---

## Architecture Overview

```mermaid
flowchart TD
    subgraph Client ["Client Browser Layer"]
        Canvas3D["Three.js Kinetic Canvas (WebGL)"]
        NavMesh["Sticky Glass Header (Mobbin SaaS Pattern)"]
        TelemetryDash["Live Telemetry Terminal (Trace Ingestion)"]
        PricingMatrix["Interactive Tier Switcher"]
    end

    subgraph DesignTokens ["Strict Design System"]
        Grid["8px Rhythm Scale"]
        Palette["Tinted Neutrals (#090b10) + Sky/Cyan Accents"]
        Typography["Plus Jakarta Sans + JetBrains Mono"]
    end

    subgraph InfraMesh ["Edge Deployment"]
        ViteBuild["Vite Static Output"]
        CFPages["Cloudflare Pages Global Edge"]
    end

    DesignTokens --> Client
    Client --> ViteBuild
    ViteBuild --> CFPages
```

---

## Core Engineering Features

### 1. Kinetic 3D WebGL Scene (`ThreeBackground.jsx`)
- Built with [Three.js](https://threejs.org).
- Dual-geometry rendering:
  - Outer Icosahedron Wireframe mesh rotating on multi-axis sines.
  - Inner 700-particle kinetic swarm calculated via spherical coordinate distribution (`theta`, `phi`, `radius`).
- Performance optimized: capped pixel ratio at `Math.min(devicePixelRatio, 2)` and uses standard requestAnimationFrame loop with automatic window resize listeners.

### 2. Live Mesh Runtime Telemetry Terminal
- Real-time tabular trace display (Micro-service, P99 Latency, Token Cost, Health Status).
- Instant tabbed navigation across Metrics, Security Audit, and Topology views.
- Dynamic filtering across LLM proxy, Cache layer, and Guardrail sub-systems.

### 3. Predictable Design System Tokens
- Background: `#090b10` deep space neutral.
- Accents: Cyan (`#0ea5e9`), Sky (`#38bdf8`), Indigo (`#6366f1`).
- Fonts: Plus Jakarta Sans for UI copy, JetBrains Mono for system metrics.

---

## Project Structure

```
nexus-ai-web/
├── index.html                   # HTML entry point with preconnected Google Fonts
├── package.json                 # Scripts and runtime dependencies
├── vite.config.js               # Vite build configuration
├── src/
│   ├── main.jsx                 # Application bootstrapping
│   ├── index.css                # Tailwind directives and custom utility layers
│   ├── App.jsx                  # Main interface, telemetry dashboard, and pricing
│   └── components/
│       └── ThreeBackground.jsx  # High-performance Three.js canvas layer
└── dist/                        # Production assets for Cloudflare Pages
```

---

## Local Development & Build

### Prerequisites
- Node.js v18+ or v20+
- npm v9+

### Installation
```bash
git clone https://github.com/Amz34/nexus-ai-web.git
cd nexus-ai-web
npm install
```

### Run Locally
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

---

## Deployment

Deploy directly to Cloudflare Pages:
```bash
npx wrangler pages deploy dist --project-name nexus-ai-web
```

---

## Verification & QA

This implementation was validated via:
1. Fast DOM inspection using the Lightpanda Zig engine.
2. HTTP/2 200 edge response checks across global Cloudflare edge nodes.
3. Strict zero em dash and zero AI filler word policy enforcement.

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

Part of [my always-on agent stack](https://github.com/Amz34) · [Awesome Agent Infrastructure](https://github.com/Amz34/awesome-agent-infrastructure) (135 live-checked building blocks).

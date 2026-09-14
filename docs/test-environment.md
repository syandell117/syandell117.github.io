# Test Environment

This repository includes a small React Three Fiber scene you can use as a test environment while developing 3D features.

## What It Does

The scene renders a simple interactive canvas with:

- a floating icosahedron in the center
- orbit controls for mouse/touch rotation
- lighting, fog, stars, and a ground plane

It is intended as a quick sanity check for the renderer, controls, and production build pipeline.

## How To Run It

1. Install dependencies if needed:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local site in your browser and interact with the 3D canvas.

## Useful Commands

- `npm run dev` starts the Next.js dev server.
- `npm run build` creates the production export in `out/` and copies the GitHub Pages files.
- `npm run preview` serves the exported site locally from `out/`.

## Where The Scene Lives

- The scene component is in [src/components/TestScene.jsx](../src/components/TestScene.jsx).
- The Next.js page entry is in [src/app/page.jsx](../src/app/page.jsx).
- The shared styling is in [src/styles/main.css](../src/styles/main.css).

## Notes

- The scene is loaded client-side so Next.js can export the site statically without server-side rendering errors.
- If you add more three.js objects, keep them inside the client scene component so they stay browser-only.
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

## How The Test Environment Runs The Scene

The test scene is what the site shows at the root page.

- `npm run dev` starts the live test environment for editing the scene.
- `npm run build` creates the exported site.
- `npm run preview` serves that exported site from `out/`.

If you want to work on the scene itself, use `npm run dev`. If you want to check the final exported version, use `npm run build` followed by `npm run preview`.

## How To Edit The Scene

The test scene is intentionally small so you can change one thing at a time and see the result quickly.

1. Open [src/components/TestScene.jsx](../src/components/TestScene.jsx).
2. Edit the objects inside the `<Canvas>` block.
3. Change the floating mesh, add more lights, or swap geometry to try new ideas.
4. Save the file and watch the page update in the browser.

Common things you may want to edit:

- The center object is the floating icosahedron in `FloatingMesh`.
- The floor is the `Ground` component.
- The camera is set in the `<Canvas camera={...}>` props.
- The orbit limits are in `<OrbitControls />`.
- Scene colors and atmosphere are controlled by the background color, fog, and lights.

If you want to add a new object, keep it inside the `TestScene` component so it stays part of the browser-only scene.

## Troubleshooting

If the scene does not load correctly, check these common issues first:

- Blank page or console error: make sure the file is still marked with `"use client"` at the top.
- Build failure: confirm any new three.js code is only used inside the scene component and not in a server component.
- WebGL not available: try a different browser or update your graphics drivers.
- Orbit controls feel wrong: adjust the `minDistance`, `maxDistance`, or `enablePan` settings.
- Scene looks too dark or washed out: tune the ambient light, directional light, point light, or fog values.
- Preview logs: requests for `/_next/static/...` files are expected and mean the page loaded assets correctly.
- Favicon 404: a request for `/favicon.ico` is normal if the project does not include a favicon file yet.

If you add new geometry or materials and the build starts failing, remove the change and reintroduce it one piece at a time.

## How To Preview The Test Page

Use the preview command when you want to see the built version of the site, which matches the GitHub Pages export more closely than the dev server.

Run both commands from the repository root, the same folder that contains `package.json`.

1. Create the production export:

```bash
npm run build
```

2. Start the local preview server:

```bash
npm run preview
```

3. Open the local preview URL in your browser and check the scene there.

The preview server serves the contents of `out/`, so it is the best way to confirm the static export before deploying.

## Visual Guide

You can optionally add visual aids to this doc:

- Screenshots showing the finished scene.
- Diagrams labeling the camera, lights, and main objects.
- A before/after image set when you change the scene design.

If you want, I can add a dedicated screenshots section or a simple scene diagram next.

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
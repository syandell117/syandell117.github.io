"use client";

import dynamic from 'next/dynamic';

const TestScene = dynamic(() => import('./TestScene'), {
  ssr: false,
});

export default function SceneClient() {
  return <TestScene />;
}
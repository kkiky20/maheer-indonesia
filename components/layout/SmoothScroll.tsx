"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // Menghapus 'duration' agar scroll terasa sangat natural dan tidak lambat
  // 'lerp' yang lebih tinggi (0.15) membuat respons scroll lebih cepat
  return (
    <ReactLenis root options={{ lerp: 0.15, smoothWheel: true }}>
      {children as any}
    </ReactLenis>
  );
}

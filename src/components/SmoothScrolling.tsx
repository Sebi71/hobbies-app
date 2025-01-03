// components/SmoothScrolling.tsx
// npm install @studio-freight/lenis
"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import React, { ReactNode } from "react";

interface SmoothScrollingProps {
  children: ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, syncTouch: false, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
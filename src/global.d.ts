/// <reference types="webpack/module" />

declare module '*.svg' {
  import React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default SVG;
}

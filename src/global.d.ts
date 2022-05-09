/// <reference types="webpack/module" />

declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
  import React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default SVG;
}

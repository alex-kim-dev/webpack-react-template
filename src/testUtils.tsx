import { render, RenderOptions } from '@testing-library/react';
import type { FC, ReactElement } from 'react';

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };

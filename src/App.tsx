import '~/App.css';

import { useState } from 'react';

import Logo from '~/logo.svg';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='wrapper'>
      <header className='header'>
        <Logo className='logo' />
        <p>Hello Webpack + React!</p>
        <p>
          <button type='button' onClick={() => setCount((c) => c + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='link'
            href='https://reactjs.org'
            rel='noopener noreferrer'
            target='_blank'>
            Learn React
          </a>
          {' | '}
          <a
            className='link'
            href='https://webpack.js.org/configuration/'
            rel='noopener noreferrer'
            target='_blank'>
            Webpack Docs
          </a>
        </p>
      </header>
    </div>
  );
};

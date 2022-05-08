import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(<h1>Hello world!</h1>);

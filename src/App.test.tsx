import { App } from '~/App';
import { render, screen } from '~/testUtils';

test('temp', () => {
  render(<App />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});

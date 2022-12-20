import { render, screen } from '@testing-library/react';
import App from './App';
import Scroll from './scripts/HeaderScript';

test('renders learn react link', () => {
  render(<App />);
  render(<Scroll />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

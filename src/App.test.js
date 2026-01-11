import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders app header', () => {
    render(<App />);
    const headerElement = screen.getByText(/Node.js Backend Connection/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('shows loading state initially', () => {
    render(<App />);
    const loadingText = screen.getByText(/Testing Node.js backend connection/i);
    expect(loadingText).toBeInTheDocument();
  });
});

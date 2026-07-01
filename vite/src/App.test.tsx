import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

vi.mock('./api', () => ({
  default: {
    get: vi.fn((url) => {
      if (url === 'home') {
        return Promise.resolve({
          data: {
            content: '<h1>Portfolio</h1>',
          },
        });
      }

      if (url === 'pages') {
        return Promise.resolve({
          data: [
            { slug: 'home' },
            { slug: 'about' },
            { slug: 'works' },
            { slug: 'contact' },
          ],
        });
      }

      return Promise.resolve({ data: [] });
    }),
  },
}));

test('renders the portfolio shell', async () => {
  const { container } = render(<App />);

  expect(container.querySelector('.side')).toBeInTheDocument();
  expect(container.querySelector('.main-container')).toBeInTheDocument();
  await waitFor(() => {
    expect(container.querySelector('#home-menu')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';
import { Router } from 'react-router-dom';

describe('Navigation tests', () => {
  test('Renderiza a página inicial', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);
    const title = screen.getByRole('heading', { level: 1, name: /Página sobre mim/i });
    expect(title).toBeInTheDocument();
  });
});
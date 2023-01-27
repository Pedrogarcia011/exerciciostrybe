import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tests da Home', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('deve mostrar uma mensagem de carregamento na tela', () => {
    const loading = screen.getByText(/carregando/i);
    expect(loading).toBeInTheDocument();
  });

  it('deve exibir o título Gladiador', async () => {
    // Exemplo utilizando o find.
    // const title = await screen.findByText('Gladiador');
    // Eu estou esperando o elemento desaparecer da tela/render.
    await waitForElementToBeRemoved(() => screen.getByText(/carregando/i));
    const title = screen.getByText('Gladiador');
    expect(title).toBeInTheDocument();
  });

  it('o link do filme deve redirecionar para a página de detalhes', async () => {
    const linkDetails = await screen.findAllByRole('link', { name: /ver detalhes/i })
    const linkDetailsTestId = await screen.findByTestId('GladiadorDetails');
    // expect(linkDetails[0]).toBeInTheDocument();
    // logTestingPlaygroundURL serve para produzir ambientes para testarmos queries.
    // screen.logTestingPlaygroundURL();
    userEvent.click(linkDetails[0]);
    const genre = await screen.findByText(/drama/i);
    expect(genre).toBeInTheDocument();
  });
});
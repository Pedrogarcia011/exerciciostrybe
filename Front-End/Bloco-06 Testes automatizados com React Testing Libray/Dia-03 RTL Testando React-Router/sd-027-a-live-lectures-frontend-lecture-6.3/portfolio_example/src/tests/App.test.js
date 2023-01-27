import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import { act } from 'react-dom/test-utils';

describe('Navigation tests', () => {
  it('Navigate from home to projects', () => {
    const { history } = renderWithRouter(<App />);

    const title = screen.getByText(/Página sobre mim/i);
    expect(title).toBeInTheDocument();
    
    const linkProjects = screen.getByText(/Projetos/i);
    userEvent.click(linkProjects);

    const { pathname } = history.location;

    const projectTitle = screen.getByText(/Página de projetos/i);
    expect(projectTitle).toBeInTheDocument();
    expect(pathname).toBe('/projects');
  });

  it('Redirect to a 404 page', () => {
    const { history } = renderWithRouter(<App />);
    const invalidRoute = '/123-123-123';
    
    history.push(invalidRoute);

    const title404 = screen.getByRole('heading', { level: 1, name: /Página não encontrada/i });
    expect(title404).toBeInTheDocument();
  });

  it('Vamos acessar a página de comentários e realizar um comentário.', () => {
    const { history } = renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', { level: 1, name: /Página sobre mim/i });
    expect(homeTitle).toBeInTheDocument();

    const linkComments = screen.getByRole('link', { name: /Deixe um comentário/i });
    userEvent.click(linkComments);

    const { pathname } = history.location;
    expect(pathname).toBe('/comments');

    const input = screen.getByTestId('input-comment');
    const button = screen.getByTestId('button-comment');

    userEvent.type(input, 'Grêmio Campeão');
    userEvent.click(button);

    const item = screen.getByText('Grêmio Campeão');
    expect(item).toBeInTheDocument();
  });
});
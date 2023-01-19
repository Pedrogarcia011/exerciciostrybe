import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('Ao renderizar a página a primeira piada e exibida na tela', async () => {

    const joke1 = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    }

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
     json: jest.fn().mockResolvedValue(joke1),
    })

    render(<App />)
    expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);

});

it('ao clicar no botão “New joke”, uma nova piada é exibida na tela', async () => {

    //ao clicar no botão “New joke”, uma nova piada é exibida na tela; a primeira piada não é mais exibida na tela; a função fetch foi chamada 2 vezes.

    const joke1 = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    }

    const joke2 = {
      id: 'xXSv492wPmb',
      joke: 'What is red and smells like blue paint? Red paint!',
      status: 200,
    };

    jest.spyOn(global, 'fetch');

    
    global.fetch.mockResolvedValueOnce({
     json: jest.fn().mockResolvedValue(joke1),
    })

    render(<App />)
    const button = screen.getByText(/New Joke/i)


    expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
    expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);

    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke2),
    })

    userEvent.click(button);
    expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
    expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(2);

});